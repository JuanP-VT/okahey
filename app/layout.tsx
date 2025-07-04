import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import MainNav from "@/components/MainNav";
import FooterPrincipal from "@/components/FooterPrincipal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Temazcal Los Mochis",
  description: "Vive la experiencia del Temazcal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <MainNav />
        <div className="min-h-screen">{children}</div>
        <FooterPrincipal />
      </body>
    </html>
  );
}
