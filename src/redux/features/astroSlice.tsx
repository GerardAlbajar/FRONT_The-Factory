import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AstroType } from "../../types/types";

const initialState: AstroType[] = [];

const astroSlice = createSlice({
  name: "astro",
  initialState,
  reducers: {
    loadAstros: (astro, action: PayloadAction<AstroType[]>) => [
      ...action.payload,
    ],
    loadUserCollection: (astro, action: PayloadAction<AstroType[]>) => [
      ...action.payload,
    ],
    removeInventoryItem: (astro, action: PayloadAction<AstroType[]>) => [
      ...action.payload,
    ],
    addInventoryItem: (astro, action: PayloadAction<AstroType[]>) => [
      ...action.payload,
    ],
  },
});

export const {
  loadAstros: loadAstrosActionCreator,
  loadUserCollection: loadUserCollectionActionCreator,
  removeInventoryItem: removeInventoryItemActionCreator,
  addInventoryItem: addInventoryItemActionCreator,
} = astroSlice.actions;

export default astroSlice.reducer;
