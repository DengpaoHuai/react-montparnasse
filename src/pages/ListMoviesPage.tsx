import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import {
  setAllMovies,
  deleteMovieById as ouioui,
} from "../store/actions/movies.actions";

const ListMoviesPage = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(setAllMovies());
  }, []);

  const deleteMovieById = async (id: string) => {
    dispatch(ouioui(id));
  };

  return (
    <div className="test">
      {state?.map((movie) => (
        <Fragment key={movie._id}>
          <div>{movie.title}</div>
          <button
            onClick={() => {
              deleteMovieById(movie._id);
            }}
          >
            delete
          </button>
        </Fragment>
      ))}
    </div>
  );
};

export default ListMoviesPage;
