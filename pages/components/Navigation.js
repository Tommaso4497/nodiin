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
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import CollectionsIcon from '@mui/icons-material/Collections';

const Navigation = () => {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.navigationWrapper}>
      {matches ? (
        <>
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={handleDrawerOpen}
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
            <div >
              <IconButton onClick={handleDrawerClose}>
                <KeyboardArrowLeftIcon />
              </IconButton>
              Menu
            </div>
            <Divider />
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon><CollectionsIcon/></ListItemIcon>
                  Chiacchierino</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon><CollectionsIcon/></ListItemIcon>
                  Uncinetto</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                <ListItemIcon><InfoIcon/></ListItemIcon>
                  Informazioni</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon><MailIcon/></ListItemIcon>
                  Contattaci</ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </>
      ) : (
        <div
          style={{
            display: "flex",
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
            <Button variant="contained">Home</Button>
            <Button variant="contained">Chiacchierino</Button>
            <Button variant="contained">Uncinetto</Button>
            <Button variant="contained">Informazioni</Button>
            <Button variant="contained">Contattaci</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
