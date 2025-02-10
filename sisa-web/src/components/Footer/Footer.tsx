import { dataSocialNetworks } from "@/data/dataSocialNetworks"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <>
            {/* Footer principal con los elementos de la plataforma, redes sociales, etc. */}
            <div className="p-5 mt-10 text-[#E46585] bg-[#FFF4F7] md:px-20 md:py-10">
                {/* Grid adaptado para pantallas pequeñas y grandes */}
                <div className="grid grid-cols-1 md:grid-cols-[350px_1fr_1fr_1fr] md:gap-10">
                    <div >
                        <img src="/assets/LOGO_SISA(ROSA).png" alt="Logo Website" className="w-34 md:w-18 mx-auto ml-[-40px]" />
                        <div className="flex gap-x-4 mt-4 justify-center md:justify-start">
                            {dataSocialNetworks.map(({ id, icon, name, link }) => (
                                <Link href={link} key={id} target="_blank" rel="noreferrer">
                                    <Image src={`/svg/${icon}.svg`} alt={name} width={40} height={40} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="my-3">
                        <h4 className="text-xl font-bold text-[#E46585]">Plataforma</h4>
                        <p className="my-4">
                            {/* Enlace para desplazarse a la sección de "Inicio" en la misma página */}
                            <Link href="/inicio" className="text-[#E46585] hover:underline">
                                Inicio
                            </Link>
                        </p>
                        <p className="my-4">
                            <Link href="/nosotros" className="text-[#E46585] hover:underline">
                                Nosotros
                            </Link>

                        </p>
                        <p className="my-4">
                            <Link href="/crear_ramo" className="text-[#E46585] hover:underline">
                                Crear tu ramo
                            </Link>
                        </p>
                        <p className="my-4">
                            <Link href="/sisa" className="text-[#E46585] hover:underline">
                                Sisa
                            </Link>
                        </p>
                        <p className="my-4">
                            <Link href="/contacto" className="text-[#E46585] hover:underline">
                                Contáctenos
                            </Link>
                        </p>
                    </div>

                    <div className="my-3">
                        <h4 className="text-xl font-bold text-[#E46585]">Nos ubicamos</h4>
                        <p className="my-4">
                            <Link href="https://www.google.com/maps?q=La+Gasca,+Quito,+Ecuador" target="_blank" className="text-[#E46585] hover:underline">
                                La Gasca
                            </Link>
                        </p>
                        <p className="my-4">
                            <Link href="https://www.google.com/maps?q=Plaza+de+Armas,+Quito,+Ecuador" target="_blank" className="text-[#E46585] hover:underline">
                                Plaza de Armas
                            </Link>
                        </p>
                    </div>

                    <div className="my-3">
                        <h4 className="text-xl font-bold text-[#E46585]">Contacto</h4>
                        <p className="my-4">(+593) 987  007 549</p>
                        <p className="my-4">(+593) 967  107 449</p>
                    </div>
                </div>
            </div>

            {/* Footer de derechos reservados */}
            <footer className="bg-[#E46585] text-white text-center py-3 w-full">
                <p>© 2025 Sisa. Todos los derechos reservados.</p>
            </footer>
        </>
    )
}
