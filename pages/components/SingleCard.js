import {
  Button,
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
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import InfoDialog from "./InfoDialog";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const SingleCard = ({ title, image, descr, imZ }) => {
  const router = useRouter();
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div>
      <Card className={styles.cardContent} style={{backgroundColor:"transparent"}}>
        <CardMedia >
          <div onClick={() => setOpenInfo(true)} className={styles.imageWrapper}>{image}</div>
        </CardMedia>
        <p className={styles.title}>{title}</p>
        <CardContent className={styles.wrapperContent}>
          <p>{descr}</p>
          <CardActions>
            <IconButton className={styles.icon}>
              <InfoOutlinedIcon/>
            </IconButton>
            <IconButton className={styles.icon}>
              <ShoppingBagOutlinedIcon/>
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
      <InfoDialog open={openInfo} title={title} zoomedImg={imZ} onClose={() => (setOpenInfo(false))} />
    </div>
  );
};

export default SingleCard;
