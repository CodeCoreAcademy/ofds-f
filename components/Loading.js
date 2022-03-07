import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
export default function Loading() {
    const [width, setWidth] = useState(800)
    useEffect(() => {
        setWidth(document.getElementById('parent').offsetWidth)
    },[])
  return (
    <Box id='parent' sx={{ display: 'flex', width:'100%', height:'100%' }}>
        <CircularProgress color='secondary' size={parseInt(width/10)} thickness={2}/>
    </Box>
  );
}
