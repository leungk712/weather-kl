import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";
import "cross-fetch/polyfill";

import { afterEach, beforeAll, afterAll } from "vitest";
import { cleanup, configure } from "@testing-library/react";
import { fetch } from "cross-fetch";

import { server } from "./msw/server";

configure({ testIdAttribute: "data-testid", asyncUtilTimeout: 5000 });

global.fetch = fetch;

process.on("unhandledRejection", (reason) => {
  console.log("reason", reason);

  throw reason;
});

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  server.resetHandlers();

  cleanup();
});

afterAll(() => {
  server.close();
});
