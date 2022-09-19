import React from "react";
import styles from "./Navigation.module.css";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import theme from "../../styles/main";
import { menuElement } from "../utilsFunction/utilsFunction";

const Navigation = () => {
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(false);

  const elementWeb = menuElement.map((element) => (
    <Button
      key={element?.id}
      variant="contained"
      onClick={() => {
        setOpen(false);
        router.push(`${element?.path}`);
      }}
    >
      {element.section}
    </Button>
  ));

  const elementsMobile = menuElement.map((element) => (
    <ListItem key={element?.id}>
      <ListItemButton
        onClick={() => {
          setOpen((prev) => !prev);
          router.push(`${element?.path}`);
        }}
      >
        <ListItemIcon>{element?.icon}</ListItemIcon>
        {element?.section}
      </ListItemButton>
    </ListItem>
  ));

  return (
    <div className={styles.navigationWrapper}>
      <div style={{ display: matches ? "none" : "block" }}>
        <AppBar position="static" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Nodi in chiacchierino</Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="persistent" anchor="left" open={open}>
          <div className={styles.wrapperDrawer}>
            <IconButton
              onClick={() => {
                setOpen(false);
              }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            Menu
          </div>
          <Divider />
          <List>{elementsMobile}</List>
          <ListItem className={styles.footerWrapper}>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </ListItem>
        </Drawer>
      </div>
      <div
        className={styles.headerWrapper}
        style={{
          display: matches ? "flex" : "none",
        }}
      >
        <div>
          <Typography>Nodi in chiacchierino</Typography>
        </div>
        <div className={styles.buttonHeaderWrapper}>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          {elementWeb}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
