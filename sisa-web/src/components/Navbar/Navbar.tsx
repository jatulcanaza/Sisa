import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className="bg-[#FB6F92]">
      <div className="grid items-center justify-between md:grid-cols-2 gap-4 md:gap-20 md:px-20">
        <Image src="/assets/LOGO_SISA.png" alt="Sisa Logo" width={200} height={200} />
        <div className="flex gap-4 text-center text-white">
          <Link href="#Inicio" className="hover:text-gray-300">Inicio</Link>
          <Link href="#Nosotros" className="hover:text-gray-300">Nosotros</Link>
          <Link href="#Crear tu ramo" className="hover:text-gray-300">Crear tu ramo</Link>
          <Link href="#Sisa" className="hover:text-gray-300">Sisa</Link>
          <Link href="#Contactenos" className="hover:text-gray-300">Contactenos</Link>
        </div> 
      </div>
    </div>
  );
}

