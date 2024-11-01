import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  VStack,
  Text,
  Heading,
  Spinner,
  Center,
  Image,
} from "@chakra-ui/react";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );

      setMovie(response.data);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <Center
        minH="80vh"
        bg="black">
        <VStack spacing={4}>
          {/* Simple Rotating Ring */}
          <Box
            position="relative"
            width="60px"
            height="60px">
            <Spinner
              thickness="4px"
              speed="0.8s"
              emptyColor="gray.700"
              color="accent.500"
              size="xl"
            />
          </Box>
          <Text
            fontSize="lg"
            color="gray.300">
            Loading movie details...
          </Text>
        </VStack>
      </Center>
    );
  }

  if (!movie) {
    return (
      <Text>
        This movie seems to be lost in the cosmos. Try searching again.
      </Text>
    );
  }

  const imageUrl =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <Box
      maxW="800px"
      mx="auto"
      p={6}
      mt={6}
      mb={12}>
      <Image
        src={imageUrl}
        alt={movie.Title || "Movie poster"}
        borderRadius="lg"
        mb={8}
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
