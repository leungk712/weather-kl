// ===== Helpers ===== //

// ===== Interfaces ===== //

// ===== MSW ===== //
import { http, HttpResponse } from "msw";

// ===== Mocks ===== //

// Note: Must be a hard-coded value. Do not change the baseUrl.
// Cannot be dynamic import.meta.env.VITE_API_GATEWAY_URL as it fails on the Gitlab pipeline
export const baseUrl = "http://localhost:3010/";

const STATUS_ACCEPTED = 202;

export const handlers = [
  http.post(`${baseUrl}/user`, () => {
    return HttpResponse.json({ isTrue: true }, { status: STATUS_ACCEPTED });
  }),
  http.put(`${baseUrl}/settings`, () => {
    return HttpResponse.json({ isTrue: true }, { status: STATUS_ACCEPTED });
  }),
];
