import type { Metadata } from "next";
import "./globals.css";
import { jetbrains } from "./ui/fonts";


export const metadata: Metadata = {
  title: "prueba-tecnica-front",
  description: "Prueba tecnica para una prueba tecnica de programación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrains.className} antialised`}>{children}</body>
    </html>
  );
}
