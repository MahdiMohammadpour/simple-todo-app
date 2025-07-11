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
import { useEffect, useState } from "react";
import { TodoType } from "../_types";

type Props = {
  open: boolean;
  todo: TodoType | null;
  onClose: () => void;
  onEdit: (id: number, newName: string) => void;
};

export default function EditTodoModal({ open, todo, onClose, onEdit }: Props) {
  const [editText, setEditText] = useState("");

  useEffect(() => {
    if (todo) {
      setEditText(todo.name);
    }
  }, [todo]);

  const handleSave = () => {
    if (todo) {
      onEdit(todo.id, editText);
      onClose();
    }
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
        Edit Todo
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
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          sx={{ mt: 4 }}
          placeholder="Do something!"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" sx={{ color: "#828282" }}>
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          disabled={!editText.trim()}
        >
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
