import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuki Media",
  description: "IT情報を発信する記事メディアです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
        <div className="flex flex-col h-screen bg-slate-100">
          <Header />
          <main className="flex-grow bg-slate-100">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
