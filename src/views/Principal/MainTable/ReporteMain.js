import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const TodayReport = ({ ventasHoy, variacion }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1">Ventas Diarias</Typography>
          <CalendarTodayIcon fontSize="small" color="action" />
        </Box>
        <Typography
          variant="h4"
          color="error"
          fontWeight={700}
          sx={{ mt: 1 }}
        >
          ${ventasHoy.toLocaleString("es-AR")}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <ArrowUpwardIcon fontSize="small" color="success" />
          <Typography variant="body2" color="success.main">
            +{variacion}% vs ayer
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TodayReport;
