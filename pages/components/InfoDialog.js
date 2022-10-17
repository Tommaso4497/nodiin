import { Dialog } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./InfoDialog.module.css";

const InfoDialog = ({ open, zoom, onClose }) => {
  return (
    <Dialog open={open} maxWidth={"md"}>
      {zoom}
      <button onClick={onClose} className={styles.exitbutton}>
        <CloseIcon />
      </button>
    </Dialog>
  );
};

export default InfoDialog;
