
export function InicioCrear() {
    return (
      <div id="InicioCrear" className="pt-24 bg-[#ffffff] md:px-2 my-16">
        {/* Contenedor con imagen de fondo ajustada */}
        <div
          className="relative bg-cover bg-no-repeat rounded-lg"
          style={{
            backgroundImage: 'url(/assets/Crear.jpg)',
            backgroundPosition: 'top', // Centra la imagen en todos los tamaños
            backgroundSize: 'cover',      // La imagen cubre todo el contenedor
            height: '50vh',               // Ajusta la altura del contenedor
          }}
        >
          {/* Contenedor del texto alineado */}
          <div className="absolute inset-0 flex flex-col justify-center items-end px-5 md:px-14 text-white">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight">
              Crear tu Ramo
            </h1>

          </div>
        </div>
      </div>
    );
  }
  