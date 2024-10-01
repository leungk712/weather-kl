import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
