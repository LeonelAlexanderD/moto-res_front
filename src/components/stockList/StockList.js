import React from "react";
import { Paper, Typography, Divider } from "@mui/material";
import StockItem from "./StockItem";

const mockStock = [
  { name: "Brake Pads - Model X", stock: 15 },
  { name: "Tires - Size 17", stock: 8 },
  { name: "Engine Oil - 10W40", stock: 22 },
  { name: "Spark Plugs - Set of 4", stock: 10 },
  { name: "Headlight Bulb - LED", stock: 5 },
  { name: "Air Filter - Model Y", stock: 12 },
];

export default function StockList({ onAddToCart }) {
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Stock Availability
      </Typography>
      <Divider sx={{ mb: 1 }} />
      {mockStock.map((item, i) => (
        <StockItem key={i} item={item} onAddToCart={onAddToCart} />
      ))}
    </Paper>
  );
}
