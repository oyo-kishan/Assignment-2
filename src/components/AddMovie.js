import React, { useState } from "react";
import "../App.css";
import addMovies from "../actions/Action";
import { useDispatch } from "react-redux";

function AddMovie() {
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieDescripiton, setMovieDescription] = useState("");
  const [movieRating, setMovieRating] = useState("");

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
    setMovieName("");
    setMovieYear("");
    setMovieDescription("");
    setMovieGenre("");
    setMovieRating("");
  }

  return (
    <form onSubmit={submitMovie} className="addMovieForm">
      <label className="inputLabel">Movie Name</label>
      <input
        className="inputField"
        type="text"
        placeholder="Movie Name"
        name="moviename"
        onChange={(e) => setMovieName(e.target.value)}
      />
      <br />
      <label className="inputLabel">Movie Year</label>
      <input
        className="inputField"
        type="text"
        name="year"
        placeholder="Year"
        onChange={(e) => setMovieYear(e.target.value)}
      />

      <br />
      <label className="inputLabel">Movie Genre</label>
      <input
        className="inputField"
        type="text"
        name="genre"
        placeholder="Genre"
        onChange={(e) => setMovieGenre(e.target.value)}
      />

      <br />
      <label className="inputLabel">Movie Description</label>
      <input
        className="inputField"
        type="text"
        placeholder="Description"
        name="description"
        onChange={(e) => setMovieDescription(e.target.value)}
      />

      <br />

      <label className="inputLabel">Movie Rating</label>
      <input
        className="inputField"
        type="text"
        placeholder="Rating"
        name="rating"
        onChange={(e) => setMovieRating(e.target.value)}
      />
      <br />
      <button id="addMovieButton" type="submit" value="submit">
        Add Movie
      </button>
    </form>
  );
}

export default AddMovie;
