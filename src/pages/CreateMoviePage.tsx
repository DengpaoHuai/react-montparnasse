import { useSnackbar } from "notistack";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../store/slices/movies.slice";
import { createMovie } from "../store/actions/movies.actions";
import { useAppDispatch } from "../store/store";
import { useMovies } from "../contexts/MoviesContextProvider";

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
  const { enqueueSnackbar } = useSnackbar();
  const { createMovie } = useMovies();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createMovie(data).then(() => {
      enqueueSnackbar("Movie created", { variant: "success" });
      navigate("/");
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
