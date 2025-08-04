import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kaitoのポートフォリオ",
  description:
    "kaito (@kaito4681) の自己紹介とポートフォリオサイト。JavaScript、TypeScript、Chrome拡張機能開発などの作品を紹介しています。",
  authors: [{ name: "kaito", url: "https://github.com/kaito4681" }],
  keywords: [
    "portfolio",
    "developer",
    "javascript",
    "typescript",
    "chrome extension",
    "web development",
  ],
  openGraph: {
    title: "kaitoのポートフォリオ",
    description: "kaito (@kaito4681) の自己紹介とポートフォリオサイト",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
