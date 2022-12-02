import { Chip, Divider, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import styles from "./SingleCard.module.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InfoDialog from "./InfoDialog";
import CircleIcon from "@mui/icons-material/Circle";
import ImageEdit from "./ImageEdit";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const SingleCard = ({ title, pics = [], descr, category, cat, size }) => {
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
        <p
          style={{ textAlign: "center", fontSize: ".8rem", fontWeight: "600" }}
        >
          Scheda tecnica
        </p>
        <div className={styles.stats}>
          <div>
            {size?.width && (
              <p style={{ fontSize: ".8rem" }}>Larghezza: {size?.width} cm</p>
            )}
            {size?.height && (
              <p style={{ fontSize: ".8rem" }}>Altezza: {size?.height} cm</p>
            )}
            {size?.lenght && (
              <p style={{ fontSize: ".8rem" }}>Lunghezza: {size?.lenght} cm</p>
            )}
            {size?.diameter && (
              <p style={{ fontSize: ".8rem" }}>Diametro: {size?.diameter} cm</p>
            )}
            {size?.adjustable && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: ".8rem",
                }}
              >
                <DoneOutlinedIcon color="success" fontSize="small" /> Regolabile
              </div>
            )}
            {cat === "Ciondolo" ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: ".8rem",
                }}
              >
                {size?.chain ? (
                  <DoneOutlinedIcon color="success" fontSize="small" />
                ) : (
                  <CloseOutlinedIcon color="error" fontSize="small" />
                )}
                Catenina
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            style={{
              display: "grid",
              gap:".75rem",
              gridTemplateColumns: matches
                ? "repeat(6, 1.3rem)"
                : "repeat(4, 1.3rem)",
                gridTemplateRows:" 1.3rem 1.3rem 1.3rem",
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                    <div
                      className={styles.rainbow}
                      style={{
                        border: selectedColor == i ? "3px solid #c9184a" : "",
                      }}
                    />
                  )}
                </Tooltip>
              </button>
            ))}
          </div>
          <div className={styles.footerCard}>
            <div>
              <Tooltip arrow title="Informazioni">
                <IconButton
                  className={styles.icon}
                  onClick={() => setOpenInfo(true)}
                >
                  <InfoOutlinedIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className={styles.chipWrapper}>
              <Chip
                variant="outlined"
                size="small"
                color="primary"
                label={cat}
              />
              <Chip
                variant="outlined"
                size="small"
                color="primary"
                label={category}
              />
            </div>
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
