// src/pages/Reportes/ProductosReport.jsx
import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";

const ProductosReport = () => {
  const productos = [
    { nombre: "Aceite Motul 7100", vendidos: 230 },
    { nombre: "Kit JT Sprockets", vendidos: 180 },
    { nombre: "Filtro Aire K&N", vendidos: 150 },
    { nombre: "Cadenas DID", vendidos: 100 },
  ];

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Productos más vendidos
          </Typography>
          <BarChart
            xAxis={[{ dataKey: "nombre", scaleType: "band" }]}
            series={[{ dataKey: "vendidos", label: "Unidades Vendidas" }]}
            dataset={productos}
            height={300}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductosReport;
