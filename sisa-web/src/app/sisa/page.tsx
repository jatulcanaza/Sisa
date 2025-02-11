import { Contactenos } from "@/components/Contactenos";
import { InicioSisa } from "@/components/InicioSisa";
import { Navbar } from "@/components/Navbar";
import {Tips} from "@/components/Tips/Tips";

export default function sisa() {
  return (
   <main>
    <Navbar />
    <InicioSisa />
    <Tips />
    <Contactenos />
   </main>
  )
}
