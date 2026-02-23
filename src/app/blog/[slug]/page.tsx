import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import BlogDetail from "@/components/BlogDetail";
import NewsletterForm from "@/components/NewsletterForm";
import { createStaticClient } from "@/lib/supabase/static";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const supabase = createStaticClient();

  const { data: posts, error } = await supabase
    .from("posts")
    .select("slug")
    .eq("published", true);

  if (error || !posts) {
    return [];
  }

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-[#090d1f] flex flex-col">
      <HeaderSection />
      
      <main className="flex-1">
        <BlogDetail slug={slug} />
        <NewsletterForm />
      </main>
      
      <FooterSection />
    </div>
  );
}
