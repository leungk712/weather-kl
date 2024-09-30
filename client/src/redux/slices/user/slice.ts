import { createSlice } from "@reduxjs/toolkit";

// ===== API ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// // ===== Interfaces ===== //
import { State } from "./interfaces";

export const initialState: State = {
  firstName: "",
  lastName: "",
  email: "",
  isLoggedIn: false,
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default slice.reducer;
