"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const Carousel = () => {
  const slides = [
    { id: 1, image: "/category.jpg", title: "Acessórios" },
    { id: 2, image: "/category.jpg", title: "Comida" },
    { id: 3, image: "/category.jpg", title: "Roupas" },
    { id: 4, image: "/category.jpg", title: "Bolsas" },
    { id: 5, image: "/category.jpg", title: "Calçados" },
    { id: 6, image: "/category.jpg", title: "" },
    { id: 7, image: "/category.jpg", title: "" },
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
          1: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1.5,
          },
          450: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2.5,
            navigation: {
              enabled: true,
            },
          },
          1024: {
            slidesPerView: 3,
            navigation: {
              enabled: true,
            },
          },
          1140: {
            slidesPerView: 4,
            navigation: {
              enabled: true,
            },
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Card className="h-full">
              <img
                className="rounded-t-lg w-full object-cover h-[150px]"
                src={slide.image}
                alt={`Slide ${slide.id}`}
              />
              <CardContent className="p-4">
                <div className="flex flex-col">
                  <span className="font-bold">{slide.title}</span>
                  <span className="text-sm text-gray-400">99 produtos</span>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="navigation-buttons">
        <button className="swiper-button-prev-custom">
          <ArrowLeft />
        </button>
        <button className="swiper-button-next-custom">
          <ArrowRight />
        </button>
      </div>

      <style jsx>{`
        .navigation-buttons {
          position: absolute;
          top: -20%;
          right: 10px;
          display: flex;
          transform: translateY(-50%);
          z-index: 10;
        }
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          background-color: #333;
          color: #fff;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 5px;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};
