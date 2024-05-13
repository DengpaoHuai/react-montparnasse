import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../types/movie.type";

type State = {
  movies: Movie[];
};

const initialState: State = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    setAllMovies: (state, action) => {
      console.log(action.type);
      state.movies = action.payload;
    },
    addMovie: (state, action) => {
      console.log(action.type);
      state.movies = [...state.movies, action.payload];
    },
  },
});

export const { setAllMovies, addMovie } = movieSlice.actions;

export default movieSlice.reducer;
