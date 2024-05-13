import { create } from "zustand";
import { getAllMovies } from "../services/movies.service";
import { useEffect } from "react";
import { Movie } from "../types/movie.type";

type MoviesStore = {
  movies: Movie[];
  setAllMovies: () => Promise<void>;
};

const useMoviesStore = create<MoviesStore>((set) => ({
  movies: [],
  setAllMovies: async () => {
    set({
      movies: await getAllMovies(),
    });
  },
}));

const useMovies = () => {
  const store = useMoviesStore();

  useEffect(() => {
    store.setAllMovies();
  }, []);
  return { ...store };
};

export default useMovies;
