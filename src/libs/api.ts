import { client } from "./client";

// 記事の全取得
export const getAllArticles = async (offset: number = 0, limit: number = 6) => {
  const data = await client.get({
    endpoint: "articles",
    queries: { offset, limit },
  });

  return { data };
};
