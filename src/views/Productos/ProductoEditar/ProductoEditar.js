import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DialogContent from "@mui/material/DialogContent";

import {
  GetUsuariosEndpoint,
  editUsuario,
  selectMessageResponse,
} from "store/usuarios/usuarios.slice";
import ProductoForm from "../ProductoForm/ProductoForm";
import CustomModal from "components/customModal/CustomModal";
import { Tooltip } from "@mui/material";
import { ProductoContext } from "../Common/ProductoProvider";

export default function ProductoEditar({ item }) {

  const [open, setOpen] = React.useState(false);
  const pageAndSearch = useContext(ProductoContext);
  const dispatch = useDispatch();
  const sUsuarioResponse = useSelector(selectMessageResponse);

  useEffect(() => {
    if (sUsuarioResponse?.data?.success) {
      setOpen(false);
      dispatch(GetUsuariosEndpoint(pageAndSearch));
    }
  }, [dispatch, sUsuarioResponse]);

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (data) => {
    dispatch(editUsuario({ data }));
  };

  return (
    <React.Fragment>
      <Tooltip>
        <span>
          <IconButton variant="outlined" onClick={handleClickOpen}>
            <EditIcon />
          </IconButton>
        </span>
      </Tooltip>{" "}
      <CustomModal
        title={"Editar Usuario"}
        open={open}
        setOpen={handleClose}
        maxWidth="sm"
      >
        <DialogContent>
          <ProductoForm
            data={item}
            onSubmit={handleSubmit}
            onClose={handleClose}
          />
        </DialogContent>
      </CustomModal>
    </React.Fragment>
  );
}
