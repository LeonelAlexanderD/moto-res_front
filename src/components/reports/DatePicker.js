import { Stack, TextField, ToggleButtonGroup, ToggleButton } from "@mui/material";

export default function DateRangePicker({ range, setRange, mode, setMode }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TextField
        type="date"
        value={range.start}
        onChange={(e) => setRange({ ...range, start: e.target.value })}
      />
      <TextField
        type="date"
        value={range.end}
        onChange={(e) => setRange({ ...range, end: e.target.value })}
      />
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={(e, val) => val && setMode(val)}
        size="small"
      >
        <ToggleButton value="day">Día</ToggleButton>
        <ToggleButton value="month">Mes</ToggleButton>
        <ToggleButton value="year">Año</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
