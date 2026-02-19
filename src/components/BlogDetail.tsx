import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  author_name: string;
  author_email: string;
  published_at: string;
  created_at: string;
  categories: { name: string; slug: string }[] | null;
}

function formatDate(dateString: string | null): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, "");
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

interface BlogDetailProps {
  slug: string;
}

async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("posts")
    .select(`
      id,
      title,
      slug,
      content,
      excerpt,
      featured_image,
      author_name,
      author_email,
      published_at,
      created_at,
      categories(name, slug)
    `)
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !data) {
    return null;
  }

  return data as Post;
}

export default async function BlogDetail({ slug }: BlogDetailProps) {
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.content);

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16 lg:px-[112px]">
      {/* Back Link */}
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-[#818cf8] transition-colors hover:text-[#6366f1]"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </Link>

      {/* Category & Meta */}
      <div className="flex flex-wrap items-center gap-4 text-sm">
        {post.categories && post.categories.length > 0 && (
          <Link
            href={`/blog?category=${post.categories[0].slug}`}
            className="rounded-full bg-[#6366f1]/10 px-3 py-1 font-medium text-[#818cf8] transition-colors hover:bg-[#6366f1]/20"
          >
            {post.categories[0].name}
          </Link>
        )}
        <span className="text-[#737373]">{formatDate(post.published_at)}</span>
        <span className="text-[#737373]">•</span>
        <span className="text-[#737373]">{readingTime}</span>
      </div>

      {/* Title */}
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="mt-6 text-xl leading-relaxed text-[#a3a3a3]">{post.excerpt}</p>

      {/* Author */}
      <div className="mt-8 flex items-center gap-4 border-y border-[#1a1f35] py-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6366f1] text-lg font-bold text-white">
          {post.author_name.charAt(0).toUpperCase()}
        </div>
        <div>
          <div className="font-semibold text-white">{post.author_name}</div>
          <div className="text-sm text-[#737373]">
            {post.author_email || "Author"}
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {post.featured_image && (
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#1a1f35] bg-[#12162e]">
          <img
            src={post.featured_image}
            alt={post.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div
        className="prose-dark mt-12 max-w-none text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      <div className="mt-12 flex flex-wrap gap-2">
        {post.categories?.map((category) => (
          <span
            key={category.slug}
            className="rounded-full border border-[#1a1f35] px-4 py-1.5 text-sm text-[#a3a3a3] transition-colors hover:border-[#2d3352] hover:text-white"
          >
            #{category.name}
          </span>
        ))}
      </div>

      {/* Share */}
      <div className="mt-12 border-t border-[#1a1f35] pt-8">
        <h3 className="text-sm font-semibold text-white">Share this article</h3>
        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              post.title
            )}&url=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.href : ""
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-[#1a1f35] px-4 py-2 text-sm text-[#a3a3a3] transition-colors hover:border-[#2d3352] hover:text-white"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.href : ""
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-[#1a1f35] px-4 py-2 text-sm text-[#a3a3a3] transition-colors hover:border-[#2d3352] hover:text-white"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="flex items-center gap-2 rounded-lg border border-[#1a1f35] px-4 py-2 text-sm text-[#a3a3a3] transition-colors hover:border-[#2d3352] hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Copy Link
          </button>
        </div>
      </div>
    </article>
  );
}
