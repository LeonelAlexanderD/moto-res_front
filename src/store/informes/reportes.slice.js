import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  response: {},
  message: {},
  reportes: [],
  reporteFilter: [],
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

export const getReportesDiarios = createAsyncThunk('reportes/getReportesDiarios', async () => []);
export const getReportesMensual = createAsyncThunk('reportes/getReportesMensual', async () => []);
export const getReportesAnual = createAsyncThunk('reportes/getReportesAnual', async () => []);
export const getReporteXFecha = createAsyncThunk('reportes/reporteFecha', async () => []);

export const clearData = createAction('reportes/clearData');

export const reportesSlice = createSlice({
  name: 'reportes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReportesDiarios.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.reportes = [];
        state.numberPages = [];
      })
      .addCase(getReportesDiarios.fulfilled, (state, action) => {
        state.loading = false;
        state.reportes = action.payload || [];
        // state.numberPages = action.payload.data.pages;
      })
      .addCase(getReportesDiarios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(getReportesMensual.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.reportes = [];
        state.numberPages = [];
      })
      .addCase(getReportesMensual.fulfilled, (state, action) => {
        state.loading = false;
        state.reportes = action.payload || [];
        // state.numberPages = action.payload.data.pages;
      })
      .addCase(getReportesMensual.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(getReportesAnual.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.reportes = [];
        state.numberPages = [];
      })
      .addCase(getReportesAnual.fulfilled, (state, action) => {
        state.loading = false;
        state.reportes = action.payload || [];
        // state.numberPages = action.payload.data.pages;
      })
      .addCase(getReportesAnual.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(getReporteXFecha.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.reporteFilter = [];
        state.numberPages = [];
      })
      .addCase(getReporteXFecha.fulfilled, (state, action) => {
        state.loading = false;
        state.reporteFilter = action.payload || [];
        // state.numberPages = action.payload.data.pages;
      })
      .addCase(getReporteXFecha.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })

      .addCase(clearData, (state)=>{
        state.reporteFilter = [];
        state.reportes = [];
        state.errorFilter = null;
        state.response = null;
      });
    }
  });

export const selectReportes = (state) => state.reportes.reportes;
export const selectReportesSearch = (state) => state.reportes.reportes;
export const selectReporteFecha = (state) => state.reportes.reporteFilter;
export const selectIsLoading = (state) => state.reportes.loading;
export const selectError = (state) => state.reportes.error;
export const selectMessageResponse = (state) => state.reportes.messageResponse;
export const selectNumberPages = (state) => state.reportes.numberPages;


export default reportesSlice.reducer;
