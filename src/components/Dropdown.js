import React from "react";
import "../App.css";

function Dropdown(props) {
  const list = props.options;

  return (
    <div>
      <select
        className={props.className}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}>
        <option value={props.title} disabled>{props.title}</option>
        {
          list.map((option,index)=>{
            return <option key={index} value={option}>{option}</option>
          })
        }
      </select>
      <br />
    </div>
  );
}

export default Dropdown;
