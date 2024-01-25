import { Blog } from "@/types/contentfulApi";
import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

type Props = {
  blog: Blog;
};

function PáginaDeBlogIndividual({ blog }: Props) {
  const renderOption: Options = {
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
    <div className="flex h-full w-full justify-center bg-slate-200 p-2">
      <div className="mt-16 flex flex-col items-center justify-start rounded-md bg-white px-5 md:w-3/4 lg:w-1/2">
        <h1 className="p-5 text-3xl font-semibold md:text-5xl">
          {blog.fields.titulo}
        </h1>
        <div>
          {blog.fields.contenido.content.map((contenido, index) => (
            <div className="py-2" key={`doc${index}`}>
              {documentToReactComponents(contenido, renderOption)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PáginaDeBlogIndividual;
