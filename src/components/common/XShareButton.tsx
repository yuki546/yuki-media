import Link from "next/link";

interface XShareButtonProps {
  url: string;
  title: string;
  hashtags?: string[];
}

const XShareButton = ({ url, title, hashtags = [] }: XShareButtonProps) => {
  let shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(title)}${
    hashtags.length ? `&hashtags=${hashtags.join(",")}` : ""
  }`;

  return (
    <div className="space-y-3">
      <div>
        <span className="font-semibold md:text-xl">\ SNSでシェアしよう /</span>
      </div>
      <Link
        href={shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span className="pb-[0.1rem]">記事を共有する</span>
      </Link>
    </div>
  );
};

export default XShareButton;
