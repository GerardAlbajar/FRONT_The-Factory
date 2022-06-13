import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";

const initialState: User[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers: (users, action: PayloadAction<User[]>) => [...action.payload],
  },
});

export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;

export default usersSlice.reducer;
