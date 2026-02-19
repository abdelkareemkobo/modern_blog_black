export default function HeroTitle() {
  return (
    <div 
      data-section="Hero Title" 
      className="w-full border-b border-[#1a1f35] bg-[#090d1f]"
    >
      <div className="mx-auto max-w-[1440px] px-[112px]">
        <h1 
          className="py-8 text-[#ffffff] font-bold uppercase tracking-tight"
          style={{ 
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(48px, 12vw, 120px)",
            fontWeight: 700,
            lineHeight: "1.1"
          }}
        >
          THE BLOG
        </h1>
      </div>
    </div>
  );
}
