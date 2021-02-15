import React from "react";
import {Link} from 'react-router-dom';
import  '../App.css';
import {useSelector} from 'react-redux';

function Table() {
    const data=useSelector(state=>state.movieData);
    
  return (
    <div>
      <h1>Movie Table</h1>
      <table id="movietable">
         <tbody>
        <tr>
          <th>Name</th><th>Year</th><th>Genre(list)</th><th>Description</th><th>Rating</th>
        </tr>
            {
                data.movies.map((item,index)=>{
                    return (<tr key={index}>
                              <td>{item.name}</td><td>{item.year}</td>
                              <td>{item.genre}</td><td>{item.description}</td>
                              <td>{item.rating}</td>
                              </tr>
                            )
                })
            }
            </tbody>
      </table>
      
      <Link to="/AddMovie">
         <button id="addMovieButton">ADD MOVIE</button>
      </Link>
      
    </div>
  );
}

export default Table;
