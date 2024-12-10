import { getDetailArticle } from "@/libs/api";
import Image from "next/image";
import parse from "html-react-parser";
import React from "react";
import XShareButton from "@/components/common/XShareButton";
import ArticleCommercial from "@/components/common/ArticleCommercial";
import BackToTopPageButton from "@/components/common/BackToTopPageButton";
import Link from "next/link";

const DetailArticle = async ({ params }: { params: { contentId: string } }) => {
  const contentId = params.contentId;
  const { article } = await getDetailArticle(contentId);

  const { title, thumbnails, createdAt, content, author, tags } = article;

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${contentId}`;

  return (
    <div className="mx-auto max-w-[760px] my-4">
      <Image src={thumbnails.url} alt={title} width={760} height={420} />
      <div className="mx-auto text-center">
        <h2 className="font-semibold my-4 md:text-4xl">{title}</h2>
        <div className="my-2 text-gray-500">
          <span>
            {new Date(createdAt).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </span>
          <span>著者：{author}</span>
        </div>
        <div className="my-4 flex justify-center gap-4">
          {tags.map((tag: { name: string; id: string }) => (
            <Link
              href={`/tags/${tag.name}`}
              key={tag.id}
              className="border px-2 pb-1 rounded-md border-slate-500"
            >
              <span className="text-sm">{tag.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="prose prose-md prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-headings:underline prose-headings:underline-offset-4 max-w-none">
        {parse(content)}
      </div>

      <div className="my-12 text-center">
        <XShareButton url={shareUrl} title={title} />
      </div>

      <div className="my-12">
        <ArticleCommercial />
      </div>

      <div className="text-center mb-12">
        <BackToTopPageButton />
      </div>
    </div>
  );
};

export default DetailArticle;
