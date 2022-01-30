import { Button } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';


// install Swiper modules
SwiperCore.use([Navigation]);

export default function CuisineSubtypeBar(props) {
    // const fetcher = () => {
    //     // console.log(url)
    //     // let data=''
    //     console.log(process.env.NEXT_PUBLIC_SERVER_URI+'/allcuisines')
    //     axios.get(process.env.NEXT_PUBLIC_SERVER_URI+'/allcuisines')
    //     .then(function (response) {
    //     // handle success
    //         console.log(response.data);
    //         // data = response
    //         return response.data
    //     })
    //     .catch(function (error) {
    //     // handle error
    //         console.log(error);
    //         return error
    //     })
    // }
    // const menu = [
    //     {
    //         link: "burgers_and_sandwiches",
    //         name: "Burger1"
    //     },
    //     {
    //         link: "burgers_and_sandwiches",
    //         name: "Burgers and Sandwiches2"
    //     },
    //     {
    //         link: "burgers_and_sandwiches",
    //         name: "Burgers and Sandwiches3"
    //     },
    //     {
    //         link: "burgers_and_sandwiches",
    //         name: "Burgers and "
    //     },
    //     {
    //         link: "burgers_and_sandwiches",
    //         name: "ches5"
    //     },
    //     {
    //         link: "burgers_and_sandwiches",
    //         name: "ches5"
    //     },
    //     {
    //         link: "burgers_and_sandwiches",
    //         name: "chesdfsfsdfdfs5"
    //     },
    //     {
    //         link: "burgers_and_sandwiches",
    //         name: "ch6767es5"
    //     },
    //     {
    //         link: "burgers_and_sandwiches",
    //         name: "chejsh5"
    //     },
    // ]
    const router = useRouter()
    return (
        <Box className='submenuwrapper'
        // sx={{width:'100%', height:'60px', position:'fixed', top:124, left:0, right:0, zIndex:100}}
        >
            {console.log( props)}
            <Swiper 
                slidesPerView={'auto'} 
                spaceBetween={5} 
                // slidesPerGroup={5} 
                // loop={true} 
                // loopFillGroupWithBlank={true} 
                navigation={true}
                style={{justifyConent:'center'}}
            >
                {
                    
                    props.types.map((ele,index)=>
                        <SwiperSlide className='submenu' key={index}>
                            {/* <Link href={router.asPath+'/#'+ele.link} > */}
                                <Button  color='secondary' onClick={()=>props.setChosenType(ele.name)} >{ele.name}</Button>
                            {/* </Link> */}
                        </SwiperSlide>
                    )
               
                }
                {
                    // ['Noodles', 'Biryani', 'Bengali', 'Pizza', 'Sandwich' , 'South Indian', 'Rolls', 'Momos', 'Kebabs', 'Fries']
                    // foods.map((food, index)=>
                    //     <SwiperSlide key={index}>
                    //         <ImageButton >
                    //             <Box sx={{width:'100px', height:'100px', position:'relative'}}>
                    //                 <Image className='swipermenu-img' src={demo} layout='fill' />
                    //             </Box>
                    //             <Typography variant='span' sx={{marginTop:'8px'}}>
                    //                 {food.name}
                    //             </Typography>
                    //         </ImageButton>
                            
                    //     </SwiperSlide>
                    // )
                }
                
            </Swiper>
        </Box>
        // <div>
        //     {
        //         console.log(props)
        //     }
        //     <Box sx={{
        //         display:'flex', 
        //         justifyContent:'center', 
        //         alignItems:'center', 
        //         height:40,
        //         position:'fixed', 
        //         top:124, 
        //         left:0, 
        //         right:0, 
        //         zIndex:100,
        //         background: '#ffffffab',
        //         backdropFilter:' blur(7px)'
        //     }}>
                
        //         {
        //             props.types!=undefined && props.types.length!=0
        //             ?
        //                 props.types.map((ele,index)=>
        //                     <Link href={'/#'+ele.link} key={index}>
        //                         <Button  color='secondary' >{ele.name}</Button>
        //                     </Link>
        //             )
        //             :'Loading'
        //         }
        //     </Box>
        // </div>
    )
}












// export default function SwipeMenuSlide() {
//   const [foods, setFoods] = useState(db.foods);
  
  
//   return (
//     <Box sx={{width:'100%', height:'150px', position:'relative'}}>
//     <Swiper 
//         slidesPerView={5} 
//         // spaceBetween={5} 
//         slidesPerGroup={5} 
//         loop={true} 
//         loopFillGroupWithBlank={true} 
//         // pagination={{
//         //     "clickable": true
//         // }} 
//         navigation={true} 
//         className="mySwiper"
//         // navigation= {{
//         //     'nextEl': '.swiper-button-next',
//         //     'prevEl': '.swiper-button-prev',
//         //   }}
//     >
//         {
//             // ['Noodles', 'Biryani', 'Bengali', 'Pizza', 'Sandwich' , 'South Indian', 'Rolls', 'Momos', 'Kebabs', 'Fries']
//             foods.map((food, index)=>
//                 <SwiperSlide key={index}>
//                     <ImageButton >
//                         <Box sx={{width:'100px', height:'100px', position:'relative'}}>
//                             <Image className='swipermenu-img' src={demo} layout='fill' />
//                         </Box>
//                         <Typography variant='span' sx={{marginTop:'8px'}}>
//                             {food.name}
//                         </Typography>
//                     </ImageButton>
                    
//                 </SwiperSlide>
//             )
//         }
        
//   </Swiper>
//     </Box>
//   )
// }