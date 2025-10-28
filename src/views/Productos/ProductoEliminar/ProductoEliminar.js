import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";


import { Tooltip } from "@mui/material";
import { ProductoContext } from "../Common/ProductoProvider";
import { getProductos, removeProduct} from "store/productos/productos.slice";

export default function ProductoEliminar({ data }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const pageAndSearch = useContext(ProductoContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    dispatch(removeProduct(data.id));

    setTimeout(() => {
      // dispatch(getProductos(page ? page : 1));
      dispatch(getProductos(pageAndSearch));
    }, 400);
  };

  return (
    <React.Fragment>
      <Tooltip title="Eliminar">
        <span>
          <IconButton variant="outlined" onClick={handleClickOpen}>
            <DeleteIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Dialog open={open}>
        <DialogTitle> Eliminar Producto </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Estás seguro que deseas eliminar el producto{" "}
            <b> "{data.nombre} - {data.descripcion}" </b>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> Cancelar </Button>
          <Button onClick={handleSubmit} autoFocus>            
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
