import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#adc178",
    },
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          color:"#000",
          fontSize:"1rem",
          padding:".5rem .5rem",
          boxShadow:["none"],
          "&:hover":{
            backgroundColor:"#adc178",
            color:"#fff",
            boxShadow:["none"],
          }
        }
      }
    }
  }
});
export default theme;
