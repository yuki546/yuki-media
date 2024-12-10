import ArticleCardList from "@/components/ArticleCardList";
import Hero from "@/components/layouts/Hero";
import LoadMoreButton from "@/components/LoadMoreButton";
import { getAllArticles } from "@/libs/api";
import { MAX_DISPLAY_ARTICLE } from "@/utils/constants";

export default async function Home() {
  const { articles, totalCount } = await getAllArticles(0, MAX_DISPLAY_ARTICLE);

  return (
    <>
      <div className="mx-auto px-2 py-12">
        <Hero title="Yuki-Media" />
        <div className="mt-24">
          <div className="mx-auto text-center py-4">
            <h2 className="md:text-4xl">記事一覧</h2>
            <ArticleCardList articles={articles} />
            <LoadMoreButton
              initialCount={articles.length}
              totalCount={totalCount}
            />
          </div>
        </div>
      </div>
    </>
  );
}
