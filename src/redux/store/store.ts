import { configureStore } from "@reduxjs/toolkit";
import astroReducer from "../features/astroSlice";
import editReducer from "../features/editSlice";
import uiReducer from "../features/uiSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    astro: astroReducer,
    edit: editReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
