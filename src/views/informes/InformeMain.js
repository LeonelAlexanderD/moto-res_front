import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import ReportCard from "components/reports/ReportCard";
import DateRangePicker from "components/reports/DatePicker";
import ReportTabs from "components/reports/ReportTabs";
import CompareBar from "components/reports/CompareBar";

export default function ReportesPage() {
  const [tab, setTab] = useState(0);
  const [range, setRange] = useState({ start: "2023-10-01", end: "2023-10-26" });
  const [mode, setMode] = useState("month");

  // Datos simulados (luego conectarás con tus endpoints)
  const data = {
    ingresos: 45231.89,
    ventas: 1235,
    promedio: 36.62,
    ganancia: 12890.12,
    comparativoAnterior: 12000,
    productos: [
      { nombre: "Kit de Transmisión JT Sprockets", unidades: 250, monto: 15750 },
      { nombre: "Aceite de Motor Motul 7100", unidades: 180, monto: 9900 },
      { nombre: "Filtro de Aire K&N", unidades: 120, monto: 7200 },
    ],
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Reportes
      </Typography>

      <ReportTabs value={tab} setValue={setTab} />

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <DateRangePicker range={range} setRange={setRange} mode={mode} setMode={setMode} />
        <Button variant="outlined">Exportar</Button>
      </Box>

      {/* Tarjetas resumen */}
      <Box sx={{ display: "flex", flexWrap: "wrap", mb: 2 }}>
        <ReportCard title="Ingresos Totales" value={`$${data.ingresos.toLocaleString()}`} />
        <ReportCard title="Ventas Realizadas" value={data.ventas} />
        <ReportCard title="Ticket Promedio" value={`$${data.promedio}`} />
        <ReportCard
          title="Ganancia Neta"
          value={`$${data.ganancia.toLocaleString()}`}
          color="green"
        />
      </Box>

      <CompareBar current={data.ganancia} previous={data.comparativoAnterior} />

      {/* Tabla */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" mb={2}>
          Producto más vendido
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell>Unidades</TableCell>
              <TableCell>Monto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.productos.map((p, i) => (
              <TableRow key={i}>
                <TableCell>{p.nombre}</TableCell>
                <TableCell>{p.unidades}</TableCell>
                <TableCell>${p.monto.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}
