import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useCallback, useState } from "react";
import styles from "./ContactUs.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";

const ContactUs = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr", padding: "1rem" }}>
        <form autoComplete="off" onSubmit={draw}>
          <div className={styles.contentForm}>
            <TextField
              autoComplete="off"
              required
              label="inserisci la tua email"
              variant="filled"
              size="small"
              type="email"
              fullWidth
              color="primary"
              value={email}
              onChange={(e) => { setEmail(e.target.value); }}
            ></TextField>
            <TextField
              autoComplete="off"
              required
              label="Oggetto"
              variant="filled"
              size="small"
              fullWidth
              color="primary"
              value={obj}
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
              color="primary"
              value={content}
              onChange={(e) => { setContent(e.target.value); }}
            ></TextField>
          </div>
          <div className={styles.wrapperButton}>
            <Button disabled type="submit" color="primary" variant="outlined" startIcon={<SendIcon />} >
              Invia
            </Button>
          </div>
        </form>
      </div>
      <div style={{ textAlign: matches ? "start" : "center" }}>
        <p className={styles.pageSubtitle}>Oppure contattaci tramite i nostri social</p>
      </div>
    </div>
  );
};

export default ContactUs;
