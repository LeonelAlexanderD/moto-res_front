import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TodayReport from "./ReporteMain";
import StockCriticoTable from "./CriticalStock";

const DashboardPage = () => {
  // Datos simulados (podés reemplazar por tus selectores o endpoints)
  const ventasHoy = 2450;
  const variacion = 15;
  const alertasStock = [
    { repuesto: "Pastillas de Freno", stockActual: 5, puntoPedido: 10 },
    { repuesto: "Aceite de Motor", stockActual: 2, puntoPedido: 5 },
    { repuesto: "Bujías", stockActual: 8, puntoPedido: 15 },
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* <Typography variant="h5" fontWeight={700} gutterBottom>
        Dashboard
      </Typography> */}

      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mb: 3 }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<AddShoppingCartIcon />}
        >
          Nueva Venta
        </Button>
        <Button variant="outlined" startIcon={<SearchIcon />}>
          Consultar Repuestos
        </Button>
        <Button variant="outlined" startIcon={<AssessmentIcon />}>
          Reportes
        </Button>
      </Box>

      <Grid container spacing={3} item xs={12} sm={12} >
        <Grid item xs={12} md={6}>
          <TodayReport ventasHoy={ventasHoy} variacion={variacion} />
        </Grid>

        <Grid item xs={12} md={6}>
          <StockCriticoTable alertasStock={alertasStock} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
