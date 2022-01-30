
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


// import "./styles.css";

import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Autoplay, ]);
  

export default function CuisineSlider() {
  
  
  
  return (
    <>
        <Swiper className="mySwiper"
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": true
              }}
            loop={true}
        >
            <SwiperSlide>
                Slide 1
            </SwiperSlide>
            <SwiperSlide>
                Slide 2
            </SwiperSlide>
            <SwiperSlide>
                Slide 3
            </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    </>
  )
}