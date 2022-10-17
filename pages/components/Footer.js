import { IconButton } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import styles from "./Footer.module.css";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginBottom: "2rem",
      }}
    >
      <IconButton className={styles.iconButt}>
        <FacebookIcon fontSize="large" />
      </IconButton>
      <IconButton
        className={styles.iconButt}
        target="_blank"
        href="https://www.instagram.com/nodiinchiacchierino/"
      >
        <InstagramIcon fontSize="large" />
      </IconButton>
      <IconButton
        onClick={() => router.push("contactUs/")}
        className={styles.iconButt}
      >
        <EmailOutlinedIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Footer;
