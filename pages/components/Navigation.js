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
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";
import CollectionsIcon from "@mui/icons-material/Collections";
import HomeIcon from "@mui/icons-material/Home";
import theme from "../../styles/main";

const Navigation = () => {
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navigationWrapper}>
        <div style={{display: matches ? "none" : "block"}}>
          <AppBar position="static" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={() => {
                  setOpen(true);
                }}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Nodi in chiacchierino</Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: "240px",
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                backgroundColor: "#fefae0",
                width: "240px",
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <div>
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
            <List>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                    router.push("/");
                  }}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  Home
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                    router.push("/chiacchierino/Chiacchierino");
                  }}
                >
                  <ListItemIcon>
                    <CollectionsIcon />
                  </ListItemIcon>
                  Chiacchierino
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                    router.push("/uncinetto/Uncinetto");
                  }}
                >
                  <ListItemIcon>
                    <CollectionsIcon />
                  </ListItemIcon>
                  Uncinetto
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                    router.push("/informations/Informations");
                  }}
                >
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  Informazioni
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    setOpen(false);
                    router.push("/contactUs/contactUs");
                  }}
                >
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  Contattaci
                </ListItemButton>
              </ListItem>
              <ListItem style={{ position: "fixed", bottom: "0"}}>
                <IconButton><FacebookIcon /></IconButton>
                <IconButton><InstagramIcon/></IconButton>
              </ListItem>
            </List>
          </Drawer>
        </div>
        <div
          style={{
            display: matches ? "flex" : "none",
            backgroundColor: "#adc178",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: ".25rem .5rem",
          }}
        >
          <div>
            <Typography>Nodi in chiacchierino</Typography>
          </div>
          <div style={{ display: "flex", gap: ".75rem" }}>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <Button variant="contained" onClick={() => router.push("/")}>
              Home
            </Button>
            <Button
              variant="contained"
              onClick={() => router.push("/chiacchierino/Chiacchierino")}
            >
              Chiacchierino
            </Button>
            <Button
              variant="contained"
              onClick={() => router.push("/uncinetto/Uncinetto")}
            >
              Uncinetto
            </Button>
            <Button
              variant="contained"
              onClick={() => router.push("/informations/Informations")}
            >
              Informazioni
            </Button>
            <Button
              variant="contained"
              onClick={() => router.push("/contactUs/contactUs")}
            >
              Contattaci
            </Button>
          </div>
        </div>
    </div>
  );
};

export default Navigation;
