import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#090d1f] flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-[112px] py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Content */}
            <div>
              <h1 
                className="text-[40px] font-bold tracking-tight text-white"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.2" }}
              >
                About
              </h1>
              <div className="mt-8 space-y-6 text-lg text-[#a3a3a3]" style={{ lineHeight: "1.75" }}>
                <p>
                  Welcome to our blog. We are passionate about sharing insights, stories, and 
                  knowledge that inspire and educate our readers.
                </p>
                <p>
                  Our mission is to create a space where ideas flourish and meaningful 
                  conversations happen. We believe in the power of words to transform 
                  perspectives and drive positive change.
                </p>
              </div>
              
              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="mt-1 text-sm text-[#737373]">Articles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="mt-1 text-sm text-[#737373]">Readers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="mt-1 text-sm text-[#737373]">Years</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Placeholder */}
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-md rounded-2xl border border-[#1a1f35] bg-[#12162e] flex items-center justify-center">
                <span className="text-[#737373]">About Image</span>
              </div>
            </div>
          </div>
        </div>
        <NewsletterForm />
      </main>
      
      <Footer />
    </div>
  );
}
