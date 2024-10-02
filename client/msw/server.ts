// ===== MSW ===== //
// Note: https://mswjs.io/docs/getting-started
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

// Note: This is a from the MSW Runbook https://mswjs.io/docs/runbook/#step-1-verify-setup
// It's essentially a healthcheck as we log to see the endpoints are correct
server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
