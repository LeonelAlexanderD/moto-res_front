import React, { useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";

import {
  tableBodyCell,
  tableBodyCellCenter,
  tableHeadCell,
} from "components/customTable/StylesTable";
import CustomTableContainer from "components/customTable/CustomTableContainer";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ClassNames } from "@emotion/react";

const UsuariosPermisosTable = ({ usuarios }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const renderCheckBox = (user) => {
    if (user.Activo !== "S") {
      return (
        <Checkbox disabled>
          checked={selectedUser === user.idUsuario}
          onChange={() => setSelectedUser(user.idUsuario)}
        </Checkbox>
      );
    } else {
      <Checkbox>
        checked={selectedUser === user.idUsuario}
        onChange={() => setSelectedUser(user.idUsuario)}
      </Checkbox>;
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", borderRadius: 0 }}>
      <TableContainer sx={{ maxHeight: 450 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead
            sx={{
              borderTop: "1px solid",
            }}
          >
            <TableRow >
              <TableCell sx={{ ...tableHeadCell }}>
                <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
              </TableCell>
              <TableCell sx={{ ...tableHeadCell }}>USUARIO</TableCell>
              <TableCell sx={{ ...tableHeadCell }}>DNI</TableCell>
              {/* <TableCell sx={{ ...tableHeadCell }}>ESTADO</TableCell> */}
            </TableRow>
          </TableHead>

          <TableBody >
            {usuarios?.length > 0 ? (
              usuarios?.map((user) => {
                return (
                  <TableRow key={user.idUsuario} sx={ClassNames= ".MuiTableRow-hover"}>
                    <TableCell sx={{ ...tableBodyCellCenter }}>
                      {renderCheckBox(user)}
                    </TableCell>
                    <TableCell sx={{ ...tableBodyCell }}>
                      {user.Usuario}
                    </TableCell>
                    <TableCell sx={{ ...tableBodyCell }}>
                      {user.documento}
                    </TableCell>
                    {/* <TableCell sx={{ ...tableBodyCellCenter }}>
                      {user.Activo === "S" ? "Activo" : "Inactivo"}
                    </TableCell> */}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={15} sx={{ textAlign: "center" }}>
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UsuariosPermisosTable;
