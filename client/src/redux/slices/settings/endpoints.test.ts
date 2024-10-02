import { it, describe, expect } from "vitest";

// ===== Constants ===== //
import { API_LIFECYCLE_STATUS } from "redux/statuses";
const { PENDING, FULFILLED, REJECTED } = API_LIFECYCLE_STATUS;

// ===== Endpoints ===== //
import { fetchWeather, updateSettings } from "./endpoints";

// ===== Interfaces ===== //

// ===== Helpers ===== //

// ===== Slice ===== //
import reducer, { initialState } from "./slice";

// ===== Mocks ===== //
import { weatherResp } from "./mocks/weather";
import { settingsResp } from "./mocks/settings";

describe("Settings - Endpoints", () => {
  describe("fetchWeather", () => {
    const errorMsg = "Error! Unable to fetch weather info";

    it(`sets status to '${PENDING}' when endpoint is pending`, () => {
      const action = {
        type: fetchWeather.pending.type,
      };

      const actual = reducer(initialState, action);

      expect(actual.fetchWeatherStatus.status).toBe(PENDING);
    });

    it(`sets status to '${FULFILLED}' when endpoint is fulfilled`, () => {
      const currentState = {
        ...initialState,
        weatherApiKey: "ABCDEF",
        weatherUrl: "https://googleapiweather.com/access_key=",
      };

      const action = {
        type: fetchWeather.fulfilled.type,
        payload: weatherResp,
      };

      const actual = reducer(currentState, action);
      expect(actual.fetchWeatherStatus.status).toBe(FULFILLED);
      expect(actual.weatherInfo).toBe(action.payload);
    });

    it(`sets status to '${REJECTED}' and populates error with '${errorMsg}' when endpoint is rejected`, () => {
      const action = {
        type: fetchWeather.rejected.type,
        error: {
          message: errorMsg,
        },
      };

      const actual = reducer(initialState, action);
      expect(actual.fetchWeatherStatus.status).toBe(REJECTED);
      expect(actual.fetchWeatherStatus.error).toBe(errorMsg);
    });
  });

  describe("updateSettings", () => {
    const errorMsg = "Error! Unable to update settings";

    it(`sets status to '${PENDING}' when endpoint is pending`, () => {
      const action = {
        type: updateSettings.pending.type,
      };

      const actual = reducer(initialState, action);

      expect(actual.updateSettingsStatus.status).toBe(PENDING);
    });

    it(`sets status to '${FULFILLED}' when endpoint is fulfilled`, () => {
      const action = {
        type: updateSettings.fulfilled.type,
        payload: settingsResp,
      };

      const actual = reducer(initialState, action);
      expect(actual.updateSettingsStatus.status).toBe(FULFILLED);
      expect(actual.weatherApiKey).toBe(action.payload.weatherApiKey);
      expect(actual.weatherUrl).toBe(action.payload.weatherUrl);
    });

    it(`sets status to '${REJECTED}' and populates error with '${errorMsg}' when endpoint is rejected`, () => {
      const action = {
        type: updateSettings.rejected.type,
        error: {
          message: errorMsg,
        },
      };

      const actual = reducer(initialState, action);
      expect(actual.updateSettingsStatus.status).toBe(REJECTED);
      expect(actual.updateSettingsStatus.error).toBe(errorMsg);
    });
  });
});
