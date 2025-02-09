"use client";

import { useState } from 'react';

export function Contactenos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = { name: '', email: '', reason: '' };
    let isValid = true;

    // Validar nombre
    if (!formData.name) {
      formErrors.name = 'El nombre es obligatorio.';
      isValid = false;
    }

    // Validar email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      formErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = 'Por favor ingresa un correo electrónico válido.';
      isValid = false;
    }

    // Validar motivo
    if (!formData.reason) {
      formErrors.reason = 'El motivo es obligatorio.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleClear = () => {
    setFormData({ name: '', email: '', reason: '' });
    setErrors({ name: '', email: '', reason: '' });
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsSubmitting(true);
      console.log('Datos enviados:', formData);
      // Aquí puedes integrar la lógica para enviar los datos a una base de datos.
      // Después de enviar, restablece el formulario.
      setIsSubmitting(false);
      setFormData({ name: '', email: '', reason: '' });
    }
  };

  return (
    <div id="Contactenos" className="py-20 bg-[#FFF4F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Quiero que me contacten</h2>
        <p className="mt-4">Déjanos tus datos y te contactaremos en el menor tiempo posible.</p>

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
              className={`w-full p-4 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]`}
              placeholder="Ingresa tu nombre completo"
            />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
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
              className={`w-full p-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]`}
              placeholder="Ingresa tu email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
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
              className={`w-full p-4 border ${errors.reason ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]`}
              placeholder="¿Por qué deseas contactarnos?"
            />
            {errors.reason && <p className="text-red-500 text-sm mt-2">{errors.reason}</p>}
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={handleClear}
              className="px-8 py-3 text-white bg-[#FB6F92] rounded-xl hover:bg-[#E46585] focus:outline-none"
            >
              Eliminar
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`px-8 py-3 text-white bg-[#FB6F92] rounded-xl hover:bg-[#E46585] focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
