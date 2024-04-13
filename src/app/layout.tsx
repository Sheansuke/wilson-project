import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/molecules/NavBar";
import { ReactQuery } from "@/infrastructure/config/ReactQuery";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gestion Documental",
  description: "Gestiona tus documentos de forma segura y eficiente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-200">
      <body className={inter.className}>
        <NavBar />
        <ReactQuery>{children}</ReactQuery>
      </body>
    </html>
  );
}
