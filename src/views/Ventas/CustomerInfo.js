import React from "react";
import { Paper, Typography, TextField, Stack } from "@mui/material";

export default function CustomerInfo({ customer, setCustomer }) {
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Customer Information
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Customer Name"
          size="small"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />
        <TextField
          label="Customer ID"
          size="small"
          value={customer.id}
          onChange={(e) => setCustomer({ ...customer, id: e.target.value })}
        />
      </Stack>
    </Paper>
  );
}
