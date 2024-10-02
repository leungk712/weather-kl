import { it, describe, expect } from "vitest";

// ===== Constants ===== //
import { initialUser } from "./constants";

// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== Mocks ===== //
import { userResp } from "./mocks/user";

// ===== Reducers ===== //
import reducer, { initialState } from "./slice";

describe("User - Reducers", () => {
  describe("reset", () => {
    const type = "user/reset";

    it("sucessfully resets to initial state", () => {
      const currentState = {
        ...initialState,
        user: userResp,
        isLoggedIn: true,
      };

      const action = {
        type,
      };

      const actual = reducer(currentState, action);

      expect(actual.user).toStrictEqual(initialUser);
      expect(actual.isLoggedIn).toBe(false);
    });
  });
});
