import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SnackBarMessageResponse } from "utils/Response/SnackBarMessageResponse";
import SnackBarUtils from "utils/MUI/SnackbarUtils";
import GenericSearch from "utils/search/GenericSearch";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

import ProductosTable from '../ProductoTable/ProductosTable';
import ProductoNuevo from '../ProductoNuevo/ProductoNuevo';
import {} from '../ProductoEliminar/ProductoEliminar';
import {} from '../ProductoEditar/ProductoEditar';

import {
  getProductosSearch, // funcion en slice
  selectProductosSearch, //state de la funcion filterUsuario
  selectMessageResponse, 
  selectError,
  getProductoByID,
  selectProductoById,
  selectNumberPages,

} from 'store/productos/productos.slice';
import { ProductoContext } from "../Common/ProductoProvider";

export const ProductosContext = React.createContext(1);

const ProductosPage = () => {
  const [message, setMessage] = useState("");
  const [view, setView] = useState(false);
  const [currentSearch, setCurrentSearch] = React.useState(null);
  const dispatch = useDispatch();
  const productoSearch = useSelector(selectProductosSearch);
  const GetResponse = useSelector(selectMessageResponse);
  // const numberPages = useSelector(selectNumberPages);
  const sError = useSelector(selectError);
  let [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getProductosSearch({ page: page ? page : 1, data: currentSearch }));
  }, [page, dispatch]);

  useEffect(() => {
    if (sError || GetResponse) {
      setView(true);
      setMessage(SnackBarMessageResponse(GetResponse));
    }
  }, [GetResponse, sError]);

  // const handleChange = (event, values) => {
  //   setPage(values);
  // };

  // const handleSearch = (e) => {
  //   if (e.code !== "Enter") return;
  //   dispatch(getProductosSearch({ page: 1, data: e.target.value }));
  //   setCurrentSearch(e.target.value);
  // };

  const handleSearch = (e) => {
    if (e.code !== "Enter") return;
    dispatch(getProductosSearch({data: e.target.value}));
    setCurrentSearch(e.target.value);
  }

  return (
    <ProductoContext.Provider value={{ page, data: currentSearch }}>
      <React.Fragment>
        <div style={{ display: "flex", alignItems: "left" }}>
          <h1 style={{ margin: "10px 0" }}>Respuestos</h1>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ProductoNuevo />
          </Grid>
          <Grid item xs={8}>
            <GenericSearch handleSearch={handleSearch} />
          </Grid>
        </Grid>
        <ProductosTable datosAct={handleSearch} />


        {/* <Stack spacing={2} style={{ margin: "20px 0px 30px 0px" }}>
          <Pagination
            count={numberPages && numberPages}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Stack> */}
      </React.Fragment>
    </ProductoContext.Provider>
  );
};

export default ProductosPage;
