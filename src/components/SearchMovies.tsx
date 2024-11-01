import React, { useState, useEffect } from "react";
import { Box, Grid, Input, Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import MovieCard from "./MovieCard";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  Rated?: string;
}

const SearchMovies: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  // Fetch initial movies from 2024 on component mount
  const fetchInitialMovies = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=movie&y=2024&apikey=${API_KEY}`
    );
    const initialMovies = response.data.Search || [];

    // Fetch details for each movie to get the 'Rated' property
    const movieDetails = await Promise.all(
      initialMovies.map(async (movie: Movie) => {
        const detailsResponse = await axios.get(
          `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
        );
        return detailsResponse.data;
      })
    );

    // Filter out movies with adult ratings
    const filteredMovies = movieDetails.filter(
      (movie: Movie) => movie.Rated !== "R" && movie.Rated !== "NC-17"
    );

    setMovies(filteredMovies);
  };

  // Handle search submission, fetching movies based on user query
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );
    const searchMovies = response.data.Search || [];

    // Fetch details for each movie to get the 'Rated' property
    const movieDetails = await Promise.all(
      searchMovies.map(async (movie: Movie) => {
        const detailsResponse = await axios.get(
          `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
        );
        return detailsResponse.data;
      })
    );

    // Filter out movies with adult ratings
    const filteredMovies = movieDetails.filter(
      (movie: Movie) => movie.Rated !== "R" && movie.Rated !== "NC-17"
    );

    setMovies(filteredMovies);
  };

  // Fetch initial movies on page load
  useEffect(() => {
    fetchInitialMovies();
  }, []);

  return (
    <Box
      maxW="1000px"
      mx="auto"
      py={8}
      px={{ base: 4, md: 8 }}>
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
        flexDirection={{ base: "column", md: "row" }} // Stack on small screens, horizontal on medium and up
        alignItems="center" // Center align for small screens
        justifyContent="center"
        mb={16}>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
          size="lg"
          borderColor="gray.300"
          flex="1"
          width={{ base: "100%", md: "auto" }} // Full width on small screens
          maxWidth="800px"
          minHeight="48px"
          mb={{ base: 4, md: 0 }} // Add margin on small screens to separate from button
          mr={{ base: 0, md: 2 }} // Remove right margin on small screens
        />
        <Button
          type="submit"
          colorScheme="blue"
          size="lg"
          width={{ base: "100%", md: "auto" }} // Full width on small screens
        >
          Search
        </Button>
      </Box>

      {/* Movie Grid */}
      {movies.length > 0 ? (
        <Grid
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={6}
          justifyItems="center"
          alignItems="center">
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
