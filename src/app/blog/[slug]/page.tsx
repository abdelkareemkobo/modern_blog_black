import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import BlogDetail from "@/components/BlogDetail";
import NewsletterForm from "@/components/NewsletterForm";

interface PageProps {
  params: Promise<{ slug: string }>;
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
