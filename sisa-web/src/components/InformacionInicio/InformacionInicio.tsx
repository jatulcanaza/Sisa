import Image from 'next/image';

export function InformacionInicio() {
  return (
    <div id="InformacionInicio" className="my-5">
      {/* Contenedor centrado */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Texto a la izquierda */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <p>
                Descubre la magia de las flores personalizadas. En Sisa, transformamos tus ideas en ramos únicos llenos de vida y color. Inspírate, crea y expresa tus emociones a través de diseños personalizados que cuentan historias. Cada flor, cada detalle, está pensado para hacer de tu ramo algo inolvidable.
              </p>
            </div>
            <div className="mt-5">
              <p>
                Deja volar tu creatividad y crea tu ramo ideal hoy mismo.
              </p>
            </div>
            <div className="mt-5 self-start">
              <button className="px-8 py-3 text-white bg-[#FB6F92]  hover:bg-[#E46585] rounded-xl">
                ¡Crear tu ramo único ahora!
              </button>
            </div>
          </div>

          {/* Imagen a la derecha */}
          <div className="relative h-64 md:h-80">
            <Image
              src="/assets/realizaramo.jpg" // Reemplaza con la ruta de tu imagen
              alt="Imagen descriptiva"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
