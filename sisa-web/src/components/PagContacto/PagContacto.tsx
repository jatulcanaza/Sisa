"use client";
import { useState } from 'react';

export function PagContacto() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',  // Campo para asunto
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // Para mostrar el mensaje de éxito

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);

        const formUrl = "https://formsubmit.co/ajax/tulcanazajuan6@gmail.com"; // URL de FormSubmit

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
                setFormData({ name: '', email: '', subject: '', message: '' }); // Limpiar formulario
                setTimeout(() => setIsSubmitted(false), 5000); // Mostrar mensaje por 5 segundos
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
        <div className="flex items-center justify-center min-h-screen px-4 mt-20">
            <div className="bg-[#FFF4F7] p-8 rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Formulario */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contáctanos</h2>
                    {isSubmitted && (
                        <div className="mb-4 text-center">
                            <p className="text-[#FB6F92] font-semibold">¡Mensaje enviado con éxito!</p>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Nombre */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nombre"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]"
                                required
                                onInvalid={(e) => e.currentTarget.setCustomValidity("Por favor, ingresa tu nombre.")}
                                onInput={(e) => e.currentTarget.setCustomValidity("")}
                            />
                        </div>

                        {/* Correo electrónico */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Correo electrónico"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]"
                                required
                                onInvalid={(e) => e.currentTarget.setCustomValidity("Por favor, ingresa un correo electrónico válido '@'.")}
                                onInput={(e) => e.currentTarget.setCustomValidity("")}
                            />
                        </div>

                        {/* Asunto */}
                        <div>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Asunto"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]"
                                required
                                onInvalid={(e) => e.currentTarget.setCustomValidity("Por favor, ingresa un asunto.")}
                                onInput={(e) => e.currentTarget.setCustomValidity("")}
                            />
                        </div>

                        {/* Mensaje */}
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Mensaje"
                                rows={4}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]"
                                required
                                onInvalid={(e) => e.currentTarget.setCustomValidity("Por favor, ingresa un mensaje.")}
                                onInput={(e) => e.currentTarget.setCustomValidity("")}
                            />
                        </div>

                        {/* Botón de Enviar */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-[#FB6F92] text-white py-3 rounded-lg hover:bg-[#E46585] transition font-semibold ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>
                </div>

                {/* Imagen */}
                <div className="hidden md:flex justify-center items-center">
                    <img
                        src="/assets/contacto.jpg"
                        alt="Imagen de contacto"
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}
