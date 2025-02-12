
import { Contactenos } from "@/components/Contactenos";
import {InicioNosotros} from "@/components/InicioNosotros/InicioNosotros";
import {MisionVisionValores} from "@/components/MisionVisionValores/MisionVisionValores";

import {QuienesSomos} from "@/components/QuienesSomos/QuienesSomos";


export default function nosotros() {
  return (
      <main>
 
          <InicioNosotros />
          <QuienesSomos />
          <MisionVisionValores />
          <Contactenos />
      </main>
  );
}
