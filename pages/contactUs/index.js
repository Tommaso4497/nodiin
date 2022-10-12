import { TextField, Typography, Button, IconButton, drawerClasses } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useCallback, useState } from "react";
import styles from "./ContactUs.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";

const ContactUs = () => {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [email, setEmail] = useState();
  const [obj, setObj] = useState();
  const [content, setContent] = useState();

  const draw = useCallback((e) => {
    e.preventDefault();
    console.log("email:", email, "obj:", obj, "content:", content);
  }, [email, content, obj]);

  return (
    <div className={styles.contentWrapper}>
      <p className={styles.pageTitle}>Contattaci</p>
      <p className={styles.pageSubtitle}>Scrivici per qualsiasi informazione</p>
      <form autoComplete="off" onSubmit={draw}>
        <div className={styles.contentForm}>
          <TextField
            autoComplete="off"
            required
            label="Email"
            variant="filled"
            size="small"
            type="email"
            fullWidth
            color="secondary"
            onChange={(e) => { setEmail(e.target.value); }}
          ></TextField>
          <TextField
            autoComplete="off"
            required
            label="Oggetto"
            variant="filled"
            size="small"
            fullWidth
            color="secondary"
            onChange={(e) => { setObj(e.target.value); }}
          ></TextField>
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
            onChange={(e) => { setContent(e.target.value); }}
          ></TextField>
        </div>
        <div className={styles.wrapperButton}>
          <Button type="submit" color="primary" variant="outlined" startIcon={<SendIcon />} >
            Invia
          </Button>
        </div>
      </form>

      <div style={{ textAlign: matches ? "start" : "center" }}>
        <p className={styles.pageSubtitle}>Oppure contattaci tramite i nostri social</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton className={styles.icon}>
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton className={styles.icon} target="_blank" href="https://www.instagram.com/nodiinchiacchierino/" >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
