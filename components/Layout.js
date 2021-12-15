import { ThemeProvider } from "@mui/material";
import AppTheme from "./AppTheme";
import CuisinsBar from "./CuisinsBar";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {

    const cuisinsmenu = ['Chinese', "Continental", 'Mughlai', 'Thai', 'Mexican', 'Italian', 'Indian', 'French', 'Korean']
    

    return (
      <>
        <ThemeProvider theme={AppTheme}>
            <Navbar />
            {/* <CuisinsBar menu={cuisinsmenu} /> */}
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
      </>
    )
}