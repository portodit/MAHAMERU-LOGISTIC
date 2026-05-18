import { Card, CardContent } from "@/components/ui/card";

const serviceCard = {
  title: "Port to Port",
  subtitle: "Service Full Container",
  image: "/figmaAssets/image.png",
};

export default function PortToPortServiceSection() {
  return (
    <section className="w-full">
      <Card className="h-full w-full overflow-hidden rounded-none border-0 bg-transparent shadow-none">
        <CardContent className="h-full p-0">
          <article
            className="flex h-full min-h-[338px] w-full items-end justify-center bg-[length:100%_100%] bg-center bg-no-repeat px-6 pb-8 pt-6 sm:px-8 sm:pb-10"
            style={{ backgroundImage: `url(${serviceCard.image})` }}
          >
            <header className="flex w-full max-w-[231px] flex-col items-center text-center text-white">
              <h3 className="text-[40px] font-bold leading-[48px] text-white" style={{ textShadow: "0px 16px 40px #0f1b241a" }}>
                {serviceCard.title}
              </h3>
              <p className="mt-2 text-lg font-semibold text-white">
                {serviceCard.subtitle}
              </p>
            </header>
          </article>
        </CardContent>
      </Card>
    </section>
  );
}