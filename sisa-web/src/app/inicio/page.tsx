import { Navbar } from "@/components/Navbar";
import { Inicio } from "@/components/Inicio";
import { InformacionInicio } from "@/components/InformacionInicio";
import { Contactenos } from "@/components/Contactenos";

export default function inicio() {
  return (
<main className="">
  <Navbar />
  <Inicio />
  <InformacionInicio />
  <Contactenos />
</main>
  );
}
