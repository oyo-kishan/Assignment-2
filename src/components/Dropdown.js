import React from "react";
import "../App.css";

function Dropdown(props) {
  const list = props.options;
  return (
    <div>

      <select
        className={props.className}
        value={props.movieGenre}
        onChange={(e) => props.onChange(e.target.value)}>
          
        <option value="Select genre" selected disabled>Select Genre</option>
        {
        list.map((option) => (<option value={option}>{option}</option>))
        }
      </select>
      <br />
    </div>
  );
}

export default Dropdown;
