"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type SectionState = {
  mision: boolean;
  vision: boolean;
  valores: boolean;
};

export function MisionVisionValores() {
  const [isOpen, setIsOpen] = useState<SectionState>({
    mision: false,
    vision: false,
    valores: false,
  });

  const handleToggle = (section: keyof SectionState) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF4F7] p-8">
      {/* Contenedor con Flexbox para organizar Misión y Visión */}
      <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
        
        {/* Sección Misión */}
        <motion.div
          className="max-w-3xl text-center bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleToggle("mision")}
          whileTap={{ scale: 1.1 }} // Aumenta el tamaño al hacer clic
        >
          <div className="relative">
            <img
              src="/assets/Mision.jpg" // Ruta a la imagen en la carpeta public
              alt="Misión"
              className="w-full h-96 object-cover rounded-t-2xl" // Se aumenta la altura para que se vea más grande
            />
            <h2 className="absolute top-2 left-4 text-[#ffffff] font-bold text-3xl md:text-5xl">
              Misión
            </h2>
          </div>
          {isOpen.mision && (
            <p className="text-gray-700 mt-4">
              Crear experiencias personalizadas que conecten a las personas con
              la belleza de la naturaleza, permitiéndoles diseñar ramos únicos
              mediante innovación tecnológica, mientras brindamos un servicio
              excepcional que fomente emociones y recuerdos inolvidables.
            </p>
          )}
        </motion.div>

        {/* Sección Visión */}
        <motion.div
          className="max-w-3xl text-center bg-white p-6 rounded-2xl shadow-lg  w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleToggle("vision")}
          whileTap={{ scale: 1.1 }} // Aumenta el tamaño al hacer clic
        >
          <div className="relative">
            <img
              src="/assets/vision.jpg" // Ruta a la imagen en la carpeta public
              alt="Visión"
              className="w-full h-96 object-cover rounded-t-2xl" // Aumentar altura
            />
            <h2 className="absolute top-2 left-4 text-[#E46585] font-bold text-3xl md:text-5xl">
              Visión
            </h2>
          </div>
          {isOpen.vision && (
            <p className="text-gray-700 mt-4">
              Ser reconocidos como líderes en el diseño floral personalizado,
              destacándonos por la integración de tecnología y creatividad, y
              siendo un referente en la promoción de la conexión emocional entre
              las personas a través de la naturaleza.
            </p>
          )}
        </motion.div>
      </div>

      {/* Sección Valores (Debajo de Misión y Visión) */}
      <motion.div
        className="max-w-3xl text-center bg-white p-6 rounded-2xl shadow-lg mt-6 w-full "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => handleToggle("valores")}
        whileTap={{ scale: 1.1 }} // Aumenta el tamaño al hacer clic
      >
        <div className="relative">
          <img
            src="/assets/Valores.jpg" // Ruta a la imagen en la carpeta public
            alt="Valores"
            className="w-full h-96 object-cover rounded-t-2xl" // Aumentar altura
          />
          <h2 className="absolute top-2 left-4 text-[#ffffff] font-bold text-3xl md:text-5xl">
            Valores
          </h2>
        </div>
        {isOpen.valores && (
          <p className="text-gray-700 mt-4 text-justify">
            1.- Creatividad: Impulsamos la innovación para transformar ideas en
            obras florales únicas.
            <br />
            <br />
            2.- Calidad: Nos esforzamos por ofrecer productos y servicios que
            superen las expectativas de nuestros clientes.
            <br />
            <br />
            3.- Sostenibilidad: Respetamos el medio ambiente, utilizando
            prácticas responsables y éticas en cada paso de nuestro proceso.
            <br />
            <br />
            4.- Personalización: Nos enfocamos en entender y satisfacer las
            necesidades específicas de cada cliente.
            <br />
            <br />
            5.- Pasión: Nuestro amor por las flores y la naturaleza guía cada
            una de nuestras acciones.
            <br />
            <br />
            6.- Empatía: Nos conectamos emocionalmente con nuestros clientes,
            entendiendo sus deseos y necesidades.
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default MisionVisionValores;
