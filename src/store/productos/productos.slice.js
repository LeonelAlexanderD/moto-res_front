import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  response: {},
  message: {},
  productos: [],
  productosFilter: [],
  loadingEddit: false,
  loading: false,
  creating: false,
  editing: false,
  deleting: false,
  error: null,
  errorFilter: null,
  productoById: [],
  numberPages: 0,
};

const errorMessage = {
  message: [
    {
      status: 500,
      description: "Se ha producido un error inesperado",
    },
  ],
};

export const getProductos = createAsyncThunk();

export const getProductosSearch = createAsyncThunk();

export const getProductoByID = createAsyncThunk();

export const productosSlice = createSlice({
  name: 'productos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductos.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.usuarios = [];
        state.numberPages = [];
      })
      .addCase(getProductos.fulfilled, (state, action) => {
        state.loading = false;
        state.usuarios = action.payload || [];
        state.numberPages = action.payload.data.pages;
      })
      .addCase(getProductos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(getProductosSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.productosFilter = [];
        state.numberPages = [];
      })
      .addCase(getProductosSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.productosFilter = action.payload || [];
        state.numberPages = action.payload.data.pages;
      })
      .addCase(getProductosSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(getProductoByID.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.productoById = [];
        state.numberPages = [];
      })
      .addCase(getProductoByID.fulfilled, (state, action) => {
        state.loading = false;
        state.productoById = action.payload || [];
        state.numberPages = action.payload.data.pages;
      })
      .addCase(getProductoByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })
      ;
    }
  });

export const selectProductos = (state) => state.productos.productos;
export const selectProductosSearch = (state) => state.productos.productosFilter;
export const selectProductoByID = (state) => state.productos.productoById;
export const selectIsLoading = (state) => state.roles.loading;
export const selectError = (state) => state.roles.error;

export default productosSlice.reducer;
