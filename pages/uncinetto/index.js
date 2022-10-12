import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import copertina from "../../images/copertina.jpg";


const Uncinetto = () => {
  return (
    <div>
      <Image src={copertina} />
      <Typography style={{ paddingTop: "1rem", textAlign: "center", fontStyle: "italic" }} variant="h4">Uncinetto</Typography>
      <Typography style={{ paddingTop: "1rem", textAlign: "center", fontStyle: "italic" }} variant="h5">In questa seziona potrai trovare tutti i miei lavori in Uncinetto!</Typography>
    </div>);
};

export default Uncinetto;
