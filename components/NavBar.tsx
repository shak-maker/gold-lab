"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Үйлчилгээ" },
    { href: "#process", label: "Үйл явц" },
    { href: "#about-us", label: "Бидний тухай" },
    { href: "#contact", label: "Холбоо барих" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-900/95 backdrop-blur-md shadow-lg shadow-zinc-900/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group h-full ml-2 md:ml-4">
            <div className="relative h-[24px] md:h-[30px] w-auto flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/logoo.png"
                alt="YMCT Logo"
                width={200}
                height={60}
                className="object-contain h-full w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-zinc-300 hover:text-[#fa9906] transition-colors font-medium group"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fa9906] group-hover:w-full transition-all duration-300"
                  initial={false}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-[#fa9906] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-3 border-t border-zinc-700 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-zinc-300 hover:text-[#fa9906] transition-colors py-2 font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

