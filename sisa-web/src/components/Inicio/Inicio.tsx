
export function Inicio() {
  return (
    <div id="Inicio" className="pt-24 bg-[#ffffff] md:px-2 my-16">
      {/* Contenedor con imagen de fondo ajustada */}
      <div
        className="relative bg-cover bg-no-repeat rounded-lg"
        style={{
          backgroundImage: 'url(/assets/mujer-bouquet.jpg)',
          backgroundPosition: 'top', // Centra la imagen en todos los tamaños
          backgroundSize: 'cover',      // La imagen cubre todo el contenedor
          height: '50vh',               // Ajusta la altura del contenedor
        }}
      >
        {/* Contenedor del texto alineado */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-5 md:px-24 text-white">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Sisa
          </h1>
          <p className="mt-3 md:mt-5 text-lg md:text-2xl">
            "Flores que cuentan historias"
          </p>
        </div>
      </div>
    </div>
  );
}


