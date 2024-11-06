import React, { useState, useEffect } from "react";
import { Box, Grid, Input, Button, Heading, Skeleton } from "@chakra-ui/react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Movie } from "../types/Movie";

const SearchMovies: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  // Fetch initial movies from 2024 on component mount
  const fetchInitialMovies = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://www.omdbapi.com/?s=movie&y=2024&apikey=${API_KEY}`
    );
    const initialMovies = response.data.Search || [];
    setMovies(initialMovies);
    setIsLoading(false);
  };

  // Handle search submission, fetching movies based on user query
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );
    const searchMovies = response.data.Search || [];
    setMovies(searchMovies);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchInitialMovies();
  }, []);

  return (
    <Box
      maxW="1000px"
      mx="auto"
      py={8}
      mt={8}>
      {/* Header */}
      <Heading
        as="h1"
        textAlign="center"
        fontSize="2.5rem"
        px={4}
        mb={{ base: 8, md: 16 }}
        color="primary">
        Search the Cosmos for a Star Movie
      </Heading>

      {/* Search Form */}
      <Box
        as="form"
        onSubmit={handleSearch}
        display="flex"
        flexDirection="column"
        alignItems="center"
        px={4}
        mb={20}
        maxW="600px"
        mx="auto">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
          size="lg"
          borderColor="gray.300"
          flex="1"
          width="100%"
          maxWidth={{ sm: "400px" }}
          minHeight="48px"
          mb={4}
          _focus={{
            borderColor: "accent.500",
            boxShadow: "0px 0px 8px #00e5ff",
          }}
          transition="0.3s ease-in-out"
        />
        <Button
          type="submit"
          size="lg"
          width="100%"
          maxWidth={{ sm: "400px" }}
          _hover={{ bg: "accent.600", transform: "scale(1.02)" }}
          _active={{ bg: "accent.700" }}
          transition="all 0.3s ease">
          Search
        </Button>
      </Box>

      {/* Movie Results */}
      {isLoading ? (
        // Loading State
        <Grid
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={6}>
          {[...Array(6)].map((_, i) => (
            <Skeleton
              key={i}
              height="300px"
              borderRadius="md"
            />
          ))}
        </Grid>
      ) : // Movie List
      movies.length > 0 ? (
        <Grid
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={6}
          justifyItems="center"
          alignItems="start"
          mx={8}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </Grid>
      ) : (
        // Empty State
        <>
          <Heading
            as="h3"
            size="md"
            textAlign="center"
            marginTop={24}>
            Uh-oh, the movies are hiding!
          </Heading>
          <Heading
            as="h3"
            size="md"
            textAlign="center"
            marginTop={4}>
            Enter another title to catch them!
          </Heading>
        </>
      )}
    </Box>
  );
};

export default SearchMovies;
