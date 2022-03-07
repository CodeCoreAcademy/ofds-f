import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import db from '../../components/db'
import { Box, Button, Divider, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import useSWR from 'swr';
import CuisineSubtypeBar from '../../components/CuisineSubtypeBar'
import CuisinsBar from '../../components/CuisinsBar'
import { useAppContext } from '../../components/context';
import CustomSnackbar from '../../components/CustomSnackbar'

export default function Cuisine() {
    const router = useRouter()
    const {id} = router.query
    const {state, setState} = useAppContext()
    const [cuisine, setCuisine] = useState(null)
    // const [foods, setFoods] = useState(null)

    // const fetcher_cuisine = url => axios.get(process.env.NEXT_PUBLIC_SERVER_URI+url).then(res => res.data)

    const fetcher_cuisineFoods = url => axios.get(process.env.NEXT_PUBLIC_SERVER_URI+url).then(res => res.data)
    

    // const { data:cuisines, error } = useSWR('/allcuisines', fetcher_cuisine)
    const { data:foods, error } = useSWR('foodsforcuisine/'+id, fetcher_cuisineFoods)

    const [types, setTypes] = useState([])
    const [chosenType, setChosenType] = useState('all')
    const [subTypeData, setSubTypeData] = useState([])

    const [msg, setMsg] = useState('')
    const [msgOpen, setMsgOpen] = useState(false)
    useEffect(()=>{
        
        if(foods!=undefined && foods.value!='undefined' && foods.length != 0)
        {
            let data = []
            for(let i=0; i<foods.length; i++)
            {
                if( data.indexOf(foods[i].type) == -1 )
                    data.push(foods[i].type)
                    // data.push({ name:foods[i].type, link: foods[i].type.replaceAll(" ","_").toLowerCase() })
            }
            data =  data.map(ele => ({ name:ele, link: ele.replaceAll(" ","_").toLowerCase() }))
            
            console.log(data)
            setTypes(data)
        }
            // console.log(foods)
            // setTypes(
            //     foods.map( (ele)=>
            //         ({name:ele.name, link:ele.name.replaceAll(" ","_").toLowerCase()})
            //     ) 
            // )
    }, [foods])

    useEffect(()=>{
        if(foods!=undefined && foods.value!='undefined' && foods.length != 0)
        {
            setSubTypeData(foods.filter((ele)=>ele.type==chosenType))
        }
    },[chosenType])

    if(error)
        return <div> {console.log(error)} Error getting the food items</div>
    if(foods==undefined || foods.value=='undefined')
        return <div>Loading</div>
    if(foods.length == 0)
        return <div>No foods in this cuisine</div>

    const addtoCart = (id)=> {
        console.log(state.cart)
        // console.log(state.cart.filter((ele)=>ele.food._id == id))
        if(state.cart && state.cart.filter((ele)=>ele.food._id == id).length != 0){
            console.log('Already Added')
            setMsg('Already Added')
            setMsgOpen(true)
            return
        }
            
        const data = {
            cus_id:state.customer._id,
            food_id:id,
            quantity:1
        }
        let find = foods.filter((ele)=>ele._id == id)[0]
        // console.log({
        //    food: {
        //         desc:find.desc,
        //         images:find.images,
        //         name:find.name,
        //         price:find.price,
        //         _id:find._id
        //     },
        //     quantity:1,
        // })
        axios.post(process.env.NEXT_PUBLIC_SERVER_URI+'addtocart', data)
        .then((res)=>{
            find = {
                food: {
                     desc:find.desc,
                     images:find.images,
                     name:find.name,
                     price:find.price,
                     _id:find._id
                 },
                 quantity:1,
                 _id:res.data.cart.filter(ele => ele.food == id)[0]._id
             }
             console.log('added')
             setState(prev=>({...prev, cart:prev.cart==undefined||prev.cart==null?[find]:[...prev.cart, find]}))
             setMsg('Added to cart')
             setMsgOpen(true)
            // console.log(res.data.cart.filter(ele => ele.food == id)[0])
        })
        
    }
    
    return (
        <div>
            <CuisinsBar />
            {
                types.length!=0
                ?<CuisineSubtypeBar setChosenType={setChosenType} types={types} />
                :''
            }
            {/* <CustomSnackbar msg={feedback.msg} open={feedback.open} setOpen={feedback.setOpen} vertical='top' horizontal='center' /> */}
            <CustomSnackbar msg={msg} open={msgOpen} setOpen={setMsgOpen} vertical='bottom' horizontal='center' />
            <Box sx={{width:'100%', height:'200px'}}>
                <Box sx={{width:'100vw', height:'200px', overflowY:'hidden'}}>
                    {/* <Image src={cuisine.pic} layout='fill' /> */}
                </Box>
            </Box>
            
            
            <Box sx={{width:'750px', margin:'auto'}}>
                {
                    (chosenType=='all'?foods:subTypeData).map((ele, index)=>
                    // foods.map((ele, index)=>
                        /* food card */
                        <Box key={index} className="foodcard" id={ele._id}>
                            <Box sx={{display:'flex', justifyContent:'space-between', width: '640px',margin:'auto'}}>
                                <Typography variant='h4' align='left' sx={{fontWeight:100, marginBottom:2}}>
                                    {ele.name}
                                </Typography>
                                <Typography variant='h6' align='left' sx={{fontWeight:100, marginBottom:2}}>
                                ₹{ele.price}
                                </Typography>
                            </Box>
                            
                            <Box sx={{
                                width: '640px',
                                height: '360px',
                                backgroundColor: 'aquamarine',
                                margin: 'auto',
                                marginBottom:2
                            }}>
                                {
                                    // process.env.NEXT_PUBLIC_SERVER_URI+ele.images[0]
                                }
                                <Image src={process.env.NEXT_PUBLIC_SERVER_URI+ele.images[0]} width= '640' height= '360' />
                            </Box>
                            <Box sx={{margin: 'auto', marginBottom:2, width: '640px', padding:2}}>
                                {ele.desc}
                            </Box>
                            <Divider />
                            <Box sx={{marginTop:1, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <IconButton variant='outlined' color='secondary'>
                                    <FavoriteBorderIcon />
                                </IconButton>
                                <IconButton variant='outlined' color='secondary'>
                                    <CommentIcon />
                                </IconButton>
                                <IconButton variant='outlined' color='secondary'>
                                    <ShareIcon />
                                </IconButton>
                                <IconButton variant='outlined' color='secondary' onClick={()=>addtoCart(ele._id)}>
                                    <ShoppingCartIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    )
                }
            </Box>
        </div>
    )
}
