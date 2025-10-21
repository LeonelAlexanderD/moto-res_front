import React, { useEffect, useState } from "react";

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
import { getAppByID } from "store/aplicativos/aplicativos.slice";

const RolesTable = ({ roles }) => {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const renderCheckBox = (rol) => {
    if ((rol.Descripcion === "1")) {
      return (
        <Checkbox disabled>
          checked={selectedRoles === rol.idRol}
          onChange={() => setSelectedRoles(rol.idRol)}
        </Checkbox>
      );
    } else {
      <Checkbox>
        checked={selectedRoles === rol.idRol}
        onChange={() => setSelectedRoles(rol.idRol)}
      </Checkbox>;
    }
  };

  return (
    <CustomTableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ ...tableHeadCell }}>
              <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
            </TableCell>
            <TableCell sx={{ ...tableHeadCell }}>ID</TableCell>
            <TableCell sx={{ ...tableHeadCell }}>NOMBRE</TableCell>
            <TableCell sx={{ ...tableHeadCell }}>DESCRIPCION</TableCell>
            <TableCell sx={{ ...tableHeadCell }}>APP</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {roles?.length > 0 ? (
            roles?.map((rol) => {
              return (
                <TableRow key={rol.idRol}>
                  <TableCell sx={{ ...tableBodyCellCenter }}>
                    {renderCheckBox(rol)}
                  </TableCell>
                  <TableCell sx={{ ...tableBodyCell }}>
                    {rol.idRol}
                  </TableCell>
                  <TableCell sx={{ ...tableBodyCell }}>
                    {rol.nombre}
                  </TableCell>
                  <TableCell sx={{ ...tableBodyCell }}>
                    {rol.descripcion}
                  </TableCell>
                  <TableCell sx={{ ...tableBodyCell }}>
                    {rol.idAplicativo} - {getAppByID(rol.idAplicativo)}
                  </TableCell>
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
    </CustomTableContainer>
  );
};

export default RolesTable;
