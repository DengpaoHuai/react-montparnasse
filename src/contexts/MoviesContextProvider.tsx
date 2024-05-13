import { createContext, useEffect, useState } from "react";
import { Movie } from "../types/movie.type";

type State = {
  movies: Movie[];
  loading: boolean;
  error: null | string;
};

export const MoviesContext = createContext<State>({} as State);

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

  return (
    <MoviesContext.Provider value={{ movies, error, loading }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
