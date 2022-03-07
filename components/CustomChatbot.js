import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Box, Button, Divider, Typography } from '@mui/material';

function Search(props){
  const [result, setResult] = useState('')
  useEffect(()=>{
    console.log(process.env.NEXT_PUBLIC_SERVER_URI+props.find)
    axios
    .get(process.env.NEXT_PUBLIC_SERVER_URI+props.find)
    // .then(res => {console.log(res.data); router.replace('/cuisine/'+res.data._id);})
    .then(res => {console.log(res.data);setResult(res.data)})
  },[])
  return(
    <div>
        {
          props.type == 1
          ?
            result!=''
            ?result.map((ele,index)=>
            <div key={index}>
              <Link href={'/cuisine/'+ele._id} >
                <Button  color='secondary' >{ele.name}</Button>
              </Link> 
            </div>)
            :'no results found'
          :
            result!=''
            ?result.map((ele,index)=>
            <Box key={index} sx={{}}>  
              <Box sx={{display:'flex', justifyContent:'space-between', margin:'auto', marginTop:1, marginBottom:1}}>
                <Link href={'/cuisine/'+ele.cuisine_id._id+"#"+ele._id} >
                  <Typography variant='div' align='left' sx={{fontWeight:100, cursor:'pointer', width:'80%'}}>
                      {ele.name}
                  </Typography>
                </Link> 
                <Typography variant='span' align='left' sx={{fontWeight:100}}>
                ₹{ele.price}
                </Typography>
                
              </Box>
              <Divider light />
            </Box>)
            :'no results found'

        }
      </div>
  );
}

const BMI = (props) => {
  const router = useRouter()
  
  const { steps } = props;
//  if(!steps.cuisine && !steps.cuisine.value && !steps.food && !steps.food.value)
//   return
//   const search = steps.query.value
//   console.log(steps.cuisine.value)
  const query = 
    steps.query.value == 1
    ?'findcuisines/'+steps.cuisine.value
    :'findfoods/'+steps.food.value
  
  return (
    <div className="test">
      Search Result: 
      <br/>
      <Search find={query} type={steps.query.value} />
    </div>
  );
};

BMI.propTypes = {
  steps: PropTypes.object,
  botAvatar:PropTypes.string,

};

BMI.defaultProps = {
  steps: undefined,
};


function BMIExample (){

 
    const validator=(value) => {
      if (isNaN(value)) {
        return 'value should be a number';
      } else if (value < 0) {
        return 'value should be positive';
      }

      return true;
    }

    return (
      <ChatBot
        floating={true}
        botAvatar="/logo.png"
        steps={[
          {
            id: '1',
            message: 'Welcome to GrabAGrub!',
            trigger: '2',
          },
          {
            id: '2',
            message: 'Ask me anything you are looking for',
            trigger: 'query',
          },
          {
            id: 'query',
            options: [
              { value: 1, label: 'Cuisine', trigger: '4' },
              { value: 2, label: 'Food', trigger: '3' },
            ],
          },
          {
            id: '4',
            message: 'Enter cuisine name',
            trigger:'cuisine',
          },
          {
            id: 'cuisine',
            trigger:'searchresult',
            user: true, 
          },
          {
            id: '3',
            message: 'Enter food name',
            trigger:'food',
          },
          {
            id: 'food',
            trigger:'searchresult',
            user: true, 
          },
          {
            id:'searchresult',
            component: <BMI />,
            trigger: 'again',
          },
          {
            id: 'again',
            message: 'Do you want to search again?',
            trigger:'op'
            
          },
          {
            id:'op',
            options: [
                { value: 1, label: 'Yes', trigger: '1' },
                { value: 2, label: 'No', trigger: '5' },
            ],
          }, 
          {
              id:'5',
              message: 'Click on me anytime. I will be right here',
              trigger:'query'
          }
        ]}
      />
    );
}


export default BMIExample;