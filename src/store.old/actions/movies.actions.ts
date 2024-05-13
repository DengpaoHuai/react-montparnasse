import { Movie } from "../../types/movie.type";

export const SET_ALL_MOVIES = "SET_ALL_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";

export const setAllMovies = (movies: Movie[]) => ({
  type: SET_ALL_MOVIES,
  payload: movies,
});

export const addMovie = (movie: Movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie,
  };
};
