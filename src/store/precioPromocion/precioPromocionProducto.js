import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  response: {},
  message: {},
  promocion: [],
  promocionFilter: [],
  loadingEddit: false,
  loading: false,
  creating: false,
  editing: false,
  deleting: false,
  error: null,
  errorFilter: null,
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

export const getPrecioPromocionProd = createAsyncThunk('promocion/getPrecioPromocionProd', async () => []);
export const getPreciosPromociones = createAsyncThunk('promocion/getPreciosPromociones', async () => []);
export const createPromocionProducto = createAsyncThunk('promocion/createProducto', async () => []);
export const editPromocionProducto = createAsyncThunk('promocion/editProducto', async () => []);
export const removePromocion = createAsyncThunk('promocion/deleteProducto', async () => []);

export const clearData = createAction('promocion/clearData');

export const promocionSlice = createSlice({
  name: 'promocion',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrecioPromocionProd.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.promocion = [];
        state.numberPages = [];
      })
      .addCase(getPrecioPromocionProd.fulfilled, (state, action) => {
        state.loading = false;
        state.promocion = action.payload || [];
        state.numberPages = action.payload.data.pages;
      })
      .addCase(getPrecioPromocionProd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(getPreciosPromociones.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.promocionFilter = [];
        state.numberPages = [];
      })
      .addCase(getPreciosPromociones.fulfilled, (state, action) => {
        state.loading = false;
        state.promocionFilter = action.payload || [];
        // state.numberPages = action.payload.data.pages;
      })
      .addCase(getPreciosPromociones.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(createPromocionProducto.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.productoById = [];
        state.numberPages = [];
      })
      .addCase(createPromocionProducto.fulfilled, (state, action) => {
        state.loading = false;
        state.productoById = action.payload || [];
        state.numberPages = action.payload.data.pages;
      })
      .addCase(createPromocionProducto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(editPromocionProducto.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.promocionFilter = [];
        state.numberPages = [];
      })
      .addCase(editPromocionProducto.fulfilled, (state, action) => {
        state.loading = false;
        state.promocionFilter = action.payload || [];
        // state.numberPages = action.payload.data.pages;
      })
      .addCase(editPromocionProducto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(removePromocion.pending, (state) => {
        state.loading = true;
        state.creating = true;
        state.error = null;
      })
      .addCase(removePromocion.fulfilled, (state, action) => {
        state.loading = false;
        state.creating = action.payload || [];
      })
      .addCase(removePromocion.rejected, (state, action) => {
        state.loading = false;
        state.creating = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      
      .addCase(clearData, (state)=>{
        state.promocionFilter = [];
        state.errorFilter = null;
        state.response = null;
      });
    }
  });

export const selectPromocion = (state) => state.promocion.promocion;
export const selectPromocionSearch = (state) => state.promocion.promocionFilter;
export const selectIsLoading = (state) => state.promocion.loading;
export const selectError = (state) => state.promocion.error;
export const selectMessageResponse = (state) => state.promocion.messageResponse;

export const isCreating = (state) => state.promocion.isCreating;
export const isEditing = (state) => state.promocion.editing;
export const isDeleting = (state) => state.promocion.deleting;


export default promocionSlice.reducer;
