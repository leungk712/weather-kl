// ===== Components ===== //
import AppFooter from "./index";

// ===== Constants ===== //

// ===== Interfaces ===== //

// ===== Mocks ===== //

// ===== Redux ===== //

// ===== RTL ===== //
import { screen } from "@testing-library/react";

// ===== Vitest ===== //
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "test-utils";

describe("AppFooter", () => {
  it("successfully displays footer content", async () => {
    const { getByText } = renderWithProviders(<AppFooter />);

    const testId = "app-footer";

    expect(screen.getByTestId(testId)).toBeVisible();
    expect(getByText(/Kevin L Copyright 2024/)).toBeInTheDocument();
  });
});
