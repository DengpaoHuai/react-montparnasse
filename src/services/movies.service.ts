import { Movie } from "../types/movie.type";

export const getAllMovies = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/2ef2be945d4b472bb0b431f600ca2535/movies"
  );
  return response.json();
};

export const createMovie = async (movie: Omit<Movie, "_id">) => {
  const response = await fetch(
    "https://crudcrud.com/api/2ef2be945d4b472bb0b431f600ca2535/movies",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    }
  );
  return response.json();
};

export const deleteMovie = async (id: string) => {
  const response = await fetch(
    `https://crudcrud.com/api/2ef2be945d4b472bb0b431f600ca2535/movies/${id}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
};
