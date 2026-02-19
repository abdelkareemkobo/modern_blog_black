import Header from "./Header";
import HeroTitle from "./HeroTitle";

export default function HeaderSection() {
  return (
    <section data-section="Header Section" className="w-full bg-[#090d1f]">
      <Header />
      <HeroTitle />
    </section>
  );
}
