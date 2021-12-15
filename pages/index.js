import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css'
import "swiper/css/bundle";
import Carousel from '../components/Carousel'
import Card from '../components/Card';
import { Box } from '@mui/system';
import SwipeMenuSlide from '../components/SwipeMenuSlide';

export default function Home() {
  return (
    <div>
      <Carousel />
      <Box sx={{display: 'flex', flexDirection: ['column', 'row'], justifyContent: 'space-evenly', alignItems: 'center', margin: '10px'}}>
        <Card />
        <Card />
      </Box>
      <SwipeMenuSlide />
    </div>
  )
}
