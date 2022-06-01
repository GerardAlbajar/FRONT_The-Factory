import { configureStore } from "@reduxjs/toolkit";
import astroReducer from "../features/astroSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    astro: astroReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
