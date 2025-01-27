import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className="bg-[#FB6F92] py-2"> {/* Rellena menos espacio vertical con py-2 */}
      <div className="container mx-auto flex items-center justify-between px-4 md:px-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image 
            src="/assets/LOGO_SISA.png" 
            alt="Sisa Logo" 
            width={150}  // Reduce el tamaño para un diseño más compacto
            height={150} 
          />
        </div>
        {/* Enlaces */}
        <div className="flex gap-4 text-sm md:text-base text-white">
          <Link href="#Inicio" className="hover:text-gray-300">Inicio</Link>
          <Link href="#Nosotros" className="hover:text-gray-300">Nosotros</Link>
          <Link href="#Crear tu ramo" className="hover:text-gray-300">Crear tu ramo</Link>
          <Link href="#Sisa" className="hover:text-gray-300">Sisa</Link>
          <Link href="#Contactenos" className="hover:text-gray-300">Contáctenos</Link>
        </div>
      </div>
    </div>
  );
}
