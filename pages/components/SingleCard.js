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
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import InfoDialog from "./InfoDialog";

const SingleCard = ({ title, image, descr, imZ }) => {
  const router = useRouter();
  const [openInfo, setOpenInfo] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Card sx={{ backgroundColor: "transparent", height: "100%" }}>
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
            <Tooltip title="Ingrandisci" arrow>
              <IconButton onClick={() => setOpenInfo(true)}>
                <ZoomInIcon />
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
      <InfoDialog open={openInfo} title={title} zoomedImg={imZ} onClose={() => (setOpenInfo(false))} />
    </div>
  );
};

export default SingleCard;
