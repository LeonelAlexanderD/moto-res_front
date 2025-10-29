import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  response: {},
  message: {},
  categorias: [],
  categoriasFilter: [],
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

export const getCategorias = createAsyncThunk('categorias/getCategorias', async () => []);
export const searchCategorias = createAsyncThunk('categorias/searchCategorias', async () => []);
export const createCategoria = createAsyncThunk('categorias/createCategoria', async () => []);
export const editCategoria = createAsyncThunk('categorias/editCategoria', async () => []);
export const removeCategoria = createAsyncThunk('categorias/removeCategoria', async () => []);

export const clearData = createAction('categorias/clearData');

export const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategorias.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.categorias = [];
        state.numberPages = [];
      })
      .addCase(getCategorias.fulfilled, (state, action) => {
        state.loading = false;
        state.categorias = action.payload || [];
        state.numberPages = action.payload.data.pages;
      })
      .addCase(getCategorias.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(searchCategorias.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.categoriasFilter = [];
        state.numberPages = [];
      })
      .addCase(searchCategorias.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriasFilter = action.payload || [];
        // state.numberPages = action.payload.data.pages;
      })
      .addCase(searchCategorias.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(createCategoria.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.productoById = [];
        state.numberPages = [];
      })
      .addCase(createCategoria.fulfilled, (state, action) => {
        state.loading = false;
        state.productoById = action.payload || [];
        state.numberPages = action.payload.data.pages;
      })
      .addCase(createCategoria.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(editCategoria.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.categoriasFilter = [];
        state.numberPages = [];
      })
      .addCase(editCategoria.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriasFilter = action.payload || [];
        // state.numberPages = action.payload.data.pages;
      })
      .addCase(editCategoria.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(removeCategoria.pending, (state) => {
        state.loading = true;
        state.creating = true;
        state.error = null;
      })
      .addCase(removeCategoria.fulfilled, (state, action) => {
        state.loading = false;
        state.creating = action.payload || [];
      })
      .addCase(removeCategoria.rejected, (state, action) => {
        state.loading = false;
        state.creating = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      
      .addCase(clearData, (state)=>{
        state.categoriasFilter = [];
        state.errorFilter = null;
        state.response = null;
      });
    }
  });

export const selectCategorias = (state) => state.categorias.categorias;
export const selectCategoriaSearch = (state) => state.categorias.categoriasFilter;
export const selectIsLoading = (state) => state.categorias.loading;
export const selectError = (state) => state.categorias.error;
export const selectMessageResponse = (state) => state.categorias.messageResponse;

export const isCreating = (state) => state.categorias.isCreating;
export const isEditing = (state) => state.categorias.editing;
export const isDeleting = (state) => state.categorias.deleting;


export default categoriasSlice.reducer;
