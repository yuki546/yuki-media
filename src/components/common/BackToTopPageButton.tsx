import Link from "next/link";

const BackToTopPageButton = () => {
  return (
    <Link
      href={"/"}
      className="inline-flex items-center px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600"
    >
      Topページへ戻る
    </Link>
  );
};

export default BackToTopPageButton;
