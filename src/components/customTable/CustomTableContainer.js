import { tableHeightDefault } from "./StylesTable";

const { Paper, TableContainer } = require("@mui/material");

const CustomTableContainer = ({ children, style = tableHeightDefault }) => {
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden", borderRadius: 0 }}>
        <TableContainer sx={{ ...style }}>{children}</TableContainer>
      </Paper>
    </>
  );
};
export default CustomTableContainer;
