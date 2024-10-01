import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ===== API ===== //

// ===== Constants ===== //
import { initialUser } from "./constants";

// ===== Helpers ===== //

// // ===== Interfaces ===== //
import { State, User } from "./interfaces";

export const initialState: State = {
  user: initialUser,
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
    reset: (state: State) => {
      state.isLoggedIn = false;
      state.user = initialUser;
    },
  },
});

export const { setUser, reset } = slice.actions;

export default slice.reducer;
