import axios from "axios";
import Link from "next/link";

async function getArticles() {
  const response = await axios.get(
    `https://strapi.ravenci.solutions/api/articles?sort[0]=publishedAt:desc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    },
  );

  return response.data.data;
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Code, Create, Transform
          </h1>
          <h2 className={`text-2xl md:text-3xl lg:text-h2 font-light`}>
            Expert perspectives on modern digital development
          </h2>
        </article>
      </section>

      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[750px] bg-ravenci-dark`}
      >
        {articles &&
          articles.map(
            ({
              id,
              Slug,
              Title,
            }: {
              id: string;
              Slug: string;
              Title: string;
            }) => (
              <article key={id} className={`flex flex-col gap-4`}>
                <div
                  className={`w-full`}
                  style={{
                    aspectRatio: `5/6`,
                  }}
                ></div>
                <h3 className={`text-white`}>
                  <Link href={`/articles/${Slug}`}>{Title}</Link>
                </h3>
              </article>
            ),
          )}
      </section>
      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[250px] bg-white`}
      ></section>
    </main>
  );
}
