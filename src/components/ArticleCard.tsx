"use client";

import { Article } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TransitionLink } from "./common/TransitionLink";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
      <div className="space-y-2">
        <div className="">
          <TransitionLink href={`/articles/${article.id}`}>
            <Image
              src={article.thumbnails.url}
              alt="thumbnail"
              width={article.thumbnails.width}
              height={article.thumbnails.height}
              className="rounded-md hover:ring-blue-600 hover:ring-2 transition-all duration-150"
              priority={true}
            />
          </TransitionLink>
        </div>
        <TransitionLink
          href={`/articles/${article.id}`}
          className="md:text-xl leading-10 text-left inline-block hover:text-blue-600 transition-all duration-150"
        >
          {article.title}
        </TransitionLink>
        <div className="flex gap-3 items-center text-gray-600">
          <span>
            {new Date(article.createdAt).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </span>
          <span>{article.author}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
