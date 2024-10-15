import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import SearchMovies from "./pages/SearchMovies";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<SearchMovies />}
        />
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
