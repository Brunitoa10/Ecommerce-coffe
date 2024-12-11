"use client";
import AutoPlay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export const dataCarrouselTop = [
  {
    id: 1,
    title: "Envío 3 a 5 días hábiles",
    description: "Como cliente VIP te ofrecemos envíos 24/48 hs.",
    link: "#",
  },
  {
    id: 2,
    title: "Descuentos exclusivos",
    description:
      "Aprovecha ofertas especiales disponibles solo para miembros VIP.",
    link: "#",
  },
  {
    id: 3,
    title: "Soporte prioritario",
    description:
      "Obtén atención al cliente preferencial para resolver tus dudas rápidamente.",
    link: "#",
  },
  {
    id: 4,
    title: "Recompensas por fidelidad",
    description:
      "Acumula puntos por cada compra y canjéalos por increíbles beneficios.",
    link: "#",
  },
];

const CarrouselTextBanner = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-200 dark:bg-primary py-4">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          AutoPlay({
            delay: 2500,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
            {dataCarrouselTop.map(({ id, title, link, description }) => (
              <CarouselItem
                key={id}
                onClick={() => router.push(link)}
                className="cursor-pointer"
              >
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-4 items-center text-black">
                    <p className="text-lg font-semibold text-center">{title}</p>
                    <p className="text-sm text-center">{description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarrouselTextBanner;
