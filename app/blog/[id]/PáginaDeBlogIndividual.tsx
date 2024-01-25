import { Blog } from "@/types/contentfulApi";
import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import RecuadroDeBlog from "../RecuadroDeBlog";

type Props = {
  blog: Blog;
  todoLosBlogs: Blog[];
};

function PáginaDeBlogIndividual({ blog, todoLosBlogs }: Props) {
  //Cerca del pie de la página queremos mostrar una lista con más blogs
  //Hay que borrar el blog que se está actualmente de la lista de blogs a mostrar
  //Queremos mostrar máximo 3 blogs de la lista para que no se sature de información la interfaz
  //Seleccionaremos 3 al azar
  const blogsAMostrar = [...todoLosBlogs];
  const indexDelBlog = blogsAMostrar.findIndex(
    (blogEnLaLista) => blogEnLaLista.sys.id === blog.sys.id,
  );
  //Borramos el blog actual de la lista de blogs a mostrar
  if (indexDelBlog !== -1) {
    blogsAMostrar.splice(indexDelBlog, 1);
  }
  //Mostrar máximo 3
  // Barajar la  lista
  const listaBarajada = blogsAMostrar.sort(() => Math.random() - 0.5);

  // Crear nueva lista con máximo 3 elementos
  const nueveLista = listaBarajada.slice(0, Math.min(3, listaBarajada.length));

  const opcionesDeRender: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <div>
            <Image
              className="rounded-lg"
              alt=""
              src={`https:${node.data.target.fields.file.url}`}
              height={node.data.target.fields.file.details.image.height}
              width={node.data.target.fields.file.details.image.width}
            />
          </div>
        );
      },
    },
  };
  return (
    <div className="flex h-full w-full flex-col  bg-slate-100 p-2">
      <div className="mt-16 flex flex-col items-center justify-start self-center rounded-md bg-white px-3 md:w-3/4 lg:w-1/2">
        <h1 className="py-3 text-3xl font-semibold md:px-5 md:py-7 md:text-5xl">
          {blog.fields.titulo}
        </h1>
        <div>
          {blog.fields.contenido.content.map((contenido, index) => (
            <div className="py-4" key={`doc${index}`}>
              {documentToReactComponents(contenido, opcionesDeRender)}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-5">
        <h1 className="p-3 text-3xl font-semibold ">Más Blogs</h1>
        <div className="grid grid-cols-1 items-center justify-center  sm:grid-cols-2 md:grid-cols-3">
          {nueveLista.map((blog, index) => (
            <RecuadroDeBlog key={`blog${index}`} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PáginaDeBlogIndividual;
