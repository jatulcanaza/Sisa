"use client";

import { useState } from 'react';

export function Contactenos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({ name: '', email: '', reason: '' });
  };

  const handleSubmit = () => {
    console.log('Datos enviados:', formData);
    // Aquí puedes integrar la lógica para enviar los datos a una base de datos.
  };

  return (
    <div id="Contactenos" className="py-20 bg-[#FFF4F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Quiero que me contacten</h2>
        <p className="mt-4">
          Déjanos tus datos y te contactaremos en el menor tiempo posible.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {/* Nombre */}
          <div className="flex items-center">
            <label htmlFor="name" className="w-1/4 font-bold">
              Nombre completo:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-3/4 p-3 border rounded-lg"
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          {/* Email */}
          <div className="flex items-center">
            <label htmlFor="email" className="w-1/4 font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-3/4 p-3 border rounded-lg"
              placeholder="Ingresa tu email"
            />
          </div>

          {/* Motivo */}
          <div className="flex items-center">
            <label htmlFor="reason" className="w-1/4 font-bold">
              Motivo:
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-3/4 p-3 border rounded-lg"
              placeholder="¿Por qué deseas contactarnos?"
            />
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={handleClear}
              className="px-8 py-3 text-white bg-[#FB6F92] rounded-xl hover:bg-[#E46585]"
            >
              Eliminar
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-8 py-3 text-white bg-[#FB6F92] rounded-xl hover:bg-[#E46585]"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
