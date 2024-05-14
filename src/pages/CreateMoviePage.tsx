import { useSnackbar } from "notistack";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useMovies from "../zustand/useMovies";

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
  const { addMovie } = useMovies();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addMovie(data).then(() => {
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
