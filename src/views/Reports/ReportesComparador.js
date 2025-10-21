// src/pages/Reportes/ComparadorReport.jsx
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

const ComparadorReport = () => {
  const comparacion = [
    { periodo: "Enero", ventas: 10000, gastos: 6000 },
    { periodo: "Febrero", ventas: 9500, gastos: 5800 },
    { periodo: "Marzo", ventas: 12000, gastos: 7500 },
  ];

  const porcentaje =
    ((comparacion[2].ventas - comparacion[1].ventas) /
      comparacion[1].ventas) *
    100;

  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">Variación Último Mes</Typography>
              <Typography
                variant="h6"
                color={porcentaje > 0 ? "green" : "red"}
                fontWeight="bold"
              >
                {porcentaje.toFixed(2)}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField label="Periodo 1" type="month" InputLabelProps={{ shrink: true }} />
        <TextField label="Periodo 2" type="month" InputLabelProps={{ shrink: true }} />
        <Button variant="contained">Comparar</Button>
      </Box>

      <Card>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Comparación de Ventas y Gastos
          </Typography>
          <BarChart
            xAxis={[{ dataKey: "periodo", scaleType: "band" }]}
            series={[
              { dataKey: "ventas", label: "Ventas ($)" },
              { dataKey: "gastos", label: "Gastos ($)" },
            ]}
            dataset={comparacion}
            height={300}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ComparadorReport;
