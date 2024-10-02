import { it, describe, expect } from "vitest";

// ===== Constants ===== //

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== Mocks ===== //
import { weatherResp } from "./mocks/weather";

// ===== Reducers ===== //
import reducer, { initialState } from "./slice";

describe("Settings - Reducers", () => {
  describe("reset", () => {
    const type = "settings/reset";

    it("sucessfully resets to initial state", () => {
      const currentState = {
        ...initialState,
        weatherApiKey: "APIKEY",
        weatherUrl: "https://urltofindweather.com/access_key",
        weatherInfo: weatherResp,
      };

      const action = {
        type,
      };

      const actual = reducer(currentState, action);

      expect(actual.weatherApiKey).toBe("");
      expect(actual.weatherUrl).toBe("");
      expect(actual.weatherInfo).toBe(null);
    });
  });
});
