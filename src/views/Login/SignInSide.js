import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { green } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";
import { login, isLoading } from "store/auth/auth.slice";
import logo from "./fon2.jpg";
import Grid from "@mui/material/Grid";
import { LoadingButton } from "@mui/lab";

const theme = createTheme();

export default function SignInSide() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector(isLoading);
  const [icon, setIcon] = useState(<VisibilityOffIcon />);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setIcon(!showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />);
  };

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({username, password}));
  } 

  return (
    <ThemeProvider theme={theme}>
    <Grid container>
      <Grid item xs={12} sm={8}>
        <div
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        >
        </div>
      </Grid>
      <Grid item xs={12} sm={3.6}>
        <Container component="main">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              paddingLeft:"3.8rem",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center", 
              height: "90vh", 
            }}
          >
            <Avatar sx={{ bgcolor: green[900] }} variant="rounded">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar sesión
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                id="username"
                sx={{
                  "& label.Mui-focused": {
                    color: "#004d40",
                  },
                }}
                color="success"
                label="Ingrese con su Usuario"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                name="password"
                sx={{
                  "& label.Mui-focused": {
                    color: "#004d40",
                  },
                }}
                color="success"
                label="Ingrese con su Contraseña"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="button"
                color="success"
                sx={{ color: "#004d40" }}
                onClick={togglePasswordVisibility}
              >
                {icon} mostrar Contraseña
              </Button>              
              <LoadingButton
              type="submit"
              fullWidth
              color="success"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading ={loading}
            >
              Iniciar sesión
            </LoadingButton>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}
