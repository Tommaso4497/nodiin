import { ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import theme from "../styles/main";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
