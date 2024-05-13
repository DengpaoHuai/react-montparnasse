import { createContext, useContext, useEffect, useState } from "react";
import { Movie } from "../types/movie.type";

type State = {
  movies: Movie[];
  loading: boolean;
  error: null | string;
  createMovie: (data: Omit<Movie, "_id">) => Promise<void>;
};

export const MoviesContext = createContext<State>({} as State);

export const useMovies = () => useContext(MoviesContext);

const MoviesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const getData = async () => {
    const response = await fetch(
      "https://crudcrud.com/api/28dcf3ecd96b4eda90ba670f0acf31d2/movies"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  useEffect(() => {
    setLoading(true);
    getData()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const createMovie = async (data: Omit<Movie, "_id">) => {
    const response = await fetch(
      "https://crudcrud.com/api/28dcf3ecd96b4eda90ba670f0acf31d2/movies",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const newMovie = await response.json();
    setMovies([...movies, newMovie]);
  };

  return (
    <MoviesContext.Provider value={{ movies, error, loading, createMovie }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
