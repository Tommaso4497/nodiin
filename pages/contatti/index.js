import { Button, Input, TextField, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import styles from "./Contatti.module.css";

const Contatti = () => {
  const [confirm, setConfirm] = useState(false);
  return (
    <div>
      <div className={styles.pageTitle}>
        <p style={{ marginBlock: "0" }}>Contatti</p>
      </div>
      <p>Per qualsiasi curiosità, non esitare a contattarci!</p>
      <div style={{ display: "grid", gridTemplateColumns: " 1fr 1fr" }}>
        <div style={{ backgroundColor: "#f00" }}>
          <Button>Coap</Button>
        </div>
        <div
          style={{ backgroundColor: "#ff0", padding: "1rem 10rem 1rem 10rem" }}
        >
          <form>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <TextField
                label="Email"
                type="email"
                name="email"
                variant="outlined"
              />
              <TextField
                label="Oggetto"
                type="text"
                name="object"
                variant="outlined"
              />
              <TextField
                label="Oggetto"
                type="text"
                name="object"
                multiline
                minRows={20}
                variant="outlined"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  onChange={() => {
                    setConfirm(!confirm);
                  }}
                  type="checkbox"
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
            className={confirm? styles.confirm : styles.notConfirm}
              disabled={!confirm}
              type="submit"
              value="Submit"
            >
              Invia
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contatti;
