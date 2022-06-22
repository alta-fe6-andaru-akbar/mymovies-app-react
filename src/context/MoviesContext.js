import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState([]);

  const handleAddFavorite = (movie) => {
    setFavorite([...favorite, movie]);
  };

  const handleRemoveFavorite = (movie) => {
    setFavorite(favorite.filter((item) => item.id !== movie.id));
  };

  useEffect(() => {
    const fetchMovie = () => {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=1b8016b589f965c11ccd5727c94d80a1&language=en-US&page=1"
        )
        .then((res) => {
          setMovies(res.data.results);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    setLoading(true);
    fetchMovie();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        loading,
        favorite,
        handleAddFavorite,
        handleRemoveFavorite,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const ThemeContext = createContext("");
