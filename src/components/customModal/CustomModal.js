import React from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({ open, setOpen, title, children, maxWidth = "md" }) => {
  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick" && "escapeKeyDown") return;
    setOpen(false);
  };
  return (
    <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={handleClose}>
      <DialogTitle
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "0",
        }}
      >
        <b style={{ marginLeft: "12px" }}>{title}</b>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomModal;
