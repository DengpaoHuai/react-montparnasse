import { useSnackbar } from "notistack";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    fetch("https://crudcrud.com/api/a1ab6062db1f4a9aa8466994dbf7d53e/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        enqueueSnackbar("Movie created successfully", { variant: "success" });
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
