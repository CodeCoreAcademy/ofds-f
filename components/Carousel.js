import React, { useRef, useState } from "react";
import { Box } from '@mui/system'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import styles from './Carousel.module.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  Pagination, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);


export default function Carousel() {
  
  const slideImages=[
      {link:'/images/carousel1.jpg', text:"Photo by Nerfee Mirandilla: https://www.pexels.com/photo/photo-of-grilled-barbecue-3186654/"},
      {link:'/images/carousel2.jpg', text:"Photo by Luis Quintero: https://www.pexels.com/photo/grilled-spiral-sausage-with-steak-1857730/"},
      {link:'/images/carousel3.jpg', text:"Photo by Streetwindy: https://www.pexels.com/photo/photo-of-ceramic-plate-on-top-of-wooden-surface-4055136/"},
      {link:'/images/carousel4.jpg', text:"Photo by 竟傲 汤: https://www.pexels.com/photo/grilled-toasts-with-egg-topped-with-rosemary-on-pan-4377544/"}
      
  ]
  
  return (
    <Box sx={{width:'100%', height:'600px', position:'relative'}}>
        <Swiper direction={'vertical'} 
            pagination={{
                "clickable": true
            }} 
            autoplay={{
                "delay": 1500,
                "disableOnInteraction":false
            }}
            className="mySwiper"
        >
            {
                slideImages.map((image, index)=>
                    <SwiperSlide key={index}>
                        <Box sx={{width:'100%', height:'100%', position:'relative'}}>
                            <Image src={image.link} layout="fill" alt={"slide "+index} priority='true' />
                            <div className={styles.slide_text}>{image.text}</div>
                        </Box> 
                    </SwiperSlide>
                )
            }
        </Swiper>
    </Box >
  )
}