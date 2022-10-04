import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import styles from "./InfoDialog.module.css";

const InfoDialog = ({ open, title, zoomedImg, onClose }) => {
  return (
    <div>
      <Dialog open={open} maxWidth={"md"} onClose={onClose}>
        <DialogTitle className={styles.titleWrapper}>
          {title}
          <button className={styles.exitButton} onClick={onClose}><CloseIcon /></button>
        </DialogTitle>
        <DialogContent>
          <div>{zoomedImg}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InfoDialog;
