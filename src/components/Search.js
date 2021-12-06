import React from "react";

const Search = (props) => {
  return (
    <div>
      <label> Type Here</label>
      <input onChange={(props.handleSearch, props.searchMovie)} type="text" />
    </div>
  );
};

export default Search;
