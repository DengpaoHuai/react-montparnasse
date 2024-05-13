import { createStore } from "redux";
import movieReducer from "./reducers/movies.reducer";

const store = createStore(movieReducer);

export type StoreState = ReturnType<typeof store.getState>;

//custom disptach

export default store;
