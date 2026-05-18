import { Card, CardContent } from "@/components/ui/card";

const serviceCard = {
  title: "Port to Door",
  subtitle: "Service Full Container",
  backgroundImage: "/figmaAssets/image-1.png",
};

export default function PortToDoorServiceSection() {
  return (
    <section className="w-full">
      <Card className="h-full w-full overflow-hidden rounded-none border-0 bg-transparent p-0 shadow-none">
        <CardContent className="h-full p-0">
          <article
            className="flex h-full min-h-[338px] w-full items-end justify-center bg-[length:100%_100%] bg-center bg-no-repeat px-6 pb-8 sm:px-8 sm:pb-10"
            style={{ backgroundImage: `url(${serviceCard.backgroundImage})` }}
          >
            <header className="flex w-full max-w-[244px] flex-col items-center text-center text-white">
              <h2 className="text-[40px] font-bold leading-[48px] text-white" style={{ textShadow: "0px 16px 40px #0f1b241a" }}>
                {serviceCard.title}
              </h2>
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