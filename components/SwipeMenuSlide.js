import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import demo from '../public/images/demo.jpg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';


// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';
import Image from "next/image";
import db from "./db";

// install Swiper modules
SwiperCore.use([Navigation]);



const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: '100%',
    display:'flex',
    flexDirection:'column'
    // [theme.breakpoints.down('sm')]: {
    //   width: '100% !important', // Overrides inline-style
    //   height: 100,
    // },
    // '&:hover, &.Mui-focusVisible': {
    //   zIndex: 1,
    //   '& .MuiImageBackdrop-root': {
    //     opacity: 0.15,
    //   },
    //   '& .MuiImageMarked-root': {
    //     opacity: 0,
    //   },
    //   '& .MuiTypography-root': {
    //     border: '4px solid currentColor',
    //   },
    // },
  }));




export default function SwipeMenuSlide() {
  const [foods, setFoods] = useState(db.foods);
  
  
  return (
    <Box sx={{width:'100%', height:'150px', position:'relative'}}>
    <Swiper 
        slidesPerView={5} 
        // spaceBetween={5} 
        slidesPerGroup={5} 
        loop={true} 
        loopFillGroupWithBlank={true} 
        // pagination={{
        //     "clickable": true
        // }} 
        navigation={true} 
        className="mySwiper"
        // navigation= {{
        //     'nextEl': '.swiper-button-next',
        //     'prevEl': '.swiper-button-prev',
        //   }}
    >
        {
            // ['Noodles', 'Biryani', 'Bengali', 'Pizza', 'Sandwich' , 'South Indian', 'Rolls', 'Momos', 'Kebabs', 'Fries']
            foods.map((food, index)=>
                <SwiperSlide key={index}>
                    <ImageButton >
                        <Box sx={{width:'100px', height:'100px', position:'relative'}}>
                            <Image className='swipermenu-img' src={demo} layout='fill' />
                        </Box>
                        <Typography variant='span' sx={{marginTop:'8px'}}>
                            {food.name}
                        </Typography>
                    </ImageButton>
                    
                </SwiperSlide>
            )
        }
        
  </Swiper>
    </Box>
  )
}