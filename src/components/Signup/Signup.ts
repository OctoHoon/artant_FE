import { createUser, validateEmail } from "../../services/userService";
import {
  corporateNumberRegex,
  emailRegex,
  passwordRegex,
  same3word,
} from "../../utils/regex";

export const extractErrorMessage = (error: unknown): string => {
  // Check if error is an instance of Error
  if (error instanceof Error) {
    return error.message || "An unknown error occurred.";
  }
  // Handle other types of errors or return a generic message
  return "An unknown error occurred.";
};

export const validateUserEmail = async (
  username,
  setIsEmailAvailable,
  setEmailValidationMessage
) => {
  if (!emailRegex.test(username)) {
    // If not a valid email format, handle it (e.g., show an error message)
    setEmailValidationMessage("아이디(이메일)는 이메일 형식으로 입력해주세요.");
    return;
  }

  try {
    const response = await validateEmail({ email: username });
    console.log(response);
    if (response?.status === 200) {
      // Email is available
      setIsEmailAvailable(true);
      setEmailValidationMessage("사용가능한 이메일입니다.");
    } else {
      // Email is not available or another error occurred
      setIsEmailAvailable(false);
      setEmailValidationMessage("이미 사용중인 이메일입니다.");
    }
  } catch (error) {
    // Handle any errors that occur during the validation process
    setIsEmailAvailable(false);
    setEmailValidationMessage("이미 사용중인 이메일입니다.");
  }
};

export const validateUserPassword = (
  password,
  setIsPasswordValid,
  setPasswordValidationMessage
) => {
  if (!same3word.test(password)) {
    setIsPasswordValid(false);
    setPasswordValidationMessage("3개이상 연속되거나 동일한 문자/숫자 제외");
    return;
  }
  if (!passwordRegex.test(password)) {
    setIsPasswordValid(false);
    setPasswordValidationMessage("영문/숫자/특수문자 2가지 이상조합(8~20자)");
  } else {
    setIsPasswordValid(true);
    setPasswordValidationMessage("사용가능한 비밀번호입니다.");
  }
};

export const validateUserCorporateNumber = (
  corporateNumber,
  setIsCorporateNumberAvailable,
  setCorporateNumberValidationMessage
) => {
  if (!corporateNumberRegex.test(corporateNumber)) {
    // If not a valid email format, handle it (e.g., show an error message)
    setCorporateNumberValidationMessage(
      "- 없이 10자리 숫자만 올바르게 입력해주세요."
    );
    return;
  } else {
    setIsCorporateNumberAvailable(true);
  }
};

export const createUserAccount = async (data) => {
  try {
    const result = await createUser(data);
    return result;
  } catch (error) {
    console.error("Account creation failed", error);
    throw error;
  }
};
export const translation = {
  agreed_to_terms_of_service: "아트앤트 이용약관 (필수)",
  agreed_to_electronic_transactions: "전자금융거래 이용약관 (필수)",
  agreed_to_privacy_policy: "개인정보 수집 및 이용 (필수)",
  confirmed_age_over_14: "만 14세 이상입니다 (필수)",
  agreed_to_third_party_sharing: "개인정보 제3자 제공 (필수)",
  agreed_to_optional_privacy_policy: "개인정보 수집 및 이용 (선택)",
  agreed_to_marketing_mails: "광고성 정보 수신동의 (선택)",
};
