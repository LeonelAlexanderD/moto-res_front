// src/pages/Reportes/ReportesPage.jsx
import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import VentasReport from "./ReportesVentas";
import GastosReport from "./ReportesGastos";
import ProductosReport from "./ReportesProductos";
import GeneralReport from "./ReportesGeneral";
import ComparadorReport from "./ReportesComparador";

const ReportesPage = () => {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Reportes
      </Typography>

      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        sx={{ mb: 3 }}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Ventas" />
        <Tab label="Gastos" />
        <Tab label="Productos" />
        <Tab label="General" />
        <Tab label="Comparador" />
      </Tabs>

      {tab === 0 && <VentasReport />}
      {tab === 1 && <GastosReport />}
      {tab === 2 && <ProductosReport />}
      {tab === 3 && <GeneralReport />}
      {tab === 4 && <ComparadorReport />}
    </Box>
  );
};

export default ReportesPage;
