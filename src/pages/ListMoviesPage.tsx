import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { removeMovieById } from "../store/slices/movies.slice";
import { RootState, useAppDispatch } from "../store/store";
import { setAllMovies } from "../store/actions/movies.actions";

const ListMoviesPage = () => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(setAllMovies());
  }, []);

  const deleteMovieById = async (id: string) => {
    const response = await fetch(
      `https://crudcrud.com/api/28dcf3ecd96b4eda90ba670f0acf31d2/movies/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    dispatch(removeMovieById(id));
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
