import { useQuery } from "@tanstack/react-query";
import useFetch from "../hooks/useFetch";
import { Movie } from "../types/movie.type";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllMovies } from "../store/actions/movies.actions";
import { StoreState } from "../store/store";

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
  const state = useSelector((state: StoreState) => state.movies);
  console.log(state);
  useEffect(() => {
    fetchMovies().then((movies: Movie[]) => {
      dispatch(setAllMovies(movies));
    });
  }, []);

  return (
    <div className="test">
      {/*data?.map((movie) => (
        <div key={movie._id}>{movie.title}</div>
      ))*/}
    </div>
  );
};

export default ListMoviesPage;
