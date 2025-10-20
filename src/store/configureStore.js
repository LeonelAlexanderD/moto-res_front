import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "store/auth/auth.slice";
import usuariosReducer from './usuarios/usuarios.slice';
import permisosReducer from './permisos/permisos.slice';
import rolesReducer from './roles/roles.slice';
import productosReducer from './productos/productos.slice';

export function configureAppStore() {
  const store = configureStore({
    reducer: {
      // auth: authReducer,    
      usuarios: usuariosReducer,
      permisos: permisosReducer,
      roles: rolesReducer,
      productos: productosReducer,
    },
  });

  return store;
}
