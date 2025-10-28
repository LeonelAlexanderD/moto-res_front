import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  Autocomplete,
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
import { useFormControl } from "@mui/material/FormControl";
import { vsProd } from "../Common/YupProducto";
import {
  getProductoByID,
  createProduct,
  editProduct,
  selectMessageResponse,
} from "store/productos/productos.slice";
import {
  getCategorias,
  createCategoria,
} from "store/categorias/categorias.slice";
import {
  getSubCategorias,
  createSubCategoria,
} from "store/categorias/subcategorias.slice";
import { getMarcas, createMarca } from "store/marcas/marcas.slice";

const ProductoForm = ({ data, onSubmit, onClose }) => {
  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);
  const dispatch = useDispatch();
  const isEditMode = Boolean(data);

  useEffect(() => {
    // Cargar opciones iniciales
    getMarcas().then(setMarcas);
    getCategorias().then(setCategorias);
    if (data?.categoria_id) {
      getSubCategorias(data.categoria_id).then(setSubcategorias);
    }
  }, [data]);
  const handleClose = (event, reason) => {
    onClose();
  };

  const formik = useFormik({
    initialValues: {
      codigo: data?.codigo || "",
      nombre: data?.nombre || "",
      descripcion: data?.descripcion || "",
      modelo: data?.modelo || "",
      marca: data?.marca || "",
      stock: data?.stock || "",
      precio_unitario: data?.precio_unitario || "",
      categoria: data?.categoria || "",
      subcategoria: data?.subcategoria || "",
    },

    enableReinitialize: true,
    validationSchema: vsProd,
    onSubmit: async (values) => {
      let marcaId = marcas.find((m) => m.nombre === values.marca)?.id;
      let categoriaId = categorias.find(
        (c) => c.nombre === values.categoria
      )?.id;
      let subcategoriaId = subcategorias.find(
        (s) => s.nombre === values.subcategoria
      )?.id;

      if (!marcaId) marcaId = (await createMarca(values.marca)).id;
      if (!categoriaId)
        categoriaId = (await createCategoria(values.categoria)).id;
      if (!subcategoriaId)
        subcategoriaId = (
          await createSubCategoria(values.subcategoria, categoriaId)
        ).id;

      await createProduct({
        ...values,
        marca_id: marcaId,
        categoria_id: categoriaId,
        subcategoria_id: subcategoriaId,
      });

      onSave?.();
    },
  });

  // manejar que se hace si existe ya un producto con este codigo
  const handleBuscarProductoCodigo = async () => {
    const { producto } = formik.values;
    if (formik.values.codigo)
      dispatch(getProductoByID({ search: formik.values.codigo }));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        {/* Codigo */}
        <Grid item xs={12} sm={8}>
          <InputLabel>Codigo</InputLabel>
          <div style={{ display: "flex", gap: "8px" }}>
            <TextField
              fullWidth
              name="codigo"
              value={formik.values.codigo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.codigo && Boolean(formik.errors.codigo)}
              helperText={formik.touched.codigo && formik.errors.codigo}
            />
            {!isEditMode && (
              <IconButton color="primary" onClick={handleBuscarProductoCodigo}>
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
            name="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.nombre && Boolean(formik.errors.nombre)}
            helperText={formik.touched.nombre && formik.errors.nombre}
          />
        </Grid>

        {/* Descripcion */}
        <Grid item xs={12} sm={6}>
          <InputLabel>Descripcion</InputLabel>
          <div style={{ display: "flex", gap: "8px" }}>
            <TextField
              fullWidth
              name="descripcion"
              value={formik.values.descripcion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.descripcion && Boolean(formik.errors.descripcion)
              }
              helperText={
                formik.touched.descripcion && formik.errors.descripcion
              }
            />
          </div>
        </Grid>

        {/* Modelo */}
        <Grid item xs={12} sm={6}>
          <InputLabel>Modelo</InputLabel>
          <TextField
            fullWidth
            name="modelo"
            value={formik.values.modelo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.modelo && Boolean(formik.errors.modelo)}
            helperText={formik.touched.modelo && formik.errors.modelo}
          />
        </Grid>

        {/* Marca */}
        <Grid item xs={12} sm={6}>
          <Autocomplete
            freeSolo
            options={marcas.map((m) => m.nombre)}
            value={formik.values.marca}
            onChange={(e, val) => formik.setFieldValue("marca", val || "")}
            renderInput={(params) => (
              <TextField {...params} label="Marca" fullWidth />
            )}
          />
        </Grid>

        {/* Stock */}
        <Grid item xs={12} sm={12}>
          <InputLabel>Stock</InputLabel>
          <TextField
            fullWidth
            name="stock"
            value={formik.values.stock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.stock && Boolean(formik.errors.stock)}
            helperText={formik.touched.stock && formik.errors.stock}
          />
        </Grid>

        {/* Precio Unitario */}
        <Grid item xs={12} sm={12}>
          <InputLabel>Precio Unitario</InputLabel>
          <TextField
            fullWidth
            name="precio_unitario"
            value={formik.values.precio_unitario}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.precio_unitario &&
              Boolean(formik.errors.precio_unitario)
            }
            helperText={
              formik.touched.precio_unitario && formik.errors.precio_unitario
            }
          />
        </Grid>

        {/* Categoría */}
        <Grid item xs={12} sm={6}>
          <Autocomplete
            freeSolo
            options={categorias.map((c) => c.nombre)}
            value={formik.values.categoria}
            onChange={(e, val) => {
              formik.setFieldValue("categoria", val || "");
              const cat = categorias.find((x) => x.nombre === val);
              if (cat) getSubCategorias(cat.id).then(setSubcategorias);
              else setSubcategorias([]);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Categoría" fullWidth />
            )}
          />
        </Grid>

        {/* Subcategoría */}
        <Grid item xs={12} sm={6}>
          <Autocomplete
            freeSolo
            options={subcategorias.map((s) => s.nombre)}
            value={formik.values.subcategoria}
            onChange={(e, val) =>
              formik.setFieldValue("subcategoria", val || "")
            }
            renderInput={(params) => (
              <TextField {...params} label="Subcategoría" fullWidth />
            )}
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
            {isEditMode ? "Guardar Cambios" : "Crear Producto"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductoForm;
