import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
  response:{},
  message: {},
  roles: [],
  rolesFilter: [],
  loading: false,  
  error: null,
  rolById: [],
  relaciones:[],
  rolesAUsuario:[],
};

const errorMessage = {
  message: [
    {
      status: 500,
      description: "Se ha producido un error inesperado",
    },
  ],
};

export const filterRolesEndPoint = createAsyncThunk(
  "roles/filter",
  async (search) => {
    // const r = await filterRoles(search);
    return [];
  }
);

export const getRolByID = createAsyncThunk(
    "roles/getRolID",
    async(id)=>{
        return{};
    }
);

export const getRolByUser = createAsyncThunk(
  "roles/getRolByUser",
  async(id) => {
    return [];
  }
)


export const getRolesEndPoint = createAsyncThunk(
    "roles/getAllRoles",
    async()=>{
        return[];
    }
);


export const getRelacionesUsuarioRoles = createAsyncThunk(
  "relUsuarioRoles/getAll",
  async () => {
    // const res = await getRelUsuarioRolesAPI();
    // return res.data;
  }
);

export const asignarUsuarioRoles = createAsyncThunk(
  "relUsuarioRoles/asignar",
  async (dataRoles, dataUser) => {
    //   const r = await rolesSetUser(dataRoles, dataUser);
    //   return r;
  }
);

export const quitarUsuarioRoles = createAsyncThunk(
  "relUsuarioRoles/quitar",
  async (payload) => {
    // const res = await quitarUsuarioRolesAPI(payload);
    toast.info("Acceso retirado");
    // return res.data;
  }
);

export const clearRolesUsuarioSearch = createAction("roles/ClearDataSearch");



export const RolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // filterRolesEndPoint
      .addCase(filterRolesEndPoint.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.rolesFilter = [];
      })
      .addCase(filterRolesEndPoint.fulfilled, (state, action) => {
        state.loading = false;
        state.rolesFilter = action.payload || [];
      })
      .addCase(filterRolesEndPoint.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
        state.response = action.payload;
      })
      

      .addCase(getRolByID.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.rolById = [];
      })
      .addCase(getRolByID.fulfilled, (state, action) => {
        state.loading = false;
        state.rolById = action.payload || [];
      })
      .addCase(getRolByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
        state.response = action.payload;
      })


      .addCase(getRolesEndPoint.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.roles = [];
      })
      .addCase(getRolesEndPoint.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action.payload || [];
      })
      .addCase(getRolesEndPoint.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
        state.response = action.payload;
      })

      
      .addCase(getRelacionesUsuarioRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRelacionesUsuarioRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.relaciones = action.payload;
      })
      .addCase(getRelacionesUsuarioRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
        state.response = action.payload;
      })


      .addCase(asignarUsuarioRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(asignarUsuarioRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.relaciones = action.payload;
      })
      .addCase(asignarUsuarioRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
        state.response = action.payload;
      })


      .addCase(quitarUsuarioRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(quitarUsuarioRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.relaciones = action.payload;
      })
      .addCase(quitarUsuarioRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.stack
          ? errorMessage
          : action?.error?.message;
        state.response = action.payload;
      })
      

      .addCase(clearRolesUsuarioSearch, (state)=>{
        state.rolesAUsuario = [];
      })
      
      ;      
    }
});

export const selectRoles = (state) => state.roles.roles;
export const selectRolesFilter = (state) => state.roles.rolesFilter;
export const selectRolById = (state) => state.roles.rolById;
export const selectIsLoading = (state) => state.roles.loading;
export const selectError = (state) => state.roles.error;

export const selectRelUsuariosRoles = (state) =>  state.roles.relaciones;
export const selectRolesDeUnUsuario = (state) => state.roles.rolesAUsuario;

export default RolesSlice.reducer;