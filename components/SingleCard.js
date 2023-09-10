import { Divider } from "@mui/material";
import React from "react";
import styles from "./SingleCard.module.css";
import ImageEdit from "./ImageEdit";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../styles/main";

const SingleCard = ({ title, descr,image }) => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.image}>
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
    </div>
  );
};

export default SingleCard;
