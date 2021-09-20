import React from "react";
import AddIcon from "@mui/icons-material/AddSharp";

const Form = (props) => {
  function onAddHandler() {
    if (props.value.trim() !== "") props.onAddHandler();
    props.setInputHandler("");
  }

  return (
    <div className="form">
      <input
        onChange={(e) => {
          props.setInputHandler(e.target.value);
        }}
        type="text"
        value={props.value}
        className="text-input"
      />
      <button className="btn add-btn" onClick={onAddHandler}>
        <AddIcon sx={{ color: "white" }} />
      </button>
    </div>
  );
};

export default Form;
