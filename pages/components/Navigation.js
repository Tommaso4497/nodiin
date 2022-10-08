import React from "react";
import styles from "./Navigation.module.css";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import {
  AppBar,
  Button,
  ButtonGroup,
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
import logoOriz from "../../images/logoOriz.png";

const Navigation = () => {
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);

  const elementWeb = menuElement.map((element) => (
    <ButtonGroup>
      <Button
        key={element?.id}
        onClick={() => {
          router.push(`${element?.path}`);
        }}
      >
        {element.section}
      </Button>
    </ButtonGroup>
  ));

  const elementsMobile = menuElement.map((element) => (
    <ListItem key={element?.id}>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
          router.push(`${element?.path}`);
        }}
      >
        <ListItemIcon>{element?.icon}</ListItemIcon>
        {element?.section}
      </Button>
    </ListItem>
  ));

  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.view}>
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Image src={logoOriz} width="240" />
              <Image src={logo} width="40" height="40" />
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
            <ListItem>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.instagram.com/nodiinchiacchierino/"
              >
                <InstagramIcon />
              </IconButton>
            </ListItem>
          </List>
        </Drawer>
      </div>
      <div className={styles.headerWrapper}>
        <Image src={logo} width="40" height="40"  />
        <div>{elementWeb}</div>
      </div>
    </div>
  );
};

export default Navigation;
