import { Fragment, useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContextProvider";
import { Link } from "react-router-dom";

const ListMoviesPage = () => {
  const { movies } = useContext(MoviesContext);
  return (
    <div className="test">
      {movies?.map((movie) => (
        <Fragment key={movie._id}>
          <div>{movie.title}</div>
          <button
            onClick={() => {
              //deleteMovieById(movie._id);
            }}
          >
            delete
          </button>
        </Fragment>
      ))}
      <Link to="/create_movie">Créer un film</Link>
    </div>
  );
};

export default ListMoviesPage;
