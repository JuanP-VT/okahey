import * as contentful from "contentful";
import Image from "next/image";
import { Foto, Sesiones } from "@/types/contentfulApi";
import GaleríaDeInicio from "@/components/inicio/GaleríaDeInicio";
import PróximasSesiones from "@/components/inicio/PróximasSesiones";
import Beneficios from "@/components/inicio/Beneficios";

export default async function Home() {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  const solicitarFotos = await client.getEntries({
    content_type: "galeria",
    "sys.id": process.env.NEXT_PUBLIC_CONTENTFUL_GALERÍA_CONTENT_ID,
  });
  const fotos = solicitarFotos.items[0].fields.fotos as Foto[];

  const solicitarPróximasSesiones = await client.getEntries({
    content_type: "prximasSesiones",
  });

  const sesiones = solicitarPróximasSesiones.items[0].fields as {
    sesion1: string;
    sesion2: string;
    sesion3: string;
    sesion4: string;
  };
  return (
    <div className="relative">
      <section className="relative  h-screen w-full ">
        <video
          className="absolute -z-10 h-screen w-screen object-cover"
          preload="metadata"
          autoPlay={true}
          muted={true}
          loop={true}
          src="/img/video.webm"
        ></video>
        <div className="container flex h-full items-end justify-center  px-4 md:px-6">
          <div className="mb-32 flex flex-col items-center space-y-4 text-center">
            <h1 className="text-primario text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Vive la magia del Temazcal
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-200 dark:text-slate-100 md:text-xl">
              Únete para una experiencia única. Relájate, rejuvenece y conecta
              con la naturaleza
            </p>
          </div>
        </div>
      </section>
      <Beneficios />
      <GaleríaDeInicio fotos={fotos} />
      <PróximasSesiones sesiones={sesiones} />
      <section className="bg-gray-50 px-4 py-12">
        <h2 className="text-center text-2xl font-bold lg:text-3xl">
          Testimonios
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Image
              alt="Testimonial"
              className="h-24 w-24 rounded-full object-cover"
              height="100"
              src="/img/pic1.jfif"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <h3 className="mt-4 text-xl font-semibold">Lou Velardez</h3>
            <p className="mt-2 text-gray-500">
              La experiencia Temazcal fue muy transformadora. Me sentí limpiada
              y renovada
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              alt="Testimonial"
              className="h-24 w-24 rounded-full object-cover"
              height="100"
              src="/img/pic2.png"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <h3 className="mt-4 text-xl font-semibold">Juan Pablo</h3>
            <p className="mt-2 text-gray-500">
              Al principio era escéptico pero el Temazcal demostró ser una
              experiencia profundamente sanadora.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              alt="Testimonial"
              className="h-24 w-24 rounded-full object-cover"
              height="100"
              src="/img/pic3.jfif"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <h3 className="mt-4 text-xl font-semibold">Maria Rodriguez</h3>
            <p className="mt-2 text-gray-500">
              Es algo que debes intentar al menos una vez en tu vida!. Es como
              un sauna pero más poderoso
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
