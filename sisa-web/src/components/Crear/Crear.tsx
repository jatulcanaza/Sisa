"use client";

import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Importa la animación Lottie

interface FlowerState {
  girasoles: boolean;
  rosas: boolean;
}

interface QuantityState {
  girasoles: number | "Seleccionar";
  rosas: number | "Seleccionar";
}

interface ColorState {
  girasoles: string;
  rosas: string;
}

export function Crear() {
  const [selectedFlowers, setSelectedFlowers] = useState<FlowerState>({
    girasoles: false,
    rosas: false,
  });
  const [quantities, setQuantities] = useState<QuantityState>({
    girasoles: "Seleccionar",
    rosas: "Seleccionar",
  });
  const [colors, setColors] = useState<ColorState>({
    girasoles: "Seleccionar",
    rosas: "Seleccionar",
  });
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Estado para controlar la animación de carga
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [backendError, setBackendError] = useState<string | null>(null);

  const handleFlowerChange = (flower: keyof FlowerState) => {
    setSelectedFlowers((prevState) => {
      const newState = {
        ...prevState,
        [flower]: !prevState[flower],
      };
  
      // Eliminar error si al menos una flor está seleccionada
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        if (newState.girasoles || newState.rosas) {
          delete updatedErrors.flowers;
        }
        return updatedErrors;
      });
  
      return newState;
    });
  };
  
  const handleQuantityChange = (flower: keyof QuantityState, value: string | number) => {
    setQuantities((prevState) => ({
      ...prevState,
      [flower]: value,
    }));
  
    // Eliminar error si el usuario selecciona una cantidad válida
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (value !== "Seleccionar") {
        delete updatedErrors[`${flower}Cantidad`];
      }
      return updatedErrors;
    });
  };
  
  const handleColorChange = (flower: keyof ColorState, value: string) => {
    setColors((prevState) => ({
      ...prevState,
      [flower]: value,
    }));
  
    // Eliminar error si el usuario selecciona un color válido
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (value !== "Seleccionar") {
        delete updatedErrors[`${flower}Color`];
      }
      return updatedErrors;
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: { [key: string]: string } = {};

    // Validaciones
    if (!selectedFlowers.girasoles && !selectedFlowers.rosas) {
      newErrors.flowers = "Debes seleccionar al menos una flor.";
    }

    // Validaciones para girasoles
    if (selectedFlowers.girasoles) {
      if (quantities.girasoles === "Seleccionar") {
        newErrors.girasolesCantidad = "Debes seleccionar la cantidad de los girasoles.";
      }
      if (colors.girasoles === "Seleccionar") {
        newErrors.girasolesColor = "Debes seleccionar el color de los girasoles.";
      }
    }

    // Validaciones para rosas
    if (selectedFlowers.rosas) {
      if (quantities.rosas === "Seleccionar") {
        newErrors.rosasCantidad = "Debes seleccionar la cantidad de las rosas.";
      }
      if (colors.rosas === "Seleccionar") {
        newErrors.rosasColor = "Debes seleccionar el color de las rosas.";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Crear el objeto data para enviar al backend
    const data = {
      color_girasoles: colors.girasoles,
      color_rosas: colors.rosas,
      cantidad_girasoles: quantities.girasoles !== "Seleccionar" ? quantities.girasoles : 0,
      cantidad_rosas: quantities.rosas !== "Seleccionar" ? quantities.rosas : 0,
    };

    setLoading(true); // Activar la animación de carga
    setBackendError(null); // Resetear el error del backend

    try {
      const response = await fetch("http://127.0.0.1:8000/upload/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setImageUrl(result.image_url);
      } else {
        console.error("Error al crear el ramo:", result.message);
        setBackendError("Hubo un error al generar tu ramo. Intenta de nuevo más tarde.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      setBackendError("Hubo un error al realizar la solicitud. Intenta de nuevo más tarde.");
    } finally {
      setLoading(false); // Desactivar la animación de carga una vez que se haya recibido la respuesta
    }
  };
  const handleDelete = async () => {
    try {
      await fetch("http://127.0.0.1:8000/delete/", { method: "DELETE" });
  
      // Restablecer los estados sin mostrar alertas
      setImageUrl(""); 
      setSelectedFlowers({ girasoles: false, rosas: false });
      setQuantities({ girasoles: "Seleccionar", rosas: "Seleccionar" });
      setColors({ girasoles: "Seleccionar", rosas: "Seleccionar" });
      setErrors({}); // Limpiar errores previos
    } catch (error) {
      console.error("Error al eliminar la imagen:", error);
    }
  };
  // Manejar guardar en carpeta local (ejemplo si integras lógica backend)
  const handleDownload = () => {
    window.open("http://localhost:8000/download/", "_blank");
  };
  
  const handleEdit = () => {
    setImageUrl(""); // Limpia la imagen
  };


  return (
    <div className="flex flex-col items-center justify-center h-1/2 p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#E46585]">Crea tu ramo Sisa</h1>

      <div className="w-full max-w-4xl bg-[#FFF4F7] p-7 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Flores</h2>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="girasoles"
                  className="mr-2 w-4 h-4 text-rose-500 border-gray-300 rounded mt-1"
                  checked={selectedFlowers.girasoles}
                  onChange={() => handleFlowerChange("girasoles")}
                />
                <label htmlFor="girasoles" className="text-sm text-gray-700 mt-1">
                  Girasoles
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rosas"
                  className="mr-2 w-4 h-4 text-rose-500 border-gray-300 rounded mt-1"
                  checked={selectedFlowers.rosas}
                  onChange={() => handleFlowerChange("rosas")}
                />
                <label htmlFor="rosas" className="text-sm text-gray-700 mt-1">
                  Rosas
                </label>
              </div>
              {errors.flowers && <p className="text-red-500 text-sm">{errors.flowers}</p>}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Cantidad</h2>
              <div className="mb-4">
                <select
                  id="cantidad-girasoles"
                  value={quantities.girasoles}
                  onChange={(e) => handleQuantityChange("girasoles", e.target.value)}
                  className="w-full border-gray-300 rounded-md text-sm text-gray-700 p-2"
                >
                  <option value="Seleccionar">Seleccionar</option>
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
                {errors.girasolesCantidad && <p className="text-red-500 text-sm">{errors.girasolesCantidad}</p>}
              </div>
              <div>
                <select
                  id="cantidad-rosas"
                  value={quantities.rosas}
                  onChange={(e) => handleQuantityChange("rosas", e.target.value)}
                  className="w-full border-gray-300 rounded-md text-sm text-gray-700 p-2"
                >
                  <option value="Seleccionar">Seleccionar</option>
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
                {errors.rosasCantidad && <p className="text-red-500 text-sm">{errors.rosasCantidad}</p>}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Color</h2>
              <div className="mb-4">
                <select
                  id="color-girasoles"
                  value={colors.girasoles}
                  onChange={(e) => handleColorChange("girasoles", e.target.value)}
                  className="w-full border-gray-300 rounded-md text-sm text-gray-700 p-2"
                >
                  <option value="Seleccionar">Seleccionar</option>
                  <option value="Amarillo">Amarillo</option>
                  <option value="Rojo">Rojo</option>
                  <option value="Blanco">Blanco</option>
                  <option value="Rosa">Rosa</option>
                </select>
                {errors.girasolesColor && <p className="text-red-500 text-sm">{errors.girasolesColor}</p>}
              </div>
              <div>
                <select
                  id="color-rosas"
                  value={colors.rosas}
                  onChange={(e) => handleColorChange("rosas", e.target.value)}
                  className="w-full border-gray-300 rounded-md text-sm text-gray-700 p-2"
                >
                  <option value="Seleccionar">Seleccionar</option>
                  <option value="Blanco">Blanco</option>
                  <option value="Rosa">Rosa</option>
                  <option value="Amarillo">Amarillo</option>
                  <option value="Amarillo">Verde</option>
                </select>
                {errors.rosasColor && <p className="text-red-500 text-sm">{errors.rosasColor}</p>}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="px-8 py-3 text-white bg-[#FB6F92] rounded-xl hover:bg-[#E46585]"
              disabled={loading}
            >
              ¡Crea tu ramo Sisa!
            </button>
          </div>
        </form>

        {backendError && <p className="text-red-500 text-sm mt-4">{backendError}</p>}
      </div>

      {loading && (
        <div className="mt-6">
          <h2 className="text-3xl font-semibold text-[#E46585] mb-4 text-center">Generando tu ramo</h2>
          <DotLottieReact
            src="https://lottie.host/982b0727-7b73-4699-8e85-5ef930a85c8e/30pNoU1zT2.lottie"
            loop
            autoplay
          />
        </div>
      )}

      {imageUrl && !loading && (
        <div className="mt-6">
          <h2 className="text-3xl font-semibold text-[#E46585] mb-4 text-center">
            Genial, tu ramo Sisa se ha creado con éxito.
          </h2>
          <img src={imageUrl} alt="Ramo de flores generado" className="max-w-full rounded-md mx-auto" />

          {/* Botones para acciones debajo de la imagen */}
          <div className="flex justify-center mt-4 space-x-4">

            {/* Botón Descargar */}
            <button
              onClick={handleDownload}
              className="px-8 py-3 text-white bg-[#FB6F92] rounded-xl hover:bg-[#E46585]"
            >
              Descargar
            </button>


            {/* Botón Eliminar */}
            <button
              onClick={handleDelete}
              className="px-8 py-3 text-white bg-[#FB6F92] rounded-xl hover:bg-[#E46585]"
            >
              Crear Nuevo Ramo
            </button>

            {/* Botón Editar */}
            <button
              onClick={handleEdit}
              className="px-8 py-3 text-white bg-[#FB6F92] rounded-xl hover:bg-[#E46585]"
            >
              Editar Ramo
            </button>
          </div>
        </div>
      )}
    </div>
  );

}
