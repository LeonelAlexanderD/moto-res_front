import React from "react";
import { TextField, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        placeholder="Search for parts"
        size="small"
        InputProps={{
          startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
        }}
      />
    </Box>
  );
}
