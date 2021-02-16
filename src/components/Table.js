import React from "react";
import "../App.css";

function Table(props) {
    const headingList=props.heading;
    const data=props.data;
  return (
      <table className={props.className}>
        <tbody>
            <tr>{headingList.map((heading)=><th>{heading}</th>)}</tr>
            {
            data.map((item) => {
                return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.year}</td>
                    <td>{item.genre}</td>
                    <td>{item.description}</td>
                    <td>{item.rating}</td>
                    <td><p className="link" onClick={()=>{props.onEditClicked(item.id)}}>edit</p></td>
                    <td><p className="link" onClick={()=>{props.onDeleteClicked(item.id)}}>delete</p></td>
                </tr>
                );
            })
          }
          </tbody>
          </table>
         
  );
}
export default Table;
