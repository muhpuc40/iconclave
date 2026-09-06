"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { label: "Competitions", href: "/competitions" },
  { label: "Registration", href: "/registration" },
  { label: "Schedule", href: "/schedule" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-[#E7E8EC] bg-white/92 backdrop-blur-md"
            : "border-transparent bg-white/60 backdrop-blur-sm"
        }`}>
        <nav className="container-wide flex h-16 items-center justify-between md:h-[70px]">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2"
            aria-label="iConclave Home">
            <Image
              src="/brand/iconclave-logo.png"
              alt="iConclave"
              width={3750}
              height={1000}
              priority
              className="h-18 w-auto md:h-11"
            />
          </Link>

          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-[#111111]"
                    : "text-[#5F6368] hover:text-[#111111]"
                }`}>
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#111111] transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          <Link
            href="/registration"
            className="hidden items-center gap-1.5 rounded-[10px] bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1455D9] lg:inline-flex">
            Register
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            className="rounded-lg p-2 text-[#111111] transition-colors hover:bg-[#F7F8FA] lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-white pt-16 lg:hidden">
            <div className="container-wide flex flex-col gap-1 pt-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.045, duration: 0.2 }}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block border-b border-[#E7E8EC] py-3.5 font-display text-2xl font-bold text-[#111111] transition-colors hover:text-[#1455D9]">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/registration"
                onClick={closeMenu}
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-[10px] bg-[#111111] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#1455D9]">
                Register Now
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="container-wide mt-auto pb-8">
              <p className="text-xs text-[#8A8F98]">
                {siteConfig.name} &mdash; {siteConfig.university}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
