import { Delete, Edit } from "@/assets/icons";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CheckBoxSvgHelper from "../_helper/CheckBoxSvgHelper";
import { TodoType } from "../_types";
import EditTodoModal from "./EditModal";

export default function TodosList({
  todos,
  onDelete,
  onEdit,
  onToggleStatus,
}: {
  todos: TodoType[];
  onDelete: (id: number) => void;
  onEdit: (id: number, name: string) => void;
  onToggleStatus: (id: number) => void;
}) {
  const [selectedStatus, setSelectedStatus] = useState(0);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <>
      <Paper elevation={3} sx={{ boxShadow: 0, borderRadius: "27px", p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Typography fontSize={44}>{new Date().getDay()}</Typography>
            <Stack spacing={0.1}>
              <Typography fontSize={16}>{new Date().toLocaleString('en', { month: 'long' })}</Typography>
              <Typography fontSize={16}>{new Date().getFullYear()}</Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              variant="text"
              sx={{ color: selectedStatus === 0 ? "primary.main" : "unset" }}
              onClick={() => setSelectedStatus(0)}
            >
              incompletet task
            </Button>
            <Button
              variant="text"
              sx={{ color: selectedStatus === 1 ? "primary.main" : "unset" }}
              onClick={() => setSelectedStatus(1)}
            >
              completet task
            </Button>
          </Box>
        </Box>
        {todos.filter((item) => item.status === selectedStatus).length === 0 ? (
          <Box p={2}>
            <Typography variant="body1" color="textSecondary">
              No todos yet. Add one to get started!
            </Typography>
          </Box>
        ) : (
          <List>
            {todos
              .filter((item) => item.status === selectedStatus)
              .map((item) => (
                <ListItem key={item.id} divider>
                  <IconButton onClick={() => onToggleStatus(item?.id)}>
                    <CheckBoxSvgHelper status={item.status} />
                  </IconButton>

                  <ListItemText
                    primary={item.name}
                    sx={{
                      textDecoration:
                        item.status === 1 ? "line-through" : "none",
                      color:
                        item.status === 1 ? "text.disabled" : "text.primary",
                    }}
                  />

                  <Box ml={2}>
                    <IconButton
                      onClick={() => {
                        setSelectedTodo(item);
                        setOpenEditModal(true);
                      }}
                      color="primary"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => onDelete(item.id)} color="error">
                      <Delete />
                    </IconButton>
                  </Box>
                </ListItem>
              ))}
          </List>
        )}
      </Paper>
      <EditTodoModal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        onEdit={onEdit}
        todo={selectedTodo}
      />
    </>
  );
}
