import { Box, Typography } from "@mui/material";
import React from "react";

function Card({ descripcion, titulo }) {
  return (
    <Box textAlign="center" mt={6}>
      <Typography variant="h3" color="secondary">
        {titulo}
      </Typography>
      <Typography variant="h3" color="initial">
        {descripcion}
      </Typography>
    </Box>
  );
}

export default Card;
