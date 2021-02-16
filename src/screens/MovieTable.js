import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
import Input from "../components/Input";
import Table from '../components/Table';
import Button from "../components/Button";

function MovieTable() {
  
  const [data,setData]=useState(useSelector((state) => state.movieData.movies));
  const [searchKey,setSearchKey]=useState("");
  const [searchResult,setSearchResult]=useState([]);

  useEffect(()=>{
    const result=[...data].filter((item)=>{
      return item.name.toLowerCase().includes(searchKey.toLocaleLowerCase());
    })
    setSearchResult(result);
  },[searchKey,data]);


  const sortData=(value)=>{

    const copy=[...data].sort((firstMovie,secondMovie)=>{
      switch(value){
        case "name":
          return firstMovie.name.localeCompare(secondMovie.name);
        case "year":
          return firstMovie.year-secondMovie.year;
        case "rating":
          return firstMovie.rating-secondMovie.rating;
        default : 
          break;
      }
      return null;
    });

    setData(copy);
  }

  return (
    <div className="mainDiv">
        <Input
          className="searchBar"
          name="Filter Movie By Name"
          value={searchKey}
          placeholder="Filter Movie By Name"
          onChange={(value)=>setSearchKey(value)}
        />
        
        <select  
           value="sort by" 
           onChange={(e)=>{sortData(e.target.value)}}>
          <option value="sort by" selected disabled>Sort by</option>
          <option value="name" >Name</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>

      <Table  
           className="movietable" 
           heading={["Name","Year","Genre(list)","Description","Rating"]}
           data={searchResult}
      />

      <Link to="/AddMovie">
        <Button 
           className="addMovieButton"
           title="ADD MOVIE"
           onClick={()=>{}}
        />
      </Link>
      
    </div>
  );
}

export default MovieTable;
