import { Divider } from "@mui/material";
import React, { useState } from "react";
import styles from "./SingleCard.module.css";
import InfoDialog from "./InfoDialog";
import ImageEdit from "./ImageEdit";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../styles/main";

const SingleCard = ({ title, descr,image }) => {
  const [openInfo, setOpenInfo] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.image} onClick={() => setOpenInfo(true)}>
          <ImageEdit url={image} />
        </div>
        <div className={styles.title}>{title}</div>
        <Divider />
        <div className={styles.descriptionWrapper}>{descr}</div>
        <div className={styles.stats}>
          <div className={styles.footerCard}>
          </div>
        </div>
      </div>
      <InfoDialog
        open={openInfo}
        zoom={image}
        onClose={() => setOpenInfo(false)}
      ></InfoDialog>
    </div>
  );
};

export default SingleCard;
