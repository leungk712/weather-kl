import { createSlice } from "@reduxjs/toolkit";

// ===== API ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// // ===== Interfaces ===== //
import { State } from "./interfaces";

export const initialState: State = {
  weatherApi: "",
  weatherUrl: "",
};

export const slice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
});

export default slice.reducer;
