import { useToast, VStack, Text, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateCorporateNumber } from "../../services/userService";
import { IoCheckmark } from "react-icons/io5";
import {
  createUserAccount,
  extractErrorMessage,
  validateUserCorporateNumber,
  validateUserEmail,
  validateUserPassword,
} from "./Signup";
import CorporateSignupStepOne from "./CorporateSignupStepOne";
import CorporateSignupStepTwo from "./CorporateSignupStepTwo";
import InputIdandPw from "./component/InputIdandPW";
import InputBirthday from "./component/InputBirthday";
import SignupInput from "./component/SignupInput";
import InputAgreements from "./component/InputAgreements";

export default function CorporateSignupForm() {
  const toast = useToast();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [corporateNumber, setCorporateNumber] = useState("");
  const [corporateName, setCorporateName] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password_check, setPasswordCheck] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState({
    year: "",
    month: "",
    day: "",
  });

  const [agreements, setAgreements] = useState({
    agreed_to_terms_of_service: false,
    agreed_to_electronic_transactions: false,
    agreed_to_privacy_policy: false,
    confirmed_age_over_14: false,
    agreed_to_third_party_sharing: false,
    agreed_to_optional_privacy_policy: false,
    agreed_to_marketing_mails: false,
  });

  const [isEmailAvailable, setIsEmailAvailable] = useState(true); // Initially assuming the email is available
  const [emailValidationMessage, setEmailValidationMessage] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState("");

  const [passwordCheckValidationMessage, setPasswordCheckValidationMessage] =
    useState("");

  const handleAgreementChange = (field, value) => {
    setAgreements((prevAgreements) => ({
      ...prevAgreements,
      [field]: value,
    }));
  };

  const [selectAll, setSelectAll] = useState(false);

  // Function to toggle all checkboxes
  const handleSelectAllChange = () => {
    const allChecked = !selectAll;
    setSelectAll(allChecked);
    // Set all individual checkboxes to the same value as the "Select All" checkbox
    for (const key in agreements) {
      handleAgreementChange(key, allChecked);
    }
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleValidateEmail = async () => {
    validateUserEmail(username, setIsEmailAvailable, setEmailValidationMessage);
  };

  const handleValidatePassword = () => {
    validateUserPassword(
      password,
      setIsPasswordValid,
      setPasswordValidationMessage
    );
  };

  const handleValidateCorporateNumber = async () => {
    validateUserCorporateNumber(
      corporateNumber,
      setIsCorporateNumberAvailable,
      setCorporateNumberValidationMessage
    );
  };

  const handleBirthdayChange = (field, value) => {
    setBirthday((prevBirthday) => ({
      ...prevBirthday,
      [field]: value,
    }));
  };

  const [isCorporateNumberAvailable, setIsCorporateNumberAvailable] =
    useState(true); // Initially assuming the email is available
  const [
    corporateNumberValidationMessage,
    setCorporateNumberValidationMessage,
  ] = useState("- 없이 10자리 숫자만 입력");

  const handleValidateStepOne = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(isCorporateNumberAvailable);
    validateUserCorporateNumber(
      corporateNumber,
      setIsCorporateNumberAvailable,
      setCorporateNumberValidationMessage
    );
    if (!isCorporateNumberAvailable) {
      return;
    }
    const response = await validateCorporateNumber({
      corporateNumber: corporateNumber,
    });
    if (response?.status == 200) {
      setStep(step + 1);
    } else {
      setIsCorporateNumberAvailable(false);
      setCorporateNumberValidationMessage(
        "사업자등록번호를 다시 확인해주세요."
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = "loading-toast"; // Unique ID for the loading toast

    if (!corporateNumber) {
      // Show an error message
      toast({
        title: "Error",
        description: "사업자 등록 번호를 다시 확인해주세요.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (!isCorporateNumberAvailable) {
      return;
    }

    try {
      toast({
        id: toastId,
        title: "계정 생성중...",
        description: "잠시만 기다려주세요",
        status: "info",
        duration: null, // null duration keeps the toast open indefinitely
        isClosable: false,
      });
      await createUserAccount({
        is_corporate: true,
        name: name,
        username: username.split("@")[0],
        password: password,
        password_confirm: password_check,
        email: username,
        gender: "Other",
        birthday: `${birthday["year"]}-${birthday["month"]}-${birthday["day"]}`,
        cell_phone_number: "01012344575",
        description: "",
        avatar: "",
        agreed_to_terms_of_service: agreements.agreed_to_terms_of_service,
        agreed_to_electronic_transactions:
          agreements.agreed_to_electronic_transactions,
        agreed_to_privacy_policy: agreements.agreed_to_privacy_policy,
        confirmed_age_over_14: agreements.confirmed_age_over_14,
        agreed_to_third_party_sharing: agreements.agreed_to_third_party_sharing,
        agreed_to_optional_privacy_policy:
          agreements.agreed_to_optional_privacy_policy,
        agreed_to_marketing_mails: agreements.agreed_to_marketing_mails,
        corporate_number: corporateNumber,
        corporate_name: corporateName,
      });
      toast.close(toastId);

      toast({
        title: "계정 생성 완료!",
        description: "홈으로 돌아갑니다.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      navigate(`/`);
    } catch (error) {
      console.error("Error during submission:", error);
      toast.close(toastId);

      const errorMessage = extractErrorMessage(error);
      toast({
        title: "계정 생성 실패",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      {step === 1 ? (
        <CorporateSignupStepOne
          handleValidateStepOne={handleValidateStepOne}
          corporateNumber={corporateNumber}
          setCorporateNumber={setCorporateNumber}
          isCorporateNumberAvailable={isCorporateNumberAvailable}
          handleValidateCorporateNumber={handleValidateCorporateNumber}
          corporateNumberValidationMessage={corporateNumberValidationMessage}
        />
      ) : step === 2 ? (
        <CorporateSignupStepTwo step={step} setStep={setStep} />
      ) : (
        <>
          <Flex
            justifyContent={"space-between"}
            padding={"18px 20px"}
            backgroundColor={"#F8F8FA;"}
          >
            <Text>
              사업자등록번호 {corporateNumber.slice(0, 3)}-{" "}
              {corporateNumber.slice(3, 5)}- {corporateNumber.slice(5, 10)}
            </Text>
            <IoCheckmark />
          </Flex>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <VStack spacing={4} align="flex-start">
              {/* User fields */}
              <SignupInput
                label={"사업자정보"}
                id={"corporateName"}
                type={"text"}
                value={corporateName}
                onChange={(e) => setCorporateName(e.target.value)}
                isInvalid={undefined}
                errorBorderColor={"red.300"}
                placeholder={"상호(업체명)"}
                onBlur={undefined}
              />
              <SignupInput
                label={"대표자 성함"}
                id={"name"}
                type={"text"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                isInvalid={undefined}
                errorBorderColor={undefined}
                placeholder={"대표자 성함"}
                onBlur={undefined}
              />

              <Text textStyle={"B16M"}>회원정보를 입력해주세요</Text>
              <InputIdandPw
                username={username}
                setUsername={setUsername}
                handleValidateEmail={handleValidateEmail}
                isEmailAvailable={isEmailAvailable}
                emailValidationMessage={emailValidationMessage}
                showPassword={showPassword}
                password={password}
                isPasswordValid={isPasswordValid}
                setPassword={setPassword}
                handleValidatePassword={handleValidatePassword}
                handlePasswordVisibility={handlePasswordVisibility}
                passwordValidationMessage={passwordValidationMessage}
                password_check={password_check}
                setPasswordCheck={setPasswordCheck}
                passwordCheckValidationMessage={passwordCheckValidationMessage}
              />

              <InputBirthday
                text={"개업연월일"}
                birthday={birthday}
                handleBirthdayChange={handleBirthdayChange}
              />

              <InputAgreements
                selectAll={selectAll}
                agreements={agreements}
                handleSelectAllChange={handleSelectAllChange}
                handleAgreementChange={handleAgreementChange}
              />
              <Button
                type="submit"
                textStyle={"B16M"}
                width="360px"
                height="56px"
                border="1px"
                variant="outline"
                backgroundColor="#5400FD;"
                color={"white"}
                borderRadius="0px"
              >
                동의하고 가입하기
              </Button>
            </VStack>
          </form>
        </>
      )}
    </>
  );
}
