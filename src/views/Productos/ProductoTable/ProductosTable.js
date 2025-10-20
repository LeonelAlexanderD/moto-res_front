import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import {
  tableBodyCell,
  tableBodyCenterCell,
  tableHeadCell,
} from "components/customTable/StylesTable";
import CustomTableContainer from "components/customTable/CustomTableContainer";
import ProductoEliminar from "../ProductoEliminar/ProductoEliminar";
import ProductoEditar from "../ProductoEditar/ProductoEditar";
import ProductoInfo from "../ProductoDetalle/ProductoInfo";

const renderCantCap = (data) => (
  <div style={{ display: "flex", alignItems: "center" }}>    
  </div>
);

const renderTableCell = (
  value,
  minWidth = "auto",
  textAlign = "left",
  style = tableBodyCell
) => <TableCell sx={{ ...style }}>{value}</TableCell>;

const renderDoubleTableCell = (
    value, value2,
    minWidth = "auto",
    textAlign = "left",
    style = tableBodyCenterCell
) => <TableCell sx={{ ...style }}>
    <div>{value}</div>
    <div>{value2}</div>
</TableCell>

const renderCupoCell = (cupo) => (
  <TableCell sx={{ ...tableBodyCell }}>    
  </TableCell>
);

const ProductosTable = ({ datosAct }) => {


  return (
    <CustomTableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {[
              "ID",
              "Apellido y Nombre",
              "DNI",
              "Correo electrónico",
              "Repartición",
              "Roles/Permisos",
              "Estado",
              "Fecha de creación",
              "Acciones",
            ].map((header, index) => (
              <TableCell key={index} sx={{ ...tableHeadCell }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(datosAct && datosAct)?.map(
            (data) => (
              <TableRow key={data.idUsuario}>
                {renderTableCell(data.idUsuario)}
                {renderTableCell(data.Nombre, "200px")}
                {renderTableCell(data.dni)}
                {renderTableCell(data.email)}
                {renderTableCell(data.idReparticion)}
                {renderDoubleTableCell(data.idRol, data.idPermiso)}
                {renderTableCell(data.Activo)}
                {renderCupoCell(data.fechaCreacion)}
                {renderTableCell(data.fechaModificacion)}
                {renderTableCell(
                                  <>
                                    <ProductoEditar item={data} />
                                    <ProductoEliminar data={data} />
                                    <ProductoInfo itemView={data} />
                                  </>,
                                  "120px",
                                  "center"
                                )}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </CustomTableContainer>
  );
};

export default ProductosTable;
