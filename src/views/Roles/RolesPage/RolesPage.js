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

import UsuariosRolesTable from "../RolesTable/UsuariosRolesTable";
import RolesTable from "../RolesTable/RolesTable";



const RolesPage = () => {
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
          Asignación de Roles a Usuarios
        </Typography>
      </Grid>

      {/* Buscar Roles */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Buscar Roles</Typography>
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
              <Grid item>
                <IconButton
                  onClick={() =>
                    dispatch(getRolesEndPoint({ search: searchRoles }))
                  }
                >
                  <SearchIcon />
                </IconButton>
              </Grid>
            </Grid>

            <RolesTable roles={roles?.records} />
            
          </CardContent>
        </Card>
      </Grid>

      {/* Buscar Usuarios */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Buscar Usuarios</Typography>
            <Grid container spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <Grid item xs>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Buscar por usuario o dni."
                  value={searchUser}
                  onChange={(e) => setSearchUser(e.target.value)}
                />
              </Grid>
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
            
            <UsuariosRolesTable usuarios={usuarios?.records} />

          </CardContent>
        </Card>
      </Grid>

      {/* Botones */}
      <Grid item xs={12} display="flex" justifyContent="flex-end" gap={2}>
        <Button
          variant="outlined"
          color="error"
          // onClick={() => handleClose()}
          spacing={2}
        >
          Cancelar
        </Button>
        <Button variant="contained" color="primary" onClick={handleAsignar}>
          <PersonAddIcon />
          Aplicar
        </Button>
      </Grid>
    </Grid>
  );
};



export default RolesPage;
