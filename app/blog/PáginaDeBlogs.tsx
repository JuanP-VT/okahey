"use client";

import { Blog } from "@/types/contentfulApi";
import RecuadroDeBlog from "./RecuadroDeBlog";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import Pagination from "@/components/paginación/Pagination";
import createPagination from "@/utils/crearPaginación";
type Props = {
  listaDeBlogs: Blog[];
};

function PáginaDeBlogs({ listaDeBlogs }: Props) {
  const [palabraFiltro, setPalabraFiltro] = useState("");

  const [listaFiltradaDeBlogs, setListaFiltradaDeBlogs] =
    useState<Blog[]>(listaDeBlogs);

  //Actualizar lista en base a la palabra filtro
  useEffect(() => {
    const listaFiltrada = listaDeBlogs.filter((blog) =>
      blog.fields.titulo.toLowerCase().includes(palabraFiltro.toLowerCase()),
    );
    setListaFiltradaDeBlogs(listaFiltrada);
  }, [palabraFiltro, listaDeBlogs]);

  //Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const listaPaginada = createPagination(listaFiltradaDeBlogs, 8) as Blog[][];
  // Handle case where current page becomes undefined for new filtered array
  useEffect(() => {
    if (currentPage > listaPaginada.length) {
      setCurrentPage(1); // Set current page to the first page
    }
  }, [currentPage, listaPaginada.length]);
  //If no product matches filter criteria
  return (
    <div className="flex flex-col py-12">
      <h1 className="space-y-2 p-2 text-center text-3xl font-semibold">
        Blogs
      </h1>
      <Input
        placeholder="Buscar"
        className="w-96 self-center"
        type="text"
        onChange={(evento) => setPalabraFiltro(evento.target.value)}
      />
      <div className="relative grid grid-cols-1 p-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
        {listaPaginada[currentPage - 1]?.map((blog, index) => (
          <RecuadroDeBlog key={`blog${index}`} blog={blog} />
        ))}
        {listaFiltradaDeBlogs.length === 0 ? (
          <div className="w-full p-1 sm:px-10">
            No se encontraron blogs que incluyan:
            <span className="mx-1 font-bold">{palabraFiltro}</span> en el título
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          numberOfPages={listaPaginada.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default PáginaDeBlogs;
