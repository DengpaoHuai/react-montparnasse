import { createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../../types/movie.type";

export const setAllMovies = createAsyncThunk("get/all", async () => {
  const response = await fetch(
    "https://crudcrud.com/api/28dcf3ecd96b4eda90ba670f0acf31d2/movies"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
});

export const createMovie = createAsyncThunk(
  "post/movie",
  async (data: Omit<Movie, "_id">) => {
    const response = await fetch(
      "https://crudcrud.com/api/28dcf3ecd96b4eda90ba670f0acf31d2/movies",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
);

export const deleteMovieById = createAsyncThunk(
  "delete/movie",
  async (id: string) => {
    const response = await fetch(
      `https://crudcrud.com/api/28dcf3ecd96b4eda90ba670f0acf31d2/movies/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return id;
  }
);
