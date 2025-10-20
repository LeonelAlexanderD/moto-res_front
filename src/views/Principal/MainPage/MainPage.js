import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Divider,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";

import {
  filterUsuarios,
  selectUsuariosFilter,
} from "store/usuarios/usuarios.slice";
import {
  asignarUsuarioRoles,
  quitarUsuarioRoles,
  getRelacionesUsuarioRoles,
  selectRelUsuariosRoles,
  getRolesEndPoint,
  selectRoles,
} from "store/roles/roles.slice";

import ProductosTable from "views/Productos/ProductoTable/ProductosTable";



const MainPage = () => {
  const dispatch = useDispatch();


  const roles = useSelector(selectRoles);
  const usuarios = useSelector(selectUsuariosFilter);
  const relaciones = useSelector(selectRelUsuariosRoles);

  const [searchRoles, setSearchRoles] = useState("");
  const [searchUser, setSearchUser] = useState("");

  const [selectedRoles, setSelectedRol] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(getRolesEndPoint());
    dispatch(filterUsuarios({ search: "" }));
    dispatch(getRelacionesUsuarioRoles());
  }, [dispatch]);

  const handleAsignar = () => {
    if (selectedRoles && selectedUser) {
      const relacion = relaciones.find(
        (r) => r.idRoles === selectedRoles && r.idUsuario === selectedUser
      );

      if (relacion) {
        if (relacion.deshabilitado === 1) {
          dispatch(asignarUsuarioRoles({ id: relacion.id }));
        } else {
          dispatch(quitarUsuarioRoles({ id: relacion.id }));
        }
      } else {
        dispatch(
          asignarUsuarioRoles({
            idRol: selectedRoles,
            idUsuario: selectedUser,
          })
        );
      }
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6}>
        <IconButton item xs={12} md={4}>Nueva Venta</IconButton>
      </Grid>
      {/* Buscar Roles */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Ventas Hoy</Typography>
            <Grid container spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <Grid item xs>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Buscar por nombre..."
                  value={searchRoles}
                  // validationSchema: vsUsuario
                  
                  onChange={(e) => setSearchRoles(e.target.value)}
                />
              </Grid>
              
            </Grid>

            {/* <RolesTable roles={roles?.records} /> */}
            
          </CardContent>
        </Card>
      </Grid>

      {/* Buscar Usuarios */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Alerta Stock Bajo</Typography>
            <Grid container spacing={1} alignItems="center" sx={{ mb: 2 }}>
              
              <Grid item>
                <IconButton
                  onClick={() =>
                    dispatch(filterUsuarios({ search: searchUser }))
                  }
                >
                  <SearchIcon />
                </IconButton>
              </Grid>
            </Grid>
            
            <ProductosTable usuarios={usuarios?.records} />

          </CardContent>
        </Card>
      </Grid>

     
    </Grid>
  );
};



export default MainPage;
