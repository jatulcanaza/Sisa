"use client";
import { useState } from 'react';

export function PagContacto() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let formErrors = { name: '', email: '', message: '' };
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

        // Validar mensaje
        if (!formData.message) {
            formErrors.message = 'El mensaje es obligatorio.';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            console.log('Datos enviados:', formData);
            // Aquí puedes integrar la lógica para enviar los datos a una base de datos.
            setIsSubmitting(false);
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 mt-20">
            <div className="bg-[#FFF4F7] p-8 rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Formulario */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contáctanos</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Nombre */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nombre"
                                className={`w-full p-4 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                        </div>

                        {/* Correo electrónico */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Correo electrónico"
                                className={`w-full p-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                        </div>

                        {/* Mensaje */}
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Mensaje"
                                rows={4}
                                className={`w-full p-4 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FB6F92]`}
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
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
