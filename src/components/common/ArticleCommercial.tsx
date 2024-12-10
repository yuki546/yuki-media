import { getDetailArticle } from "@/libs/api";
import ArticleCard from "../ArticleCard";
import { COMMERCIAL_ARTICLE_ID } from "@/utils/constants";

const ArticleCommercial = async () => {
  const { article } = await getDetailArticle(COMMERCIAL_ARTICLE_ID);

  return (
    <div>
      <div className="text-left py-2">
        <h3 className="md:text-2xl">Yuki_Camp運営中です🚀</h3>
      </div>

      <div className="py-2">
        <ArticleCard article={article} />
      </div>
    </div>
  );
};

export default ArticleCommercial;
