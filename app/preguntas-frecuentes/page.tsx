import AcordeónPreguntasFrecuentes from "@/components/AcordeónPreguntasFrecuentes";

export default function PreguntasFrecuentes() {
  return (
    <main className="flex flex-col md:items-center">
      <div className="flex flex-col items-center justify-center p-5">
        <h1 className="white text-center text-3xl font-bold tracking-tighter sm:text-4xl md:py-10 md:text-5xl lg:text-6xl/none">
          Preguntas Frecuentes
        </h1>
      </div>
      <div className="flex  w-full flex-col items-center  p-2">
        <AcordeónPreguntasFrecuentes
          pregunta="Pregunta"
          respuesta="Respuesta"
        />
      </div>
    </main>
  );
}
