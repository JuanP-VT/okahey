"use client";
import AcordeónPreguntaFrecuente from "@/components/AcordeónPreguntaFrecuente";
import { PreguntaFrecuente } from "@/types/cdnApi";

type Props = {
  listaDePreguntasFrecuentes: PreguntaFrecuente[];
};

function PáginaPreguntasFrecuentes({ listaDePreguntasFrecuentes }: Props) {
  return (
    <main className=" flex flex-col md:items-center  ">
      <div className="flex w-full flex-col items-center justify-center p-2 sm:p-5">
        <h1 className="white mb-5 mt-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:mt-16  md:text-6xl lg:text-7xl">
          Preguntas Frecuentes
        </h1>
        <div className="flex w-full flex-col items-center  p-2">
          {listaDePreguntasFrecuentes.map((preguntaFrecuente, index) => (
            <AcordeónPreguntaFrecuente
              key={`PF${index}`}
              pregunta={preguntaFrecuente.fields.pregunta}
              respuesta={preguntaFrecuente.fields.respuesta.content}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default PáginaPreguntasFrecuentes;
