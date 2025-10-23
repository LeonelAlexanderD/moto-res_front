import React, { useState } from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import SearchBar from "components/searchBar/SearchBar";
import StockList from "components/stockList/StockList";
import SalesCart from "components/cart/SalesCart";
import PaymentDetails from "./PaymentDetails";
import CustomerInfo from "./CustomerInfo";
import ClearCartButton from "components/clearCart/ClearCartButton";

export default function SalesManagement() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [discount, setDiscount] = useState("");
  const [customer, setCustomer] = useState({ name: "", id: "" });

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* Lado izquierdo */}
        <Grid item xs={12} md={3}>
          <SearchBar />
          <StockList onAddToCart={handleAddToCart} />
        </Grid>

        {/* Lado derecho */}
        <Grid item xs={12} md={9}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Sales Management
          </Typography>

          <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
            <SalesCart cart={cart} />
          </Paper>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <PaymentDetails
                method={paymentMethod}
                setMethod={setPaymentMethod}
                discount={discount}
                setDiscount={setDiscount}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomerInfo customer={customer} setCustomer={setCustomer} />
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="flex-end" mt={3}>
            <ClearCartButton onClear={handleClearCart} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
