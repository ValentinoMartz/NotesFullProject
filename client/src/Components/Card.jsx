import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote, getAllNotes } from "../../src/redux/actions/index";
import { useNavigate } from "react-router-dom";

function Card({ descripcion, titulo, id }) {
  const dispatch = useDispatch();
  const history = useNavigate();

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteNote(id));
    dispatch(getAllNotes());

    history("/");
  }
  return (
    <Box textAlign="center" mt={6}>
      <IconButton onClick={(e) => handleDelete(e)} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit">
        <EditIcon />
      </IconButton>
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
