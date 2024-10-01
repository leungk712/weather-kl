import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ===== API ===== //

// ===== Constants ===== //

// ===== Helpers ===== //

// // ===== Interfaces ===== //
import { State, SettingsPayload, WeatherStackApiResponse } from "./interfaces";

export const initialState: State = {
  weatherApiKey: "",
  weatherUrl: "",
  weatherInfo: null,
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
    setWeatherInfo: (
      state: State,
      action: PayloadAction<WeatherStackApiResponse>
    ) => {
      if (action.payload) {
        state.weatherInfo = action.payload;
      }
    },
  },
});

export const { setSettings, setWeatherInfo } = slice.actions;

export default slice.reducer;
