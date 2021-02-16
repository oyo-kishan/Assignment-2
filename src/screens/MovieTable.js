import React,{useState,useEffect} from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom";
import { useSelector } from "react-redux";

import "../App.css";
import Input from "../components/Input";
import Table from '../components/Table';
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import deleteMovies from '../actions/DeleteMovie';

function isContains(word,key){

  if(key.length>word.length)return false;
  for(let i=0;i<word.length;i++){
    let mismatch=false;
    for(let j=0;j<key.length && !mismatch;j++){
      if(word.charAt(i+j)!==key.charAt(j))
          mismatch=true; 
    }
    if(!mismatch)return true;
  }
  return false;
}


function MovieTable() {

  const dispatch = useDispatch();
  const history= useHistory();
  const [data,setData]=useState(useSelector((state) => state.movieData.movies));
  const [sortOrder,setSortingOrder]=useState("default");
  const [searchKey,setSearchKey]=useState("");
  const [searchResult,setSearchResult]=useState([]);

  useEffect(()=>{
    const result=[...data].filter((item)=>{
      return isContains(item.name.toLowerCase(),searchKey.toLowerCase());
    })
    setSearchResult(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchKey,data]);


  const sortData=(value)=>{
    setSortingOrder(value);
    if(value!=="default"){
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
  }


  const deleteHandler=(id)=>{
    dispatch(deleteMovies(id));
    const result=[...data].filter(item=>item.id!==id)
    setData(result);
  } 

  const editHandler=(id)=>{
    let obj=fetchMovie(id);
    if(obj===null || obj===undefined)return ;
    history.push({
      pathname:"/addmovie",
      state:{
       movieName: obj.name,
       movieYear : obj.year,
       movieGenre: obj.genre,
       movieDescripiton: obj.description,
       movieRating :obj.rating,
       id:obj.id,
       editable:true
      }
    })
  }
  const fetchMovie=(id)=>{
    for(let movie of data){
      if(movie.id===id)return movie;
    }
    return null;
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
            value={sortOrder}
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

        <Button 
           className="addMovieButton"
           title="ADD MOVIE"
           onClick={()=>{return history.push({
             pathname:"/addmovie",
             state:{editable:false}}
             )}}
        />

    </div>
  );
}

export default MovieTable;
