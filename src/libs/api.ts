import { client } from "./client";

// 記事の全取得
export const getAllArticles = async (offset: number = 0, limit: number = 6) => {
  const data = await client.get({
    endpoint: "articles",
    queries: { offset, limit },
  });

  return {
    articles: data.contents,
    totalCount: data.totalCount,
  };
};

// 詳細記事の取得
export const getDetailArticle = async (contentId: string) => {
  const data = await client.getListDetail({
    endpoint: "articles",
    contentId: contentId,
  });

  return {
    article: data,
    totalCount: data.totalCount,
  };
};

// タグに難する記事一覧の取得
export const getArticlesByTagId = async (tagId: string) => {
  const data = await client.get({
    endpoint: "articles",
    queries: { filters: `tags[contains]${tagId}` },
  });

  return {
    articles: data.contents,
    totalCount: data.totalCount,
  };
};

// タグ情報を全取得
export const getAllTags = async () => {
  const data = await client.get({
    endpoint: "tags",
  });

  return {
    allTags: data.contents,
  };
};
