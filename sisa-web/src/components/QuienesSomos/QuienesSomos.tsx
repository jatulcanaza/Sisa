import Image from 'next/image';

export function QuienesSomos() {
    return (
        <div id="QuienesSomos" className="my-5">
            {/* Contenedor centrado */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Imagen a la izquierda */}
                    <div className="relative h-[500px] md:h-[550px]"> 
                        <Image
                            src="/assets/Sisa.png" // Reemplaza con la ruta de tu imagen
                            alt="Imagen descriptiva"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Texto a la derecha */}
                    <div className="flex-col justify-between">
                        <div className='mt-4'>
                            <h1 className='font-bold text-4xl text-[#E46585]'> ¿Quienes Somos? <br /> <br /></h1>
                            <h1 className='font-bold'>Nuestra Historia <br /> <br /> </h1>
                        </div>
                        <div className="mt-2">
                            <p>
                            En Sisa, la pasión por las flores y la creatividad en cada diseño han sido nuestra inspiración desde el principio. 
                             Nos dedicamos a ofrecer una experiencia única, permitiendo a cada cliente crear un ramo que cuente su propia historia.<br /><br />
                             El Origen de Sisa: Donde la Naturaleza y la Innovación Florecen Sisa, que significa "flor" en kichwa, nació con la misión de unir 
                             la tradición y la tecnología para ofrecer un servicio personalizado y especial. 
                             Desde nuestra fundación en 2025 hemos crecido gracias a nuestra dedicación a la calidad y el compromiso con la innovación.<br /><br />
                             Nuestros primeros pasos fueron modestos, comenzando como un pequeño proyecto en La Gasca. 
                             Gracias al apoyo de nuestros clientes y el esfuerzo de nuestro equipo, logramos expandirnos y adaptarnos a las nuevas tendencias, 
                             integrando la inteligencia artificial para que cada cliente pueda diseñar su propio ramo único.<br /><br />
                             Hoy, con un equipo comprometido y apasionado, seguimos escribiendo nuestra historia, comprometidos a llevar la belleza de la naturaleza a cada rincón, una flor a la vez.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
