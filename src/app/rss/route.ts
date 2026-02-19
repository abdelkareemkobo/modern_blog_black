import { NextResponse } from "next/server";

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Modern Blog Black</title>
    <link>https://example.com</link>
    <description>A modern dark-themed blog featuring in-depth articles, insights, and stories.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://example.com/rss" rel="self" type="application/rss+xml"/>
    <item>
      <title>The Future of Web Development: Trends to Watch in 2026</title>
      <link>https://example.com/blog/1</link>
      <guid>https://example.com/blog/1</guid>
      <pubDate>Mon, 15 Feb 2026 00:00:00 GMT</pubDate>
      <category>Technology</category>
      <description>Explore the cutting-edge technologies and methodologies shaping the next generation of web experiences.</description>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
