import Header from "./Header";
import HeroTitle from "./HeroTitle";

export default function HeaderSection() {
  return (
    <section data-section="Header Section" className="w-full bg-[var(--color-bg-primary)]">
      <Header />
      <HeroTitle />
    </section>
  );
}
