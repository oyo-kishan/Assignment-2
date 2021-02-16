import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
import Input from "../components/Input";
import Table from '../components/Table';
import Button from "../components/Button";

function MovieTable() {
  const data = useSelector((state) => state.movieData);
  const [searchKey,setSearchKey]=useState("");

  return (
    <div className="mainDiv">

      <Input
        className="searchBar"
        type="text"
        name="Filter Movie "
        value={searchKey}
        placeholder="Filter Movie"
        onChange={(value) => setSearchKey(value)}
      />

      <Table  
           className="movietable" 
           heading={["Name","Year","Genre(list)","Description","Rating"]}
           data={data.movies}
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
