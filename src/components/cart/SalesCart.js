import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";
import SalesCartItem from "./SalesCartItem";

export default function SalesCart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Sales Cart
      </Typography>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item, i) => (
            <SalesCartItem key={i} item={item} />
          ))}
        </TableBody>
      </Table>

      <Typography align="right" sx={{ mt: 2 }} fontWeight="bold">
        Total: ${total.toFixed(2)}
      </Typography>
    </>
  );
}
