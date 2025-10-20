import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "./auth.api";
import { toast } from "react-toastify";

export const login = createAsyncThunk("auth/login", async ({ username, password }, thunkAPI) => {
  try {
    const data = await loginApi(username, password);
    console.log("data", data);
    const userData = {
      username: data.data.usuario.usuario,
      idRol: data.data.roles
    };

    localStorage.setItem("token", data.data.token);
    localStorage.setItem("usuario", JSON.stringify(userData));

    window.location.reload(true);
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("usuario");
  localStorage.removeItem("rolUsuario");
  return { type: "auth/logout" };
};

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  token: "",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.usuario;
        state.token = action.payload.token;
      })
      
      .addCase(login.rejected, (state, action) => {
        toast.error("Los datos ingresados son incorrectos was2");
        console.log("error")
        state.loading = false;
        state.error = action.payload
          ? action.payload.error
          : action.error.message;
          toast.error("Los datos ingresados son incorrectos was");
      })
      .addCase("auth/logout", (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.token = "";
      });      
  },
});

export const selectUser = (state) => state.auth.isAuthenticated;
export const getUsername = (state) => state.auth.user;
export const isLoading = (state) => state.auth.loading;

export default authSlice.reducer;
