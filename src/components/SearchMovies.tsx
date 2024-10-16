import React, { useState } from "react";
import { Box, Grid, Input, Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import MovieCard from "./MovieCard";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
}

const SearchMovies: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );

    setMovies(response.data.Search || []);
  };

  return (
    <Box
      maxW="1000px"
      mx="auto"
      py={8}>
      {/* Header */}
      <Heading
        as="h1"
        textAlign="center"
        mb={4}>
        Movie Search
      </Heading>

      {/* Search Form */}
      <Box
        as="form"
        onSubmit={handleSearch}
        display="flex"
        mb={8}>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
          size="lg"
          borderColor="gray.300"
          flex="1"
          mr={2}
        />
        <Button
          type="submit"
          colorScheme="blue"
          size="lg">
          Search
        </Button>
      </Box>

      {/* Movie Grid */}
      {movies.length > 0 ? (
        <Grid
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={6}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </Grid>
      ) : (
        <Heading
          as="h3"
          size="md"
          textAlign="center">
          No movies found
        </Heading>
      )}
    </Box>
  );
};

export default SearchMovies;
