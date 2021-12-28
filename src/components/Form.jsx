import { useState } from "react";
import isEmpty from "lodash/isEmpty";
import { toast } from "react-toastify";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
function Form({ todos, setTodos, setStatus }) {
  const [inputText, setInputText] = useState("");
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (isEmpty(inputText)) {
      toast.error("Input field cannot be empty!", {
        theme: "colored",
      });
    } else {
      toast.success("Add successful.", {
        theme: "colored",
      });
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() },
      ]);
    }

    setInputText("");
  };

  const statusTodoHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <h1>My ToDo List</h1>
      <div className="search">
        <input
          value={inputText}
          type="text"
          className="todo-input"
          placeholder="Add..."
          onChange={inputTextHandler}
        />

        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>

      <div>
        <Select
          className="select"
          label="Status"
          onChange={statusTodoHandler}
          defaultValue={"all"}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="uncompleted">Uncompleted</MenuItem>
        </Select>
        {/* <select
          name="todos"
          className="filter-todo"
          onChange={statusTodoHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select> */}
      </div>
    </form>
  );
}
export default Form;
