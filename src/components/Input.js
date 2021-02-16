import React from "react";
import "../App.css";

function Input(props) {
  return (
    <div>
      <input
        className={props.className}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <br />
    </div>
  );
}

export default Input;
