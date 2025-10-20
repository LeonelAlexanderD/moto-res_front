import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import ProductoForm from "../ProductoForm/ProductoForm";
import CustomModal from "components/customModal/CustomModal";
import { ProductoContext } from "../Common/ProductoProvider";
import { GetUsuariosEndpoint, createNewUsuario, selectMessageResponse } from "store/usuarios/usuarios.slice";

export default function ProductoNuevo() {
  const selecUsuarioResponse = useSelector(selectMessageResponse);
  const [open, setOpen] = React.useState(false);
  const pageAndSearch = useContext(ProductoContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selecUsuarioResponse?.data?.success) {
      setOpen(false);
      dispatch(GetUsuariosEndpoint(pageAndSearch));
    }
  }, [dispatch, selecUsuarioResponse]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const handleSubmitAct = async (formData) => {
  const { aplicativosSeleccionados, ...usuarioData } = formData;

 
  
  //
  try {
    const resultAction = await dispatch(createNewUsuario(usuarioData));
    const newUserId = resultAction.payload.idUsuario;

    if (!newUserId) {
      throw new Error("No se pudo obtener el ID del usuario creado.");
    }

    const asignacionData = {
      idUsuario: newUserId,
      idAplicativo: aplicativosSeleccionados
    };


    console.log(`Usuario ${newUserId} creado y aplicaciones asignadas con éxito.`);
  } catch (error) {
    console.error("Error al crear usuario o asignar aplicaciones:", error);
  }
};

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Nuevo
      </Button>
      <CustomModal
        title={"Agregar Usuario"}
        open={open}
        setOpen={handleClose}
        maxWidth="sm"
      >
        <DialogContent>
          <ProductoForm onSubmit={handleSubmitAct} onClose={handleClose} />
        </DialogContent>
      </CustomModal>
    </React.Fragment>
  );
}
