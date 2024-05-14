import { create } from "zustand";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
} from "../services/movies.service";
import { useEffect } from "react";
import { Movie } from "../types/movie.type";

type MoviesStore = {
  movies: Movie[];
  setAllMovies: () => Promise<void>;
  addMovie: (movie: Omit<Movie, "_id">) => Promise<void>;
  deleteMovie: (id: string) => Promise<void>;
};

const useMoviesStore = create<MoviesStore>((set) => ({
  movies: [],
  setAllMovies: async () => {
    set({
      movies: await getAllMovies(),
    });
  },
  addMovie: async (movie: Omit<Movie, "_id">) => {
    const newMovie = await createMovie(movie);
    set((state) => ({
      movies: [...state.movies, newMovie],
    }));
  },
  deleteMovie: async (id: string) => {
    await deleteMovie(id);
    set((state) => ({
      movies: state.movies.filter((movie) => movie._id !== id),
    }));
  },
}));

const useMovies = () => {
  const store = useMoviesStore();

  useEffect(() => {
    store.setAllMovies();
  }, []);
  return store;
};

export default useMovies;
