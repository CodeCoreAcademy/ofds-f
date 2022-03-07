import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  //let sharedState = {/* whatever you want */}
  const [state, setState] = useState({
    cart:null,
    cart_id:null,
    customer:null
  })

  useEffect(()=>{
    if(state.customer!=null) {
      // console.log(state.customer)
      axios.get(process.env.NEXT_PUBLIC_SERVER_URI+'viewcart/'+state.customer._id)
      .then(res => {
        console.log(res)
        setState(prev=>({...prev, cart_id:res.data==''?'':res.data._id, cart:res.data==''?[]:res.data.cart}))
      })
    }
  },[state.customer])
  
  return (
    <AppContext.Provider value={{state, setState}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}