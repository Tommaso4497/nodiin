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
          borderRadius:"60%",
          padding:".5rem .5rem",
          boxShadow:["none"],
          "&:hover":{
            backgroundColor: "#7B8F4B",
            color:"#fff",
          }
        }
      }
    }
  }
});
export default theme;
