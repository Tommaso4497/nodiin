import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import styles from "./Navigation.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useRouter } from 'next/router'

const Navigation = () => {
    const router = useRouter()
  return (
    <div className={styles.navigationWrapper}>
      <div>
        <Typography variant="h5">Nodi in chiacchierino</Typography>
      </div>
      <div className={styles.buttonNavigationWrapper}>
        <button className={styles.socialButton}>
          <FacebookIcon fontSize="large" />
        </button>
        <button className={styles.socialButton}>
          <InstagramIcon fontSize="large" />
        </button>
        <Button onClick={() => router.push('/')}>Home</Button>
        <Button disabled>Chiacchierino</Button>
        <Button disabled>Uncinetto</Button>
        <Button onClick={() => router.push('/colors')}>Colori</Button>
        <Button disabled>Informazioni</Button>
      </div>
    </div>
  );
};

export default Navigation;
