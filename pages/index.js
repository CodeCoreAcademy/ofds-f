import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css'
import "swiper/css/bundle";
import Carousel from '../components/Carousel'
import Card from '../components/Card';
import { Box } from '@mui/system';
import SwipeMenuSlide from '../components/SwipeMenuSlide';
import db from '../components/db'
import { Typography } from '@mui/material';
import CuisineSlider from '../components/CuisineSlider';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import CuisinsBar from '../components/CuisinsBar';
export default function Home() {
  // const [session, loading] = useSession()
  // useEffect(()=>{
  //   console.log(session, loading)
  // },[])
  return (
    <div>
      {
        // console.log(process.env.NEXT_PUBLIC_SERVER_URI)
      }
      <CuisinsBar />
      <Carousel />
      <Box sx={{display: 'flex', flexDirection: ['column', 'row'], justifyContent: 'space-evenly', alignItems: 'center', margin: '10px'}}>
        <Card />
        <Card />
      </Box>
      <SwipeMenuSlide />
      {
        db.cuisines.map((ele, index)=>
          <Box key={index} sx={{height:'400px', mb:'30px'}}>
            <Box>
              <Typography>{ele.name}</Typography>
            </Box>
            <CuisineSlider />
          </Box>
        )
      }
    </div>
  )
}
