import { Box, Button, CardHeader, CircularProgress, Divider, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Skeleton, Snackbar, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import { deepPurple } from '@mui/material/colors';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import PropTypes from 'prop-types';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PaymentIcon from '@mui/icons-material/Payment';
import { useSession } from "next-auth/react"
import useSWR from 'swr';
import axios from 'axios';
import Ask from '../components/Ask';
import { useAppContext } from '../components/context';
import CustomSnackbar from '../components/CustomSnackbar';
import Loading from '../components/Loading';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // backgroundColor: theme.palette.common.black,
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
function CartTable(props) {
    const {state, setState} = useAppContext()
    // const [cart, setCart] = useState(null)
    useEffect(()=>{
      console.log(state.cart)
    },[])
    // useEffect(()=>{
    //   if(props.cart != 'loading')
    //     setCart(props.cart)
    // },[])
    // const [answer, setAnswer] = useState(null)
    const [openConfirm, setOpenConfirm] = useState(false)
    const [confirmTitle, setConfirmTitle] = useState('')
    const [foodIdDel, setFoodIdDel] = useState('')
    // if(props.cart == 'loading' || props.cart == null)
    //   return (
    //     <div>
    //       Loading
    //     </div>
    //   )

    const increaseQty = (id)=>{
      let data = state.cart.map( (ele, index)=> ele._id == id? {...ele, quantity:ele.quantity+1}: ele )
      axios.post(process.env.NEXT_PUBLIC_SERVER_URI+'changequantity/'+state.cart_id, 
        {
          quantity:data.filter((ele)=>ele._id == id)[0].quantity,
          id:id
        }
      )
      .then(function (response) {
        // console.log(state.cart)
        // console.log(data)
        // console.log({...state, cart:{...state.cart, response.data.cart}});
        setState( (prev)=>({...prev, cart:data})  )
      })
      .catch(function (error) {
        console.log(error);
      });
    } 

    const delItemQuery = ()=> {
      console.log('item deleted')
      axios.post(process.env.NEXT_PUBLIC_SERVER_URI+'delfromcart/'+state.cart_id, 
          {
            id:foodIdDel
          }
        )
        .then(function (response) {
          console.log(response);
          let data = state.cart.filter( (ele)=> ele._id != foodIdDel )
          console.log(data)
          setState( (prev)=>({...prev, cart:data})  )
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    const decreaseQty = (id)=> {
      let data = state.cart.map( 
        (ele, index)=> 
          ele._id == id
          ? {...ele, quantity:ele.quantity-1}
          : ele 
      )
      
      const new_qty = data.filter((ele)=>ele._id == id)[0].quantity
      if(new_qty == 0) {
        setFoodIdDel(id)
        setConfirmTitle("do you want to remove this item from cart")
        setOpenConfirm(true)
      } else {
        axios.post(process.env.NEXT_PUBLIC_SERVER_URI+'changequantity/'+state.cart_id, 
          {
            quantity:data.filter((ele)=>ele._id == id)[0].quantity,
            id:id
          }
        )
        .then(function (response) {
          // console.log(response);
          // props.setCart(data)
          setState( (prev)=>({...prev, cart:data})  )
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
    const show=()=>{
      console.log('You rejected me ;( ;(')
    }
    return (
      <>
        <Ask 
          open={openConfirm} 
          setOpen={setOpenConfirm} 
          title={confirmTitle} 
          onConfirm={delItemQuery}
          onDecline={show}
        />
        
        <TableContainer component={Paper}>
          <Table sx={{ width:'100%' }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Item</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="center">Quantity</StyledTableCell>
                <StyledTableCell align="right">Subtotal</StyledTableCell>
                {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                state.cart.map((ele, index)=>
                  // console.log(ele.food.name, ele.food.desc, ele.food.images[0], ele.food.price)
              
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      <Box sx={{display:'flex'}}>
                        <Box>
                          <Image src={process.env.NEXT_PUBLIC_SERVER_URI+ele.food.images[0]} height="100" width="100" />
                        </Box>
                        <Box sx={{ml:2, display:'flex', flexDirection:'column'}}>
                          <Typography>
                              {ele.food.name}
                          </Typography>
                          <Typography>
                              {ele.food.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="right">Rs {ele.food.price}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <IconButton sx={{boxShadow: '0px 0px 2px 1px #4a0072'}} variant='contained' aria-label="add" color="secondary" onClick={()=>increaseQty(ele._id)}>
                          <AddOutlinedIcon />
                        </IconButton>
                        <Typography sx={{my:1}}>
                            {ele.quantity}
                        </Typography>
                        <IconButton sx={{boxShadow: '0px 0px 2px 1px #4a0072'}} variant='contained' aria-label="remove" color="secondary" onClick={()=>decreaseQty(ele._id)}>
                          <RemoveOutlinedIcon />
                        </IconButton>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="right">Rs {ele.quantity*ele.food.price}</StyledTableCell>
                    {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                  </StyledTableRow>
                )
                
              }
              
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }

  function GrandTotalCard(props) {
    const {state} = useAppContext()
    const [subtotal, setSubtotal] = useState(0)
    useEffect(()=>{
      
      if(state.cart != undefined && state.cart != null && state.cart.length!=0)
      {
        let subtotalprice = 0
        state.cart.forEach((ele, index)=>{
          subtotalprice += ele.quantity * ele.food.price
        })
        setSubtotal(subtotalprice)
        props.setFinalCartData(prev=>({...prev, cgst:subtotalprice*2.5/100}))
        props.setFinalCartData(prev=>({...prev, sgst:subtotalprice*2.5/100}))
        props.setFinalCartData(prev=>({...prev, delivery_charge:subtotalprice*2/100}))
        props.setFinalCartData(prev=>({...prev, grandtotal:(subtotalprice*2/100)+(subtotalprice*2.5/100)+(subtotalprice*2.5/100)+subtotalprice}))

      }
        
    },[state.cart])

    // if(props.cart == 'loading' || props.cart == null)
    // return (
    //   <div>
    //     Loading
    //   </div>
    // )

    return (
      <Card sx={{ width: 350 }} raised={true}>
        <CardContent>
          <CardHeader title='Bill Information' sx={{backgroundColor:'secondary.dark', margin:0, color:'white'}}/>
          <Divider />
          <Table sx={{ marginBottom:'50px' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell size='small' sx={{width:0}}>Qty</TableCell>
                <TableCell align="right" sx={{width:0}}>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                state.cart.map((ele, index)=>
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">{ele.food.name}</TableCell>
                    <TableCell align="right" size='small' >x{ele.quantity}</TableCell>
                    <TableCell align="right" >Rs. {ele.food.price*ele.quantity}</TableCell>
                  </TableRow>
                )
              }
              <TableRow>
                <TableCell colSpan="2">subtotal</TableCell>
                {/* <TableCell size='small' sx={{width:0}}>Qty</TableCell> */}
                <TableCell align="right" sx={{width:0}}>{subtotal}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan="2">CGST @2.5%</TableCell>
                {/* <TableCell size='small' sx={{width:0}}>Qty</TableCell> */}
                <TableCell align="right" sx={{width:0}}>{subtotal*2.5/100}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan="2">SGST @2.5%</TableCell>
                {/* <TableCell size='small' sx={{width:0}}>Qty</TableCell> */}
                <TableCell align="right" sx={{width:0}}>{subtotal*2.5/100}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan="2">delivery charge</TableCell>
                {/* <TableCell size='small' sx={{width:0}}>Qty</TableCell> */}
                <TableCell align="right" sx={{width:0}}>{subtotal*2/100}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table sx={{ marginBottom:'50px' }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">Grand Total</TableCell>
                <TableCell align="right" size='small' sx={{width:0}}>{(subtotal*2/100)+(subtotal*2.5/100)+(subtotal*2.5/100)+subtotal}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
        </CardContent>
        <CardActions>
          <Button size="small" color='secondary' variant='contained'>Place Order</Button>
        </CardActions>
      </Card>
    );
  }

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          // 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
          'linear-gradient( 136deg, rgb(29 0 188) 0%, rgb(133 48 210) 50%, rgb(200 0 195) 100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          // 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
          'linear-gradient( 136deg, rgb(29 0 188) 0%, rgb(133 48 210) 50%, rgb(200 0 195) 100%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));
  
  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        // 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        'linear-gradient( 136deg, rgb(29 0 188) 0%, rgb(133 48 210) 50%, rgb(200 0 195) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        // 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        'linear-gradient( 136deg, rgb(29 0 188) 0%, rgb(133 48 210) 50%, rgb(200 0 195) 100%)',
    }),
  }));
  
  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
    
    const icons = {
      1: <ShoppingCartIcon />,
      2: <ContactMailIcon />,
      3: <PaymentIcon />,
    };
  
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }
  
  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };
  
  const steps = ['Cart Details', 'Address Details', 'Payment Details'];


  function AddressComponent(props)
  {
    const {state} = useAppContext()
    // const a = ['address 1', 'address 2', 'address 3', 'address 4', 'address 5']
    // const [selectedValue, setSelectedValue] = React.useState(state.addr[0]);

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const controlProps = (item) => ({
      checked: props.finalCartData.delivery_address == item._id,
      onChange: ()=>props.setFinalCartData( (prev)=> ({...prev, delivery_address:item._id}) ),
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    })
    
    return(
      <Box>
        {
          console.log(state)
        }
        <FormControl sx={{width:'100%'}}>
          <FormLabel sx={{marginBottom:'20px'}} id="demo-form-control-label-placement">
            Select an address
          </FormLabel>
          <RadioGroup
            column="true"
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="top" 
          >
            {
              state.customer.address.map((ele, index)=>
              <FormControlLabel 
                
                key={index}
                sx={{ 
                  border: props.finalCartData.delivery_address._id == ele._id ? '1px solid #33004e' : '1px solid #c4c4c4',
                  // '&.Mui-checked': {
                  //   border: '5px solid #c4c4c4',
                  // },
                  margin:0,
                  marginBottom: '10px',
                  borderRadius: '5px',
                  padding: '10px',
                  boxShadow: props.finalCartData.delivery_address._id == ele._id ? '-1px 1px 5px 0px #33004e' : '1px 1px 3px 0px #909090'
                }}
                // value={ele.line1+"<br />"+ele.line2+"<br/>"+ele.line3+"<br/>"+ele.city+" - "+ele.pin+}
                value={ele}
                
                control={
                  <Radio {...controlProps(ele)}
                  sx={{
                    color: deepPurple[800],
                    '&.Mui-checked': {
                      color: deepPurple[600],
                      
                    },
                  }} />
                } 
                // label="Pashupati Bhattacharya Rd, Srishti, Behala, Kolkata Pashupati Bhattacharya Rd, Srishti, Behala, Kolkata Pashupati Bhattacharya Rd, Srishti, Behala, Kolkata Pashupati Bhattacharya Rd, Srishti, Behala, Kolkata Pashupati Bhattacharya Rd, Srishti, Behala, Kolkata" 
                label={
                  <Box sx={{ml:'10px'}}>
                    <Typography component="div">{ele.line1}</Typography>
                    <Typography component="div">{ele.line2}</Typography>
                    <Typography component="div">{ele.line3}</Typography>
                    <Typography component="div">{ele.city+" - "+ele.pin}</Typography>
                    <Typography component="div">Landmark : {ele.landmark}</Typography>
                  </Box>
                }
                />
              )
            }
            
          </RadioGroup>
        </FormControl>
        
          {/* a.map((ele, ind)=>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Radio {...controlProps('e'+ind)}
                  sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                      color: pink[600],
                    },
                  }}
            />
            <Typography>{ele}</Typography>
          </Box>
          ) */}
        
      </Box>
    );
  }

  function PaymentComponent(props)
  {
    return(
      <div>
        <Typography>
          Payment Details
        </Typography>
        <Box>
          <TextField id="outlined-basic" label="E mail" variant="outlined" />
        </Box>
      </div>
    );
  }

export default function Cart() {
    const { state, setState } = useAppContext()
    const { data: session, status } = useSession()
    // const [cart, setCart] = useState(db.orders.filter((ele)=> ele.cus_id == 1)[0].cart)
    const [finalCartData, setFinalCartData] = useState({
      cgst:0,
      sgst:0,
      delivery_charge:0,
      grandtotal:0,
      delivery_address:'',
      order_date: new Date()
    })
    // const fetch_cart = url => axios.get(process.env.NEXT_PUBLIC_SERVER_URI+url).then(res => res.data)
    // const { data: cartData, cartDataStatus } = useSWR('viewcart/'+state.customer._id, fetch_cart)
    // const { data: cartData, cartDataStatus } = useSWR('viewcart/'+12313123, fetch_cart)
    const [cart, setCart] = useState(null)
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [msg, setMsg] = useState('')
    const [msgOpen, setMsgOpen] = useState(false)
    // useEffect(()=>{
    //   // if(state.customer!=null){
    //   //   axios
    //   //   .get(process.env.NEXT_PUBLIC_SERVER_URI+'viewcart/'+state.customer._id)
    //   //   .then(res => console.log(res.data))
    //   // }
    //   // if(!(cartData==undefined || cartData.value=='undefined'))
    //   //   console.log(cartData)  
    //   // setCart(cartData.cart)
    // },[state.customer])

    if (status === "unauthenticated") {
      return(
        <Box sx={{height:'90vh', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Typography variant="h1">
              Please login to continue
          </Typography>
        </Box>
      )
    }


    // if(cartData==undefined || cartData.value=='undefined') {
    if( (state.cart != undefined || state.cart != null) && state.cart.length==0) {
      return(
        <Box sx={{height:'90vh', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Typography variant="h1">
              Cart is Empty
          </Typography>
        </Box>
      )
    }

    if(state.cart == undefined || state.cart == null) {
      return(
        // <Box sx={{height:'90vh', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
        //   <Typography variant="h1">
        //       Loading
        //   </Typography>
        // </Box>
        <Box sx={{width:'100%',height:'80vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <CircularProgress color="secondary" size={100} thickness={1} />
        </Box>
      )
    }

    // if (state.cart == null || state.cart == undefined) {
    //   return(
    //     <Box sx={{height:'90vh', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
    //       <Typography variant="h1">
    //           cart is empty
    //       </Typography>
    //     </Box>
    //   )
    // }

    const placeOrder = () => {
      console.log(state.cart_id)
      axios.post(process.env.NEXT_PUBLIC_SERVER_URI+'placeorder/', 
            {
                data:finalCartData,
                id:state.cart_id
            }
        )
        .then(function (response) {
           console.log(response)
           setState(prev=>({...prev, cart_id:'', cart:[]}))
            console.log('order placed')
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const totalSteps = () => {
      return steps.length;
    };

    const completedSteps = () => {
      return Object.keys(completed).length;
    };

    const isLastStep = () => {
      return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };

    const handleNext = () => {
      // const newActiveStep =
      //   isLastStep() && !allStepsCompleted()
      //     ? // It's the last step, but not all steps have been completed,
      //       // find the first step that has been completed
      //       steps.findIndex((step, i) => !(i in completed))
      //     : activeStep + 1;
      // console.log(activeStep+1,finalCartData.delivery_address)
      // setActiveStep(newActiveStep);
      if (activeStep==1 && finalCartData.delivery_address=='') {
        setMsg('Choose an address first')
        setMsgOpen(true)
        console.log('choose address first')
      } else {
        setActiveStep(prev => prev+1);
      }
      
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
      setActiveStep(step);
    };

    const handleComplete = () => {
      const newCompleted = completed;
      // console.log(activeStep==1 && finalCartData.delivery_address=='')
      newCompleted[activeStep] = true
      setCompleted(newCompleted);
      handleNext();
    };

    const handleReset = () => {
      setActiveStep(0);
      setCompleted({});
    };

    const stepContent=[
      <CartTable 
        // cart={ 
        //   cartData==undefined || cartData.value=='undefined' 
        //   ? 'loading' : cart 
        // }
        // setCart={setCart}
        // setFinalCartData={setFinalCartData}
        // finalCartData={finalCartData}
        // cartId={cartData._id}
      />,
      <AddressComponent
        finalCartData={finalCartData}
        setFinalCartData={setFinalCartData} 
        // addr={ 
        //   cartData==undefined || cartData.value=='undefined' 
        //   ? 'loading' : cartData.customer.address
        // } 
      />,
      // <PaymentComponent 
      //   // setFinalCartData={setFinalCartData}
      //   // finalCartData={finalCartData}
      // />
    ]

    const action = (
      <React.Fragment>
        {/* <Button color="secondary" size="small" onClick={handleClose}>
          Close
        </Button> */}
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={()=>setMsgOpen(false)}
          sx={{backgroundColor:'primary.main'}}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );

    return( 
        <div>
          {
          console.log()
          }
          <Box sx={{display:'flex', mt:5, justifyContent:'space-around'}}>
            <Box sx={{width:'900px'}}>
              <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {allStepsCompleted() ? (
                  <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      Order Placed
                    </Typography>
                    {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button onClick={handleReset}>Reset</Button>
                    </Box> */}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {/* <Typography sx={{ mt: 2, mb: 1 }}>
                      Step {activeStep + 1}
                    </Typography> */}
                    <Box sx={{pt:3}}>
             
                      {
                        stepContent[activeStep]
                      }
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                      <Button
                        variant='contained'
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: '1 1 auto' }} />
     
                      <Button variant='contained' onClick={handleNext} sx={{ mr: 1 }}>
                        Next
                      </Button>
                      <Button variant='contained' disabled={activeStep+1 == steps.length?false:true} onClick={placeOrder}>Place Order</Button>
                      {/* 
                      {activeStep !== steps.length &&
                        (completed[activeStep] ? (
                          <Typography variant="caption" sx={{ display: 'inline-block' }}>
                            Step {activeStep + 1} already completed
                          </Typography>
                        ) : (
                          <Button variant='contained' onClick={handleComplete}>
                            {completedSteps() === totalSteps() - 1
                              ? 'Finish'
                              : 'Complete Step'}
                          </Button>
                        ))} 
                        */}
                    </Box>
                  </React.Fragment>
                )}
              </div>
            </Box>                    

            <Box>
              <GrandTotalCard finalCartData={finalCartData} setFinalCartData={setFinalCartData} />
            </Box>
          </Box> 

            <CustomSnackbar msg={msg} open={msgOpen} setOpen={setMsgOpen} vertical='top' horizontal='center' />
            {/* <Snackbar
              anchorOrigin = {{vertical:'top', horizontal:'center'}}
              open={msgOpen}
              onClose={()=>setMsgOpen(false)}
              message={msg}
              autoHideDuration={6000}
              action = {action}
            /> */}
        </div>
    );
}
