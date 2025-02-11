import { Crear } from "@/components/Crear";
import { InicioCrear } from "@/components/InicioCrear";
import { Instrucciones } from "@/components/Instrucciones";
import { Navbar } from "@/components/Navbar";
export default function crear_ramo() {
    return (
        <main>
            <Navbar />
            <InicioCrear />
            <Instrucciones />
            <Crear />
        </main>

    )
}
