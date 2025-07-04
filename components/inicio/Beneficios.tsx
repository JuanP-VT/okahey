import Link from "next/link";

export default function Beneficios() {
  return (
    <section className="bg-primario w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-primario mb-3 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Beneficios del Temazcal
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Descubre los números beneficios para tu salud física, mental y
            espiritual participando en la ceremonia de Temazcal
          </p>
          <Link
            href="/blog"
            className="text-grey-700 text-primario bottom-0 left-8 text-sm font-bold"
          >
            Conoce más, visita nuestro blog!
          </Link>
        </div>
        <div className="grid w-full grid-cols-1 gap-7 p-2 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-2">
            <HeartIcon className="h-12 w-12 text-red-500" />
            <h3 className="text-lg font-semibold">
              Promueve Funciones Cardiovasculares
            </h3>
            <p className="text-sm text-gray-500">
              El calor y los vapores pueden estimular la circulación,
              promoviendo mejor funcionamiento cardiovascular
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <LeafIcon className="h-12 w-12 text-green-500" />
            <h3 className="text-lg font-semibold">Detox Natural</h3>
            <p className="text-sm text-gray-500">
              El sudor inducido por el calor ayuda a remover toxinas
              naturalmente del cuerpo
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <BrainIcon className="h-12 w-12 text-pink-500" />
            <h3 className="text-lg font-semibold">
              Mejora tu Bienestar Mental
            </h3>
            <p className="text-sm text-gray-500">
              La ceremonia puede ayudar a reducir el estrés, promover la
              relajación y mejorar la claridad mental
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <UserIcon className="h-12 w-12 text-purple-500" />
            <h3 className="text-lg font-semibold">
              Fortalece El Sistema Inmune
            </h3>
            <p className="text-sm text-gray-500">
              El calor puede estimular la producción de glóbulos blancos,
              fortaleciendo el sistema inmunológico
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SmileIcon className="h-12 w-12 text-sky-500" />
            <h3 className="text-lg font-semibold">Embellece Tu Piel</h3>
            <p className="text-sm text-gray-500">
              El vapor puede ayudar a limpiar la piel, mejorando su salud y
              apariencia
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FeatherIcon className="h-12 w-12 text-slate-300" />
            <h3 className="text-lg font-semibold">
              Fomenta el Crecimiento Espiritual
            </h3>
            <p className="text-sm text-gray-500">
              La ceremonia puede llevar a la introspección personal y al
              crecimiento espiritual
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function BrainIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function HeartIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LeafIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function UserIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function SmileIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
function FeatherIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" x2="2" y1="8" y2="22" />
      <line x1="17.5" x2="9" y1="15" y2="15" />
    </svg>
  );
}
