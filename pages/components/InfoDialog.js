import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

const InfoDialog = ({ open, title, zoomedImg, onClose }) => {
  return (
    <div>
      <Dialog open={open} maxWidth={"lg"} onClose={onClose}>
        <DialogTitle>
            {title}
            <Button variant="outlined" onClick={onClose}>Chiudi</Button>
            </DialogTitle>
        <DialogContent>
          <div>{zoomedImg}
          <p>lunghezza: 25cm</p>
          <p>colore: oro metallizzato</p>
          </div>

        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InfoDialog;
