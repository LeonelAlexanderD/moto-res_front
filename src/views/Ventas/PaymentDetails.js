import React from "react";
import {
  Paper,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";

export default function PaymentDetails({ method, setMethod, discount, setDiscount }) {
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Payment Details
      </Typography>

      <RadioGroup
        row
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        sx={{ mb: 2 }}
      >
        <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
        <FormControlLabel value="Card" control={<Radio />} label="Card" />
        <FormControlLabel value="Transfer" control={<Radio />} label="Transfer" />
      </RadioGroup>

      <TextField
        label="Discount (%)"
        type="number"
        size="small"
        fullWidth
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />
    </Paper>
  );
}
