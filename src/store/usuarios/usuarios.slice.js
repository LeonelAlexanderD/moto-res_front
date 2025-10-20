import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  response:{},
  message: {},
  usuarios: [],
  usuariosFilter: [],
  loadingEddit: false,
  loading: false,
  creating: false,
  editing: false,
  deleting: false,
  error: null,
  errorFilter: null,
  usuarioById: [],
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
//#region 
export const getUsuarios = createAsyncThunk(
  "usuarios/getUsuarios",
  async ({ page, nombres = null, apellidos = null, documento = null }) => {
    // const r = await fechUsuario(page, nombres, apellidos, documento);
    return [];
  }
);


export const GetUsuariosEndpoint = createAsyncThunk(
  "usuarios/GetAllUsuario",
  async ({ page, data }) => {
    // const r = await filterUsuario(page, data);
    return [];
  }
);



export const filterUsuarios = createAsyncThunk(
  "usuarios/filter",
  async (search) => {
    // const r = await filterUsuario(search);
    return [];
  }
);

export const createNewUsuario = createAsyncThunk(
  "usuarios/createNewUsuario",
  async (data, { rejectWithValue }) => {
    try {
    //   const r = await createUsuario(data);
    //   return r;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editUsuario = createAsyncThunk(
  "usuarios/editUsuario",
  async (data, { rejectWithValue }) => {
    try {
    //   const r = await editUsuario(data);
    //   return r;
    } catch (error) {
      return rejectWithValue(error);
    }

  }
);

export const getUsuarioById = createAsyncThunk(
  "usuario/getUsuarioById",
  async (idPersona, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/usuario/byPersona/${idPersona}`);
      const data = await response.json();
      return data || null;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const removeUsuario = createAsyncThunk(
  "usuarios/removeUsuario",
  async (id, { rejectWithValue }) => {
    try {
    //   const r = await deleteUsuario(id);
    //   return r;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);





export const clearUsuariosSearchData = createAction("usuarioSearch/clearData");




//#endregion
export const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GetUsuarios
      .addCase(getUsuarios.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.usuarios = [];
        state.numberPages = [];
      })
      .addCase(getUsuarios.fulfilled, (state, action) => {
        state.loading = false;
        state.usuarios = action.payload || [];
        state.numberPages = action.payload.data.pages;
      })
      .addCase(getUsuarios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;

      })

    //GetUsuariosEndpoint
      .addCase(GetUsuariosEndpoint.pending,(state, action)=>{
        state.loading = true;
        state.error = null; 
      })

      .addCase(GetUsuariosEndpoint.fulfilled,(state, action)=>{
        state.loading = false;
        state.error = null;
        state.usuarios = action.payload.data;
      })

      .addCase(GetUsuariosEndpoint.rejected,(state, action)=>{
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
      })


    // SaveUsuario    
      .addCase(createNewUsuario.pending, (state) => {
        state.creating = true;
        state.error = null;
      })
      .addCase(createNewUsuario.fulfilled, (state, action) => {
        state.creating = false;
        state.response = action.payload;
      })
      .addCase(createNewUsuario.rejected, (state, action) => {
        state.creating = false;
        toast.error(action.payload.message[0].description);
      })

    // EditUsuario    
      .addCase(editUsuario.pending, (state) => {
        state.editing = true;
        state.error = null;
      })
      .addCase(editUsuario.fulfilled, (state, action) => {
        state.editing = false;
        state.response = action.payload;
      })
      .addCase(editUsuario.rejected, (state, action) => {
        state.editing = false;
      })

    // FiltrarUsuarios    
      .addCase(filterUsuarios.pending, (state) => {
        state.loading = true;
        state.numberPages = 0; 
      })
      .addCase(filterUsuarios.fulfilled, (state, action) => {
        state.loading = false;
        state.usuariosFilter = action.payload;
      })
      .addCase(filterUsuarios.rejected, (state, action) => {
        state.errorFilter = action.error?.stack
          ? errorMessage
          : action.error.message;
        state.loading = false;
      })
      
      // remove
      .addCase(removeUsuario.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeUsuario.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
        toast.success(action.payload.message[0].description)
      })
      .addCase(removeUsuario.rejected, (state, action) => {
        state.deleting = false;
        state.error = true;
        state.loading = false;
        state.response = action.payload;
        toast.error(action.payload.message[0].description);
        
      })

      

      //clear
      .addCase(clearUsuariosSearchData, (state) => {
        state.usuariosFilter = null; // Vacía el array entitiesFilter
        state.errorFilter = null;
        state.response = null;
      });
  },
});


export const selectUsuarios = (state) => state.usuarios.usuarios;
export const selectUsuariosFilter = (state) => state.usuarios.usuariosFilter;
export const selectUsuarioById = (state) => state.usuarios.usuarioById;
export const selectIsLoadingEdit = (state) => state.usuarios.loadingEddit;
export const selectIsLoading = (state) => state.usuarios.loading;
export const selectError = (state) => state.usuarios.error;
export const selectErrorFilter = (state) => state.usuarios.errorFilter;
export const selectMessageResponse = (state) => state.usuarios.response;
export const selectNumberPages = (state) => state.usuarios.numberPages;


export default usuariosSlice.reducer;