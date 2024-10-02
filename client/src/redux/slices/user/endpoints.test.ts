import { it, describe, expect } from "vitest";

// ===== Constants ===== //
import { API_LIFECYCLE_STATUS } from "redux/statuses";
const { PENDING, FULFILLED, REJECTED } = API_LIFECYCLE_STATUS;

// ===== Endpoints ===== //
import { setUser } from "./endpoints";

// ===== Interfaces ===== //

// ===== Helpers ===== //

// ===== Slice ===== //
import reducer, { initialState } from "./slice";

// ===== Mocks ===== //
import { userResp } from "./mocks/user";

describe("User - Endpoints", () => {
  describe("setUser", () => {
    const errorMsg = "Error! Unable to set user";

    it(`sets status to '${PENDING}' when endpoint is pending`, () => {
      const action = {
        type: setUser.pending.type,
      };

      const actual = reducer(initialState, action);

      expect(actual.setUserStatus.status).toBe(PENDING);
    });

    it(`sets status to '${FULFILLED}' when endpoint is fulfilled`, () => {
      const action = {
        type: setUser.fulfilled.type,
        payload: userResp,
      };

      const actual = reducer(initialState, action);
      expect(actual.setUserStatus.status).toBe(FULFILLED);
      expect(actual.user).toBe(action.payload);
      expect(actual.isLoggedIn).toBe(true);
    });

    it(`sets status to '${REJECTED}' and populates error with '${errorMsg}' when endpoint is rejected`, () => {
      const action = {
        type: setUser.rejected.type,
        error: {
          message: errorMsg,
        },
      };

      const actual = reducer(initialState, action);
      expect(actual.setUserStatus.status).toBe(REJECTED);
      expect(actual.setUserStatus.error).toBe(errorMsg);
    });
  });
});
