import React, { useState } from "react";
import "./Movies.css";
import Data from "../Mock.json";
import MoviesList from "./MoviesList";
import Search from "./Search";

const Movies = (props) => {
  const [movies, setMovies] = useState("");
  const [searchField, setSearchField] = useState("");

  //   const axios = requie('axios');

  const searchMovie = (e) => {
    e.preventDefault();
    setMovies(Data);
  };

  const handleSearch = (val) => {
    setSearchField(val.target.value);
  };

  return (
    <>
      <Search searchMovie={this.searchMovie} handleSearch={this.handleSearch} />
      {this.movies.length > 0 ? (
        <MoviesList movies={this.movies} />
      ) : (
        <MoviesList movies={""} />
      )}
      )
    </>
  );
};

export default Movies;
