import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import ProductoForm from "../ProductoForm/ProductoForm";
import CustomModal from "components/customModal/CustomModal";
import { ProductoContext } from "../Common/ProductoProvider";
import {
  getProductos,
  getProductosSearch,
  getProductoByID,
  getProductoLowStock,
  selectProductos,
  selectProductosSearch,
  selectProductoByID,
  createProduct,
  editProduct,
  removeProduct,
  selectMessageResponse,
} from "store/productos/productos.slice";
import {
  createSubCategoria,
  getSubCategorias,
  selectSubCategoria,
} from "store/categorias/subcategorias.slice";
import {
  createCategoria,
  getCategorias,
  selectCategorias,
} from "store/categorias/categorias.slice";
import {
  createMarca,
  getMarcas,
  selectMarcas,
} from "store/marcas/marcas.slice";
import { toast } from "react-toastify";

export default function ProductoNuevo() {
  const selecProductoResponse = useSelector(selectMessageResponse);
  const [open, setOpen] = React.useState(false);
  // const pageAndSearch = useContext(ProductoContext);
  const dispatch = useDispatch();

  //  Listas desde Redux
  const marcas = useSelector(selectMarcas);
  const categorias = useSelector(selectCategorias);
  const subcategorias = useSelector(selectSubCategoria);

  //  Cargar listas cuando se abre el modal
  useEffect(() => {
    if (open) {
      dispatch(getMarcas());
      dispatch(getCategorias());
      dispatch(getSubCategorias());
    }
  }, [dispatch, open]);

  useEffect(() => {
    if (selecProductoResponse?.data?.success) {
      setOpen(false);
      // dispatch(getProductos(pageAndSearch));
    }
  }, [dispatch, selecProductoResponse]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitAct = async (values) => {
    try {
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

      toast.success("Producto guardado exitosamente");
      handleClose();
    } catch (error) {
      toast.error("Error al guardar el producto");
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Nuevo
      </Button>
      <CustomModal
        title={"Agregar Producto"}
        open={open}
        setOpen={handleClose}
        maxWidth="sm"
      >
        <DialogContent>
          <ProductoForm
            onSubmit={handleSubmitAct}
            onClose={handleClose}
            marcas={marcas}
            categorias={categorias}
            subcategorias={subcategorias}
          />
        </DialogContent>
      </CustomModal>
    </React.Fragment>
  );
}
