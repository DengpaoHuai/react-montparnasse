import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import useMovies from "../zustand/useMovies";

const ListMoviesPage = () => {
  const { movies, deleteMovie } = useMovies();
  return (
    <div className="test">
      {movies?.map((movie) => (
        <Fragment key={movie._id}>
          <div>{movie.title}</div>
          <button
            onClick={() => {
              deleteMovie(movie._id);
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
