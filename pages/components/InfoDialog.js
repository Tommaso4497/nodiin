import CloseIcon from "@mui/icons-material/Close";
import { Backdrop } from "@mui/material";
import React from "react";
import styles from "./InfoDialog.module.css";

const InfoDialog = ({ open, zoomedImg, onClose }) => {
  return (
    <div>
      <Backdrop className={styles.wrapper} open={open} onClick={onClose}>
        <button className={styles.exitButton} onClick={onClose}>
          <CloseIcon />
        </button>
        {zoomedImg}
      </Backdrop>
    </div>
  );
};

export default InfoDialog;
