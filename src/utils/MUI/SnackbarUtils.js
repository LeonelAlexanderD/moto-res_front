import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function SnackBarUtils({ view, message, timer, closed }) {
  const [open, setOpen] = React.useState(view);

  const handleClose = () => {
    setOpen(false);
    if (closed) closed(false);
  };

  React.useEffect(() => {
    setOpen(view);
  }, [view]);

  const renderAlert = () => {
    if (typeof message === "string") {
      if (message.includes("500:")) {
        return (
          <Alert severity="error">
            {message.split("500:")[1] || "Error en el servicio"}
          </Alert>
        );
      } else if (message.includes("200:")) {
        return (
          <Alert severity="success">
            {message.split("200:")[1] || "Ejecucion exitosa"}
          </Alert>
        );
      } else if (message.includes("202:")) {
        return (
          <Alert severity="info">
            {message.split("202:")[1] || "Ejecucion exitosa"}
          </Alert>
        );
      }
    }
    return <Alert severity="info">{message || "Ejecucion exitosa"}</Alert>;
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={timer ? parseFloat(timer) : 6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {renderAlert()}
      </Snackbar>
    </div>
  );
}
