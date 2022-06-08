import { configureStore } from "@reduxjs/toolkit";
import astroReducer from "../features/astroSlice";
import editReducer from "../features/editSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    astro: astroReducer,
    edit: editReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
