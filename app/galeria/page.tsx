import { Foto } from "@/types/contentfulApi";
import Pagina from "./PaginaDeGalería";
import * as contentful from "contentful";
export default async function Galería() {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  const entry = await client.getEntries({
    content_type: "galeria",
    "sys.id": process.env.NEXT_PUBLIC_CONTENTFUL_GALERIA_CONTENT_ID,
  });
  const fotos = entry.items[0].fields.fotos as Foto[];
  return <Pagina fotos={fotos} />;
}
