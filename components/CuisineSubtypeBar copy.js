import { Button } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useSWR from 'swr';

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

    return (
        <div>
            {
                console.log(props)
            }
            <Box sx={{
                display:'flex', 
                justifyContent:'center', 
                alignItems:'center', 
                height:40,
                position:'fixed', 
                top:124, 
                left:0, 
                right:0, 
                zIndex:100,
                background: '#ffffffab',
                backdropFilter:' blur(7px)'
            }}>
                
                {
                    props.types!=undefined && props.types.length!=0
                    ?
                        props.types.map((ele,index)=>
                            <Link href={'/#'+ele.link} key={index}>
                                <Button  color='secondary' >{ele.name}</Button>
                            </Link>
                    )
                    :'Loading'
                }
            </Box>
        </div>
    )
}
