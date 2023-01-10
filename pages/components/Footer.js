import { IconButton, SvgIcon } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from "@mui/icons-material/Telegram";
import styles from "./Footer.module.css";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";


const Footer = () => {
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className={styles.footerWrapper}

    >
      <p className={styles.footerTitle}>
        Seguici sui social per le ultime creazioni!
      </p>

      <div className={styles.iconWrapper}>
        <IconButton className={styles.iconButt}>
          <FacebookIcon fontSize={matches ? "large" : "medium"} />
        </IconButton>
        <IconButton
          className={styles.iconButt}
          target="_blank"
          href="https://www.instagram.com/nodiinchiacchierino/"
        >
          <InstagramIcon fontSize={matches ? "large" : "medium"} />
        </IconButton>
        {/* <IconButton
          onClick={() => router.push("contactUs/")}
          className={styles.iconButt}
        >
          <EmailOutlinedIcon fontSize={matches ? "large" : "medium"} />
        </IconButton> */}
        <IconButton
          // className={styles.iconButt}
          target="_blank"
          href="https://t.me/+pvDtZ4zVIYk3OGU8"
        >
          <TelegramIcon fontSize={matches ? "large" : "medium"} />
        </IconButton>
        <IconButton
          className={styles.iconButt}
          target="_blank"
          href="https://twitter.com/ndChiacchierino"
        >
          <TwitterIcon fontSize={matches ? "large" : "medium"} />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
