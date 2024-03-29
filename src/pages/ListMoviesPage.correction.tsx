import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

type Movie = {
  _id: string;
  title: string;
  rating: string;
};

const ListMoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://crudcrud.com/api/a1ab6062db1f4a9aa8466994dbf7d53e/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {movies?.map((movie) => (
        <div key={movie._id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default ListMoviesPage;
