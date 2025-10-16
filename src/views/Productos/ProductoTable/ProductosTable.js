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

const renderCantCap = (itemAct) => (
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
            (itemAct) => (
              <TableRow key={itemAct.idUsuario}>
                {renderTableCell(itemAct.idUsuario)}
                {renderTableCell(itemAct.Nombre, "200px")}
                {renderTableCell(itemAct.dni)}
                {renderTableCell(itemAct.email)}
                {renderTableCell(itemAct.idReparticion)}
                {renderDoubleTableCell(itemAct.idRol, itemAct.idPermiso)}
                {renderTableCell(itemAct.Activo)}
                {renderCupoCell(itemAct.fechaCreacion)}
                {renderTableCell(itemAct.fechaModificacion)}
                {renderTableCell(
                                  <>
                                    <ProductoEditar item={itemAct} />
                                    <ProductoEliminar itemAct={itemAct} />
                                    <ProductoInfo itemView={itemAct} />
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
