import * as React from "react";

import {
  Box,
  Fab,
  Tooltip,
  TextField,
  Typography,
  Modal,
  Button,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import SaveIcon from "@mui/icons-material/Save";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

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

/* const styleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}); */

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box textAlign="center" mt={6}>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Agregar una nota"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            sx={{ width: "100%", marginTop: 2 }}
          />

          <TextField
            id="demo-helper-text-aligned"
            label="Descripcion"
            sx={{
              width: "100%",
              marginTop: 2,
            }}
            multiline
          />
          <TextField
            id="demo-helper-text-aligned"
            label="Tags"
            sx={{ width: "100%", marginTop: 2 }}
          />

          <Button
            variant="outlined"
            endIcon={<SaveIcon />}
            sx={{
              display: "flex",
              marginTop: 2,
            }}
            fullWidth
          >
            Guardar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
