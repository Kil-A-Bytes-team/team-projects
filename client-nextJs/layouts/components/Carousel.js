import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import ImageFallback from "@layouts/components/ImageFallback";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const SliderItem = ({ slide }) => (
  <div className="flex items-center ">
    <div className="justify-center gap-4 px-5 align-middle">
      <ImageFallback
        src={slide.image}
        alt="arrowRight"
        width={403}
        height={312}
      />
    </div>
  </div>
);

const SliderSection = ({ items }) => {
  return (
    <div className="group relative m-auto grid">
      <Swiper
        grabCursor={true}
        slidesPerView={4}
        className="w-[1299px] pt-[90px]"
        navigation={{
          nextEl: ".hero-slider-next",
          prevEl: ".hero-slider-prev",
        }}
        modules={[Navigation]}
      >
        {items?.map((carousel) => (
          <SwiperSlide
            key={carousel}
            className="flex justify-center align-middle"
          >
            <SliderItem slide={carousel} />
          </SwiperSlide>
        ))}
        <button className="hero-slider-prev left-0 top-0 z-50 p-2">
          <BsChevronCompactLeft />
        </button>

        <button className="hero-slider-next absolute right-0 top-0 z-50 p-2">
          <BsChevronCompactRight />
        </button>
      </Swiper>
    </div>
  );
};

export default SliderSection;
