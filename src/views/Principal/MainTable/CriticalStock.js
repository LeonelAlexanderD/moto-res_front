import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";

const StockCriticoTable = ({ alertasStock }) => {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            Alertas de Stock Crítico
          </Typography>
          <Button size="small" color="error">
            Ver todo
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ mt: 1 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Repuesto</TableCell>
                <TableCell>Stock Actual</TableCell>
                <TableCell>Punto de Pedido</TableCell>
                <TableCell align="right">Acción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alertasStock.map((item, i) => (
                <TableRow key={i}>
                  <TableCell>{item.repuesto}</TableCell>
                  <TableCell
                    sx={{
                      color:
                        item.stockActual <= item.puntoPedido / 2
                          ? "error.main"
                          : "warning.main",
                      fontWeight: 600,
                    }}
                  >
                    {item.stockActual}
                  </TableCell>
                  <TableCell>{item.puntoPedido}</TableCell>
                  <TableCell align="right">
                    <Button size="small" color="error">
                      Pedir
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default StockCriticoTable;
