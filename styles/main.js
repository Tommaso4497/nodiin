import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#adc178",
    },
    secondary: {
      main: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000",
          fontSize: "1rem",
          padding: ".5rem .5rem",
          boxShadow: ["none"],
          "&:hover": {
            backgroundColor: "#adc178",
            color: "#fff",
            boxShadow: ["none"],
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
            backgroundColor: "#fefae0",
            width: "240px",
            boxSizing: "border-box",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
        },
      },
    },
  },
});
export default theme;
