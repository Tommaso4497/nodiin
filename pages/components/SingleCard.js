import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import React from "react";
import styles from "./SingleCard.module.css";
import theme from "../../styles/main";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useRouter } from "next/router";

const SingleCard = ({ title, image, descr }) => {
  const router = useRouter();

  return (
    <Card sx={{ minWidth: 325, backgroundColor: "#adc178" }}>
      <CardMedia>
        <div className={styles.imageWrapper}>{image}</div>
      </CardMedia>
      <CardContent>
        <p className={styles.title}>{title}</p>
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
            <IconButton >
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Acquista" arrow>
            <IconButton >
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Contattaci" arrow>
            <IconButton onClick={() => {router.push("contactUs")}}>
              <EmailOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
