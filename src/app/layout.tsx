import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TestOpos - Generador de Tests para Oposiciones",
  description: "Crea tests para tus oposiciones de forma rápida y sencilla.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
