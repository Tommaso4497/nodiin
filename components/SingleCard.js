import { Divider } from "@mui/material";
import React from "react";
import styles from "./SingleCard.module.css";
import ImageEdit from "./ImageEdit";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../styles/main";

const SingleCard = ({ title, image }) => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
      <div className={styles.card}>
        <div className={styles.image}>
          <ImageEdit url={image} />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
  );
};

export default SingleCard;
