import { Divider, Typography } from '@mui/material';
import React from 'react';
import styles from "./Card.module.css";
import theme from "../../styles/main";

const Card = ({ title, image, descr }) => {
    return (
        <div className={styles.wrapperCard}>
            {image}
            <Typography variant="h5" className={styles.title}>{title}</Typography>
            <Divider />
            <Typography className={styles.description}>{descr}</Typography>
        </div>
    );
};

export default Card;