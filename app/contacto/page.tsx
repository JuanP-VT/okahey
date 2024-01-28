"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
export default function Page() {
  /**
   * Es importante importar el mapa de esta manera, de lo contrario leaflet intentará acceder al objecto "windows"
   * mientras se ejecuta el código de lado del servidor, provocando un error de referencia.
   */
  const Mapa = dynamic(() => import("../../components/Mapa"), { ssr: false });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 rounded-md bg-zinc-200 p-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Nuestra Locación
            </h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Un ambiente tranquilo alejado de las distracciones de la ciudad
            </p>
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Dirección:</div>
              <Link
                href="https://maps.app.goo.gl/jinyVDshRqii5djR8"
                className="white mt-2 "
                target="_blank"
              >
                81379 Ejido Plan de Guadalupe, Sinaloa México
              </Link>
              <div className="mt-2 text-lg font-semibold">Contacto:</div>
              <Link
                href="https://wa.me/6682324356"
                className="mt-2 "
                target="_blank"
              >
                (+52) 668 232 4356
              </Link>
            </div>
          </div>
          <Mapa />
        </div>
        <div className="mt-12 space-y-4 rounded-md bg-slate-200 p-10">
          <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl/tight">
            Cómo llegar
          </h2>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Algunas indicaciones para llegar al lugar:
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">De la Ciudad de Los Mochis</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tome el Boulevard General Macario Gaxiola, en dirección a la
                salida Los Mochis / Topolobampo.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Hacia el aeropuerto</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                En la carretera Los Mochis / Topolobampo doblamos rumbo al
                aeropuerto internacional de Los Mochis.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">El Lugar</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pasamos el aeropuerto hasta llegar a Ejido Plan de Guadalupe. El
                nombre del local es la Huerta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
