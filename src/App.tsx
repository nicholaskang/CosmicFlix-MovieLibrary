import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SearchMovies from "./components/SearchMovies";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import About from "./components/About";
import PageTransition from "./components/PageTransition";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
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
    </>
  );
};

export default App;
