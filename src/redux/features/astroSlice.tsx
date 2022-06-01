import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Astro, AstroPart } from "../../types/types";

const initialState: (Astro | AstroPart)[] = [];

const astroSlice = createSlice({
  name: "astro",
  initialState,
  reducers: {
    loadAstros: (astro, action: PayloadAction<(Astro | AstroPart)[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadAstros: loadAstrosActionCreator } = astroSlice.actions;

export default astroSlice.reducer;
