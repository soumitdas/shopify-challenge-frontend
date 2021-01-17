import React from "react";
import Card from "../card";
import "./SearchResults.css";

const SearchResults = ({ data = [], addNomination }) => {
  return (
    <div className="search-result-container">
      {data.map((movie) => (
        <Card
          key={movie.imdbID}
          image={movie.Poster}
          title={movie.Title}
          year={movie.Year}
          onClick={() => addNomination(movie)}
        />
      ))}
    </div>
  );
};

export default SearchResults;
