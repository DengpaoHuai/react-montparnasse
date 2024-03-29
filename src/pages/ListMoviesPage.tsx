import { useQuery } from "@tanstack/react-query";
import useFetch from "../hooks/useFetch";
import { Movie } from "../types/movie.type";

const fetchMovies = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/a1ab6062db1f4a9aa8466994dbf7d53e/movies"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const ListMoviesPage = () => {
  const { data, loading, error } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: () => fetchMovies(),
  });

  return (
    <div className="test">
      {data?.map((movie) => (
        <div key={movie._id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default ListMoviesPage;
