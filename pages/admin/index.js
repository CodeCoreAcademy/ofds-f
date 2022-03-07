import React, { useState } from 'react';
import { useSession } from "next-auth/react"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Loading from '../../components/Loading';
import axios from 'axios';
import useSWR from 'swr';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import SaveIcon from '@mui/icons-material/Save';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AddIcon from '@mui/icons-material/Add';
import { fabClasses, IconButton, Input, TextField } from '@mui/material';
import Image from 'next/image'

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

// export default function VerticalTabs() {
  

//   return (
    
//   );
// }

function Row(props) {
  const [editMode, setEditMode] = useState(false)
  const [filedata, setFiledata] = useState('')
  const [name, setName] = useState(props.data.name)
  const [file, setFile] = useState('')
  const [saving, setSaving] = useState(false)
  const handleFile=(files)=>{
    setFile(files[0])
    // console.log(files[0])
    const reader = new FileReader()
    reader.addEventListener('load', function(){
      // console.log(this)
      setFiledata(this.result)
    })
    reader.readAsDataURL(files[0])
  }
  const save=()=>{
    if(file=='')
    {
      setEditMode(false)
      return
    }
    var formData = new FormData();
    formData.append("image", file);
    formData.append("name", name)
    formData.append("id",props.data._id)
    setSaving(true)
    axios.post(process.env.NEXT_PUBLIC_SERVER_URI+'updatecuisine/', 
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(function (response) {
        setSaving(false)
        setEditMode(false)
        setFile('')
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if(saving)
    return(
      <div>
        Saving...
      </div>
    );
  if(editMode)
    return(
      <Card sx={{minWidth: 275, width:'100%', marginBottom:1}}>
        <CardContent>
          <TextField fullWidth label="Cuisine Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} />
          <label htmlFor="icon-button-file">
            Change banner image
            <Input style={{display:'none'}} accept="image/*" id="icon-button-file" type="file" onChange={(e)=>handleFile(e.target.files) } />
            <IconButton color="secondary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          <Box sx={{width:'480px', height:'270px'}}>
            <Image width="480" height="270" src={ filedata==''? process.env.NEXT_PUBLIC_SERVER_URI+props.data.image : filedata} />
            {/* <Image width="480" height="270" src={ process.env.NEXT_PUBLIC_SERVER_URI+props.data.image} /> */}
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={save} variant="contained" startIcon={<SaveIcon />}>
            Save Changes
          </Button>
          <Button onClick={()=>setEditMode(false)} variant="contained" endIcon={<ClearRoundedIcon />}>
            Cancel
          </Button>
        </CardActions>
      </Card>
    );
  else
  return (
    
    <Card sx={{minWidth: 275, width:'100%', marginBottom:1, display:'flex', justifyContent:'space-between',alignItems:'center'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} >
          {props.data.name}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="edit" size="large" onClick={()=>setEditMode(true)}>
          <EditRoundedIcon />
        </IconButton>
        <IconButton aria-label="clear" size="large">
          <ClearRoundedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

function CuisineManage(){
  const fetch_cuisines = url => axios.get(process.env.NEXT_PUBLIC_SERVER_URI+url).then(res => res.data)
  const { data: cuisineData, cuisineDataStatus } = useSWR('allcuisines/', fetch_cuisines)
  const [formOpen, setFormOpen] = useState(false)
  if(!cuisineData)
    return (
        <div>
            <Loading />
        </div>
    );
  return(
    <div>
      All Cuisines
   
      <Button onClick={()=>setFormOpen(true)} variant="contained" startIcon={<AddIcon />}>
        Add new cuisine
      </Button>
      {
        formOpen
        ?
          <Box>
            form
          </Box>
        :''
      }
      {
        cuisineData.map((ele, index)=><Row data={ele} key={index} />)
      }
    </div>
  );
}

export default function Admin() {
    const { data: session, status } = useSession()
    // const fetch_cuisines = url => axios.get(process.env.NEXT_PUBLIC_SERVER_URI+url).then(res => res.data)
    // const { data: cuisineData, cuisineDataStatus } = useSWR('allcuisines/', fetch_cuisines)
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    if(!(status=='authenticated' && session.user.email=="grabagrub.info2022@gmail.com"))       
        return (
            <div>
                You are not an authentic admin
            </div>
        );
    
    
    
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
                <Tab label="Cuisines" {...a11yProps(0)} />
                <Tab label="Foods" {...a11yProps(1)} />

            </Tabs>
            <TabPanel value={value} index={0}>
              <CuisineManage />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Box>
    );
}
