import React from "react";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function LinkPage() {
  return (
    <>
      <Link to="/data">
        <Button variant="outlined">Show Data</Button>
      </Link>
      <Link to="/">
        <Button variant="outlined">Add data</Button>
      </Link>
    </>
  );
}

export default LinkPage;
