import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#090d1f] flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-[112px] py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 
              className="text-[40px] font-bold tracking-tight text-white"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.2" }}
            >
              Projects
            </h1>
            <p 
              className="mt-6 text-[20px] text-[#a3a3a3]"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.75" }}
            >
              Explore our portfolio of work. We build innovative solutions that push the boundaries of web technology.
            </p>
          </div>
          
          {/* Projects Grid Placeholder */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="rounded-xl border border-[#1a1f35] bg-[#12162e] p-6 transition-all hover:border-[#2d3352]"
              >
                <div className="aspect-[16/10] rounded-lg bg-[#090d1f] flex items-center justify-center">
                  <span className="text-[#737373]">Project {i}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Project Title {i}</h3>
                <p className="mt-2 text-sm text-[#a3a3a3]">Coming soon</p>
              </div>
            ))}
          </div>
        </div>
        <NewsletterForm />
      </main>
      
      <Footer />
    </div>
  );
}
