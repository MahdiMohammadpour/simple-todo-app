"use client";

import { Box, Container, IconButton } from "@mui/material";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import AddTodoModal from "./_components/AddModal";
import TodosList from "./_components/TodosList";
import { TodoType } from "./_types";

export default function Page() {
  const [data, setData] = useState<TodoType[]>([
    { id: 0, name: "todo 1", status: 0 },
    { id: 1, name: "todo 2", status: 1 },
    { id: 2, name: "todo 3", status: 0 },
    { id: 3, name: "todo 4", status: 0 },
    { id: 4, name: "todo 5", status: 1 },
    { id: 5, name: "todo 6", status: 0 },
  ]);
  const [openAddModal, setOpenAddModal] = useState(false);

  const AddTodo = (name: string) => {
    if (!name.trim()) return;

    const newId = data.length > 0 ? Math.max(...data.map((t) => t.id)) + 1 : 0;
    const todo: TodoType = {
      id: newId,
      name: name,
      status: 0,
    };
    setData([...data, todo]);
  };

  const DeleteTodo = (id: number) => {
    setData(data.filter((todo) => todo.id !== id));
  };

  const EditTodo = (id: number, name: string) => {
    setData(data.map((todo) => (todo.id === id ? { ...todo, name } : todo)));
  };

  const ToggleStatusTodo = (id: number) => {
    setData(
      data.map((todo) =>
        todo.id === id ? { ...todo, status: todo.status === 0 ? 1 : 0 } : todo
      )
    );
  };

  return (
    <>
      <Container sx={{ textAlign: "center", pt: 20 }}>
        <Box sx={{ position: "absolute", bottom: 20, right: 70 }}>
          <IconButton
            onClick={() => setOpenAddModal(true)}
            sx={{
              borderRadius: "50%",
              color: "#fff",
              bgcolor: "primary.main",p:2,
              "&:hover": { bgcolor: "primary.main" },
            }}
          >
            <FiPlus />
          </IconButton>
        </Box>

        <TodosList
          todos={data}
          onDelete={DeleteTodo}
          onEdit={EditTodo}
          onToggleStatus={ToggleStatusTodo}
        />
      </Container>
      <AddTodoModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        AddTodo={AddTodo}
      />
    </>
  );
}
