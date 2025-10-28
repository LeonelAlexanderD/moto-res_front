import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  response: {},
  message: {},
  marca: [],
  marcaFilter: [],
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

export const getMarcas = createAsyncThunk('marca/getMarcas', async () => []);
export const searchMarcas = createAsyncThunk('marca/searchMarcas', async () => []);
export const createMarca = createAsyncThunk('marca/createProducto', async () => []);
export const editMarca = createAsyncThunk('marca/editMarca', async () => []);
export const removeMarca = createAsyncThunk('marca/removeMarca', async () => []);

export const clearData = createAction('marca/clearData');

export const marcasSlice = createSlice({
  name: 'marcas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMarcas.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.marca = [];
        state.numberPages = [];
      })
      .addCase(getMarcas.fulfilled, (state, action) => {
        state.loading = false;
        state.marca = action.payload || [];
        state.numberPages = action.payload.data.pages;
      })
      .addCase(getMarcas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(searchMarcas.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.marcaFilter = [];
        state.numberPages = [];
      })
      .addCase(searchMarcas.fulfilled, (state, action) => {
        state.loading = false;
        state.marcaFilter = action.payload || [];
        // state.numberPages = action.payload.data.pages;
      })
      .addCase(searchMarcas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(createMarca.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.productoById = [];
        state.numberPages = [];
      })
      .addCase(createMarca.fulfilled, (state, action) => {
        state.loading = false;
        state.productoById = action.payload || [];
        state.numberPages = action.payload.data.pages;
      })
      .addCase(createMarca.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(editMarca.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.marcaFilter = [];
        state.numberPages = [];
      })
      .addCase(editMarca.fulfilled, (state, action) => {
        state.loading = false;
        state.marcaFilter = action.payload || [];
        // state.numberPages = action.payload.data.pages;
      })
      .addCase(editMarca.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(removeMarca.pending, (state) => {
        state.loading = true;
        state.creating = true;
        state.error = null;
      })
      .addCase(removeMarca.fulfilled, (state, action) => {
        state.loading = false;
        state.creating = action.payload || [];
      })
      .addCase(removeMarca.rejected, (state, action) => {
        state.loading = false;
        state.creating = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      
      .addCase(clearData, (state)=>{
        state.marcaFilter = [];
        state.errorFilter = null;
        state.response = null;
      });
    }
  });

export const selectMarcas = (state) => state.marcas.marca;
export const selectMarcasSearch = (state) => state.marcas.marcaFilter;
export const selectIsLoading = (state) => state.marcas.loading;
export const selectError = (state) => state.marcas.error;
export const selectMessageResponse = (state) => state.marcas.messageResponse;

export const isCreating = (state) => state.marcas.isCreating;
export const isEditing = (state) => state.marcas.editing;
export const isDeleting = (state) => state.marcas.deleting;


export default marcasSlice.reducer;
