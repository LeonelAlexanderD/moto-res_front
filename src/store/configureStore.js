import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "store/auth/auth.slice";
import usuariosReducer from './usuarios/usuarios.slice';
import permisosReducer from './permisos/permisos.slice';
import rolesReducer from './roles/roles.slice';
import productosReducer from './productos/productos.slice';
import categoriasReducer from './categorias/categorias.slice';
import marcasReducer from './marcas/marcas.slice';
import subCategoriasReducer from './categorias/subcategorias.slice';

export function configureAppStore() {
  const store = configureStore({
    reducer: {
      // auth: authReducer,    
      usuarios: usuariosReducer,
      permisos: permisosReducer,
      roles: rolesReducer,
      productos: productosReducer,
      marca: marcasReducer,
      categoria: categoriasReducer,
      subcategoria: subCategoriasReducer
    },
  });

  return store;
}
