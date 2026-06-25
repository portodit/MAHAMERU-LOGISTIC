const footerLinks = {
  tautan: ["Beranda", "Profil", "Layanan", "Galeri", "Cabang", "FAQ", "Kontak"],
  layanan: ["FCL", "LCL", "Project Cargo", "Jadwal Kapal", "Info Cabang"],
};

const contactItems = [
  {
    icon: "/figmaAssets/vector.svg",
    alt: "Phone",
    text: "+62 812-3456-7890",
  },
  {
    icon: "/figmaAssets/mail.png",
    alt: "Mail",
    text: "info@mahameru-logistic.com",
  },
  {
    icon: "/figmaAssets/map-pin.png",
    alt: "Map pin",
    text: "Jalan Perak, Surabaya, Jawa Timur",
  },
];

const bottomLinks = ["Dukungan", "Layanan", "Syarat & Ketentuan"];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#f9f9f9]">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 md:px-12 lg:px-[80px] lg:py-[42px]">

        {/* Links Grid - 4 columns aligned horizontally on desktop */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 items-start">

          {/* Logo & Description */}
          <div className="flex flex-col">
            <img
              className="h-10 w-auto object-contain sm:h-12 lg:h-14"
              alt="Mahameru"
              src="/figmaAssets/mahameru-transportasi-nusantara-logo-transparent-3.png"
            />
            <p className="mt-4 text-sm leading-relaxed text-[#757575]">
              PT. Mahameru Transportasi Nusantara adalah perusahaan logistik yang berdiri sejak 2020 dan berpengalaman melayani pengiriman cargo container dari Surabaya ke Banjarmasin dan Manado.
            </p>
          </div>

          {/* Tautan */}
          <nav aria-label="Tautan" className="flex flex-col">
            <h2 className="text-base font-bold text-[#0f1b24]">Tautan</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#757575]">
              {footerLinks.tautan.map((link) => (
                <li key={link}>
                  <button type="button" className="p-0 text-left hover:text-[#0f1b24] transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Layanan */}
          <nav aria-label="Layanan" className="flex flex-col">
            <h2 className="text-base font-bold text-[#0f1b24]">Layanan</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#757575]">
              {footerLinks.layanan.map((link) => (
                <li key={link}>
                  <button type="button" className="p-0 text-left hover:text-[#0f1b24] transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hubungi Kami */}
          <div className="flex flex-col">
            <h2 className="text-base font-bold text-[#0f1b24]">Hubungi Kami</h2>
            <ul className="mt-3 space-y-3">
              {contactItems.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <img
                    className="h-4 w-4 shrink-0 object-contain"
                    alt={item.alt}
                    src={item.icon}
                    width={16}
                    height={16}
                  />
                  <span className="text-sm text-[#757575]">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-[#0f1b241a] pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-[#757575]">
              Copyright 2026 © <span className="font-semibold text-[#0f1b24]">PT. MAHAMERU TRANSPORTASI NUSANTARA</span> | Powered by <span className="font-semibold text-[#0f1b24]">IT DEV</span>
            </p>
            <nav aria-label="Footer policies">
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-[#757575]">
                {bottomLinks.map((link) => (
                  <li key={link}>
                    <button type="button" className="p-0 text-left hover:text-[#0f1b24] transition-colors">
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
};
