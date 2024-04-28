import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";
import AlertTitle from "@mui/material/AlertTitle";

function Alertbox({ setOpen, open }) {
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
      <Alert variant="filled" severity="error">
        <AlertTitle>Field is empty or wrong data filled</AlertTitle>
      </Alert>
    </Snackbar>
  );
}

export default Alertbox;
