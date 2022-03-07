import Layout from '../components/layout'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import {AppWrapper} from '../components/context';
import { useState } from 'react';

function App({ 
  Component, 
  pageProps: { session, ...pageProps } 
}) {

  return ( 
    <AppWrapper>
    <SessionProvider session={session}>
      
        <Layout>
          <Component {...pageProps} />   
        </Layout>
      
    </SessionProvider>
    </AppWrapper>
  )
}

export default App
