"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/newsletter", label: "Newsletter" },
  ];

  return (
    <header data-section="Header" className="w-full bg-[var(--color-bg-primary)]">
      <div className="mx-auto flex h-[120px] max-w-[1440px] items-center justify-between px-[112px] py-[30px]">
        {/* Navbar Container */}
        <div className="flex h-[60px] w-full items-center justify-between">
          {/* Logo / Your Name */}
          <Link 
            href="/" 
            className="text-[20px] font-semibold text-white"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: "24px" }}
          >
            Your Name
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-[14px] md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-[8px] py-[8px] text-[20px] font-normal text-white transition-colors hover:opacity-80"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: "24px" }}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Toggle Mode Button */}
            <div 
              className="ml-[14px] flex items-center gap-[16px] rounded-[29px] bg-white px-[16px] py-[8px]"
            >
              <button
                onClick={() => setIsDarkMode(false)}
                className={`flex h-[24px] w-[24px] items-center justify-center rounded-[20px] transition-colors ${
                  !isDarkMode ? "bg-[#090d1f]" : ""
                }`}
                aria-label="Light mode"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={!isDarkMode ? "text-white" : "text-[#090d1f]"}
                >
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button
                onClick={() => setIsDarkMode(true)}
                className={`flex h-[24px] w-[24px] items-center justify-center rounded-[20px] transition-colors ${
                  isDarkMode ? "bg-[#090d1f]" : ""
                }`}
                aria-label="Dark mode"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={isDarkMode ? "text-white" : "text-[#090d1f]"}
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#1a1f35] bg-[#090d1f] px-[112px] py-4 md:hidden">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-[8px] py-[8px] text-[20px] text-white"
                style={{ fontFamily: "Inter, sans-serif", lineHeight: "24px" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-[#1a1f35]">
              <div className="flex items-center gap-[16px]">
                <button
                  onClick={() => setIsDarkMode(false)}
                  className="flex items-center gap-2 text-white"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Light</span>
                </button>
                <button
                  onClick={() => setIsDarkMode(true)}
                  className="flex items-center gap-2 text-white"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Dark</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
