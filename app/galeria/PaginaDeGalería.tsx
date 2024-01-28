"use client";

import { Foto } from "@/types/contentfulApi";
import Image from "next/image";
type Props = { fotos: Foto[] };

function Pagina({ fotos }: Props) {
  return (
    <div className="bg-orange-50 py-14">
      <h1 className="py-3  text-center text-3xl font-semibold sm:text-5xl">
        Nuestra Galería
      </h1>
      <div className="grid justify-center gap-3  p-5 sm:grid-cols-2 lg:grid-cols-3 lg:p-20 xl:grid-cols-4">
        {fotos.map((foto, index) => (
          <Image
            className="h-96 w-96  rounded-md"
            key={`foto${index}`}
            src={`https:${foto.fields.file.url}`}
            height={500}
            width={500}
            alt="Foto de galería"
          />
        ))}
      </div>
    </div>
  );
}

export default Pagina;
