import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./SingleCard.module.css";
import theme from "../../styles/main";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";

const SingleCard = ({ title, image, descr }) => {
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Card sx={{ backgroundColor: "transparent" }}>
      <CardMedia>
        <div className={styles.imageWrapper}>{image}</div>
      </CardMedia>
      <p className={styles.title}>{title}</p>
      <CardContent style={{ padding: ".5rem" }}>
        <Divider className={styles.description} />
        <p>{descr}</p>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Tooltip title="Informazioni" arrow>
            <IconButton>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Acquista" arrow>
            <IconButton>
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Contattaci" arrow>
            <IconButton
              onClick={() => {
                router.push("contactUs");
              }}
            >
              <EmailOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
