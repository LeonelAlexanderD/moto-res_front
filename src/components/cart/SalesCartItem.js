import React from "react";
import { TableRow, TableCell } from "@mui/material";

export default function SalesCartItem({ item }) {
  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.quantity}</TableCell>
      <TableCell>${item.price.toFixed(2)}</TableCell>
      <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
    </TableRow>
  );
}
