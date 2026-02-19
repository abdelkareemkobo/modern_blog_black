import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Blog - Insights & Stories",
  description: "A modern dark-themed blog featuring in-depth articles, insights, and stories. Stay updated with our newsletter.",
  keywords: ["blog", "articles", "insights", "newsletter", "modern"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-[#090d1f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
