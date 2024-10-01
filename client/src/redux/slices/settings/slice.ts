import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ===== API ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// // ===== Interfaces ===== //
import { State, SettingsPayload } from "./interfaces";

export const initialState: State = {
  weatherApiKey: "",
  weatherUrl: "",
};

export const slice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state: State, action: PayloadAction<SettingsPayload>) => {
      const { weatherApiKey, weatherUrl } = action.payload;

      state.weatherApiKey = weatherApiKey;
      state.weatherUrl = weatherUrl;
    },
  },
});

export const { setSettings } = slice.actions;

export default slice.reducer;
