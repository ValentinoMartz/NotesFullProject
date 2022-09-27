import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteNote,
  editNote,
  getAllNotes,
} from "../../src/redux/actions/index";
import { useNavigate } from "react-router-dom";
import Edit from "./Edit";

function Card({ descripcion, titulo, id }) {
  const dispatch = useDispatch();
  const history = useNavigate();

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteNote(id));
    dispatch(getAllNotes());

    window.location.reload();
    history("/");
  }

  function handleEdit(e) {
    e.preventDefault();
    dispatch(editNote(id));
  }

  return (
    <Box textAlign="center" mt={6}>
      <IconButton onClick={(e) => handleDelete(e)} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <Edit handleEdit={handleEdit} />
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
