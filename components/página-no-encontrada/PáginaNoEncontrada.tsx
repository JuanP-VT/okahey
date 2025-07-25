import Link from "next/link";
type Props = {};

export default function PáginaNoEncontrada({}: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
        404 No Encontrado
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        La página que estas buscando no existe.
      </p>
      <Link
        className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="/"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
