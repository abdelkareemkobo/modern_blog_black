import Link from "next/link";

export default function Footer() {
  const menuLinks = [
    { href: "https://twitter.com", label: "Twitter", external: true },
    { href: "https://linkedin.com", label: "LinkedIn", external: true },
    { href: "mailto:hello@example.com", label: "Email", external: true },
    { href: "/rss", label: "RSS feed", external: false },
    { href: "https://feedly.com", label: "Add to Feedly", external: true },
  ];

  return (
    <footer data-section="Footer" className="w-full bg-[#090d1f]">
      <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-[112px] py-[30px]">
        {/* Container */}
        <div className="flex h-[24px] w-full max-w-[1216px] items-center">
          {/* Copyright */}
          <span className="text-[20px] font-normal text-[#ffffff]" style={{ fontFamily: "Inter, sans-serif", lineHeight: "24px" }}>
            © 2023
          </span>

          {/* Menu - offset 88px from copyright */}
          <nav className="ml-[88px] flex items-center gap-[14px]">
            {menuLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-[20px] font-normal text-[#ffffff] transition-opacity hover:opacity-80"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: "24px" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
