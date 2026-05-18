import { Card, CardContent } from "@/components/ui/card";

const footerLinkGroups = [
  {
    title: "Other Links",
    links: ["About Us", "Contact Us", "Team", "Services", "Logistic"],
  },
  {
    title: "The Platform",
    links: ["Our Team", "Our News", "Transport", "Frieght", "Logistic"],
  },
];

const contactItems = [
  {
    alt: "Phone",
    src: "/figmaAssets/vector.svg",
    text: "+088 65952 23366",
    iconClassName: "w-[12px] h-3",
    textClassName: "text-[#757575] text-xs leading-[18px] font-['Poppins',Helvetica]",
  },
  {
    alt: "Mail",
    src: "/figmaAssets/mail.png",
    text: "Info.rrdevs@gmail.com",
    iconClassName: "w-[13.12px] h-[10.88px]",
    textClassName: "text-[#757575] text-xs leading-[18px] font-['Poppins',Helvetica]",
  },
  {
    alt: "Map pin",
    src: "/figmaAssets/map-pin-1.png",
    text: "Jl. Yos Sudarso No.7, RT.33, Telaga Biru, Kec. Banjarmasin Bar., Kota Banjarmasin, Kalimantan Selatan 70117",
    iconClassName: "w-[13.12px] h-[15.79px]",
    textClassName: "text-[#757575] text-xs leading-[18px] font-['Poppins',Helvetica]",
  },
];

const bottomLinks = ["Support", "Services", "Terms & Condition"];

export default function LogisticsFooterSection() {
  return (
    <footer className="relative w-full bg-[#f9f9f9]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 pb-8 pt-[42px] sm:px-8 lg:px-[33px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(240px,264px)_1fr_1fr_minmax(200px,1fr)] md:items-start md:justify-between">
          <section className="flex max-w-[264px] flex-col">
            <img
              className="h-[57px] w-[220px]"
              alt="Mahameru"
              src="/figmaAssets/mahameru-transportasi-nusantara-logo-transparent-3.png"
            />
            <p className="mt-[14px] max-w-[262px] opacity-90 text-xs font-normal leading-[1.7] text-[#757575]">
              PT. Mahameru Transportasi Nusantara adalah perusahaan logistik
              yang berdiri sejak 2020 dan berpengalaman melayani pengiriman
              cargo container dari Surabaya ke Banjarmasin dan Manado.
            </p>
          </section>
          {footerLinkGroups.map((group) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className="flex flex-col gap-[14.2px]"
            >
              <h2 className="text-base font-bold leading-[normal] text-[#0f1b24]">
                {group.title}
              </h2>
              <ul className="text-xs font-normal leading-[27px] text-[#757575]">
                {group.links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="h-auto p-0 text-left transition-colors hover:text-[#0f1b24]"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <Card className="border-0 bg-transparent p-0 shadow-none">
            <CardContent className="p-0">
              <address className="not-italic">
                <h2 className="text-base font-bold leading-[normal] text-[#0f1b24]">
                  Contact Us
                </h2>
                <ul className="mt-[18.8px] flex flex-col gap-[9px]">
                  {contactItems.map((item, index) => (
                    <li
                      key={`${item.alt}-${index}`}
                      className="flex items-start gap-[6.9px]"
                    >
                      <img
                        className={`ml-[-0.6px] mt-[3.9px] shrink-0 ${item.iconClassName}`}
                        alt={item.alt}
                        src={item.src}
                      />
                      <span className={item.textClassName}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </address>
            </CardContent>
          </Card>
        </div>
        <div className="mt-[45px] w-full">
          <div className="h-px w-full bg-[#0f1b241a]" />
          <div className="mt-[22px] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10.5px] font-normal leading-relaxed text-transparent">
              <span className="text-[#757575]">Copyright 2026 © </span>
              <span className="text-[#0f1b24]">
                PT. MAHAMERU TRANSPORTASI NUSANTARA
              </span>
              <span className="text-[#757575]"> |&nbsp;&nbsp;Powered by</span>
              <span className="text-[#0f1b24]"> IT DEV</span>
            </p>
            <nav aria-label="Footer secondary" className="shrink-0">
              <ul className="flex flex-wrap items-center gap-4 text-[10.5px] font-normal leading-[normal] text-[#757575] sm:gap-[24px]">
                {bottomLinks.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="h-auto p-0 text-left transition-colors hover:text-[#0f1b24]"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}