import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import db from '../components/db';
import { useSession } from "next-auth/react"
export default function cart() {
    const { data: session, status } = useSession()
    const [cart, setCart] = useState(db.orders.filter((ele)=> ele.cus_id == 1)[0].cart)

    useEffect(()=>{
        let data = db.orders.filter((ele)=> ele.cus_id == 1)[0].cart
        let temp = []
        data.map((ele)=> ({
            fname:ele.food_id
        }) )
    },[])

    if (status === "unauthenticated") {
        return(
            <Box sx={{height:'90vh', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Typography variant="h1">
                    Please login to continue
                </Typography>
            </Box>
        )
    }

    return( 
        <div>  
            <Box sx={{display:'flex', mt:5}}>
                {/* left */}
                <Box>
                    <Box>
                        <Typography>
                            Your cart Items
                        </Typography>
                    </Box>
                    {/* all rows container */}
                    <Box>
                        {/* row */}
                        <Box sx={{display:'flex', alignItems:'center'}}>
                            <Box>
                                chhobi
                            </Box>
                            {/* details */}
                            <Box>
                                <Typography>
                                    Product Name
                                </Typography>
                                <Typography>
                                    Product Description
                                </Typography>
                                <Typography>
                                    Quantity
                                </Typography>
                                <Button>Remove</Button>
                            </Box>
                            {/* price */}
                            <Box>
                                1,000
                            </Box>
                        </Box> 
                    </Box>

                </Box>
                {/* right */}
                <Box>
                    
                </Box>
            </Box>
        </div>
    );
}
