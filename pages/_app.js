import { ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import theme from "../styles/main";
import Navigation from "./components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
