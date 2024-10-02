// ===== Components ===== //
import Search from "./index";

// ===== Constants ===== //

// ===== Interfaces ===== //

// ===== Mocks ===== //
import { userResp } from "redux/slices/user/mocks/user";

// ===== Redux ===== //
import { initialState } from "redux/slices/settings/slice";
import { initialState as userInitialState } from "redux/slices/user/slice";

// ===== RTL ===== //
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// ===== Vitest ===== //
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "test-utils";

// Note: Skipped tests as some issue setting up tests w/ mocked redux state
// This is to show how I'd approach the test(s)
describe("Search", () => {
  it.skip("successfully displays component w/ disabled button", async () => {
    renderWithProviders(<Search />);

    renderWithProviders(<Search />, {
      preloadedState: {
        user: {
          ...userInitialState,
          user: userResp,
          isLoggedIn: true,
        },
        settings: {
          ...initialState,
          weatherApiKey: "",
          weatherUrl: "",
        },
      },
    });

    const weatherCard = "weather-search-card";

    expect(screen.getByTestId(weatherCard)).toBeVisible();

    const cityLabel = screen.getByLabelText("City");

    userEvent.type(cityLabel, "Denver");

    await waitFor(() => {
      expect(cityLabel).toHaveValue("Denver");

      const searchBtn = screen.getByTestId("weather-search-btn");

      expect(searchBtn).toHaveAttribute("disabled");
    });
  });

  it.skip("successfully displays component w/ enabled button", async () => {
    renderWithProviders(<Search />);

    renderWithProviders(<Search />, {
      preloadedState: {
        user: {
          ...userInitialState,
          user: userResp,
          isLoggedIn: true,
        },
        settings: {
          ...initialState,
          weatherApiKey: "APIKEYEXISTS",
          weatherUrl: "http://weatherurl.com",
        },
      },
    });

    const cityLabel = screen.getByLabelText("City");

    userEvent.type(cityLabel, "Denver");

    await waitFor(() => {
      expect(cityLabel).toHaveValue("Denver");

      const searchBtn = screen.getByTestId("weather-search-btn");

      expect(searchBtn).not.toHaveAttribute("disabled");
    });
  });
});
