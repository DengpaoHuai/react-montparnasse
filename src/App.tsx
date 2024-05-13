import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store/store";

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
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider>
            <RouterProvider router={router}></RouterProvider>
          </SnackbarProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default App;
