import useFetch from "../hooks/useFetch";
import { Movie } from "../types/movie";

const ListMoviesPage = () => {
  const { data, loading, error } = useFetch<Movie[]>(
    "https://crudcrud.com/api/a1ab6062db1f4a9aa8466994dbf7d53e/movies"
  );

  return (
    <div className="test">
      {data?.map((movie) => (
        <div key={movie._id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default ListMoviesPage;
