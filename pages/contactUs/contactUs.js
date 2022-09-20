import { TextField, Typography, Button, useMediaQuery, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";
import styles from "./contactUs.module.css";
import theme from "../../styles/main";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";


const contactUs = () => {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={styles.contentWrapper}>
      <Typography variant="h5">Contattaci</Typography>
      <Typography className={styles.spacing} >Scrivici per qualsiasi informazione!</Typography>
      <form className={styles.formWrapper} >
        <TextField autoComplete="off" required label="Oggetto" variant="filled" size="small" fullWidth color="secondary"> </TextField>
        <TextField autoComplete="off" required className={styles.spacing} minRows={15} multiline label="Contenuto" variant="filled" size="small" fullWidth color="secondary"> </TextField>
        <Button className={styles.spacing} type="submit" variant="contained" endIcon={<SendIcon />}>Invia</Button>
      </form>

      <div className={styles.footerTitle}>
        <Typography>Oppure Contattaci tramite i nostri social</Typography>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default contactUs;
