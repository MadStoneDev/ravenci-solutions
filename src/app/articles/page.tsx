import axios from "axios";
import Link from "next/link";

async function getArticles() {
  const response = await axios.get(
    `https://strapi.ravenci.solutions/api/articles?sort[0]=createdAt:desc&populate=*&filters[publishedAt][$notNull]=true`,
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
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 min-h-[750px] bg-ravenci-dark`}
      >
        {articles &&
          articles.map(
            ({
              id,
              Title,
              Excerpt,
              Slug,
              categories,
              Featured_Image,
            }: {
              id: string;
              Title: string;
              Excerpt: string;
              Slug: string;
              categories: any[];
              Featured_Image: any;
            }) => {
              return (
                <article key={id} className={`flex flex-col`}>
                  <div
                    className={`mb-4 w-full bg-cover bg-center`}
                    style={{
                      aspectRatio: `5/6`,
                      backgroundImage: Featured_Image
                        ? `url(https://strapi.ravenci.solutions${Featured_Image.url})`
                        : ``,
                    }}
                  ></div>
                  <div
                    className={`mb-2 group px-2 py-1 relative flex w-fit hover:scale-105 transition-all duration-300 ease-in-out`}
                  >
                    <p
                      className={`text-xs uppercase font-bold text-neutral-400 group-hover:text-white z-10 transition-all duration-300 ease-in-out`}
                    >
                      {categories.length > 0 ? categories[0].Name : ` `}
                    </p>
                    <div
                      className={`absolute top-0 left-0 right-full group-hover:right-0 bottom-0 bg-ravenci-primary transition-all duration-300 ease-in-out`}
                    ></div>
                  </div>

                  <Link
                    href={`/articles/${Slug}`}
                    className={`mb-4 group relative px-1 py-0.5 flex hover:scale-105 transition-all duration-300 ease-in-out`}
                  >
                    <h3
                      className={`font-serif text-xl text-white font-semibold`}
                    >
                      {Title}
                    </h3>
                  </Link>

                  <p
                    className={`text-sm text-neutral-400 font-light`}
                    style={{
                      lineHeight: "1.6em",
                    }}
                  >
                    {Excerpt}
                  </p>
                </article>
              );
            },
          )}
      </section>
      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[250px] bg-white`}
      ></section>
    </main>
  );
}
