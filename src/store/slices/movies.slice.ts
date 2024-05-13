import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../types/movie.type";
import { setAllMovies } from "../actions/movies.actions";

type State = {
  movies: Movie[];
  loading: boolean;
  error: null | string;
};

const initialState: State = {
  movies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovie: (state, action) => {
      console.log(action.type);
      state.movies = [...state.movies, action.payload];
    },
    removeMovieById: (state, action) => {
      console.log(action.type);
      state.movies = state.movies.filter(
        (movie) => movie._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAllMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setAllMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(setAllMovies.pending, (state, action) => {
        state.loading = false;
        state.error = "ça marche pas";
      });
  },
});

export const { addMovie, removeMovieById } = movieSlice.actions;

export default movieSlice.reducer;
