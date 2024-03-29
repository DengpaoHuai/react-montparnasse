import { createBrowserRouter } from "react-router-dom";
import PlanetsListPage from "../pages/PlanetsListPage";
import ExemplePage1 from "../pages/ExemplePage1";
import ExemplePage2 from "../pages/ExemplePage2";
import CreateMoviePage from "../pages/CreateMoviePage";
import ListMoviesPage from "../pages/ListMoviesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanetsListPage />,
  },
  {
    path: "/example_1",
    element: <ExemplePage1 />,
  },
  {
    path: "/example_2",
    element: <ExemplePage2 />,
  },
  {
    path: "/create_movie",
    element: <CreateMoviePage />,
  },
  {
    path: "list_movies",
    element: <ListMoviesPage />,
  },
]);

export default router;
