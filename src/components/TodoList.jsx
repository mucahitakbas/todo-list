import React, { useState } from "react";
import Todo from "./Todo";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { toast } from "react-toastify";
import DialogTitle from "@mui/material/DialogTitle";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAgree = () => {
    setOpen(false);
    setTodos([]);
    toast.success("All data deleted.", {
      theme: "colored",
    });
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>

      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleClickOpen}
      >
        Delete All
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to delete all?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleCloseAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default TodoList;
