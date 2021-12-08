import { ThemeProvider } from "@mui/material";
import AppTheme from "./AppTheme";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
      <>
        <ThemeProvider theme={AppTheme}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
      </>
    )
}