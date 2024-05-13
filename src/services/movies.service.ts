export const getAllMovies = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/28dcf3ecd96b4eda90ba670f0acf31d2/movies"
  );
  return response.json();
};
