import useFetch from "../hooks/useFetch";

type Movie = {
  _id: string;
  title: string;
  rating: string;
};

const ListMoviesPage = () => {
  const { data, loading, error } = useFetch<Movie[]>(
    "https://crudcrud.com/api/a1ab6062db1f4a9aa8466994dbf7d53e/movies"
  );

  return (
    <div>
      {data?.map((movie) => (
        <div key={movie._id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default ListMoviesPage;
