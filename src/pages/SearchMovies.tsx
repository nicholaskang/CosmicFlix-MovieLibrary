import React, { useState } from "react";
import { searchMovies } from "../api/api";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const SearchMovies: React.FC = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <TextField
          label="Search for a movie"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained">
          Search
        </Button>
      </form>
      <div>
        {movies.map((movie: any) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;
