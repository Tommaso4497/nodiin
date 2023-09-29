import { IconButton } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import styles from "./Footer.module.css";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../styles/main";
import TikTokIcons from "../icons/TikTokIcons";
import { MailOutline } from "@mui/icons-material";
const Footer = () => {
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <div className={styles.footerWrapper}>
        <p className={styles.footerTitle}>
          Seguici sui social per le ultime creazioni!
        </p>

        <div className={styles.iconWrapper}>
          <IconButton
            className={styles.iconButton}
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61551068286214"
          >
            <FacebookIcon fontSize={matches ? "large" : "medium"} />
          </IconButton>
          <IconButton
            className={styles.iconButton}
            target="_blank"
            href="https://www.instagram.com/nodi_in_chiacchierino/"
          >
            <InstagramIcon color="#fff" fontSize={matches ? "large" : "medium"} />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://www.tiktok.com/@nodiinchiacchierino?_t=8dXO076c9NK&_r=1"
          >
            <TikTokIcons
              color={"#fff"}
              height={matches ? "24px" : "20px"}
              width={matches ? "24px" : "20px"}
            />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://t.me/+pvDtZ4zVIYk3OGU8"
            className={styles.iconButton}
          >
            <TelegramIcon fontSize={matches ? "large" : "medium"} />
          </IconButton>
          <IconButton
            className={styles.iconButton}
            target="_blank"
            href="https://twitter.com/ndChiacchierino"
          >
            <TwitterIcon fontSize={matches ? "large" : "medium"} />
          </IconButton>
        </div>
        <div className={styles.wrapperPolicyLink}>
          <p onClick={()=>{router.push("/cookiepolicy")}} className={styles.policyLink}>Cookie Policy</p>
          <p onClick={()=>{router.push("/privacypolicy")}} className={styles.policyLink}>Privacy Policy</p>
        </div> 
        <div className={styles.policyLabel}>
          Copyright © 2023 Nodi in Chiacchierino
          <p>
            Edit By <br />
              <a href="mailto:info@tommasoditusa.it" className={styles.mail}>
                <MailOutline />
                info@tommasoditusa.it
              </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
