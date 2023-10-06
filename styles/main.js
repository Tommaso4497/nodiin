import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c9184a",
    },
    secondary: {
      main: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor:"#c9184a",
          color: "#fff",
          fontSize: "1rem",
          padding: ".5rem .5rem",
          boxShadow: ["none"],
          borderRadius: "0",
          "&:hover": {
            border: "solid 1px #c9184a",
            color: "#c9184a",
          },
          "&:disabled" : {
            backgroundColor:"#EFEFEF",
            color:"#808080"
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          width: "240px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            backgroundColor: "#c9184a",
            width: "240px",
            boxSizing: "border-box",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});
export default theme;
