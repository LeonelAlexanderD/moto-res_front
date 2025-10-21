// src/pages/Reportes/VentasReport.jsx
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
import { LineChart, PieChart } from "@mui/x-charts";

const VentasReport = () => {
  const ventas = [
    { day: "Lun", total: 1200 },
    { day: "Mar", total: 900 },
    { day: "Mié", total: 1400 },
    { day: "Jue", total: 1100 },
    { day: "Vie", total: 1600 },
  ];

  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {[
          { label: "Ingresos Totales", value: "$45,231.89" },
          { label: "Ventas Realizadas", value: "1,235" },
          { label: "Ticket Promedio", value: "$36.62" },
          { label: "Ganancia Neta", value: "$12,890.12", color: "green" },
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

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Evolución de Ventas (Semana)
          </Typography>
          <LineChart
            xAxis={[{ dataKey: "day" }]}
            series={[{ dataKey: "total", label: "Ventas ($)" }]}
            dataset={ventas}
            height={300}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Productos más vendidos
          </Typography>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 250, label: "Kit JT Sprockets" },
                  { id: 1, value: 180, label: "Aceite Motul 7100" },
                  { id: 2, value: 120, label: "Filtro Aire K&N" },
                ],
              },
            ]}
            height={250}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default VentasReport;
