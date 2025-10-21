// src/pages/Reportes/GeneralReport.jsx
import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { LineChart } from "@mui/x-charts";

const GeneralReport = () => {
  const data = [
    { mes: "Ene", ventas: 10000, gastos: 6000 },
    { mes: "Feb", ventas: 9500, gastos: 5800 },
    { mes: "Mar", ventas: 12000, gastos: 7500 },
    { mes: "Abr", ventas: 14000, gastos: 9000 },
  ];

  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {[
          { label: "Balance Total", value: "$18,200.00" },
          { label: "Promedio Mensual", value: "$4,550.00" },
          { label: "Margen Promedio", value: "32%", color: "green" },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
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

      <Card>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Ingresos vs Gastos
          </Typography>
          <LineChart
            xAxis={[{ dataKey: "mes" }]}
            series={[
              { dataKey: "ventas", label: "Ventas ($)" },
              { dataKey: "gastos", label: "Gastos ($)" },
            ]}
            dataset={data}
            height={300}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default GeneralReport;
