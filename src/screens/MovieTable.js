import React,{useState,useEffect} from "react";
import {useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from "react-redux";
import Input from "../components/Input";
import Table from '../components/Table';
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import {deleteMovies} from '../actions/Action';

function MovieTable() {
  const dispatch = useDispatch();
  const [data,setData]=useState(useSelector((state) => state.movieData.movies));

  const [searchKey,setSearchKey]=useState("");
  const [searchResult,setSearchResult]=useState([]);


  useEffect(()=>{
    const result=[...data].filter((item)=>{
      return isContains(item.name.toLowerCase(),searchKey.toLowerCase());
    })
    setSearchResult(result);
  },[searchKey,data]);

  const sortData=(value)=>{

    const copy=[...data].sort((firstMovie,secondMovie)=>{
      switch(value){
        case "Name":
          return firstMovie.name.localeCompare(secondMovie.name);
        case "Year":
          return firstMovie.year-secondMovie.year;
        case "Rating":
          return firstMovie.rating-secondMovie.rating;
        default : 
          break;
      }
      return null;
    });
    setData(copy);
  }

  const deleteHandler=(id)=>{
    dispatch(deleteMovies(id));
    const result=[...data].filter(item=>item.id!==id)
    setData(result);
  }

  const editHandler=(id)=>{
    
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

        <Dropdown
            className="inputField"
            value="default"
            onChange={(value)=>sortData(value)}
            title="Sort by"
            options={["Name","Year","Rating"]}
        />

      <Table  
           className="movietable" 
           heading={["Name","Year","Genre(list)","Description","Rating","Edit","Delete"]}
           data={searchResult}
           onDeleteClicked={(id)=>{deleteHandler(id)}}
           onEditClicked={(id)=>{editHandler(id)}}
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


function isContains(word,key){

  if(key.length>word.length)return false;

  for(let i=0;i<word.length;i++){
    let mismatch=false;
    for(let j=0;j<key.length && !mismatch;j++){
      if(word.charAt(i+j)!==key.charAt(j)){
        mismatch=true;
      }
    }
    if(!mismatch)return true;
  }
  return false;
}

