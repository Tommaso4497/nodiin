import { TextField, Typography, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";


const contactUs = () => {
  return (
    <div style={{ padding: "1rem 2rem" }}>
      <Typography variant="h5">Contattaci</Typography>
      <Typography style={{ marginBottom: ".5rem" }}>Scrivici per qualsiasi informazione!</Typography>
      <form >
        <TextField label="Oggetto" variant="filled" size="small" fullWidth color="secondary"> </TextField>
        <TextField style={{ marginTop: "1rem" }} minRows={15} multiline label="Contenuto" variant="filled" size="small" fullWidth color="secondary"> </TextField>
        <Button style={{ marginTop: "1rem", gridColumn: "-2 / -1", placeSelf: "end" }} type="submit" variant="contained" endIcon={<SendIcon />}>Invia</Button>

      </form>
    </div>
  );
};

export default contactUs;
