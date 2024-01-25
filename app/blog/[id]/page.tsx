import { Blog } from "@/types/contentfulApi";
import PáginaDeBlogIndividual from "./PáginaDeBlogIndividual";

export default async function BlogIndividual({
  params,
}: {
  params: { id: string };
}) {
  //Verificamos que el parámetro sea una id de blog válida
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  const entry = await client.getEntries({
    content_type: "blog",
  });
  const items = entry.items as Blog[];
  const find = items.find((blog) => blog.sys.id === params.id);
  if (find) {
    return <PáginaDeBlogIndividual blog={find} />;
  }

  return <div>No se Encontró</div>;
}
