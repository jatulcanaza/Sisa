import type { Metadata } from "next";
import { Quicksand } from "next/font/google"; // Cambio de Urbanist a Quicksand
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sisa",
  description: "Sistema de creación de ramos con NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={quicksand.className}>
        <Navbar /> {/* Asegurar que la Navbar esté presente */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
