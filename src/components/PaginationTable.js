import React from "react";
import "../App.css";

function PaginationTable(props) {

    const headingList=props.heading;
    const data=props.data;

  return (
      <div>
          <table className={props.className}>
                <tbody>
                    <tr>{headingList.map((heading,index)=><th key={index}>{heading}</th>)}</tr>
                    {
                    data.map((item) => {
                        return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.created_at}</td>
                                </tr>
                        );
                    })
                }
                </tbody>
          </table>
           <div>
               <button id="paginationbutton" onClick={()=>props.onPrevClicked()}>Prev</button>
               <button id="paginationbutton" onClick={()=>props.onNextClicked()}>Next</button>
           </div>
      </div>   
  );
}
export default PaginationTable;
