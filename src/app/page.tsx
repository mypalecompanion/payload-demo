import { Article } from "@/payload/payload-types";
import Link from "next/link";

interface Docs {
  docs: Article[];
}

const getArticles = async () => {
  const response = await fetch("http://localhost:3000/api/articles", {
    method: "GET",
    cache: "no-store",
  });
  return response.json();
};

export default async function Home() {
  const docs = (await getArticles()) as Docs;
  return (
    <>
      <h1>Aktualności</h1>
      <ul>
        {docs.docs.map((item) => (
          <li>
            <Link href={`/article/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
