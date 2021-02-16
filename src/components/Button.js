import React from 'react';
import "../App.css";


function Button(props){
    return  (
       <button
           onClick={(e)=>props.onClick(e)} 
           className={props.className}>{props.title}
      </button>
    )
}
export default Button;