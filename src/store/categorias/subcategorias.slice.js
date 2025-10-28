import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  response: {},
  message: {},
  subCategorias: [],
  subCategoriasFilter: [],
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

export const getSubCategorias = createAsyncThunk('categorias/getSubCategorias', async () => []);
export const searchSubCategorias = createAsyncThunk('categorias/searchSubCategorias', async () => []);
export const createSubCategoria = createAsyncThunk('categorias/createSubCategoria', async () => []);
export const editSubCategoria = createAsyncThunk('categorias/editSubCategoria', async () => []);
export const removeSubCategoria = createAsyncThunk('categorias/removeSubCategoria', async () => []);

export const clearData = createAction('categorias/clearData');

export const subCategoriasSlice = createSlice({
  name: 'subCategorias',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubCategorias.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.subCategorias = [];
        state.numberPages = [];
      })
      .addCase(getSubCategorias.fulfilled, (state, action) => {
        state.loading = false;
        state.subCategorias = action.payload || [];
        state.numberPages = action.payload.data.pages;
      })
      .addCase(getSubCategorias.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(searchSubCategorias.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.subCategoriasFilter = [];
        state.numberPages = [];
      })
      .addCase(searchSubCategorias.fulfilled, (state, action) => {
        state.loading = false;
        state.subCategoriasFilter = action.payload || [];
        // state.numberPages = action.payload.data.pages;
      })
      .addCase(searchSubCategorias.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(createSubCategoria.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.productoById = [];
        state.numberPages = [];
      })
      .addCase(createSubCategoria.fulfilled, (state, action) => {
        state.loading = false;
        state.productoById = action.payload || [];
        state.numberPages = action.payload.data.pages;
      })
      .addCase(createSubCategoria.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(editSubCategoria.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.subCategoriasFilter = [];
        state.numberPages = [];
      })
      .addCase(editSubCategoria.fulfilled, (state, action) => {
        state.loading = false;
        state.subCategoriasFilter = action.payload || [];
        // state.numberPages = action.payload.data.pages;
      })
      .addCase(editSubCategoria.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(removeSubCategoria.pending, (state) => {
        state.loading = true;
        state.creating = true;
        state.error = null;
      })
      .addCase(removeSubCategoria.fulfilled, (state, action) => {
        state.loading = false;
        state.creating = action.payload || [];
      })
      .addCase(removeSubCategoria.rejected, (state, action) => {
        state.loading = false;
        state.creating = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      
      .addCase(clearData, (state)=>{
        state.subCategoriasFilter = [];
        state.errorFilter = null;
        state.response = null;
      });
    }
  });

export const selectSubCategoria = (state) => state.categorias.subCategorias;
export const selectSubCategoriaSearch = (state) => state.categorias.subCategoriasFilter;
export const selectIsLoading = (state) => state.categorias.loading;
export const selectError = (state) => state.categorias.error;
export const selectMessageResponse = (state) => state.categorias.messageResponse;

export const isCreating = (state) => state.categorias.isCreating;
export const isEditing = (state) => state.categorias.editing;
export const isDeleting = (state) => state.categorias.deleting;


export default subCategoriasSlice.reducer;
