import { Movie } from "../../types/movie.type";
import { SET_ALL_MOVIES } from "../actions/movies.actions";

type ReducerState = {
  movies: Movie[];
};

const initialState: ReducerState = {
  movies: [],
};

type MovieAction = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

const movieReducer = (state = initialState, action: MovieAction) => {
  switch (action.type) {
    case SET_ALL_MOVIES:
      console.log(action);
      return {
        ...state,
        movies: action.payload,
      };
      break;

    default:
      return state;
  }
};

export default movieReducer;
