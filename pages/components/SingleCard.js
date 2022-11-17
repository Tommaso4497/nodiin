import { Chip, Divider, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import styles from "./SingleCard.module.css";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import InfoDialog from "./InfoDialog";
import CircleIcon from "@mui/icons-material/Circle";
import ImageEdit from "./ImageEdit";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";

const SingleCard = ({ title, pics = [], descr, category, cat }) => {
  const [openInfo, setOpenInfo] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const selectedImage = pics[selectedColor];
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.image} onClick={() => setOpenInfo(true)}>
          {selectedImage?.imG && (
            <ImageEdit url={selectedImage.imG} w={450} h={300} />
          )}
        </div>
        <div className={styles.title}>{title}</div>
        <Divider />
        <div className={styles.descriptionWrapper}>{descr}</div>
        <p style={{ marginBottom: "0" }}> Colori: </p>
        <div
          style={{
            paddingTop: "1rem",
            display: "grid",
            gridTemplateColumns: matches
              ? "repeat(12, 1fr)"
              : "repeat(7, .5fr)",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          {pics.map((col, i) => (
            <button
              key={col?.name}
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                padding: "0",
              }}
              onClick={() => setSelectedColor(i)}
            >
              <Tooltip title={col.name}>
                {col.color ? (
                  <CircleIcon
                    style={{
                      fill: `${col.color}`,
                      stroke: selectedColor == i ? "#c9184a" : "gray",
                      strokeWidth: selectedColor == i ? "3px" : "1px",
                    }}
                  />
                ) : (
                  <div className={styles.rainbow} style={{border:selectedColor == i ? "3px solid #c9184a" : ""}} />
                )}
              </Tooltip>
            </button>
          ))}
        </div>
        <div className={styles.footerCard}>
          <div>
            <IconButton
              className={styles.icon}
              onClick={() => setOpenInfo(true)}
            >
              <ZoomInIcon />
            </IconButton>
          </div>
          <div className={styles.chipWrapper}>
            <Chip variant="outlined" size="small" color="primary" label={cat} />
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
        zoom={selectedImage?.imG}
        onClose={() => setOpenInfo(false)}
      ></InfoDialog>
    </div>
  );
};

export default SingleCard;
