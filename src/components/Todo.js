import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Todo = (props) => {
  return (
    <div className="todo-item">
      <p className={`todo-item-name  ${props.isComplete ? "completed" : ""} `}>
        {props.name}
      </p>
      <button
        onClick={() => props.onComplete(props.todo.key)}
        className="btn btn-complete"
      >
        <DoneIcon sx={{ fontSize: "1.3rem" }} />
      </button>
      <button
        onClick={() => props.onDelete(props.todo.key)}
        className="btn btn-delete"
      >
        <DeleteOutlineIcon sx={{ fontSize: "1.3rem" }} />
      </button>
    </div>
  );
};

export default Todo;
