"use client";
import Link from "next/link";
import { useRef } from "react";
import MenuButton from "./MenuButton";
import FlameIcon from "./ui/svg/svgLibrary";

function MainNav() {
  const containerRef = useRef(null);
  return (
    <div className="fixed z-50 w-full">
      <MenuButton containerRef={containerRef} />
      <div //Contenedor de los links
        ref={containerRef}
        className="absolute top-10 z-20 flex w-full -translate-y-96 flex-col items-center justify-center 
         gap-2 bg-black bg-opacity-95 py-3 font-semibold text-orange-100 transition sm:relative 
         sm:top-0 sm:w-full sm:-translate-y-0  sm:flex-row sm:gap-x-10  lg:gap-x-32"
      >
        <FlameIcon className="hidden text-orange-500 sm:block" />{" "}
        <Link className="hover:text-amber-500" href="/">
          Inicio
        </Link>
        <Link
          className="whitespace-nowrap hover:text-amber-500 "
          href="/preguntas-frecuentes"
        >
          Preguntas Frecuentes
        </Link>
        <Link className="hover:text-amber-500" href="/blog">
          Blog
        </Link>
        <Link className="hover:text-amber-500" href="/galeria">
          Galería
        </Link>
        <Link className="hover:text-amber-500" href="/contacto">
          Contacto
        </Link>
      </div>
    </div>
  );
}

export default MainNav;
