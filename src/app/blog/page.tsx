import HeaderSection from "@/components/HeaderSection";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#090d1f] flex flex-col">
      <HeaderSection />
      
      <main className="flex-1">
        <BlogSection />
      </main>
      
      <Footer />
    </div>
  );
}
