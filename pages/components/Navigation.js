import React from "react";
import styles from "./Navigation.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import { menuElement } from "../../utilsFunction/utilsFunction";
import Image from "next/image";
import logo from "../../images/logo.png";

const Navigation = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const elementWeb = menuElement.map((element) => (
    <Button
      key={element?.id}
      onClick={() => {
        router.push(`${element?.path}`);
      }}
    >
      {element.section}
    </Button>
  ));

  const elementsMobile = menuElement.map((element) => (
    <ListItem key={element?.id}>
      <ListItemButton
        style={{ color: "#fff" }}
        onClick={() => {
          setOpen((prev) => !prev);
          router.push(`${element?.path}`);
        }}
      >
        <ListItemIcon style={{ color: "#fff" }}>{element?.icon}</ListItemIcon>
        {element?.section}
      </ListItemButton>
    </ListItem>
  ));

  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.view}>
        <AppBar position="static" open={open}>
          <Toolbar>
            <IconButton
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              edge="start"
            >
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>
            <div className={styles.imageWrapper}>
              <Image src={logo} width="40" height="40" alt="logo" />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={() => {
            setOpen((prev) => !prev);
          }}
        >
          <div className={styles.drawerHeader}>
            <button
              className={styles.backButton}
              onClick={() => {
                setOpen(false);
              }}
            >
              <KeyboardArrowLeftIcon style={{ color: "#fff" }} />
            </button>
            <p className={styles.drawerTitle}>Nodi in Chiacchierino</p>
          </div>
          <Divider />
          <List style={{ fontSize: "2rem", fontFamily: "Italianno" }}>
            {elementsMobile}
          </List>
          <div className={styles.footerWrapper}>
            <a className={styles.iconLinkDrawer} rel="noopener noreferrer">
              <FacebookIcon fontSize="large" style={{ color: "#fff" }} />
            </a>

            <a
              className={styles.iconLinkDrawer}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/nodiinchiacchierino/"
            >
              <InstagramIcon fontSize="large" style={{ color: "#fff" }} />
            </a>
            <a
              className={styles.iconLinkDrawer}
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/+pvDtZ4zVIYk3OGU8"
            >
              <TelegramIcon fontSize="large" style={{ color: "#fff" }} />
            </a>
          </div>
        </Drawer>
      </div>
      <div className={styles.headerWrapper}>
        <Image src={logo} width="40" height="40" alt="logo" />
        <div>{elementWeb}</div>
      </div>
    </div>
  );
};

export default Navigation;
