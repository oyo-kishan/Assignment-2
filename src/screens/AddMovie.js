import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "../App.css";
import addMovies from "../actions/AddMovie";
import updateMovie from '../actions/UpdateMovie';
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";


function AddMovie(props) {

  let params=props.location.state;
  const history=useHistory();
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieDescripiton, setMovieDescription] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieId,setMovieId]=useState("");
  const [buttonTitle,setButtonTitle]=useState("Add Movie");



  useEffect(()=>{
    if(params.editable){
      setMovieName(params.movieName);
      setMovieYear(params.movieYear);
      setMovieGenre(params.movieGenre);
      setMovieDescription(params.movieDescripiton);
      setMovieRating(params.movieRating);
      setMovieId(params.id);
      setButtonTitle("Update Movie");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  function submitMovie() {
    dispatch(addMovies(
      {
        name: movieName,
        year: movieYear,
        genre: movieGenre,
        description: movieDescripiton,
        rating: movieRating,
        id:  movieName.toString().concat(movieRating).concat(movieGenre.toString())
      })
    );
  }


 function updateMovieData(){
    dispatch(updateMovie({
        name: movieName,
        year: movieYear,
        genre: movieGenre,
        description: movieDescripiton,
        rating: movieRating,
        id: movieId
      })
    );
  }


  const checkCallerFunction=(e)=>{
    e.preventDefault();
    if(!params.editable){
      submitMovie();
      alert('Movie added to store');
    }else{
      updateMovieData();
      alert('Movie updatead in store');
    }
    history.goBack();
  }
  

  return (
    <form  className="addMovieForm">
      <Input 
          className="inputField" 
          type="text" 
          value={movieName}
          name="moviename"
          placeholder="Movie Name" 
          onChange={(value)=>{setMovieName(value)}}
      />
      
      <Input
        className="inputField"
        type="number"
        name="year"
        value={movieYear}
        placeholder="Year"
        onChange={(value) => setMovieYear(value)}
      />
      
      <Dropdown
        className="inputField"
        value={movieGenre}
        onChange={(value) => setMovieGenre(value)}
        title="Select Genre"
        options={["Comedy","Action","Drama","Mystery","Horror"]}
      />

      <Input
        className="inputField"
        type="text"
        value={movieDescripiton}
        placeholder="Description"
        name="description"
        onChange={(value) => setMovieDescription(value)}
      />

      <Input
        className="inputField"
        type="number"
        value={movieRating}
        placeholder="Rating"
        name="rating"
        onChange={(value) => setMovieRating(value)}
      />

      <Button 
         onClick={(e)=>checkCallerFunction(e)}
         className="addMovieButton"
         title={buttonTitle}
      />

    </form>
  );
}

export default AddMovie;
