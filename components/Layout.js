import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import AppTheme from "./AppTheme";
import CuisinsBar from "./CuisinsBar";
import DetailedCuisin from "./DetailedCuisin";
import Footer from "./Footer";
import Navbar from "./Navbar";
import db from './db';
export default function Layout({ children }) {

    const cuisinsmenu = ['Chinese', "Continental", 'Mughlai', 'Thai', 'Mexican', 'Italian', 'Indian', 'French', 'Korean']
    
    const [cuisines, setCuisines] = useState(db.cuisines);
    const [selectedCuisine, setSelectedCuisine] = useState('');
    return (
      <>
      
        <ThemeProvider theme={AppTheme}>
            <Navbar />
            {/* <CuisinsBar cuisines={cuisines} setSelectedCuisine={setSelectedCuisine} /> */}
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
      </>
    )
}