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

const renderCantCap = (prod) => (
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

const ProductosTable = ({ productos, }) => {


  return (
    <CustomTableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {[
              "ID",
              "Nombre",
              "Descripcion",
              "Stock Actual",
              "Precio Unitario",
              "Precio Promocional",
              "Inicio Promocion",
              "Fin Promocion",
              "Acciones",
            ].map((header, index) => (
              <TableCell key={index} sx={{ ...tableHeadCell }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(productos && productos)?.map(
            (prod) => (
              <TableRow key={prod.id}>
                {renderTableCell(prod.id)}
                {renderTableCell(prod.nombre, "200px")}
                {renderTableCell(prod.descripcion)}
                {renderTableCell(prod.stock_actual)}
                {renderTableCell(prod.precio_unitario)}
                {renderTableCell(prod.precio_promocion)}
                {renderTableCell(prod.fecha_inicio)}
                {renderCupoCell(prod.fecha_fin)}
                {renderTableCell(
                                  <>
                                    <ProductoEditar item={prod} />
                                    <ProductoEliminar data={prod} />
                                    <ProductoInfo itemView={prod} />
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
