import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, Heading, Spinner } from "@chakra-ui/react";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );

      setMovie(response.data);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <Spinner
        size="xl"
        color="brand.500"
        mt={10}
      />
    );
  }

  if (!movie) {
    return <Text>No movie details available.</Text>;
  }

  const imageUrl =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <Box
      maxW="800px"
      mx="auto"
      p={6}>
      <Image
        src={imageUrl}
        alt={movie.Title || "Movie poster"}
        borderRadius="lg"
        fallbackSrc="https://via.placeholder.com/500x750?text=No+Image"
      />
      <Heading
        as="h2"
        size="xl"
        my={4}
        color="brand.700">
        {movie.Title}
      </Heading>
      <Text color="gray.500">{movie.Released}</Text>

      <Box mt={4}>
        <Text fontWeight="bold">Genres:</Text>
        <Text color="gray.500">{movie.Genre}</Text>
      </Box>

      <Text mt={4}>{movie.Plot}</Text>
    </Box>
  );
};

export default MovieDetails;
