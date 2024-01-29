import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  Button,
  useToast,
  Flex,
  RadioGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArtantRadio from "../commons/Button/ArtantRadio";
import {
  createUserAccount,
  extractErrorMessage,
  validateUserEmail,
  validateUserPassword,
} from "./Signup";
import SignupInput from "./component/SignupInput";
import InputIdandPw from "./component/InputIdandPW";
import InputBirthday from "./component/InputBirthday";
import InputAgreements from "./component/InputAgreements";

export default function SignupForm() {
  const toast = useToast();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password_check, setPasswordCheck] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
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

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleBirthdayChange = (field, value) => {
    setBirthday((prevBirthday) => ({
      ...prevBirthday,
      [field]: value,
    }));
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = "loading-toast"; // Unique ID for the loading toast

    if (
      !username ||
      !password ||
      !password_check ||
      !name ||
      !phoneNumber ||
      !gender ||
      !birthday.year ||
      !birthday.month ||
      !birthday.day
    ) {
      // Show an error message
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (!isEmailAvailable) {
      return;
    }
    if (password !== password_check) {
      setPasswordCheckValidationMessage("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      setPasswordCheckValidationMessage("");
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
        name: name,
        username: username.split("@")[0],
        password: password,
        password_confirm: password_check,
        email: username,
        gender: gender,
        birthday: `${birthday["year"]}-${birthday["month"]}-${birthday["day"]}`,
        cell_phone_number: phoneNumber,
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
        is_corporate: false,
        corporate_number: null,
        corporate_name: null,
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
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <VStack spacing={4} align="flex-start">
        {/* User fields */}
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
          setIsPasswordValid={setIsPasswordValid}
          setPasswordValidationMessage={setPasswordValidationMessage}
          passwordValidationMessage={passwordValidationMessage}
          password_check={password_check}
          setPasswordCheck={setPasswordCheck}
          passwordCheckValidationMessage={passwordCheckValidationMessage}
        />
        <SignupInput
          label={"실명"}
          id={"name"}
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={undefined}
          errorBorderColor={undefined}
          placeholder={"이름을 입력하세요."}
          onBlur={undefined}
        />

        <SignupInput
          label={"휴대폰 번호"}
          id={"tel"}
          type={"tel"}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          isInvalid={undefined}
          errorBorderColor={undefined}
          placeholder={"휴대폰 번호를 입력하세요(-제외)"}
          onBlur={undefined}
        />

        {/* Gender field */}
        <FormControl isRequired>
          <FormLabel>성별</FormLabel>
          <RadioGroup onChange={handleGenderChange} value={gender}>
            <Flex justifyContent={"space-between"}>
              <ArtantRadio value="Male" text={"남성"} />
              <ArtantRadio value="Female" text={"여성"} />
              <ArtantRadio value="RatherNotSay" text={"비공개"} />
            </Flex>
          </RadioGroup>
        </FormControl>
        {/* Birthday field */}
        <InputBirthday
          text={"생년월일"}
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
          _hover={{
            background: "var(--maincolorsbggray-555555, #5400FD)",
          }}
          color={"white"}
          borderRadius="0px"
        >
          동의하고 가입하기
        </Button>
      </VStack>
    </form>
  );
}
