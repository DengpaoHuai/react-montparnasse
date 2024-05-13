import { Movie } from "../types/movie.type";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllMovies } from "../store/slices/movies.slice";
import { RootState } from "../store/store";

const fetchMovies = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/36ec3ec686374083acbeb86be9a13583/movies"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const ListMoviesPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.movies);
  console.log(state);
  useEffect(() => {
    fetchMovies().then((movies: Movie[]) => {
      dispatch(setAllMovies(movies));
    });
  }, []);

  return (
    <div className="test">
      {state?.map((movie) => (
        <Fragment key={movie._id}>
          <div>{movie.title}</div>
          <button onClick={() => {}}>delete</button>
        </Fragment>
      ))}
    </div>
  );
};

export default ListMoviesPage;
