import { createBrowserRouter } from "react-router-dom";
import PlanetsListPage from "../pages/PlanetsListPage";
import ExemplePage1 from "../pages/ExemplePage1";
import ExemplePage2 from "../pages/ExemplePage2";
import AppLayout from "../layouts/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
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
    ],
  },
]);

export default router;
