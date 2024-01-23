import { emailRegex } from "../../utils/regex";

export const extractErrorMessage = (error: unknown): string => {
  // Check if error is an instance of Error
  if (error instanceof Error) {
    return error.message || "An unknown error occurred.";
  }
  // Handle other types of errors or return a generic message
  return "An unknown error occurred.";
};
