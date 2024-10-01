import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ===== API ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// // ===== Interfaces ===== //
import { State, User } from "./interfaces";

export const initialState: State = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  isLoggedIn: false,
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: State, action: PayloadAction<User>) => {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    },
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;
