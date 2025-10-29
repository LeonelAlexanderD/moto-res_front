import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TodayReport from "../MainTable/ReporteMain";
import StockCriticoTable from "../MainTable/CriticalStock";

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

      <Grid container spacing={6} sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        <Box item sx={{ flex: "1 0 30%", minWidth: "200px" }}>
          <TodayReport ventasHoy={ventasHoy} variacion={variacion} />
        </Box>

        <Box item sx={{ flex: "1 0 60%", minWidth: "400px" }}>
          <StockCriticoTable alertasStock={alertasStock} />
        </Box>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
