import { Movie } from "../../types/movie.type";

export const SET_ALL_MOVIES = "SET_ALL_MOVIES";

export const setAllMovies = (movies: Movie[]) => ({
  type: SET_ALL_MOVIES,
  payload: movies,
});
