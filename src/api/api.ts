import axios from "axios";

const API_KEY = "41daa150168462c32a5bf162e2d34b5e";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data.results;
};

export const getMovieDetails = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
