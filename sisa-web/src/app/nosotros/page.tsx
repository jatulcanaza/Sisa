import { Inicio } from "@/components/Inicio";
import {InicioNosotros} from "@/components/InicioNosotros/InicioNosotros";
import { Navbar } from "@/components/Navbar";
import {QuienesSomos} from "@/components/QuienesSomos/QuienesSomos";

export default function nosotros() {
  return (
      <main>
          <Navbar />
          <InicioNosotros />
          <QuienesSomos />
      </main>
  );
}
