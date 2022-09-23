import { TextField, Typography, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";

const ContactUs = () => {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div >
      <Typography variant="h5">Contattaci</Typography>
      <Typography >
        Scrivici per qualsiasi informazione
      </Typography>
      <form >
        <TextField
          autoComplete="off"
          required
          label="Oggetto"
          variant="filled"
          size="small"
          fullWidth
          color="secondary"
        >
          {" "}
        </TextField>
        <TextField
          autoComplete="off"
          required
          minRows={15}
          multiline
          label="Contenuto"
          variant="filled"
          size="small"
          fullWidth
          color="secondary"
        ></TextField>
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Invia
        </Button>
      </form>

      <div >
        <Typography>Oppure contattaci tramite i nostri canali social</Typography>
        <div style={{ display: "flex", justifyContent: matches ? "start" : "space-around" }}>
          <IconButton>
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <InstagramIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
