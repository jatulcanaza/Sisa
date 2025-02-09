import Image from 'next/image';

export function Instrucciones() {
    return (
        <div id="Instrcucciones" className="my-5">
            {/* Contenedor centrado */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Texto a la izquierda */}
                    <div className="flex-col justify-between">
                        <div className='mt-4'>
                        <h1 className='font-bold text-4xl'>Bienvenido a la sección "Crear tu ramo" <br /> <br /> <br /></h1>
                            <h1 className='font-bold'>Sigue estos pasos para crear tu ramo sisa: <br /> <br /> <br /></h1>
                        </div>
                        <div className="mt-2">
                            <p>
                                1.- Selecciona las flores y colores que más te gusten..<br />
                                2.- Da click en el botón de "¡Crear tu ramo Sisa!".<br />
                                3.- Visualiza tu ramo sisa único."
                            </p>
                        </div>
                    </div>

                    {/* Imagen a la derecha */}
                    <div className="relative h-64 md:h-80">
                        <Image
                            src="/assets/flores-a-domicilio-para-Navidad.jpg" // Reemplaza con la ruta de tu imagen
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
