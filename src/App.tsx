import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SearchMovies from "./components/SearchMovies";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import About from "./components/About";
import PageTransition from "./components/PageTransition";
import FloatingStarParticles from "./components/FloatingStarParticles";
import { Box } from "@chakra-ui/react";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <Box
      position="relative"
      zIndex="1">
      <FloatingStarParticles />
      <Header />
      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <SearchMovies />
              </PageTransition>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <PageTransition>
                <MovieDetails />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </Box>
  );
};

export default App;
