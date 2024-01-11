import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Icon,
  InputGroup,
  InputRightElement,
  Select,
  Flex,
  RadioGroup,
  CheckboxGroup,
  Checkbox,
  Stack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { createUser, validateEmail } from "../services/userService";
import ArtantRadio from "../components/commons/Button/ArtantRadio";
import { terms_of_service } from "../components/data/Articles";
import {
  dayOptions,
  monthOptions,
  yearOptions,
} from "../components/data/options";
import { emailRegex, passwordRegex, same3word } from "../utils/regex";

export default function Signup() {
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

  const translation = {
    agreed_to_terms_of_service: "아트앤트 이용약관 (필수)",
    agreed_to_electronic_transactions: "전자금융거래 이용약관 (필수)",
    agreed_to_privacy_policy: "개인정보 수집 및 이용 (필수)",
    confirmed_age_over_14: "만 14세 이상입니다 (필수)",
    agreed_to_third_party_sharing: "개인정보 제3자 제공 (필수)",
    agreed_to_optional_privacy_policy: "개인정보 수집 및 이용 (선택)",
    agreed_to_marketing_mails: "광고성 정보 수신동의 (선택)",
  };

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

  const handleValidateEmail = async () => {
    if (!emailRegex.test(username)) {
      // If not a valid email format, handle it (e.g., show an error message)
      setEmailValidationMessage(
        "아이디(이메일)는 이메일 형식으로 입력해주세요."
      );
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

  const handleValidatePassword = () => {
    // Check if the entered text meets the password policy
    if (!same3word.test(password)) {
      setIsPasswordValid(false);
      setPasswordValidationMessage("3개이상 연속되거나 동일한 문자/숫자 제외");
      return;
    }
    if (!passwordRegex.test(password)) {
      // If not valid, handle it (e.g., show an error message and apply the invalid class)
      console.log("Invalid password format");
      setIsPasswordValid(false);
      setPasswordValidationMessage("영문/숫자/특수문자 2가지 이상조합(8~20자)");
    } else {
      // Password is valid
      setIsPasswordValid(true);
      setPasswordValidationMessage("사용가능한 비밀번호입니다.");
    }
  };

  const extractErrorMessage = (error: unknown): string => {
    // Check if error is an instance of Error
    if (error instanceof Error) {
      return error.message || "An unknown error occurred.";
    }
    // Handle other types of errors or return a generic message
    return "An unknown error occurred.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("here");
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
      await onCreateUser();
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

  const handleBirthdayChange = (field, value) => {
    setBirthday((prevBirthday) => ({
      ...prevBirthday,
      [field]: value,
    }));
  };

  const [selectedAgreement, setSelectedAgreement] = useState(null);

  const openAgreementModal = (agreementKey) => {
    setSelectedAgreement(agreementKey);
  };

  const closeAgreementModal = () => {
    setSelectedAgreement(null);
  };

  const onCreateUser = async () => {
    try {
      const result = await createUser({
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
      });
      return result;
    } catch (error) {
      console.error("Account creation failed", error);
      throw error; // Re-throw the error as is
    }
  };

  return (
    <Flex
      p={4}
      width={"full"}
      backgroundColor={"#F1F1F5"}
      justifyContent={"center"}
    >
      <Flex
        flexDirection={"column"}
        width={"456px"}
        backgroundColor={"white"}
        justifySelf={"center"}
        borderRadius={"10px"}
        padding={"40px 48px"}
        gap={"32px"}
      >
        <Text textStyle={"B20M"} textAlign={"center"}>
          회원가입
        </Text>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4} align="flex-start">
            {/* User fields */}
            <Text textStyle={"B16M"}>회원정보를 입력해주세요</Text>
            <FormControl isRequired>
              <FormLabel htmlFor="username" textStyle={"B14R"}>
                아이디
              </FormLabel>
              <Input
                variant="flushed"
                width={"full"}
                placeholder="아이디(이메일)을 입력하세요."
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={handleValidateEmail}
                isInvalid={!isEmailAvailable}
                errorBorderColor="red.300"
              />
              <Text
                marginTop={"3px"}
                textStyle="B13R"
                color={isEmailAvailable ? "blue.300" : "red.300"}
              >
                {emailValidationMessage}
              </Text>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">비밀번호</FormLabel>

              <InputGroup>
                <Input
                  variant="flushed"
                  width={"full"}
                  placeholder="비밀번호를 입력하세요."
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  isInvalid={!isPasswordValid}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleValidatePassword();
                  }}
                  onBlur={handleValidatePassword}
                />
                <InputRightElement
                  children={
                    <Icon
                      as={showPassword ? AiOutlineEyeInvisible : AiOutlineEye}
                    />
                  }
                  onClick={handlePasswordVisibility}
                  cursor="pointer"
                />
              </InputGroup>
              <Text
                marginTop={"3px"}
                textStyle="B13R"
                color={isPasswordValid ? "blue.300" : "red.300"}
              >
                {passwordValidationMessage}
              </Text>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password_check">비밀번호 확인</FormLabel>

              <InputGroup>
                <Input
                  variant="flushed"
                  width={"full"}
                  placeholder="비밀번호를 확인하세요."
                  id="password_check"
                  type="password"
                  // type={showPassword ? "text" : "password"}
                  value={password_check}
                  onChange={(e) => setPasswordCheck(e.target.value)}
                />
                {/* <InputRightElement
                  children={
                    <Icon
                      as={showPassword ? AiOutlineEyeInvisible : AiOutlineEye}
                    />
                  }
                  onClick={handlePasswordVisibility}
                  cursor="pointer"
                /> */}
              </InputGroup>
              <Text marginTop={"3px"} textStyle="B13R" color={"red.300"}>
                {passwordCheckValidationMessage}
              </Text>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="name">실명</FormLabel>
              <Input
                variant="flushed"
                width={"full"}
                placeholder="이름을 입력하세요."
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">휴대폰 번호</FormLabel>
              <Input
                variant="flushed"
                width={"full"}
                id="tel"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="휴대폰 번호를 입력하세요(-제외)"
              />
            </FormControl>

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
            <FormControl isRequired>
              <FormLabel htmlFor="birthday">Birthday</FormLabel>
              <div style={{ display: "flex", gap: "10px" }}>
                <Select
                  id="birthdayYear"
                  placeholder="년"
                  variant="flushed"
                  value={birthday.year}
                  onChange={(e) => handleBirthdayChange("year", e.target.value)}
                >
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Select>
                <Select
                  id="birthdayMonth"
                  variant="flushed"
                  placeholder="월"
                  value={birthday.month}
                  onChange={(e) =>
                    handleBirthdayChange("month", e.target.value)
                  }
                >
                  {monthOptions.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}{" "}
                </Select>
                <Select
                  id="birthdayDay"
                  placeholder="일"
                  variant="flushed"
                  value={birthday.day}
                  onChange={(e) => handleBirthdayChange("day", e.target.value)}
                >
                  {dayOptions.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}{" "}
                </Select>
              </div>
            </FormControl>
            <FormControl
              isRequired
              border="1px solid #DBDBDB"
              padding={"10px"}
              gap={"10px"}
            >
              {/* <FormLabel>Agreements</FormLabel> */}

              <Checkbox
                isChecked={
                  selectAll &&
                  agreements.agreed_to_electronic_transactions &&
                  agreements.agreed_to_marketing_mails &&
                  agreements.agreed_to_optional_privacy_policy &&
                  agreements.agreed_to_privacy_policy &&
                  agreements.agreed_to_terms_of_service &&
                  agreements.agreed_to_third_party_sharing &&
                  agreements.confirmed_age_over_14
                }
                onChange={handleSelectAllChange}
                _checked={{
                  "& .chakra-checkbox__control": {
                    background: "#5400FD",
                  },
                }}
                marginBottom={"10px"}
                color={"#666666"}
              >
                전체동의
              </Checkbox>
              <CheckboxGroup>
                <Stack spacing={2}>
                  {Object.entries(agreements).map(([key, isChecked]) => (
                    <Flex justifyContent={"space-between"}>
                      <Checkbox
                        _checked={{
                          "& .chakra-checkbox__control": {
                            background: "#5400FD",
                          },
                        }}
                        key={key}
                        isChecked={isChecked}
                        onChange={(e) =>
                          handleAgreementChange(key, e.target.checked)
                        }
                        color={"#666666"}
                      >
                        {translation[key]}
                      </Checkbox>
                      <Button
                        backgroundColor="white"
                        onClick={() => openAgreementModal(key)}
                      >
                        {">"}
                      </Button>
                      {/* Modal for the agreement */}
                      <Modal
                        isOpen={selectedAgreement === key}
                        onClose={closeAgreementModal}
                      >
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>{translation[key]}</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Text maxH="500px" overflowY="auto">
                              {terms_of_service}
                            </Text>
                            <Button
                              marginY={"10px"}
                              textStyle={"B16M"}
                              width="full"
                              height="56px"
                              border="1px"
                              variant="outline"
                              backgroundColor="#5400FD;"
                              color={"white"}
                              borderRadius="0px"
                              onClick={closeAgreementModal}
                            >
                              확인
                            </Button>
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                    </Flex>
                  ))}
                </Stack>
              </CheckboxGroup>
              <Text marginTop={"10px"} textStyle={"B14R"} color={"#666666"}>
                동의를 거부할 권리가 있으며 동의를 거부할 경우, 사이드 가입 또는
                일부 서비스 이용이 제한됩니다.
              </Text>
            </FormControl>
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
              onClick={() => {
                navigate("/signup");
              }}
            >
              동의하고 가입하기
            </Button>
          </VStack>
        </form>
      </Flex>
    </Flex>
  );
}
