import React, { useState } from "react";
import "../App.css";
import addMovies from "../actions/Action";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

function AddMovie() {
  
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState("Not Known");
  const [movieYear, setMovieYear] = useState("Not Known");
  const [movieGenre, setMovieGenre] = useState("Not Known");
  const [movieDescripiton, setMovieDescription] = useState("Not Known");
  const [movieRating, setMovieRating] = useState("Not Known");

  function submitMovie(e) {
    e.preventDefault();
    dispatch(
      addMovies({
        name: movieName,
        year: movieYear,
        genre: movieGenre,
        description: movieDescripiton,
        rating: movieRating,
      })
    );
    alert("Movies added to store successfully");
  }



  return (
    <form  className="addMovieForm">
      <Input 
          className="inputField" 
          type="text" 
          name="moviename" 
          placeholder="Movie Name" 
          onChange={(value)=>{setMovieName(value)}}
      />

      <Input
        className="inputField"
        type="number"
        name="year"
        placeholder="Year"
        onChange={(value) => setMovieYear(value)}
      />

      <Dropdown
        className="inputField"
        value={movieGenre}
        onChange={(value) => setMovieGenre(value)}
        options={["Comedy","Action","Drama","Mystery","Horror"]}
      />

      <Input
        className="inputField"
        type="text"
        placeholder="Description"
        name="description"
        onChange={(value) => setMovieDescription(value)}
      />

      <Input
        className="inputField"
        type="number"
        placeholder="Rating"
        name="rating"
        onChange={(value) => setMovieRating(value)}
      />

      <Button 
         onClick={(e)=>submitMovie(e)}
         className="addMovieButton"
         title="Add Movie"
      />

    </form>
  );
}

export default AddMovie;
