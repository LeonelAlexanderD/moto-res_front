import { Box, Typography, LinearProgress } from "@mui/material";

export default function CompareBar({ current, previous }) {
  const diff = ((current - previous) / previous) * 100 || 0;
  const positive = diff >= 0;

  return (
    <Box sx={{ mt: 1 }}>
      <Typography variant="body2" color={positive ? "green" : "error"}>
        {positive ? "▲" : "▼"} {diff.toFixed(1)}% respecto al período anterior
      </Typography>
      <LinearProgress
        variant="determinate"
        value={Math.min(Math.abs(diff), 100)}
        sx={{
          height: 6,
          borderRadius: 5,
          mt: 0.5,
          bgcolor: "#eee",
          "& .MuiLinearProgress-bar": {
            bgcolor: positive ? "green" : "red",
          },
        }}
      />
    </Box>
  );
}
