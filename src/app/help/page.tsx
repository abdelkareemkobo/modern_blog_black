import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#090d1f] flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[1440px] px-[112px] py-16 lg:py-24">
          <h1 
            className="text-[40px] font-bold tracking-tight text-white"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.2" }}
          >
            Help Center
          </h1>
          <p 
            className="mt-6 text-[20px] text-[#a3a3a3]"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.75" }}
          >
            Find answers to your questions and get support.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
