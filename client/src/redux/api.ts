import axios from "axios";

// ===== Constants ===== //

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    Authorization: `Bearer `,
  },
});
