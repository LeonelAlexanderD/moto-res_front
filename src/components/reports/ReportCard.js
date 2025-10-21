import { Card, CardContent, Typography } from "@mui/material";

export default function ReportCard({ title, value, color }) {
  return (
    <Card
      sx={{
        flex: 1,
        minWidth: 200,
        borderRadius: 3,
        boxShadow: 2,
        m: 1,
      }}
    >
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary">
          {title}
        </Typography>
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ color: color || "text.primary" }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
