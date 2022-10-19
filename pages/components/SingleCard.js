import { Chip, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import styles from "./SingleCard.module.css";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import InfoDialog from "./InfoDialog";

const SingleCard = ({ title, image, descr, imZ, category, link, cat }) => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.image} onClick={() => setOpenInfo(true)}>
          {image}
        </div>
        <div className={styles.title}>
          {title}
        </div>
        <Divider />
        <div className={styles.descriptionWrapper}>
          {descr}
        </div>
        <div className={styles.footerCard}>
          <div>
            <IconButton
              className={styles.icon}
              onClick={() => setOpenInfo(true)}
            >
              <ZoomInIcon />
            </IconButton>
            <IconButton className={styles.icon}>
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </div>
          <div className={styles.chipWrapper}>
            <Chip variant="outlined" size="small" color="primary" label={cat} />
            <Chip variant="outlined" size="small" color="primary" label={category} />
          </div>
        </div>
      </div>
      <InfoDialog
        open={openInfo}
        zoom={imZ}
        onClose={() => setOpenInfo(false)}
      ></InfoDialog>
    </div>
  );
};

export default SingleCard;
