import { emailRegex } from "../../utils/regex";

export const extractErrorMessage = (error: unknown): string => {
  // Check if error is an instance of Error
  if (error instanceof Error) {
    return error.message || "An unknown error occurred.";
  }
  // Handle other types of errors or return a generic message
  return "An unknown error occurred.";
};

export const validateEmail = async (
  username,
  setIsEmailAvailable,
  setEmailValidationMessage
) => {
  if (!emailRegex.test(username)) {
    // If not a valid email format, handle it (e.g., show an error message)
    setEmailValidationMessage("이메일 형식이 올바르지 않습니다.");
    return;
  }
  setIsEmailAvailable(true);
  setEmailValidationMessage();
};
