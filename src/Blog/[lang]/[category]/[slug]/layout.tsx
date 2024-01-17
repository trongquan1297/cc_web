import React from "react";
import ArticleSelect from "@/Blog/[lang]/components/ArticleSelect";
import { fetchAPI } from "@/Blog/[lang]/utils/fetch-api";

async function fetchSideMenuData(filter: string) {
  try {
    const token = 'cd799d9d816f9d60dbd316ad721c084f2b22fc142d613551d13ccaafe82ae1d028db98e4ea4339c919bab98fa0b05886c354e94f59f2d787004d1c29aedcbf144e6c499bf91c952b35c04efa0c357d0d231cc1adf205eecd3997dcc6be8a71382e28ce2b07a46ea38d74b8be6c41cce2bd920305623fd1ca37e2f3142ff1a267';
    const options = { headers: { Authorization: `Bearer ${token}` } };

    const categoriesResponse = await fetchAPI(
      "/categories",
      { populate: "*" },
      options
    );

    const articlesResponse = await fetchAPI(
      "/articles",
      filter
        ? {
            filters: {
              category: {
                name: filter,
              },
            },
          }
        : {},
      options
    );

    return {
      articles: articlesResponse.data,
      categories: categoriesResponse.data,
    };
  } catch (error) {
    console.error(error);
  }
}

interface Category {
  id: number;
  attributes: {
    name: string;
    slug: string;
    articles: {
      data: Array<{}>;
    };
  };
}

interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
  };
}

interface Data {
  articles: Article[];
  categories: Category[];
}

export default async function LayoutRoute({
  params,
  children,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
    category: string;
  };
}) {
  const { category } = params;
  const { categories, articles } = (await fetchSideMenuData(category)) as Data;

  return (
    <section className="container p-8 mx-auto space-y-6 sm:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
        <div className="col-span-2">{children}</div>
        <aside>
          <ArticleSelect
            categories={categories}
            articles={articles}
            params={params}
          />
        </aside>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const token = 'cd799d9d816f9d60dbd316ad721c084f2b22fc142d613551d13ccaafe82ae1d028db98e4ea4339c919bab98fa0b05886c354e94f59f2d787004d1c29aedcbf144e6c499bf91c952b35c04efa0c357d0d231cc1adf205eecd3997dcc6be8a71382e28ce2b07a46ea38d74b8be6c41cce2bd920305623fd1ca37e2f3142ff1a267';
  const path = `/articles`;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const articleResponse = await fetchAPI(
    path,
    {
      populate: ["category"],
    },
    options
  );

  return articleResponse.data.map(
    (article: {
      attributes: {
        slug: string;
        category: {
          slug: string;
        };
      };
    }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
  );
}
