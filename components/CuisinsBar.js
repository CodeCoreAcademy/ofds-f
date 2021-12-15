import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function CuisinsBar(props) {
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:60}}>
            {
                props.menu.map((ele,index)=><Button key={index} color='secondary'>{ele}</Button>)
            }
        </Box>
    )
}
