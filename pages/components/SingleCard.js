import { Chip, Divider, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import styles from "./SingleCard.module.css";
import theme from "../../styles/main";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import InfoDialog from "./InfoDialog";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const SingleCard = ({ title, image, descr, imZ, category, link }) => {
  const router = useRouter();
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div>
      <div
        style={{
          padding: "1rem",
          margin: ".5rem",
          borderRadius: "4px",
          height: "30rem",
          boxShadow:
            "rgba(201, 24, 74, 0.2) 0px 2px 1px -1px, rgba(201, 24, 74, 0.14) 0px 1px 1px 0px, rgba(201, 24, 74, 0.12) 0px 1px 3px 0px",
          position: "relative",
        }}
      >
        {image}
        <div
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontFamily: "Italianno",
            marginBottom: "auto",
          }}
        >
          {title}
        </div>
        <Divider />
        <div
          style={{
            paddingTop: "1rem",
            fontSize: "1.5rem",
            fontFamily: "Italianno",
          }}
        >
          {descr}
        </div>
        <div
          style={{
            display: "flex",
            padding: "0 .5rem",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            width: "100%",
            bottom: "0",
            left: "0",
          }}
        >
          <div>
            <IconButton className={styles.icon}>
              <ZoomInIcon />
            </IconButton>
            <IconButton className={styles.icon}>
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </div>
          <div>
            <Chip
              variant="outlined"
              size="small"
              color="primary"
              label={category}
            />
          </div>
        </div>
      </div>

      <InfoDialog
        open={openInfo}
        title={title}
        zoomedImg={imZ}
        onClose={() => setOpenInfo(false)}
      />
    </div>
  );
};

export default SingleCard;
