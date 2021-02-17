import React from "react";
import "../App.css";

function UserTable(props) {
    
    const headingList=props.heading;
    const data=props.data;

  return (
      <table className={props.className}>
        <tbody>
            <tr>{headingList.map((heading,index)=><th key={index}>{heading}</th>)}</tr>
            {
             data.map((item) => {
                return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.username}</td>
                    <td>{item.website}</td>
                </tr>
                );
            })
          }
          </tbody>
          </table>
         
  );
}
export default UserTable;
