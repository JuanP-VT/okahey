import PáginaDeBlogs from "./PáginaDeBlogs";

export default async function Blog() {
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  const entry = await client.getEntries({
    content_type: "blog",
  });
  const items = entry.items;
  return <PáginaDeBlogs listaDeBlogs={items} />;
}
