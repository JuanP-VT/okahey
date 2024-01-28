import { Card, CardContent } from "../ui/card";

type Props = {
  sesiones: {
    sesion1: string;
    sesion2: string;
    sesion3: string;
    sesion4: string;
  };
};

function PróximasSesiones({ sesiones }: Props) {
  const listaDeSesiones = [
    sesiones.sesion1,
    sesiones.sesion2,
    sesiones.sesion3,
    sesiones.sesion4,
  ]; // convertimos el objecto a una lista
  const opcionesDeFormato: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Próximas Sesiones
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {listaDeSesiones.map((sesion, index) => {
            const fechaFormatoIso = new Date(sesion);
            const fechaDía = fechaFormatoIso.toLocaleString(
              "es-MX",
              opcionesDeFormato,
            );
            const fechaHora = fechaFormatoIso.toLocaleString("es-MX", {
              minute: "2-digit",
              hour: "numeric",
              hour12: true,
            });
            return (
              <Card className="p-2 py-4" key={`sesion${index}`}>
                <CardContent>
                  <h3 className="font-semibold">Session {index + 1}</h3>
                  <p>Día: {fechaDía}</p>
                  <p>Hora: {fechaHora}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PróximasSesiones;
