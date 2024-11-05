"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Carousel = () => {
  const slides = [
    { id: 1, image: "/category.jpg", title: "Acessórios" },
    { id: 2, image: "/category.jpg", title: "Comida" },
    { id: 3, image: "/category.jpg", title: "Roupas" },
    { id: 4, image: "/category.jpg", title: "Bolsas" },
    { id: 5, image: "/category.jpg", title: "Calçados" },
    { id: 6, image: "/category.jpg", title: "Gravatas" },
    { id: 7, image: "/category.jpg", title: "Brinquedos" },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={true}
        breakpoints={{
          1: { slidesPerView: 1 },
          320: { slidesPerView: 1.5 },
          450: { slidesPerView: 2 },
          640: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
          1140: { slidesPerView: 4 },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Card className="h-full relative">
              <div className="flex gap-5 justify-center m-2">
                <span className="font-bold z-50 text-black-400">
                  {slide.title}
                </span>
                <img
                  className="absolute top-0 left-0 h-full w-full rounded-xl"
                  src="high-line-category.png"
                  alt="high-line"
                />
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev-custom">
        <ArrowLeft />
      </div>
      <div className="swiper-button-next-custom">
        <ArrowRight />
      </div>

      <style jsx>{`
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          position: absolute;
          top: 0px;
          background-color: #333;
          color: #fff;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
        }

        .swiper-button-prev-custom {
          left: -10px;
        }

        .swiper-button-next-custom {
          right: -10px;
        }
      `}</style>
    </div>
  );
};
