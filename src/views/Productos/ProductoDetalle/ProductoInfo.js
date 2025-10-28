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




export default function ProductoInfo({ itemView }) {

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
              ID Producto
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemView?.id}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Codigo
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemView?.codigo ?? " - "}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Nombre
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemView?.nombre ?? " - "}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Descripcion
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemView?.descripcion}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Modelo
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemView?.modelo ?? " - "}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Marca
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemView?.marca_id ?? " - "}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Stock Actual
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemView?.stock_actual ?? " - "}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Stock Maximo
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemView?.stock_maximo ?? " - "}
            </Typography>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Precio Unitario
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemView?.precio_unitario?? " - "}
            </Typography>
          </FormControl>
        </Grid>        
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Categoria
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemView?.categoria_id?? " - "}
            </Typography>
          </FormControl>
        </Grid>        
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Sub-Categoria
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemView?.subcategoria_id?? " - "}
            </Typography>
          </FormControl>
        </Grid>        
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <Typography variant="subtitle1" color="text.secondary">
              Precio Promocional
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemView?.precio_unitario?? " - "}
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
