import * as React from "react";

import {
  Box,
  TextField,
  Typography,
  Modal,
  Button,
  IconButton,
  FormGroup,
} from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import EditIcon from "@mui/icons-material/Edit";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editNote, postNote } from "../redux/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Edit() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Box textAlign="center" mt={6}>
      <IconButton aria-label="edit" onClick={(e) => setOpen(true)}>
        <EditIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
          <FormGroup sx={style}>
            <Typography
              variant="h6"
              fontWeight="400"
              color="initial"
              textAlign="center"
            >
              Agrega tu nota <NoteAddIcon />
            </Typography>
            <TextField
              id="demo-helper-text-aligned"
              label="Titulo"
              type="text"
              sx={{ width: "100%", marginTop: 2 }}
            />

            <TextField
              id="demo-helper-text-aligned"
              label="Descripcion"
              type="text"
              sx={{
                width: "100%",
                marginTop: 2,
              }}
              multiline
            />
            {/* <TextField
            id="demo-helper-text-aligned"
            label="Tags"
            sx={{ width: "100%", marginTop: 2 }}
          /> */}
            <Button
              variant="outlined"
              endIcon={<SaveIcon />}
              type="submit"
              sx={{
                display: "flex",
                marginTop: 2,
              }}
              fullWidth
            >
              Guardar
            </Button>
          </FormGroup>
        </form>
      </Modal>
    </Box>
  );
}
