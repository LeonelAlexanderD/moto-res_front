import React from "react";
import { Button } from "@mui/material";

export default function ClearCartButton({ onClear }) {
  return (
    <Button variant="outlined" color="inherit" onClick={onClear}>
      Clear Cart
    </Button>
  );
}
