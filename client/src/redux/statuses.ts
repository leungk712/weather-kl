// ===== Interfaces ===== //
export interface ActionStatuses {
  PENDING: string;
  FULFILLED: string;
  REJECTED: string;
}

export interface StatusAndError {
  status: string;
  error?: string;
}

export const API_LIFECYCLE_STATUS: ActionStatuses = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

export const statusAndError: StatusAndError = {
  status: "",
  error: "",
};
