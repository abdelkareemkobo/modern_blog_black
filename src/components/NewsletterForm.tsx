"use client";

import { useState } from "react";
import { subscribeNewsletter } from "@/app/actions/newsletter";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    
    const result = await subscribeNewsletter(email);
    
    setStatus(result.success ? "success" : "error");
    setMessage(result.message);
    
    if (result.success) {
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="border-t border-[#1a1f35] bg-[#090d1f]">
      <div className="mx-auto max-w-6xl px-[112px] py-16 sm:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#12162e] to-[#090d1f] px-6 py-12 sm:px-12 sm:py-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#6366f1] blur-3xl" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[#6366f1] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-lg text-[#a3a3a3]">
              Get the latest articles, insights, and updates delivered directly to your inbox. No spam, unsubscribe anytime.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 sm:flex sm:gap-4">
              <div className="flex-1">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="block w-full rounded-lg border border-[#1a1f35] bg-[#090d1f] px-4 py-3 text-white placeholder-[#737373] transition-all focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20"
                  disabled={status === "loading"}
                />
              </div>
              <div className="mt-4 sm:mt-0">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#6366f1] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#4f46e5] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="mr-2 h-4 w-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
            </form>

            {/* Status Messages */}
            {status === "success" && (
              <div className="mt-4 rounded-lg bg-green-500/10 px-4 py-3 text-sm text-green-400">
                {message}
              </div>
            )}
            {status === "error" && (
              <div className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {message}
              </div>
            )}

            <p className="mt-6 text-xs text-[#737373]">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
