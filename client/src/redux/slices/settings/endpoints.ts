import { createAsyncThunk } from "@reduxjs/toolkit";

// ===== API ===== //
import axios from "axios";
import { instance } from "redux/api";

// ===== Interfaces ===== //
import { SettingsPayload } from "./interfaces";

interface UpdateSettingsPayload extends SettingsPayload {
  email: string;
  userId: number;
}

export const updateSettings = createAsyncThunk(
  "updateSettings",
  async (payload: UpdateSettingsPayload, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/settings`, payload);

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchWeather = createAsyncThunk(
  "fetchWeather",
  async (
    payload: {
      weatherUrl: string;
      weatherApiKey: string;
      query: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const { weatherUrl, weatherApiKey, query } = payload;

      const { data } = await axios.get(`${weatherUrl}${weatherApiKey}${query}`);

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
