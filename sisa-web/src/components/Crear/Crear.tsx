"use client";

import { useState } from "react";
import Image from "next/image";

export function Crear() {
  const [preview, setPreview] = useState("/assets/foto.png"); // Imagen inicial

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Usa optional chaining por si files es null
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string); // Asegura que reader.result sea tratado como string
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* Título */}
      <h1 className="text-2xl font-bold text-center mb-6">Crea tu ramo sisa</h1>

      {/* Contenedor principal */}
      <div className="w-full max-w-4xl bg-[#FFF4F7] p-7 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna izquierda: Imagen */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="upload-image"
              className="flex items-center justify-center w-48 h-48 rounded-lg cursor-pointer overflow-hidden"
            >
              <Image
                src={preview}
                alt="Imagen de referencia"
                width={192}
                height={192}
                className="object-cover"
              />
            </label>
            <input
              id="upload-image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <p className="mt-4 text-sm font-medium text-gray-700">Ingresa la imagen de referencia</p>
          </div>

          {/* Columna derecha: Opciones */}
          <div className="grid grid-cols-3 gap-4">
            {/* Columna de Flores */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Flores</h2>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="girasoles"
                  className="mr-2 w-4 h-4 text-rose-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="girasoles" className="text-sm text-gray-700 mt-1">Girasoles</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rosas"
                  className="mr-2 w-4 h-4 text-rose-500 border-gray-300 rounded mt-5"
                />
                <label htmlFor="rosas" className="text-sm text-gray-700 mt-5">Rosas</label>
              </div>
            </div>

            {/* Columna de Cantidad */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Cantidad</h2>
              <div className="mb-4">
                <label htmlFor="cantidad-girasoles" className="sr-only">
                  Cantidad de Girasoles
                </label>
                <select
                  id="cantidad-girasoles"
                  className="w-full border-gray-300 rounded-md text-sm text-gray-700 p-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>{n + 1}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cantidad-rosas" className="sr-only">
                  Cantidad de Rosas
                </label>
                <select
                  id="cantidad-rosas"
                  className="w-full border-gray-300 rounded-md text-sm text-gray-700 p-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>{n + 1}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Columna de Color */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Color</h2>
              <div className="mb-4">
                <label htmlFor="color-girasoles" className="sr-only">
                  Color de Girasoles
                </label>
                <select
                  id="color-girasoles"
                  className="w-full border-gray-300 rounded-md text-sm text-gray-700 p-2"
                  defaultValue=""
                >
                  <option value="" disabled>Seleccionar</option>
                  <option value="Amarillo">Amarillo</option>
                  <option value="Rojo">Rojo</option>
                  <option value="Blanco">Blanco</option>
                  <option value="Rosa">Rosa</option>
                </select>
              </div>
              <div>
                <label htmlFor="color-rosas" className="sr-only">
                  Color de Rosas
                </label>
                <select
                  id="color-rosas"
                  className="w-full border-gray-300 rounded-md text-sm text-gray-700 p-2"
                  defaultValue=""
                >
                  <option value="" disabled>Seleccionar</option>
                  <option value="Blanco">Blanco</option>
                  <option value="Rosa">Rosa</option>
                  <option value="Amarillo">Amarillo</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de acción */}
      <div className="mt-6">
        <button
          className="px-8 py-3 text-white bg-[#FB6F92] rounded-xl hover:bg-[#E46585]"
        >
          ¡Crea tu ramo Sisa!
        </button>
      </div>
    </div>
  );
}
