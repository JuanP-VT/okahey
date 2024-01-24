"use client";

import { Blog } from "@/types/contentfulApi";
import RecuadroDeBlog from "./RecuadroDeBlog";

type Props = {
  listaDeBlogs: Blog[];
};

function PáginaDeBlogs({ listaDeBlogs }: Props) {
  return (
    <div className="flex py-12">
      {listaDeBlogs.map((blog, index) => (
        <RecuadroDeBlog key={`blog${index}`} blog={blog} />
      ))}
    </div>
  );
}

export default PáginaDeBlogs;
