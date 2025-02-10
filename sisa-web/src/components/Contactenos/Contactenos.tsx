"use client";

import { useState } from "react";

export function Contactenos() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    reason: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", subject: "", reason: "" });
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formUrl = "https://formsubmit.co/ajax/tulcanazajuan6@gmail.com";

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", reason: "" });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error de red:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="Contactenos" className="py-20 bg-[#FFF4F7] my-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#FB6F92]">Quiero que me contacten</h2>
        <p className="mt-4">Déjanos tus datos y te contactaremos en el menor tiempo posible.</p>

        {isSubmitted && (
          <div className="mt-4 text-center">
            <p className="text-[#FB6F92] font-semibold">Mensaje enviado con éxito, te escribiremos enseguida.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
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
              onInvalid={(e) => e.currentTarget.setCustomValidity("Por favor, ingresa tu nombre.")}
              onInput={(e) => e.currentTarget.setCustomValidity("")}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]"
              placeholder="Ingresa tu nombre completo"
              required
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
              onInvalid={(e) => e.currentTarget.setCustomValidity("Por favor, ingresa un email válido '@'.")}
              onInput={(e) => e.currentTarget.setCustomValidity("")}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]"
              placeholder="Ingresa tu email"
              required
            />
          </div>

          {/* Asunto */}
          <div className="flex items-center">
            <label htmlFor="subject" className="w-1/4 font-bold">
              Asunto:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onInvalid={(e) => e.currentTarget.setCustomValidity("Por favor, ingresa tu asunto.")}
              onInput={(e) => e.currentTarget.setCustomValidity("")}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]"
              placeholder="Escribe el asunto"
              required
            />
          </div>

          {/* Mensaje */}
          <div className="flex items-center">
            <label htmlFor="reason" className="w-1/4 font-bold">
              Mensaje:
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              onInvalid={(e) => e.currentTarget.setCustomValidity("Por favor, ingresa tu mensaje.")}
              onInput={(e) => e.currentTarget.setCustomValidity("")}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]"
              placeholder="¿Por qué deseas contactarnos?"
              required
            />
          </div>

          {/* Botones */}
          <div className="flex justify-end mt-4 gap-4">
            <button
              type="button"
              onClick={handleClear}
              className="px-8 py-3 text-white bg-[#FB6F92] rounded-xl hover:bg-[#E46585] focus:outline-none"
            >
              Eliminar
            </button>
            <button
              type="submit"
              className={`px-8 py-3 bg-[#FB6F92] text-white rounded-xl hover:bg-[#E46585] focus:outline-none ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
