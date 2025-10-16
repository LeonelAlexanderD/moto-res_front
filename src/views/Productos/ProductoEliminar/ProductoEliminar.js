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

import {
  GetUsuariosEndpoint,
  removeUsuario,
} from "store/usuarios/usuarios.slice";
import { Tooltip } from "@mui/material";
import { ProductoContext } from "../Common/ProductoProvider";

export default function ProductoEliminar({ itemAct }) {
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
    dispatch(removeUsuario(itemAct.idUsuario));

    setTimeout(() => {
      // dispatch(GetUsuariosEndPoint(page ? page : 1));
      dispatch(GetUsuariosEndpoint(pageAndSearch));
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
        <DialogTitle> Eliminar Usuario </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Estás seguro que deseas eliminar el usuario{" "}
            <b> "{itemAct.descripcion}" </b>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> Cancelar </Button>
          <Button onClick={handleSubmit} autoFocus>
            {" "}
            Aceptar{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
