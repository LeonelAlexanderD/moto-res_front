import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  firstListItems,
  secondListItems,
  thirdListItems,
  fourthListItems,
} from "../listItems/listItems";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { Button, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import logo from "./helicoptero (1).png";
import { mdTheme } from 'theme';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    height: "100%",
    overflowY: "auto",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// const mdTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#0645ccff",
//     },
//     secondary: {
//       main: "#311b92",
//     },
//   },
// });

function DashboardContent({ rolName }) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("isAuthenticated");

    window.location.href = "/";
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
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
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
            style={{ margin: "12px 0px" }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
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
                  fontSize: 36,
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
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[300]
                : theme.palette.grey[900],
            flexGrow: 1,
            width: "auto",
            overflow: "auto",
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              mt: 12,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Outlet />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  // const { rolName } = useIdRol();
  return (
    <DashboardContent
    // rolName={rolName}
    />
  );
}
