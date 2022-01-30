import { Button } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useSWR from 'swr';

export default function CuisinsBar() {
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

    const fetcher = url => axios.get(process.env.NEXT_PUBLIC_SERVER_URI+url).then(res => res.data)

    const { data:cuisines, error } = useSWR('allcuisines', fetcher)

    useEffect(()=>{
        
    },[])

    return (
        <div>
            {
                console.log(cuisines , error)
            }
            <Box sx={{
                display:'flex', 
                justifyContent:'center', 
                alignItems:'center', 
                height:60,
                position:'fixed', 
                top:64, 
                left:0, 
                right:0, 
                zIndex:100,
                background: '#ffffffab',
                backdropFilter:' blur(7px)',
                boxShadow: '0px 1px 0px 0px #676767'
            }}>
                
                {
                    cuisines!=undefined && cuisines.length!=0
                    ?
                    cuisines.map((ele,index)=>
                        <Link href={'/cuisine/'+ele._id} key={index}>
                            <Button  color='secondary' >{ele.name}</Button>
                        </Link>
                    )
                    :'Loading'
                }
            </Box>
        </div>
    )
}
