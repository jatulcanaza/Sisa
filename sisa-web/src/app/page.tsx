import { Navbar } from "@/components/Navbar";
import { Inicio } from "@/components/Inicio";
import { InformacionInicio } from "@/components/InformacionInicio";
import Image from "next/image";
import { Contactenos } from "@/components/Contactenos";

export default function Home() {
  return (
<main className="">
  <Navbar />
  <Inicio />
  <InformacionInicio />
  <Contactenos />
</main>
  );
}
