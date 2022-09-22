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
import { menuElement } from "../../utilsFunction/utilsFunction";
import Image from "next/image";
import logo from "../../images/logo.png";


const Navigation = () => {
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(false);

  const elementWeb = menuElement.map((element) => (
    <Button
      key={element?.id}
      variant="contained"
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
            <div style={{display:"flex", alignItems:"center", width:"100%", justifyContent:"space-around"}}>
            <Typography variant="h6">Nodi in chiacchierino</Typography>
            <Image src={logo} width="40" height="40"/>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="temporary" anchor="left" open={open} onClose={() => { setOpen(prev => !prev); }} >
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
          <List className={styles.footerWrapper}>
            <ListItem >
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </ListItem>
          </List>
        </Drawer>
      </div>
      <div
        className={styles.headerWrapper}
        style={{
          display: matches ? "flex" : "none",
        }}
      >
        <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
          <Image src={logo} width="50" height="50" />
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
