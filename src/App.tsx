import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider>
          <RouterProvider router={router}></RouterProvider>
        </SnackbarProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
