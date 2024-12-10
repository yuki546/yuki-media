"use client";

import { getAllArticles } from "@/libs/api";
import { Article } from "@/types/types";
import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import { MAX_DISPLAY_ARTICLE } from "@/utils/constants";

type LoadMoreButtonProps = {
  initialCount: number;
  totalCount: number;
};

const LoadMoreButton = ({ initialCount, totalCount }: LoadMoreButtonProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentCount, setCurrentCount] = useState(initialCount);
  const [remainArticleCount, setRemainArticleCount] = useState(
    totalCount - currentCount
  );

  const loadMore = async () => {
    setLoading(true);
    const { articles } = await getAllArticles(
      currentCount,
      MAX_DISPLAY_ARTICLE
    );
    // console.log(currentCount);
    // console.log(articles);
    setArticles((prev) => [...prev, ...articles]);
    setCurrentCount((prev) => prev + articles.length);
    setRemainArticleCount((prev) => prev - currentCount);
    setLoading(false);
  };

  let hasMore = currentCount < totalCount;

  return (
    <div className="mt-4">
      <div className="grid lg:grid-cols-3 md:grid-2 grid-cols-1 gap-y-10 gap-x-10 mt-10">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      {hasMore && (
        <button
          onClick={loadMore}
          className="mt-10 bg-slate-500 hover:bg-slate-700 text-white py-2 px-4 rounded disabled:opacity-50 transition-all duration-150"
        >
          {loading
            ? "読み込み中..."
            : `もっと見る（あと${remainArticleCount}記事）`}
        </button>
      )}
    </div>
  );
};

export default LoadMoreButton;
