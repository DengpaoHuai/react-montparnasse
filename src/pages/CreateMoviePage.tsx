import { useSnackbar } from "notistack";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../store/slices/movies.slice";

type Inputs = {
  title: string;
  rating: string;
};

const CreateMoviePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch("https://crudcrud.com/api/36ec3ec686374083acbeb86be9a13583/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        enqueueSnackbar("Movie created successfully", { variant: "success" });
        dispatch(addMovie(result));
        navigate("/list_movies");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Create Movie Page</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          {...register("title", { required: true })}
        />
        <label htmlFor="genre">Rating</label>
        <input
          type="text"
          id="rating"
          {...register("rating", { required: true })}
        />
        <button type="submit">Create Movie</button>
      </form>
    </div>
  );
};

export default CreateMoviePage;
