import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import CheckIcon from "@mui/icons-material/Check";
import isEmpty from "lodash/isEmpty";
import { toast } from "react-toastify";
function Todo({ text, todos, setTodos, todo }) {
  const [edit, setEdit] = useState(true);
  const [value, setValue] = useState(text);
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const editTodoHandler = () => {
    setEdit(false);
  };

  const editClosedTodoHandler = () => {
    if (isEmpty(value)) {
      toast.error("Input field cannot be empty!", {
        theme: "colored",
      });
    } else {
      toast.success("Change successful.", {
        theme: "colored",
      });
      setEdit(true);
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              text: value,
            };
          }
          return item;
        })
      );
    }
  };

  const valueTodoHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check-circle"></i>
      </button>
      <li className="todo-item">
        {edit ? (
          <>
            {text}
            <DeleteForeverIcon
              className="İcon"
              onClick={deleteHandler}
              color="error"
            />
            <EditTwoToneIcon className="İcon" onClick={editTodoHandler} />
          </>
        ) : (
          <>
            <input
              type="text"
              defaultValue={text}
              placeholder="Edit..."
              onChange={valueTodoHandler}
            />

            <DeleteForeverIcon
              className="İcon"
              onClick={deleteHandler}
              color="error"
            />
            <CheckIcon
              className="İcon"
              onClick={editClosedTodoHandler}
              color="success"
            />
          </>
        )}
      </li>

      {/* <button className="trash-btn" onClick={deleteHandler}>
        <i className="fa fa-minus-circle"></i>
      </button> */}
    </div>
  );
}

export default Todo;
