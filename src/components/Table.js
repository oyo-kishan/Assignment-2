import React from "react";
import "../App.css";

function Table(props) {
    const headingList=props.heading;
    const data=props.data;
  return (
      <table className={props.className}>
        <tbody>
                <tr>
                   {
                       headingList.map((heading)=>{
                           return <th>{heading}</th>
                       })
                   }
                </tr>
            {
            data.map((item, index) => {
                return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.year}</td>
                    <td>{item.genre}</td>
                    <td>{item.description}</td>
                    <td>{item.rating}</td>
                </tr>
                );
            })
          }
          </tbody>
          </table>
         
  );
}
export default Table;
