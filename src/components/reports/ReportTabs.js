import { Tabs, Tab, Box } from "@mui/material";

export default function ReportTabs({ value, setValue }) {
  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Ventas" />
        <Tab label="Gastos" />
        <Tab label="General" />
        <Tab label="Productos" />
      </Tabs>
    </Box>
  );
}
