import Image from "next/image";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        <div className="relative">
          <div className="relative md:static hidden md:block">
            <Image
              className="absolute top-[-4rem] left-[50%] -translate-x-[50%] -z-10"
              src="/hero-1.svg"
              width={150}
              height={150}
              alt="hero-1"
            />
          </div>
          <div className="container flex flex-col pt-[130px] gap-y-4">
            <span className="text-primary font-bold text-sm">Pet Shop</span>
            <span className="text-3xl font-extrabold">
              Um pet shop com tudo que você precisa
            </span>
            <span className="text-gray-600 font-semibold">
              Sociis blandit et pellentesque aliquet at quisque tortor lacinia
              nullam. Mattis aenean scelerisque dui libero
            </span>
            <Button className="font-bold me-auto">Comprar agora</Button>
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block relative">
            <Image
              className="w-full object-contain"
              src="/hero.svg"
              width={750}
              height={800}
              alt="hero"
            />
          </div>
          <div className="absolute bottom-0 right-0 hidden lg:block w-full">
            <Image
              className="w-full object-cover"
              src="/hero-girls.png"
              width={600}
              height={600}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
