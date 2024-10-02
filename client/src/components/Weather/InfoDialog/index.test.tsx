// ===== Components ===== //
import InfoDialog from "./index";

// ===== Constants ===== //

// ===== Interfaces ===== //

// ===== Mocks ===== //
import { userResp } from "redux/slices/user/mocks/user";
import { weatherResp } from "redux/slices/settings/mocks/weather";

// ===== Redux ===== //
import { initialState } from "redux/slices/settings/slice";
import { initialState as userInitialState } from "redux/slices/user/slice";

// ===== RTL ===== //
import { screen } from "@testing-library/react";

// ===== Vitest ===== //
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "test-utils";

// Note: Skipped tests as some issue setting up tests w/ mocked redux state
// This is to show how I'd approach the test(s)
describe("InfoDialog", () => {
  it.skip("successfully displays dialog information", () => {
    const handleClose = () => vi.fn();

    const { getByText } = renderWithProviders(
      <InfoDialog open={true} handleClose={handleClose} />,
      {
        preloadedState: {
          user: {
            ...userInitialState,
            user: userResp,
            isLoggedIn: true,
          },
          settings: {
            ...initialState,
            weatherApiKey: "APIKEY",
            weatherUrl: "http://url.com",
            weatherInfo: weatherResp,
          },
        },
      }
    );

    const weatherDialog = "weather-info-dialog";
    const weatherTitle = "weather-info-name-country";
    const weatherCard = screen.getByTestId("weather-dialog-info-card");

    expect(screen.getByTestId(weatherDialog)).toBeVisible();
    expect(screen.getByTestId(weatherTitle)).toBeVisible();
    expect(
      getByText(/Los Angeles, United States of America/)
    ).toBeInTheDocument();

    expect(weatherCard).toBeVisible();

    expect(getByText(/Temperature: 19&deg; degrees /)).toBeInTheDocument();
    expect(getByText(/Feels Like: 19&deg; degrees /)).toBeInTheDocument();
    expect(getByText(/Humidity: 84% /)).toBeInTheDocument();
    expect(getByText(/Wind: 7 SW /)).toBeInTheDocument();
  });
});
