import { PreguntaFrecuente } from "@/types/contentfulApi";
import PáginaPreguntasFrecuentes from "./PáginaPreguntasFrecuentes";
const contentful = require("contentful");
export default async function PreguntasFrecuentes() {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const entry = await client.getEntries({
    content_type: "preguntaFrecuente",
  });
  const lista = entry.items as PreguntaFrecuente[];
  return <PáginaPreguntasFrecuentes listaDePreguntasFrecuentes={lista} />;
}
