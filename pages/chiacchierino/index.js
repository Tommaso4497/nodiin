import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import copertina from "../../images/copertina.jpg";


const Chiacchierino = () => {
  return (
    <div>
        <Image src={copertina}/>
        <Typography style={{paddingTop:"1rem", textAlign:"center", fontStyle:"italic"}} variant="h4">Chiacchierino</Typography>
        <Typography style={{paddingTop:"1rem", textAlign:"center", fontStyle:"italic"}} variant="h5">In questa seziona potrai trovare tutti i miei lavori in Chiacchierino!</Typography>
    </div>
  )
}

export default Chiacchierino
