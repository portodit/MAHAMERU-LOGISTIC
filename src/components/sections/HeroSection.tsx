"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import { ShipmentTrackingSection } from "./ShipmentTrackingSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const navItems = [
  { label: "Beranda",     href: "#beranda" },
  { label: "Profil",     href: "#profil-usaha" },
  { label: "Layanan",    href: "#layanan" },
  { label: "Galeri",     href: "#galeri" },
  { label: "Cabang",     href: "#cabang" },
  { label: "FAQ",        href: "#faq" },
];

export const HeroSection = (): JSX.Element => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [trackingOpen, setTrackingOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  // Scroll reveal refs
  const heroRef = useRef<HTMLDivElement>(null);
  const { ref: h1Ref, isVisible: h1Visible } = useScrollReveal<HTMLHeadingElement>();
  const { ref: pRef, isVisible: pVisible } = useScrollReveal<HTMLParagraphElement>();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: trackingRef, isVisible: trackingVisible } = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("beranda");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (trackingOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [trackingOpen]);

  const handleNav = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section id="beranda" className="relative w-full overflow-hidden bg-white">
      {/* ── Background image + gradient ── */}
      <div className="relative w-full" style={{ minHeight: "clamp(320px, 55vh, 480px)" }}>

        <img
          alt="Mahameru Logistic cargo ship"
          src="/figmaAssets/img-8716-1.png"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(181deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.82)_100%)]" />

        {/* ── Navbar ── */}
        <header
          className={`fixed inset-x-0 top-0 z-50 h-[72px] bg-white transition-shadow duration-300 md:h-[96px] ${
            scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.10)]" : "shadow-none"
          }`}
        >
          <div className="mx-auto flex h-full w-full max-w-[1441px] items-center justify-between px-4 sm:px-6 lg:px-[69px]">
            <a href="#beranda" onClick={(e) => { e.preventDefault(); handleNav("#beranda"); }}>
              <img
                alt="Mahameru"
                src="/figmaAssets/mahameru-transportasi-nusantara-logo-transparent-2.png"
                className="h-8 w-auto object-contain md:h-11"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map(({ label, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNav(href); }}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-red-600"
                        : "text-gray-800 hover:text-red-600"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-transform duration-300 ${
                        isActive ? "bg-red-600 scale-x-100" : "bg-red-600 scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#kontak"
                onClick={(e) => { e.preventDefault(); handleNav("#kontak"); }}
                className="hidden rounded-lg bg-grays px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-grays/90 md:inline-flex"
              >
                Kontak Admin
              </a>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile backdrop */}
          <div
            onClick={() => setMobileOpen(false)}
            className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
              mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          />
          {/* Mobile drawer */}
          <div
            className={`fixed right-0 top-0 z-50 flex h-full w-[80%] max-w-[320px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <img
                alt="Mahameru"
                src="/figmaAssets/mahameru-transportasi-nusantara-logo-transparent-2.png"
                className="h-8 w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                aria-label="Tutup menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-4 py-6">
              {navItems.map(({ label, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNav(href); }}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-[16px] font-semibold transition-colors ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "text-gray-800 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-red-600" />
                    )}
                    {label}
                  </a>
                );
              })}
            </nav>
            <div className="mt-auto border-t border-gray-100 px-6 py-6">
              <a
                href="#kontak"
                onClick={(e) => { e.preventDefault(); handleNav("#kontak"); }}
                className="flex w-full items-center justify-center rounded-xl bg-[#dc2626] px-5 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-red-700"
              >
                Kontak Admin
              </a>
            </div>
          </div>
        </header>

        {/* ── Hero content (grid) ── */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1441px] items-center px-4 pt-[72px] pb-[60px] sm:px-6 sm:pt-[72px] sm:pb-[80px] md:px-6 lg:px-16 xl:px-20 md:pt-[96px] md:pb-[96px]"
          style={{ minHeight: "clamp(320px, 55vh, 480px)" }}>

          <div className="grid w-full items-center gap-6 md:grid-cols-[1fr_minmax(300px,380px)] md:gap-8 lg:grid-cols-[1fr_minmax(340px,420px)] lg:gap-12 xl:grid-cols-[1fr_minmax(360px,440px)]">

            {/* Left: headline + description + CTAs */}
            <div className="flex flex-col justify-center">
              <h1 ref={h1Ref} className={`text-[clamp(1.6rem,4.5vw,3.4rem)] font-extrabold leading-[1.15] tracking-tight text-white [text-shadow:0px_3px_8px_rgba(0,0,0,0.6)] ${h1Visible ? "animate-fade-in-left" : "opacity-0"}`}>
                Solusi Logistik Laut<br />
                Murah, Cepat, Terpercaya
              </h1>

              <p ref={pRef} className={`mt-4 text-[clamp(0.85rem,1.5vw,1.1rem)] font-normal leading-relaxed text-white/90 ${pVisible ? "animate-fade-in-left" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
                <span className="font-semibold">Sejak </span>
                <span className="font-extrabold">2020</span>
                <span className="font-semibold">, Mahameru Logistic melayani pengiriman cargo container ke Banjarmasin dan Manado melalui layanan </span>
                <span className="font-extrabold">FCL</span>
                <span className="font-semibold">, </span>
                <span className="font-extrabold">LCL</span>
                <span className="font-semibold">, dan </span>
                <span className="font-extrabold">Project Cargo</span>
                <span className="font-semibold"> untuk retail, UMKM, supplier, hingga industri.</span>
              </p>

              <div ref={ctaRef} className={`mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 ${ctaVisible ? "animate-fade-in-left" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
                <a
                  href="#layanan"
                  onClick={(e) => { e.preventDefault(); handleNav("#layanan"); }}
                  className="flex h-[50px] w-full items-center justify-center rounded-lg bg-grays px-6 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-grays/90 sm:h-[56px] sm:w-auto sm:px-8"
                >
                  Layanan Kami
                </a>
                <button
                  type="button"
                  onClick={() => setTrackingOpen(true)}
                  className="flex h-[50px] w-full items-center justify-center rounded-lg border-2 border-white bg-white px-6 text-[15px] font-semibold text-secondary-600 transition-colors hover:bg-white/90 sm:h-[56px] sm:w-auto sm:px-8"
                >
                  Lacak Pengiriman
                </button>
              </div>
            </div>

            {/* Right: tracking card — only on md+ */}
            <div ref={trackingRef} className={`hidden md:block ${trackingVisible ? "animate-fade-in-right" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
              <ShipmentTrackingSection />
            </div>

          </div>
        </div>
      </div>

      {/* Mobile: floating button untuk tracking */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button
          type="button"
          onClick={() => setTrackingOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-grays shadow-lg transition-transform hover:scale-110 active:scale-95"
          aria-label="Lacak Pengiriman"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
      </div>

      {/* Mobile: tracking popup */}
      {trackingOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 md:hidden"
          onClick={() => setTrackingOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-t-3xl bg-white p-4 pb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">Cek / Ajukan Pengiriman</h3>
              <button
                type="button"
                onClick={() => setTrackingOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ShipmentTrackingSection />
          </div>
        </div>
      )}
    </section>
  );
};
