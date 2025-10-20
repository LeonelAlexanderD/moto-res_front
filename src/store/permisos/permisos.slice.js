import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  response:{},
  message: {},
  permisos: [],
  permisosFilter: [],
  loading: false,  
  error: null,
  PermisoById: [],
  relaciones:[],
  permisosAUsuario:[],
};

const errorMessage = {
  message: [
    {
      status: 500,
      description: "Se ha producido un error inesperado",
    },
  ],
};

export const filterPermisoEndPoint = createAsyncThunk(
  "permisos/filter",
  async (search) => {
    // const r = await filterPermiso(search);
    return [];
  }
);

export const getPermisoByID = createAsyncThunk(
    "permisos/getPermisoID",
    async(id)=>{
        return{};
    }
);

export const getPermisoByUser = createAsyncThunk(
  "permisos/getPermisoByUser",
  async(id) => {
    return [];
  }
)


export const getPermisosEndPoint = createAsyncThunk(
    "permisos/getAllPermisos",
    async()=>{
        return[];
    }
);


export const getRelacionesUsuarioPermiso = createAsyncThunk(
  "relUsuarioPermiso/getAll",
  async () => {
    // const res = await getRelUsuarioPermisoAPI();
    // return res.data;
  }
);

export const asignarUsuarioPermiso = createAsyncThunk(
  "relUsuarioPermiso/asignar",
  async (dataPermiso, dataUser) => {
    //   const r = await permisosetUser(dataPermiso, dataUser);
    //   return r;
  }
);

export const quitarUsuarioPermiso = createAsyncThunk(
  "relUsuarioPermiso/quitar",
  async (payload) => {
    // const res = await quitarUsuarioPermisoAPI(payload);
    toast.info("Acceso retirado");
    // return res.data;
  }
);

export const clearPermisoUsuarioSearch = createAction("permisos/ClearDataSearch");



export const permisosSlice = createSlice({
  name: 'permisos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // filterPermisoEndPoint
      .addCase(filterPermisoEndPoint.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.permisosFilter = [];
      })
      .addCase(filterPermisoEndPoint.fulfilled, (state, action) => {
        state.loading = false;
        state.permisosFilter = action.payload || [];
      })
      .addCase(filterPermisoEndPoint.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
        state.response = action.payload;
      })
      

      .addCase(getPermisoByID.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.permisoById = [];
      })
      .addCase(getPermisoByID.fulfilled, (state, action) => {
        state.loading = false;
        state.permisoById = action.payload || [];
      })
      .addCase(getPermisoByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
        state.response = action.payload;
      })


      .addCase(getPermisosEndPoint.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.permisos = [];
      })
      .addCase(getPermisosEndPoint.fulfilled, (state, action) => {
        state.loading = false;
        state.permisos = action.payload || [];
      })
      .addCase(getPermisosEndPoint.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
        state.response = action.payload;
      })

      
      .addCase(getRelacionesUsuarioPermiso.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRelacionesUsuarioPermiso.fulfilled, (state, action) => {
        state.loading = false;
        state.relaciones = action.payload;
      })
      .addCase(getRelacionesUsuarioPermiso.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
        state.response = action.payload;
      })


      .addCase(asignarUsuarioPermiso.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asignarUsuarioPermiso.fulfilled, (state, action) => {
        state.loading = false;
        state.relaciones = action.payload;
      })
      .addCase(asignarUsuarioPermiso.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
        state.response = action.payload;
      })


      .addCase(quitarUsuarioPermiso.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(quitarUsuarioPermiso.fulfilled, (state, action) => {
        state.loading = false;
        state.relaciones = action.payload;
      })
      .addCase(quitarUsuarioPermiso.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
        state.response = action.payload;
      })
      

      .addCase(clearPermisoUsuarioSearch, (state)=>{
        state.permisosAUsuario = [];
      })
      
      ;      
    }
});

export const selectPermisos = (state) => state.permisos.permisos;
export const selectPermisoFilter = (state) => state.permisos.permisosFilter;
export const selectPermisoById = (state) => state.permisos.permisoById;
export const selectIsLoading = (state) => state.permisos.loading;
export const selectError = (state) => state.permisos.error;

export const selectRelUsuariosPermisos = (state) =>  state.permisos.relaciones;
export const selectPermisosDeUnUsuario = (state) => state.permisos.permisosAUsuario;

export default permisosSlice.reducer;