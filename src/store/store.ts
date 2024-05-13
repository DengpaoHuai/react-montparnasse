import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/movies.slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: moviesSlice,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
