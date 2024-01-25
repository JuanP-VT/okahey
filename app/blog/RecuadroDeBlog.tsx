import { Button } from "@/components/ui/button";
import { Blog } from "@/types/contentfulApi";
import Image from "next/image";
import Link from "next/link";
type Props = {
  blog: Blog;
};

function RecuadroDeBlog({ blog }: Props) {
  const imageSrc = blog.fields.fotoDePortada.fields.file.url;
  const fechaDeCreaciónFormatoISO = new Date(blog.sys.createdAt);
  const fechaDeActualizaciónFormatoISO = new Date(blog.sys.updatedAt);

  const opcionesDeFormato: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fechaDeCreación = fechaDeCreaciónFormatoISO.toLocaleString(
    "es-MX",
    opcionesDeFormato,
  );
  const fechaDeActualización = fechaDeActualizaciónFormatoISO.toLocaleString(
    "es-MX",
    opcionesDeFormato,
  );
  return (
    <div className="flex w-full flex-col border  p-2">
      <Image
        className="rounded-md"
        width={300}
        height={300}
        src={`http:${imageSrc}`}
        alt="Portada del blog"
      />
      <h1 className="py-2 text-lg font-semibold">{blog.fields.titulo}</h1>
      <div className="mb-2 text-sm text-gray-500">
        <p>Creado el: {fechaDeCreación}</p>
        <p>Ultima Actualización: {fechaDeActualización}</p>
      </div>
      <Button asChild className="w-20" variant="secondary">
        <Link href={`/blog/${blog.sys.id}`}>Visitar</Link>
      </Button>
    </div>
  );
}

export default RecuadroDeBlog;
