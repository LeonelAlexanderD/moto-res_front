import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function StockItem({ item, onAddToCart }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        py: 1,
        borderBottom: "1px solid #eee",
        "&:last-child": { borderBottom: "none" },
      }}
    >
      <Box>
        <Typography variant="body2" fontWeight="500">
          {item.name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          In Stock:{" "}
          <Typography
            component="span"
            variant="caption"
            color={item.stock < 8 ? "error.main" : "success.main"}
          >
            {item.stock}
          </Typography>
        </Typography>
      </Box>
      <Button size="small" onClick={() => onAddToCart({ ...item, quantity: 1, price: 20 })}>
        Add
      </Button>
    </Box>
  );
}
