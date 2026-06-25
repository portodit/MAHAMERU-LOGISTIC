import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "item-1",
    question: "Apa saja layanan pengiriman yang tersedia di Mahameru Logistic?",
    answer:
      "Mahameru Logistic menyediakan layanan FCL (Full Container Load), LCL (Less Container Load), dan Project Cargo untuk pengiriman cargo laut dari Surabaya ke Banjarmasin dan Manado.",
    iconSrc: "/figmaAssets/plus--4--1.svg",
  },
  {
    value: "item-2",
    question: "Apa perbedaan layanan FCL dan LCL?",
    answer:
      "FCL (Full Container Load) adalah pengiriman menggunakan satu container penuh untuk satu pelanggan, cocok untuk muatan besar. Whereas LCL (Less Container Load) memungkinkan beberapa pelanggan berbagi satu container, cocok untuk pengiriman dengan volume lebih kecil.",
    iconSrc: "/figmaAssets/plus--4--3.svg",
  },
  {
    value: "item-3",
    question: "Ke mana saja tujuan pengiriman Mahameru Logistic?",
    answer:
      "Saat ini Mahameru Logistic melayani pengiriman cargo container dari Surabaya dan Jakarta ke Banjarmasin dan Manado.",
    iconSrc: "/figmaAssets/plus--4--1.svg",
  },
  {
    value: "item-4",
    question: "Bagaimana cara melacak status pengiriman saya?",
    answer:
      "Anda dapat melacak status pengiriman melalui fitur Lacak Pengiriman di website kami dengan memasukkan nomor resi pengiriman Anda.",
    iconSrc: "/figmaAssets/plus--4--1.svg",
  },
  {
    value: "item-5",
    question: "Bagaimana cara mengajukan penawaran harga?",
    answer:
      "Anda dapat menghubungi admin kami melalui tombol Kontak Admin di website atau mengisi formulir pengajuan pengiriman untuk mendapatkan penawaran harga terbaik.",
    iconSrc: "/figmaAssets/plus--4--1.svg",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[880px]">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-2"
          className="w-full"
        >
          {faqItems.map((item) => {
            return (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-b border-[#191b1d1a] last:border-b"
              >
                <AccordionTrigger className="flex w-full items-start gap-4 py-6 text-left hover:no-underline [&>svg]:hidden">
                  <span className="block flex-1 text-lg sm:text-xl md:text-2xl font-bold leading-snug tracking-tight text-[#191b1d] pr-2">
                    {item.question}
                  </span>
                  <img
                    className="mt-1 h-6 w-6 shrink-0 opacity-70"
                    alt="Expand"
                    src={item.iconSrc}
                    width={24}
                    height={24}
                  />
                </AccordionTrigger>
                {item.answer ? (
                  <AccordionContent className="pb-6 pt-0">
                    <p className="max-w-[875px] text-base sm:text-lg font-[400] leading-relaxed tracking-wide text-[#666666]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                ) : null}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};
