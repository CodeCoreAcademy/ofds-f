import React, { useState } from 'react';
import { useSession } from "next-auth/react"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAppContext } from '../components/context';
import { Button, TextField } from '@mui/material';
// import Loading from '../../components/Loading';
import axios from 'axios';
import useSWR from 'swr';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import EditRoundedIcon from '@mui/icons-material/EditRounded';
// import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
// import SaveIcon from '@mui/icons-material/Save';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import AddIcon from '@mui/icons-material/Add';
// import { fabClasses, IconButton, Input, TextField } from '@mui/material';
// import Image from 'next/image'


function AddressManage(props) {
    const [editMode, setEditMode] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [address, setAddress] = useState({
        type:'',
        line1:'',
        line2:'',
        line3:'',
        city:'',
        pin:'',
        land:''
    })
    const [allAddress, setAllAddress] = useState(props.data.address)

    const addAddress=()=>{
        setAddress({
            type:'',
            line1:'',
            line2:'',
            line3:'',
            city:'',
            pin:'',
            land:''
        })
        setShowForm(true)
    }
    const save=()=>{
        // console.log(address)
        // console.log(props.data._id)
        axios.post(process.env.NEXT_PUBLIC_SERVER_URI+'customer/newaddress/', 
            {
                address:address,
                id:props.data._id
            }
        )
        .then(function (response) {
            console.log('saved')
            console.log(response)
            setAllAddress(response.data.address)
            setShowForm(false)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const saveAfterEdit=(id)=>{
        // console.log(address)
        // console.log(props.data._id)
        axios.post(process.env.NEXT_PUBLIC_SERVER_URI+'customer/editsave/', 
            {
                address:address,
                id:props.data._id
            }
        )
        .then(function (response) {
            console.log('saved')
            setEditMode(false)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const edit=(ele)=>{
        setAddress({
            type:ele.type,
            line1:ele.line1,
            line2:ele.line2,
            line3:ele.line3,
            city:ele.city,
            pin:ele.pin,
            land:ele.landmark
        })
        setEditMode(true)
    }
    const delAddr=(id)=>{
        // console.log(id)
        axios.post(process.env.NEXT_PUBLIC_SERVER_URI+'customer/deleteaddress/', 
            {
                cus_id:props.data._id,
                addr_id:id
            }
        )
        .then(function (response) {
            console.log('deleted')
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    return(
        <div>
            <Button variant="contained" onClick={addAddress}>Add an address</Button>
            {
                showForm
                ? <Box sx={{display:'flex', flexDirection:'column', width:'600px', padding:2}}>
                    <TextField style={{marginBottom:'10px'}} id="outlined-basic1" label="Enter Address Type" variant="outlined" value={address.type} onChange={(e)=>setAddress(()=>({...address, type:e.target.value}))}/>
                    <TextField style={{marginBottom:'10px'}} id="outlined-basic2" label="Address line 1" variant="outlined" value={address.line1} onChange={(e)=>setAddress(()=>({...address, line1:e.target.value}))}/>
                    <TextField style={{marginBottom:'10px'}} id="outlined-basic3" label="Address line 2" variant="outlined" value={address.line2} onChange={(e)=>setAddress(()=>({...address, line2:e.target.value}))}/>
                    <TextField style={{marginBottom:'10px'}} id="outlined-basic4" label="Address line 3" variant="outlined" value={address.line3} onChange={(e)=>setAddress(()=>({...address, line3:e.target.value}))}/>
                    <TextField style={{marginBottom:'10px'}} id="outlined-basic5" label="Ente City" variant="outlined" value={address.city} onChange={(e)=>setAddress(()=>({...address, city:e.target.value}))}/>
                    <TextField style={{marginBottom:'10px'}} id="outlined-basic6" label="Enter Pin" variant="outlined" value={address.pin} onChange={(e)=>setAddress(()=>({...address, pin:e.target.value}))}/>
                    <TextField style={{marginBottom:'10px'}} id="outlined-basic7" label="Enter landmark" variant="outlined" value={address.land} onChange={(e)=>setAddress(()=>({...address, land:e.target.value}))}/>
                    <Box>
                        <Button variant="contained" onClick={save} style={{marginRight:20}}>Save</Button>
                        <Button variant="contained" onClick={()=>setShowForm(false)}>Cancel</Button>
                    </Box>
                </Box>
                :''
            }
            <Box>
                {
                    allAddress.map((ele, index)=>
                        <Box style={{border:'1px solid #d2d2d2', borRadius:'10px', margin:'20px'}} key={index} sx={{display:'flex', flexDirection:'column', width:'600px', padding:2}}>
                            <Box style={{marginBottom:'20px'}} >
                                <Button variant="contained" onClick={()=>edit(ele)} style={{marginRight:20}}>Edit</Button>
                                <Button variant="contained" onClick={()=>delAddr(ele._id)}>Delete</Button>
                            </Box>
                            <TextField style={{marginBottom:'10px'}} InputProps={{ readOnly: !editMode }} id="outlined-basic1" label="Address Type" variant="outlined" value={editMode?address.type:ele.type} onChange={(e)=>setAddress(()=>({...address, type:e.target.value}))}/>
                            <TextField style={{marginBottom:'10px'}} InputProps={{ readOnly: !editMode }} id="outlined-basic2" label="Address line 1" variant="outlined" value={editMode?address.line1:ele.line1} onChange={(e)=>setAddress(()=>({...address, line1:e.target.value}))}/>
                            <TextField style={{marginBottom:'10px'}} InputProps={{ readOnly: !editMode }} id="outlined-basic3" label="Address line 2" variant="outlined" value={editMode?address.line2:ele.line2} onChange={(e)=>setAddress(()=>({...address, line2:e.target.value}))}/>
                            <TextField style={{marginBottom:'10px'}} InputProps={{ readOnly: !editMode }} id="outlined-basic4" label="Address line 3" variant="outlined" value={editMode?address.line3:ele.line3} onChange={(e)=>setAddress(()=>({...address, line3:e.target.value}))}/>
                            <TextField style={{marginBottom:'10px'}} InputProps={{ readOnly: !editMode }} id="outlined-basic5" label="City" variant="outlined" value={editMode?address.city:ele.city} onChange={(e)=>setAddress(()=>({...address, city:e.target.value}))}/>
                            <TextField style={{marginBottom:'10px'}} InputProps={{ readOnly: !editMode }} id="outlined-basic6" label="Pin" variant="outlined" value={editMode?address.pin:ele.pin} onChange={(e)=>setAddress(()=>({...address, pin:e.target.value}))}/>
                            <TextField style={{marginBottom:'10px'}} InputProps={{ readOnly: !editMode }} id="outlined-basic7" label="landmark" variant="outlined" value={editMode?address.land:ele.landmark} onChange={(e)=>setAddress(()=>({...address, land:e.target.value}))}/>
                            {
                                editMode
                                ?<Box>
                                    <Button variant="contained" onClick={saveAfterEdit(ele._id)} style={{marginRight:20}}>Save</Button>
                                    <Button variant="contained" onClick={()=>setEditMode(false)}>Cancel</Button>
                                </Box>
                                :''

                            }
                            
                        </Box>
                    )
                }
            </Box>           
        </div>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
export default function Personal() {
    const { data: session, status } = useSession()
    const {state} = useAppContext()
    // const fetch_cuisines = url => axios.get(process.env.NEXT_PUBLIC_SERVER_URI+url).then(res => res.data)
    // const { data: cuisineData, cuisineDataStatus } = useSWR('allcuisines/', fetch_cuisines)
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Address" {...a11yProps(0)} />
                {/* <Tab label="Foods" {...a11yProps(1)} /> */}

            </Tabs>
            <TabPanel value={value} index={0}>
              <AddressManage data={state.customer}/>
            </TabPanel>
            {/* <TabPanel value={value} index={1}>
                Item Two
            </TabPanel> */}
        </Box>
    );
}