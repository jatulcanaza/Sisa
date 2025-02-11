import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className="bg-[#FB6F92] fixed w-full top-0 z-50 py-6"> 
      <div className="container mx-auto flex items-center justify-between px-4 md:px-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image 
            src="/assets/LOGO_SISA1.png" 
            alt="Sisa Logo" 
            width={190}  // Reduce el tamaño para un diseño más compacto
            height={190} 
          />
        </div>
        {/* Enlaces */}
        <div className="flex gap-4 text-sm md:text-base text-white">
          <Link href="/inicio" className="hover:text-gray-300 hover:underline">Inicio</Link>
          <Link href="/nosotros" className="hover:text-gray-300 hover:underline">Nosotros</Link>
          <Link href="/crear_ramo" className="hover:text-gray-300 hover:underline">Crear tu ramo</Link>
          <Link href="/sisa" className="hover:text-gray-300 hover:underline">Sisa</Link>
          <Link href="/contacto" className="hover:text-gray-300 hover:underline">Contáctenos</Link>

        </div>
      </div>
    </div>
  );
}
