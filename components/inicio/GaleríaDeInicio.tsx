import { Foto } from "@/types/contentfulApi";
import Image from "next/image";
import Link from "next/link";
type Props = {
  fotos: Foto[];
};

export default function GaleríaDeInicio({ fotos }: Props) {
  //Mostrar solo 4 fotos
  const fotosAMostrar = fotos.slice(0, 4);
  return (
    <section className="bg-primario w-full py-12">
      <div className="flex flex-col px-4 md:px-6 ">
        <h2 className="text-primario py-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
          Galería
        </h2>
        <Link href="/galeria" className="text-sm text-gray-500">
          Click Para Ver Toda la Galería
        </Link>
        <div className="mt-3 grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fotosAMostrar.map((foto, index) => (
            <Image
              className="h-96 w-96  rounded-md "
              key={`foto${index}`}
              src={`https:${foto.fields.file.url}`}
              height={500}
              width={500}
              alt="Foto de galería"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
