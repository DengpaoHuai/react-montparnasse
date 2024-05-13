import { createAsyncThunk } from "@reduxjs/toolkit";

export const setAllMovies = createAsyncThunk("get/all", async () => {
  const response = await fetch(
    "https://crudcrud.com/api/28dcf3ecd96b4eda90ba670f0acf31d2/movies"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
});
