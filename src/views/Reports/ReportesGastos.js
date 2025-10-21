// src/pages/Reportes/GastosReport.jsx
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { BarChart } from "@mui/x-charts";

const GastosReport = () => {
  const gastos = [
    { categoria: "Insumos", total: 3200 },
    { categoria: "Transporte", total: 1900 },
    { categoria: "Servicios", total: 1200 },
    { categoria: "Salarios", total: 8000 },
  ];

  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {[
          { label: "Gasto Total", value: "$14,300.00" },
          { label: "Mes Actual", value: "$7,850.00" },
          { label: "Aumento vs mes anterior", value: "+12%", color: "red" },
          { label: "Gasto Promedio Diario", value: "$476.00" },
        ].map((item, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2">{item.label}</Typography>
                <Typography
                  variant="h6"
                  color={item.color || "text.primary"}
                  fontWeight="bold"
                >
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField label="Desde" type="date" InputLabelProps={{ shrink: true }} />
        <TextField label="Hasta" type="date" InputLabelProps={{ shrink: true }} />
        <Button variant="contained">Filtrar</Button>
      </Box>

      <Card>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Gastos por Categoría
          </Typography>
          <BarChart
            xAxis={[{ dataKey: "categoria", scaleType: "band" }]}
            series={[{ dataKey: "total", label: "Gasto ($)" }]}
            dataset={gastos}
            height={300}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default GastosReport;
