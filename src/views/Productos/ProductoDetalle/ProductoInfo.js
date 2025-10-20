import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,  
  Stack,  
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { ProductoContext } from "../Common/ProductoProvider";
import { useTheme } from "@emotion/react";
import { formatDDMMYY_HMS } from "utils/helpers/dateTimeFormat";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';




export default function ProductoInfo({ itemAct }) {

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <IconButton variant="outlined" onClick={handleClickOpen}>
        <VisibilityIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> 
          <b> Información Adicional: </b>
        </DialogTitle>
        <DialogContent style={{textAlign: "justify", marginBottom: "15px", whiteSpace: "pre-wrap"}}>
          
        <Grid
        container
        spacing={0}
        columnSpacing={1}
        sx={{
          [theme.breakpoints.up("md")]: {
            pt: 4,
            px: 8,
          },
        }}
      >
      {/* MODIFICAR LOS TIPOS DE DATOS! */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              ID Usuario
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemAct?.idUsuario}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Apellido y Nombre
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemAct?.Nombre ?? " - "}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              DNI
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemAct?.documento ?? " - "}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Reparticion
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemAct?.idReparticion} - {itemAct?.Reparticion}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Correo Electronico
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemAct?.email ?? " - "}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Usuario
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemAct?.Usuario ?? " - "}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>

          <Grid item xs={12} md={12}>

          </Grid>

        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Estado
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemAct?.Activo ?? " - "}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Fecha de Alta
            </Typography>
            <Typography variant="h6" gutterBottom>
              {formatDDMMYY_HMS(itemAct?.fechaCreacion) ?? " - "}
            </Typography>
          </FormControl>
        </Grid>        
      </Grid>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 3,
          mb: 2,
        }}
      ></Stack>


        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
