import React, { useState } from "react";
import "./App.css";
import Data from "./Mock.json";
import Header from "./components/Header";
import Search from "./components/Search";
import Movies from "./components/Movies";
///////////Copied until Movies
///Need to complete MovieList, Movie Card
const App = (props) => {
  return (
    <div>
      <Header />
      <Movies />
    </div>
  );
};

export default App;
