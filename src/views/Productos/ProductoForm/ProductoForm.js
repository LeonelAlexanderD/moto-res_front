import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Grid,
  InputLabel,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import {
  getUsuarioById,
  filterUsuarios,
  clearUsuariosSearchData,
} from "store/usuarios/usuarios.slice";
import { useFormControl } from '@mui/material/FormControl';
import { vsUsuario } from "../Common/YupUsuarios";

const ProductoForm = ({ data, onSubmit, onClose }) => {
  const dispatch = useDispatch();
  const isEditMode = Boolean(data);
  

  const handleClose = (event, reason) => {
    onClose();
  };

  const formik = useFormik({
    initialValues: {
      documento: data?.documento || "",
      Nombre: data?.Nombre || "",
      Usuario: data?.Usuario || "",
      password: data?.password || ""

    },

    enableReinitialize: true,
    validationSchema: vsUsuario,
    onSubmit: (values) => onSubmit(values),
  });

  const handleBuscarDocumento = async () => {
    const { documento } = formik.values;

  };

  const handleBuscarUsuario = () => {
    const { usuario } = formik.values;
    if (formik.values.usuario)
      dispatch(filterUsuarios({ search: formik.values.usuario }));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        {/* Documento */}
        <Grid item xs={12} sm={8}>
          <InputLabel>Documento</InputLabel>
          <div style={{ display: "flex", gap: "8px" }}>
            <TextField
              fullWidth
              name="documento"
              value={formik.values.documento}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.documento && Boolean(formik.errors.documento)
              }
              helperText={formik.touched.documento && formik.errors.documento}
            />
            {!isEditMode && (
              <IconButton color="primary" onClick={handleBuscarDocumento}>
                <SearchOutlined />
              </IconButton>
            )}
          </div>
        </Grid>

        {/* Nombre */}
        <Grid item xs={12} sm={12}>
          <InputLabel>Nombre</InputLabel>
          <TextField
            fullWidth
            name="Nombre"
            value={formik.values.Nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Nombre && Boolean(formik.errors.Nombre)}
            helperText={formik.touched.Nombre && formik.errors.Nombre}
          />
        </Grid>

        {/* Usuario */}
        <Grid item xs={12} sm={6}>
          <InputLabel>Usuario</InputLabel>
          <div style={{ display: "flex", gap: "8px" }}>
            <TextField
              fullWidth
              name="Usuario"
              value={formik.values.Usuario}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Usuario && Boolean(formik.errors.Usuario)}
              helperText={formik.touched.Usuario && formik.errors.Usuario}
            />
            {!isEditMode && (
              <IconButton color="primary" onClick={handleBuscarUsuario}>
                <SearchOutlined />
              </IconButton>
            )}
          </div>
        </Grid>

        {/* Contraseña */}
        <Grid item xs={12} sm={6}>
          <InputLabel>Contraseña</InputLabel>
          <TextField
            fullWidth
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password && Boolean(formik.errors.password)
            }
            helperText={formik.touched.password && formik.errors.password}
            
          />          
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={12}>
          <InputLabel>Email</InputLabel>
          <TextField
            fullWidth
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>

        

        

        {/* Botón principal */}
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleClose()}
            spacing={2}
            fullWidth
          >
            Cancelar
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Button type="submit" variant="contained" color="success" fullWidth>
            {isEditMode ? "Guardar Cambios" : "Crear Usuario"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductoForm;
