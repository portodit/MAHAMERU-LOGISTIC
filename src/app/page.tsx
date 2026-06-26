"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { BusinessProfileSection } from "@/components/sections/BusinessProfileSection";
import { CompanyBannerSection } from "@/components/sections/CompanyBannerSection";
import { KeunggulanSection } from "@/components/sections/KeunggulanSection";
import { GalleryFilterSection } from "@/components/sections/GalleryFilterSection";
import { PhotoGallerySection } from "@/components/sections/PhotoGallerySection";
import { BranchLocatorSection } from "@/components/sections/BranchLocatorSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main className="w-full bg-[#ffffff] pt-[72px] md:pt-[96px]">

      {/* Hero — includes navbar + tracking card via internal grid */}
      <HeroSection />

      <section id="profil-usaha" className="scroll-mt-[96px] py-16 md:py-24">
        <BusinessProfileSection />
      </section>

      <section id="layanan" className="scroll-mt-[96px] px-4 py-16 sm:px-6 md:px-8 lg:px-[78px] md:py-24">
        <CompanyBannerSection />
      </section>

      <section id="keunggulan" className="scroll-mt-[96px]">
        <KeunggulanSection />
      </section>

      <section id="galeri" className="scroll-mt-[96px] mt-8 md:mt-14 md:py-24">
        <GalleryFilterSection />
      </section>

      {/* Kantor Cabang Section - Heading + Map digabung */}
      <section id="cabang" className="scroll-mt-[96px] px-4 py-10 sm:px-6 md:px-8 lg:px-[92px] md:py-16">
        <PhotoGallerySection />
        <div className="mt-6 md:mt-8">
          <BranchLocatorSection />
        </div>
      </section>

      <section id="faq" className="px-4 py-16 sm:px-6 md:px-8 lg:px-[92px] md:py-24">
        <div className="mb-12 text-center">
          <p className="text-xl font-bold leading-normal text-[#aa4a4b] md:text-2xl">FAQ</p>
          <h2
            className="mx-auto font-bold leading-[1.2] text-black-700 text-center"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.5rem)" }}
          >
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>
        <FaqSection />
      </section>

      <footer id="kontak" className="bg-[#f9f9f9]">
        <FooterSection />
      </footer>

    </main>
  );
}
