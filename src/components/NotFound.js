import React from "react";

import Box from "@mui/material/Box";

function NotFound() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Page Not Found</h1>
        </div>
      </Box>
    </>
  );
}

export default NotFound;
