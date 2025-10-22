import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Container, Grid } from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import logo from "./helicoptero (1).png";
import { Outlet } from "react-router-dom";

import {
  firstListItems,
  secondListItems,
  thirdListItems,
  fourthListItems,
} from "../listItems/listItems";

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
  localStorage.removeItem("isAuthenticated");

  window.location.href = "/";
};
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer({ rolName }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={[{ marginRight: "36px" }, open && { display: "none" }]}
            // style={{ margin: "440px 0px" }} //espaciado en el menubar
          >
            <MenuIcon />
          </IconButton>
          <img alt="log" src={logo} sx={{}}></img>
          <Typography
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
            style={{
              fontSize: "24px",
              textAlign: "center",
              marginRight: "40px",
            }}
          >
            MOTO-RES <br />
            Gestion y Punto de Venta
          </Typography>
          <Button sx={{ ml: 1 }} color="inherit" onClick={handleLogout}>
            Salir
            <DirectionsRunIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Box
          sx={{
            height: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
        >
          <List
            component="nav"
            sx={{
              "& .MuiListItemButton-root": {
                py: 2, // aumenta altura
                px: 3,
              },
              "& .MuiListItemIcon-root": {
                minWidth: 40,
              },
              "& .MuiSvgIcon-root": {
                fontSize: 30,
              },
              "& .MuiListItemText-primary": {
                fontSize: "1.3rem",
                fontWeight: 500,
              },
            }}
          >
            {firstListItems({ rolName })}
            {secondListItems({ rolName })}
            {thirdListItems({ rolName })}
            {fourthListItems({ rolName })}
          </List>
        </Box>
        <Divider />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}

        <Container
          maxWidth={false}
          sx={{
            mt: 14, //variar segun el tamaño del menu superior
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
