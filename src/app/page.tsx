"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import CompanyProfileSection from "./sections/CompanyProfileSection";
import CompanyShowcaseSection from "./sections/CompanyShowcaseSection";
import DoorToDoorServiceSection from "./sections/DoorToDoorServiceSection";
import HeroBannerSection from "./sections/HeroBannerSection";
import LogisticsFooterSection from "./sections/LogisticsFooterSection";
import PackingBenefitsSection from "./sections/PackingBenefitsSection";
import PortToDoorServiceSection from "./sections/PortToDoorServiceSection";
import PortToPortServiceSection from "./sections/PortToPortServiceSection";
import ShippingServicesSection from "./sections/ShippingServicesSection";

const packingCards = [
  {
    title: "Safe Packing",
    description:
      "Wherever your cargo is going, we can arrange the shipment for you",
    imageSrc: "/figmaAssets/icon.png",
    imageAlt: "Icon",
    imageClassName: "w-[78.19px] h-[59px]",
  },
  {
    title: "Safe Packing",
    description:
      "Wherever your cargo is going, we can arrange the shipment for you",
    imageSrc: "/figmaAssets/money-loss-1.svg",
    imageAlt: "Money loss",
    imageClassName: "w-[74.84px] h-[74.84px]",
  },
  {
    title: "Safe Packing",
    description:
      "Wherever your cargo is going, we can arrange the shipment for you",
    imageSrc: "/figmaAssets/icon-2.png",
    imageAlt: "Icon",
    imageClassName: "w-[78.19px] h-[59px]",
  },
  {
    title: "Safe Packing",
    description:
      "Wherever your cargo is going, we can arrange the shipment for you",
    imageSrc: "/figmaAssets/icon-1.png",
    imageAlt: "Icon",
    imageClassName: "w-[78.19px] h-[59px]",
  },
];

export default function HomePage() {
  const companyReveal = useScrollReveal(0.1);
  const imageReveal = useScrollReveal(0.1);
  const servicesHeaderReveal = useScrollReveal(0.1);
  const serviceCardsReveal = useScrollReveal(0.1);
  const benefitsReveal = useScrollReveal(0.1);
  const footerReveal = useScrollReveal(0.05);

  return (
    <main className="w-full bg-[#ffffff]">
      <HeroBannerSection />

      <section className="relative w-full bg-[#f3f3f3]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 py-14 sm:px-6 md:px-10 lg:px-[33px] lg:py-20">
          <div
            ref={companyReveal.ref}
            className="transition-all duration-700 ease-out"
            style={{
              opacity: companyReveal.visible ? 1 : 0,
              transform: companyReveal.visible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <div className="relative flex flex-col gap-4 lg:min-h-[362px]">
              <div className="flex w-full max-w-[900px] flex-col gap-4">
                <CompanyShowcaseSection />
                <CompanyProfileSection />
              </div>
              <div
                ref={imageReveal.ref}
                style={{
                  opacity: imageReveal.visible ? 1 : 0,
                  transform: imageReveal.visible ? "scale(1)" : "scale(0.97)",
                  transition: "all 700ms ease-out"
                }}
              >
                <img
                  className="w-full rounded-[22px] object-cover"
                  alt="Rectangle"
                  src="/figmaAssets/rectangle-3158.png"
                />
              </div>
              <img
                className="pointer-events-none hidden lg:absolute lg:right-0 lg:top-[-60px] lg:z-10 lg:block lg:h-[420px] lg:w-[380px]"
                alt="Group"
                src="/figmaAssets/group-1321314671.png"
              />
            </div>
          </div>

          <div
            ref={servicesHeaderReveal.ref}
            className="mt-24 transition-all duration-700 ease-out lg:mt-32"
            style={{
              opacity: servicesHeaderReveal.visible ? 1 : 0,
              transform: servicesHeaderReveal.visible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <ShippingServicesSection />
          </div>

          <div
            ref={serviceCardsReveal.ref}
            className="mt-8 transition-all duration-700 ease-out"
            style={{
              opacity: serviceCardsReveal.visible ? 1 : 0,
              transform: serviceCardsReveal.visible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <section
              aria-label="Shipping service options"
              className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-3"
            >
              <PortToPortServiceSection />
              <DoorToDoorServiceSection />
              <PortToDoorServiceSection />
            </section>
          </div>

          <div
            ref={benefitsReveal.ref}
            className="mt-24 transition-all duration-700 ease-out lg:mt-32"
            style={{
              opacity: benefitsReveal.visible ? 1 : 0,
              transform: benefitsReveal.visible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <section className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
              <PackingBenefitsSection />
              <div
                aria-label="Packing benefit cards"
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {packingCards.map((card, index) => (
                  <div
                    key={`${card.title}-${index}`}
                    className="transition-all duration-700 ease-out"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      opacity: benefitsReveal.visible ? 1 : 0,
                      transform: benefitsReveal.visible ? "translateY(0)" : "translateY(20px)",
                    }}
                  >
                    <Card className="rounded-xl border-[0.6px] border-solid border-[#cacaca] bg-[#ffffff] shadow-shadow">
                      <CardContent className="flex items-center gap-[15px] p-4">
                        <img
                          className={`shrink-0 ${card.imageClassName}`}
                          alt={card.imageAlt}
                          src={card.imageSrc}
                        />
                        <div className="min-w-0">
                          <h3 className="text-xl font-bold leading-tight tracking-tight text-[#0f1b24]">
                            {card.title}
                          </h3>
                          <p className="mt-1.5 text-sm font-normal leading-6 text-[#757575]">
                            {card.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <div
        ref={footerReveal.ref}
        className="transition-all duration-700 ease-out"
        style={{
          opacity: footerReveal.visible ? 1 : 0,
          transform: footerReveal.visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <LogisticsFooterSection />
      </div>
    </main>
  );
}