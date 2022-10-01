import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./SingleCard.module.css";
import theme from "../../styles/main";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const SingleCard = ({ title, image, descr }) => {
  return (
    <Card sx={{ maxWidth: 320, backgroundColor: "#adc178" }}>
      <CardMedia>
        <div className={styles.imageWrapper}>{image}</div>
      </CardMedia>
      <CardContent>
        <Typography className={styles.title}>{title}</Typography>
        <Divider className={styles.description} />
        <Typography>{descr}</Typography>
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
            <IconButton>
              <EmailOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
