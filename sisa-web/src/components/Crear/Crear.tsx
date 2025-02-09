"use client";

import { useState } from "react";

interface FlowerState {
  girasoles: boolean;
  rosas: boolean;
}

interface QuantityState {
  girasoles: number;
  rosas: number;
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
    girasoles: 1,
    rosas: 1,
  });
  const [colors, setColors] = useState<ColorState>({
    girasoles: "Amarillo",
    rosas: "Blanco",
  });
  const [imageUrl, setImageUrl] = useState<string>("");

  // Manejo de cambios en los checkboxes de flores
  const handleFlowerChange = (flower: keyof FlowerState) => {
    setSelectedFlowers((prevState) => ({
      ...prevState,
      [flower]: !prevState[flower],
    }));
  };

  // Manejo de cambios en la cantidad de flores
  const handleQuantityChange = (flower: keyof QuantityState, value: number) => {
    setQuantities((prevState) => ({
      ...prevState,
      [flower]: value,
    }));
  };

  // Manejo de cambios en el color de flores
  const handleColorChange = (flower: keyof ColorState, value: string) => {
    setColors((prevState) => ({
      ...prevState,
      [flower]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado de envío del formulario
  
    // Obtener los valores de los checkboxes y los selectores de cantidad y color desde el estado
    const selectedFlowersList = [];
    if (selectedFlowers.girasoles) selectedFlowersList.push("Girasoles");
    if (selectedFlowers.rosas) selectedFlowersList.push("Rosas");
  
    const quantityGirasoles = quantities.girasoles;
    const quantityRosas = quantities.rosas;
  
    const colorGirasoles = colors.girasoles;
    const colorRosas = colors.rosas;
  
    // Cambiar la estructura de data para que coincida con el backend
    const data = {
      color_girasoles: colorGirasoles,
      color_rosas: colorRosas,
      cantidad_girasoles: quantityGirasoles,
      cantidad_rosas: quantityRosas,
    };
  
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
        // Mostrar la imagen
        setImageUrl(result.image_url);  // Asegúrate de que esta es la forma correcta de mostrar la imagen
      } else {
        console.error("Error al crear el ramo:", result.message);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#E46585]">Crea tu ramo sisa</h1>

      <div className="w-full max-w-4xl bg-[#FFF4F7] p-7 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna de Flores */}
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
            </div>

            {/* Columna de Cantidad */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Cantidad</h2>
              <div className="mb-4">
                <label htmlFor="cantidad-girasoles" className="sr-only">
                  Cantidad de Girasoles
                </label>
                <input
                  id="cantidad-girasoles"
                  type="number"
                  min="1"
                  value={quantities.girasoles}
                  onChange={(e) => handleQuantityChange("girasoles", parseInt(e.target.value))}
                  className="w-full border-gray-300 rounded-md text-sm text-gray-700 p-2"
                />
              </div>
              <div>
                <label htmlFor="cantidad-rosas" className="sr-only">
                  Cantidad de Rosas
                </label>
                <input
                  id="cantidad-rosas"
                  type="number"
                  min="1"
                  value={quantities.rosas}
                  onChange={(e) => handleQuantityChange("rosas", parseInt(e.target.value))}
                  className="w-full border-gray-300 rounded-md text-sm text-gray-700 p-2"
                />
              </div>
            </div>

            {/* Columna de Color */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Color</h2>
              <div className="mb-4">
                <select
                  id="color-girasoles"
                  value={colors.girasoles}
                  onChange={(e) => handleColorChange("girasoles", e.target.value)}
                  className="w-full border-gray-300 rounded-md text-sm text-gray-700 p-2"
                >
                  <option value="Amarillo">Amarillo</option>
                  <option value="Rojo">Rojo</option>
                  <option value="Blanco">Blanco</option>
                  <option value="Rosa">Rosa</option>
                </select>
              </div>
              <div>
                <select
                  id="color-rosas"
                  value={colors.rosas}
                  onChange={(e) => handleColorChange("rosas", e.target.value)}
                  className="w-full border-gray-300 rounded-md text-sm text-gray-700 p-2"
                >
                  <option value="Blanco">Blanco</option>
                  <option value="Rosa">Rosa</option>
                  <option value="Amarillo">Amarillo</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="px-8 py-3 text-white bg-[#FB6F92] rounded-xl hover:bg-[#E46585]"
            >
              ¡Crea tu ramo Sisa!
            </button>
          </div>
        </form>
      </div>

      {imageUrl && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Imagen generada</h2>
          <img src={imageUrl} alt="Ramo de flores generado" className="max-w-full rounded-md" />
        </div>
      )}
    </div>
  );
}
