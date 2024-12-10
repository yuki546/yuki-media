import Hero from "@/components/layouts/Hero";
import { getAllTags } from "@/libs/api";
import { Tag } from "@/types/types";
import Link from "next/link";

const Tags = async () => {
  const { allTags } = await getAllTags();

  return (
    <div>
      <Hero title="タグ一覧" />
      <div className="mt-24">
        <div className="flex items-center gap-7 md:max-w-5xl mx-auto">
          {allTags.map((tag: Tag) => (
            <div>
              <Link
                key={tag.id}
                href={`/tags/${tag.name}`}
                className="text-blue-500 underline font-semibold text-xl"
              >
                {tag.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
