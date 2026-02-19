import Header from "@/components/Header";
import BlogDetail from "@/components/BlogDetail";
import NewsletterForm from "@/components/NewsletterForm";
import FooterSection from "@/components/FooterSection";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

async function getLatestPostSlug(): Promise<string | null> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("posts")
    .select("slug")
    .eq("published", true)
    .order("published_at", { ascending: false })
    .limit(1)
    .single();

  if (error || !data) {
    return null;
  }

  return data.slug;
}

export default async function Home() {
  const latestSlug = await getLatestPostSlug();

  if (!latestSlug) {
    return (
      <div className="min-h-screen bg-[#090d1f] flex flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-8 lg:px-[112px]">
            <h1 className="text-3xl font-bold text-white">Welcome to Modern Blog</h1>
            <p className="mt-4 text-[#a3a3a3]">
              No posts available yet. Check back soon for new content!
            </p>
          </div>
          <NewsletterForm />
        </main>
        
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090d1f] flex flex-col">
      <Header />
      
      <main className="flex-1">
        <BlogDetail slug={latestSlug} />
        <NewsletterForm />
      </main>
      
      <FooterSection />
    </div>
  );
}
