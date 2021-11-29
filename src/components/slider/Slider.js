import React, { useState, useEffect } from "react";
import "./slider.css";
import "swiper/swiper-bundle.min.css";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import Cat from "../../assets/imgs/cat.jpg";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import useWindowDimensions from "../../hooks/useWindowDimensions";

SwiperCore.use([Navigation, Pagination]);
SwiperCore.use([Autoplay]);

function Slider() {
  const { height, width } = useWindowDimensions();
  console.log(width);
  return (
    <Swiper
      slideToClickedSlide={true}
      autoplay={{ delay: 7000 }}
      slidesPerView={width <= 768 ? 3 : width <= 1024 ? 3 : width / 400}
      spaceBetween={10}
      pagination={{ clickable: true }}
      tag="section"
      wrapperTag="ul"
      id="main"
      centeredSlides={true}
      loop={true}
      onInit={(swiper) => console.log("swiper initialized")}
      onSlideChange={(swiper) => console.log("slide index changed")}
    >
      <SwiperSlide tag="li" key="1">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
      <SwiperSlide key="2">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
      <SwiperSlide key="3">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
      <SwiperSlide key="4">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
      <SwiperSlide key="5">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
      <SwiperSlide key="6">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
      <SwiperSlide key="7">
        <img className="slider__img" src={Cat} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
