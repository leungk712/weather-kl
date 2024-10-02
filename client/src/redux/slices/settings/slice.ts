import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ===== API ===== //

// ===== Constants ===== //
import { API_LIFECYCLE_STATUS } from "redux/statuses";
const { PENDING, FULFILLED, REJECTED } = API_LIFECYCLE_STATUS;
import { statusAndError } from "redux/statuses";

// ===== Endpoints ===== //
import { fetchWeather, updateSettings } from "./endpoints";

// ===== Helpers ===== //

// // ===== Interfaces ===== //
import {
  State,
  SettingsPayload,
  WeatherStackApiResponse,
  SettingsApiResponse,
} from "./interfaces";

export const initialState: State = {
  weatherApiKey: "",
  weatherUrl: "",
  weatherInfo: null,
  fetchWeatherStatus: statusAndError,
  updateSettingsStatus: statusAndError,
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
    reset: (state: State) => {
      state.weatherApiKey = "";
      state.weatherUrl = "";
      state.weatherInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state: State) => {
        state.fetchWeatherStatus = {
          status: PENDING,
          error: "",
        };
      })
      .addCase(
        fetchWeather.fulfilled,
        (state: State, action: PayloadAction<WeatherStackApiResponse>) => {
          state.fetchWeatherStatus.status = FULFILLED;
          state.weatherInfo = action.payload;
        }
      )
      .addCase(fetchWeather.rejected, (state: State, action) => {
        state.fetchWeatherStatus = {
          status: REJECTED,
          error: action.error.message,
        };
      })
      .addCase(updateSettings.pending, (state: State) => {
        state.updateSettingsStatus = {
          status: PENDING,
          error: "",
        };
      })
      .addCase(
        updateSettings.fulfilled,
        (state: State, action: PayloadAction<SettingsApiResponse>) => {
          const { weatherApiKey, weatherUrl } = action.payload;

          state.updateSettingsStatus.status = FULFILLED;
          state.weatherApiKey = weatherApiKey;
          state.weatherUrl = weatherUrl;
        }
      )
      .addCase(updateSettings.rejected, (state: State, action) => {
        state.updateSettingsStatus = {
          status: REJECTED,
          error: action.error.message,
        };
      });
  },
});

export const { setSettings, setWeatherInfo, reset } = slice.actions;

export default slice.reducer;
