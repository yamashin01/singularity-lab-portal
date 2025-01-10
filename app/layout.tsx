import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideNav } from "./components/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "シンラボポータルサイト",
  description: "シンギュラリティ・ラボのポータルサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <SideNav />
          <div className="flex-1 lg:ml-64">{children}</div>
        </div>
      </body>
    </html>
  );
}
