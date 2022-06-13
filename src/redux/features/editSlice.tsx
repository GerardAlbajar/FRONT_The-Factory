import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Astro, EditAstroState } from "../../types/types";

const initialState: EditAstroState = {
  astro: {
    id: "",
    idRender: "",
    name: "",
    type: "",
    flighthistory: false,
    stickers: 1,
    framework: "",
    assembled: false,
    parts: {
      astro: {
        id: "",
        idRender: "",
        image: "",
      },
      naut: {
        id: "",
        idRender: "",
        image: "",
      },
      rocket: {
        id: "",
        idRender: "",
        image: "",
      },
    },
  },
};

const astroSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    loadEditAstro: (astro, action: PayloadAction<Astro>) => ({
      astro: { ...action.payload },
    }),
    blankState: () => initialState,
  },
});

export const {
  loadEditAstro: loadEditAstroActionCreator,
  blankState: blankStateActionCreator,
} = astroSlice.actions;

export default astroSlice.reducer;
