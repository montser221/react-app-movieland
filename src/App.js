import MovieCard from "./MovieCard";

import { useState, useEffect } from "react";
import searchIcon from "./search.svg";
import "./App.css";

// const ApiKey='23aa38f8';
const API_URL = "http://www.omdbapi.com?apikey=23aa38f8";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [serachTerm,setSearchTerm]=useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
    setMovies(data["Search"]);
  };
  useEffect(() => {
    searchMovies("shrek");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search For  Movies"
          value={serachTerm}
          onChange={(e) =>setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="Search Icon" onClick={() => searchMovies(serachTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
