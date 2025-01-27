import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
const urbanist = Urbanist({
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Sisa",
  description: "Sistema de creacion de ramos con NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={urbanist.className}
      >
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
