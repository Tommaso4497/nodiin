import { Divider, Typography } from '@mui/material';
import React from 'react';

const Card = ({ title, image, descr }) => {
    return (
        <div style={{ backgroundColor: "#adc178", border: "10px solid #adc178", borderRadius: "3%" }}>
            {image}
            <Typography variant="h5" style={{ textAlign: "center" }}>{title}</Typography>
            <Divider color="secondary" />
            <Typography variant="h6" style={{ textAlign: "center" }}>{descr}</Typography>
        </div>
    );
};

export default Card;