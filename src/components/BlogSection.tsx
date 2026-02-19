import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import NewsletterForm from "./NewsletterForm";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
  author_name: string;
  categories: { name: string }[] | null;
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

async function getRecentPosts(): Promise<Post[]> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("posts")
    .select(`
      id,
      title,
      slug,
      excerpt,
      featured_image,
      published_at,
      author_name,
      categories(name)
    `)
    .eq("published", true)
    .order("published_at", { ascending: false })
    .limit(12);

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }

  return data as Post[];
}

async function getFeaturedPost(): Promise<Post | null> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("posts")
    .select(`
      id,
      title,
      slug,
      excerpt,
      featured_image,
      published_at,
      author_name,
      categories(name)
    `)
    .eq("published", true)
    .order("published_at", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error("Error fetching featured post:", error);
    return null;
  }

  return data as Post;
}

export default async function BlogSection() {
  const [recentPosts, featuredPost] = await Promise.all([
    getRecentPosts(),
    getFeaturedPost(),
  ]);

  return (
    <section data-section="Blog Section" className="w-full py-[30px]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[112px]">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Column - Recent Posts */}
          <div className="w-full shrink-0 lg:w-[342px]">
            <h2 className="mb-8 text-2xl font-semibold text-white">
              Recent blog posts
            </h2>
            
            {recentPosts.length === 0 ? (
              <div className="rounded-xl border border-[#1a1f35] bg-[#12162e] p-6 text-center">
                <p className="text-[#a3a3a3]">No posts found.</p>
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                {recentPosts.map((post) => (
                  <article key={post.id} className="group">
                    <Link href={`/blog/${post.slug}`} className="block">
                      {/* Image */}
                      <div className="relative mb-6 aspect-[342/204] overflow-hidden rounded-xl bg-[#12162e]">
                        <img
                          src={post.featured_image || "/figma/placeholder.png"}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-3">
                        <span className="text-sm font-medium text-[#818cf8]">
                          {formatDate(post.published_at)}
                        </span>
                        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-[#6366f1]">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#a3a3a3] line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Featured Post */}
          <div className="flex-1">
            {featuredPost ? (
              <article className="lg:sticky lg:top-8">
                {/* Date */}
                <span className="text-sm font-semibold text-[#818cf8]">
                  {formatDate(featuredPost.published_at)}
                </span>
                
                {/* Title */}
                <Link href={`/blog/${featuredPost.slug}`}>
                  <h1 className="mt-4 text-3xl font-bold leading-tight text-white transition-colors hover:text-[#6366f1] sm:text-4xl">
                    {featuredPost.title}
                  </h1>
                </Link>
                
                {/* Featured Image */}
                <div className="relative mt-8 aspect-[778/426] overflow-hidden rounded-xl bg-[#12162e]">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <img
                      src={featuredPost.featured_image || "/figma/placeholder.png"}
                      alt={featuredPost.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                </div>
                
                {/* Content */}
                <div className="mt-8 space-y-6 text-base leading-relaxed text-[#a3a3a3]">
                  <p>{featuredPost.excerpt}</p>
                </div>
                
                {/* Categories */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {featuredPost.categories?.map((category) => (
                    <span
                      key={category.name}
                      className="rounded-full bg-[#1a1f35] px-3 py-1 text-sm font-medium text-[#818cf8]"
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
                
                {/* Read More Link */}
                <div className="mt-6">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-[#818cf8] transition-colors hover:text-[#6366f1]"
                  >
                    <span>Read full article</span>
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ) : (
              <div className="rounded-xl border border-[#1a1f35] bg-[#12162e] p-12 text-center">
                <p className="text-[#a3a3a3]">No featured post available.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
