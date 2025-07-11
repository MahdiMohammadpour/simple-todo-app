"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  AddTodo: (name: string) => void;
};

export default function AddTodoModal({ open, onClose, AddTodo }: Props) {
  const [addText, setAddText] = useState("");

  const handleSave = () => {
    AddTodo(addText);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "22px",
        },
      }}
    >
      <DialogTitle fontSize={30} fontWeight={700} color="#545454">
        New Todo
      </DialogTitle>
      <DialogContent>
        <Typography fontSize={16}>
          Please write content of todo in input below!
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          fullWidth
          variant="standard"
          value={addText}
          onChange={(e) => setAddText(e.target.value)}
          sx={{ mt: 4 }}
          placeholder="Do something!"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" sx={{ color: "#828282" }}>
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" disabled={!addText.trim()}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
