import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
}

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const imageUrl =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <Box
        borderRadius="lg"
        overflow="hidden"
        shadow="lg"
        maxW="200px"
        cursor="pointer"
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
          transform: "scale(1.05)",
          boxShadow: "2xl",
        }}>
        <Image
          src={imageUrl}
          alt={movie.Title || "Movie poster"}
          width="100%"
          height="300px"
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/500x750?text=No+Image"
        />
        <Box p={4}>
          <Text
            fontWeight="bold"
            fontSize="lg"
            noOfLines={1}>
            {movie.Title}
          </Text>
          <Text color="gray.500">{movie.Year}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default MovieCard;
