import os
import requests
import time
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from b2sdk.v2 import InMemoryAccountInfo, B2Api
from pydantic import BaseModel

# Cargar las variables del archivo .env
load_dotenv()

# Configuración de CORS
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite solicitudes desde cualquier origen
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar configuraciones desde el .env
api_key = os.getenv("API_KEY")
b2_key_id = os.getenv("B2_KEY_ID")
b2_application_key = os.getenv("B2_APPLICATION_KEY")
b2_bucket_name = os.getenv("B2_BUCKET_NAME")

if not all([api_key, b2_key_id, b2_application_key, b2_bucket_name]):
    raise ValueError("Faltan configuraciones en el archivo .env")

# Configuración para Leonardo AI
leonardo_headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": f"Bearer {api_key}"
}

# Inicializar Backblaze B2
info = InMemoryAccountInfo()
b2_api = B2Api(info)
b2_api.authorize_account("production", b2_key_id, b2_application_key)
bucket = b2_api.get_bucket_by_name(b2_bucket_name)

# Crear un modelo Pydantic para manejar los datos de la solicitud
class FlowerRequest(BaseModel):
    color_girasoles: str
    color_rosas: str
    cantidad_girasoles: int
    cantidad_rosas: int 

@app.get("/")
def read_root():
    return {"message": "API funcionando correctamente."}

@app.post("/upload/")
async def generate_flower_image(data: FlowerRequest):
    # Obtener los parámetros desde el frontend
    color_girasoles = data.color_girasoles
    color_rosas = data.color_rosas
    cantidad_girasoles = data.cantidad_girasoles
    cantidad_rosas = data.cantidad_rosas

    # Validación de los parámetros
    if cantidad_girasoles <= 0 and cantidad_rosas <= 0:
        raise HTTPException(status_code=400, detail="Debe seleccionar al menos una flor.")
    
    # Generar el mensaje de prompt
    prompt = "Ramo de flores con"
    if cantidad_girasoles > 0:
        prompt += f" {cantidad_girasoles} girasoles de color {color_girasoles}" if color_girasoles else f" {cantidad_girasoles} girasoles"
    if cantidad_rosas > 0:
        if cantidad_girasoles > 0:
            prompt += " y"
        prompt += f" {cantidad_rosas} rosas de color {color_rosas}" if color_rosas else f" {cantidad_rosas} rosas"
    
    try:
        # Paso 1: Generar imagen con Leonardo AI
        generation_url = "https://cloud.leonardo.ai/api/rest/v1/generations"
        payload = {
            "height": 512,
            "modelId": "1e60896f-3c26-4296-8ecc-53e2afecc132",
            "prompt": prompt,
            "width": 512,
            "num_images": 1
        }

        response = requests.post(generation_url, json=payload, headers=leonardo_headers)
        if response.status_code != 200:
            raise Exception(f"Error al generar la imagen: {response.status_code}")

        generation_id = response.json().get("sdGenerationJob", {}).get("generationId")
        if not generation_id:
            raise Exception("No se encontró 'generationId' en la respuesta.")

        # Paso 2: Esperar y obtener la imagen generada
        result_url = f"https://cloud.leonardo.ai/api/rest/v1/generations/{generation_id}"
        
        while True:
            response = requests.get(result_url, headers=leonardo_headers)
            if response.status_code == 200:
                generated_images = response.json().get("generations_by_pk", {}).get("generated_images", [])
                if generated_images:
                    break  # Imagen lista
            time.sleep(5)  # Espera 5 segundos antes de volver a verificar

        if response.status_code == 200:
            generated_images = response.json().get("generations_by_pk", {}).get("generated_images", [])
            if generated_images:
                image_url = generated_images[0].get("url")

                # Descargar la imagen generada
                generated_image_response = requests.get(image_url)
                if generated_image_response.status_code == 200:
                    # Ruta completa para guardar la imagen
                    generated_image_path = r"C:\Users\MyVICTUS\Desktop\Proyecto\backend\images\generated_image.jpg"

                    # Crear la carpeta si no existe
                    os.makedirs(os.path.dirname(generated_image_path), exist_ok=True)

                    with open(generated_image_path, "wb") as f:
                        f.write(generated_image_response.content)

                    # Subir a Backblaze
                    upload_info = bucket.upload_local_file(
                        local_file=generated_image_path,
                        file_name=f"generated-images/{os.path.basename(generated_image_path)}"
                    )

                    # URL pública de la imagen en Backblaze
                    base_download_url = "https://f005.backblazeb2.com/file"
                    public_url = f"{base_download_url}/{b2_bucket_name}/generated-images/{os.path.basename(generated_image_path)}"
                    return JSONResponse(status_code=200, content={"image_url": public_url})
                else:
                    raise Exception("Error al descargar la imagen generada.")
            else:
                raise Exception("No se encontraron imágenes generadas.")
        else:
            raise Exception(f"Error al obtener la imagen generada: {response.status_code}")

    except Exception as e:
        return JSONResponse(status_code=500, content={"message": f"Error interno: {str(e)}"})
