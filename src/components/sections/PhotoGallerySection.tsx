import { Card, CardContent } from "@/components/ui/card";

export const PhotoGallerySection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="photo-gallery-section-title"
      className="w-full"
    >
      <Card className="w-full border-0 bg-transparent shadow-none">
        <CardContent className="flex flex-col items-start gap-1 p-0">
          <p className="text-base sm:text-lg md:text-xl font-bold leading-normal tracking-wide text-[#aa4a4b]">
            Kantor Cabang Mahameru Transportasi
          </p>
          <h2
            id="photo-gallery-section-title"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-black-700"
          >
            Temukan Lokasi Kantor Mahameru Terdekat
          </h2>
        </CardContent>
      </Card>
    </section>
  );
};
