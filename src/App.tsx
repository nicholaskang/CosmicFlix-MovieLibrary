import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchMovies from "./components/SearchMovies";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<SearchMovies />}
        />
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />
        <Route
          path="/about"
          element={<About />}
        />{" "}
      </Routes>
    </Router>
  );
};

export default App;
