import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
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
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const SingleCard = ({ title, image, descr, imZ, category }) => {
  const router = useRouter();
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div>
      <Card
        style={{ backgroundColor: "transparent", height:"100%" }}
        className={styles.cardContent}
      >
        <CardMedia>
          <div
            onClick={() => setOpenInfo(true)}
            className={styles.imageWrapper}
          >
            {image}
          </div>
        </CardMedia>
        <p className={styles.title}>{title}</p>
        <CardContent className={styles.wrapperContent}>
          <p>{descr}</p>
          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <IconButton
                className={styles.icon}
                onClick={() => setOpenInfo(true)}
              >
                <Tooltip title="Informazioni" arrow>
                  <InfoOutlinedIcon />
                </Tooltip>
              </IconButton>
              <IconButton className={styles.icon}>
                <ShoppingBagOutlinedIcon />
              </IconButton>
            </div>
            <Chip label={category} color="primary"  size="small" variant="outlined" />
          </CardActions>
        </CardContent>
      </Card>
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
