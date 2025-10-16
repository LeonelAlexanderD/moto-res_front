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
import { searchPerson, filterPersonas } from "store/persona/persona.slice";

import {
  getAplicativosEndPoint,
  selectAplicativos,
  asignarUsuarioAplicativo,
} from "store/aplicativos/aplicativos.slice";
import {
  selectReparticionFilter,
  getReparticionEndPoint,
} from "store/reparticiones/reparticiones.slice";

import {
  getCargosEndPoint,
  selectCargosFilter,
} from "store/cargos/cargos.slice";
import { vsUsuario } from "../Common/YupUsuarios";

const ProductoForm = ({ data, onSubmit, onClose }) => {
  const dispatch = useDispatch();
  const isEditMode = Boolean(data);
  const reparticiones = useSelector(selectReparticionFilter);
  useEffect(() => {
    dispatch(getReparticionEndPoint({ data: {} }));
  }, [dispatch]);

  const cargos = useSelector(selectCargosFilter);
  useEffect(() => {
    dispatch(getCargosEndPoint({ data: {} }));
  }, [dispatch]);

  const aplicativos = useSelector(selectAplicativos);
  useEffect(() => {
    dispatch(getAplicativosEndPoint({ data: {} }));
  }, [dispatch]);

  const handleClose = (event, reason) => {
    onClose();
  };

  const formik = useFormik({
    initialValues: {
      idUsuario: data?.idUsuario || undefined,
      documento: data?.documento || "",
      Nombre: data?.Nombre || "",
      Usuario: data?.Usuario || "",
      password: data?.password || "",
      email: data?.email || "",
      reparticion: data?.reparticion || "",
      cargo: data?.cargo || "",
      idAplicativo: data?.aplicativo || "",
    },

    enableReinitialize: true,
    validationSchema: vsUsuario,
    onSubmit: (values) => onSubmit(values),
  });

  const handleBuscarDocumento = async () => {
    const { documento } = formik.values;

    try {
      // buscar persona por documento
      const personaResult = await dispatch(searchPerson(documento)).unwrap();

      if (!personaResult) {
        toast.info("No se encontró ninguna persona con ese documento");
        return;
      }

      // verificar si la persona tiene usuario asociado
      const usuarioResult = await dispatch(
        getUsuarioById(personaResult.idPersona)
      ).unwrap();

      if (usuarioResult) {
        toast.error("Esta persona ya tiene un usuario asignado");
        return;
      }

      // si no tiene usuario, completar el campo Nombre
      formik.setFieldValue("Nombre", personaResult.Nombre);
      toast.success("Persona encontrada. Campo nombre completado.");
    } catch (error) {
      console.error(error);
      toast.error("Error al buscar la persona");
    }
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

        {/* Repartición */}
        <Grid item xs={12} sm={12}>
          <FormControl
            fullWidth
            margin="normal"
            error={Boolean(
              formik.touched.reparticion && formik.errors.reparticion
            )}
          >
            <InputLabel id="reparticion-label">Repartición</InputLabel>
            <Select
              labelId="reparticion-label"
              name="reparticion"
              value={formik.values.reparticion || ""}
              onChange={(e) =>
                formik.setFieldValue("reparticion", e.target.value)
              }
            >
              {Array.isArray(reparticiones) &&
                reparticiones.map((rep) => (
                  <MenuItem key={rep.idReparticion} value={rep.idReparticion}>
                    {rep.Reparticion}
                  </MenuItem>
                ))}
            </Select>
            {formik.touched.reparticion && formik.errors.reparticion && (
              <FormHelperText>{formik.errors.reparticion}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        {/* Cargo */}
        <Grid item xs={12} sm={12}>
          <FormControl
            fullWidth
            margin="normal"
            error={Boolean(formik.touched.cargo && formik.errors.cargo)}
          >
            <InputLabel id="cargo-label">Cargo</InputLabel>
            <Select
              labelId="cargo-label"
              name="cargo"
              value={formik.values.cargo || ""}
              onChange={(e) => formik.setFieldValue("cargo", e.target.value)}
            >
              {Array.isArray(cargos) &&
                cargos.map((rep) => (
                  <MenuItem key={rep.idcargo} value={rep.idcargo}>
                    {rep.cargo}
                  </MenuItem>
                ))}
            </Select>
            {formik.touched.cargo && formik.errors.cargo && (
              <FormHelperText>{formik.errors.cargo}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        {/* aplicativo */}
        <Grid item xs={12} sm={12}>
          <FormControl
            fullWidth
            margin="normal"
            error={Boolean(
              formik.touched.aplicativo && formik.errors.aplicativo
            )}
          >
            <InputLabel id="aplicativo-label">Repartición</InputLabel>
            <Select
              labelId="aplicativo-label"
              name="aplicativo"
              value={formik.values.aplicativo || ""}
              onChange={(e) =>
                formik.setFieldValue("aplicativo", e.target.value)
              }
            >
              {Array.isArray(aplicativos) &&
                aplicativos.map((rep) => (
                  <MenuItem key={rep.idAplicativo} value={rep.idAplicativo}>
                    {rep.Aplicativo}
                  </MenuItem>
                ))}
            </Select>
            {formik.touched.aplicativo && formik.errors.aplicativo && (
              <FormHelperText>{formik.errors.aplicativo}</FormHelperText>
            )}
          </FormControl>
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
