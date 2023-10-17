import {
  Button,
  IconButton,
  Snackbar,
  TextField,
  TextareaAutosize,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./Contatti.module.css";
import Checkbox from "@mui/material/Checkbox";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Close from "@mui/icons-material/Close";
import TikTokIcons from "../../icons/TikTokIcons";
import theme from "../../styles/main";
import { useRouter } from "next/router";
import { useRef } from "react";
import emailJs from "@emailjs/browser";

const Contatti = () => {
  const [confirm, setConfirm] = useState(false);
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const form = useRef();
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailJs
      .sendForm(
        "service_9ky36ru",
        "template_oz6byla",
        form.current,
        "21RBqklwr7ZB3s4fr"
      )
      .then((response) => {
  
        console.log('SUCCESS!', response.status, response.text);
     }, (error) => {
        console.log('FAILED...', error);
     });
    }

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen(false)}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <div className={styles.pageTitle}>
        <p style={{ marginBlock: "0" }}>Contatti</p>
      </div>
      <p className={styles.subtitle}>
        Per qualsiasi curiosità, non esitare a contattarci!
      </p>
      <div className={styles.contactsWrapper}>
        <div className={styles.socialWrapper}>
          <h2 className={styles.iconTitle}>
            Seguici sui social per rimanere aggiornato su novità e ultime
            creazioni
          </h2>
          <div className={styles.iconWrapper}>
            <IconButton
              className={styles.iconButton}
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61551068286214"
            >
              <FacebookIcon
                style={{ color: "#000" }}
                fontSize={matches ? "large" : "medium"}
              />
            </IconButton>
            <IconButton
              className={styles.iconButton}
              target="_blank"
              href="https://www.instagram.com/nodi_in_chiacchierino/"
            >
              <InstagramIcon
                style={{ color: "#000" }}
                fontSize={matches ? "large" : "medium"}
              />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.tiktok.com/@nodiinchiacchierino?_t=8dXO076c9NK&_r=1"
            >
              <TikTokIcons
                color={"#000"}
                height={matches ? "24px" : "20px"}
                width={matches ? "24px" : "20px"}
              />
            </IconButton>
          </div>
        </div>
        <div className={styles.emailWrapper}>
          <h2 className={styles.formTitle}>Inviaci una mail</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.formWrapper}>
              <TextField
                label="Nome"
                type="text"
                name="from_name"
                variant="outlined"
                placeholder="Maria"
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                name="from_email"
                variant="outlined"
                placeholder="prova@esempio.it"
              />
              <textarea
                id="message"
                label="Messaggio:"
                type="text"
                name="message"
                placeholder="Inserisci qui il messaggio..."
                multiline
                minRows={matches ? 20 : 10}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Checkbox
                  checked={confirm}
                  onChange={() => {
                    setConfirm(!confirm);
                  }}
                />
                <p>
                  Ho letto e accetto la{" "}
                  <a
                    rel="noopener noreferrer"
                    href="https://nodiinchiacchierino.it/privacypolicy/"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
            <Button
              className={confirm ? styles.confirm : styles.notConfirm}
              disabled={!confirm}
              type="submit"
              value="Submit"
            >
              Invia
            </Button>
          </form>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          textDecoration: "underline",
          color: "var(--color-primary)",
          cursor: "pointer",
        }}
      >
        <p
          onClick={() => {
            router.back();
          }}
        >
          Torna alla home
        </p>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Mail inviata"
        action={action}
      />
    </div>
  );
};
export default Contatti;
