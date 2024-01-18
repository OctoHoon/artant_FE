import {
  VStack,
  Text,
  Button,
  useToast,
  Flex,
  RadioGroup,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountRecoveryInput from "./component/AccountRecoveryInput";
import ArtantRadio from "../commons/Button/ArtantRadio";
import ValidationMessage from "./component/ValidationMessage";
import { extractErrorMessage, validateEmail } from "./AccountRecovery";
import { sendPasswordResetEmail } from "../../services/userService";

export default function PwRecoveryForm() {
  const toast = useToast();
  const navigate = useNavigate();
  const [recoveryOption, setRecoveryOption] = useState("email");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [isSendAvailable, setisSendAvailable] = useState(true); // Initially assuming the email is available
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [emailValidationMessage, setUserEmailValidationMessage] = useState("");

  const handleValidateEmail = async () => {
    validateEmail(email, setisSendAvailable, setUserEmailValidationMessage); // 이메일 형식 올바른지 확인
  };

  const handleSubmitForEmailRecovery = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = "loading-toast"; // Unique ID for the loading toast

    if (!name || !email) {
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

    try {
      const response = await sendPasswordResetEmail({
        name: name,
        email: email,
      });
      console.log(response);
      if (response?.status === 200) {
        // Email is available
        setIsEmailSent(true);
      } else {
        setUserEmailValidationMessage(
          "입력된 정보와 일치하는 유저가 없습니다."
        );
        setisSendAvailable(false);
      }
    } catch (error) {
      console.error("Error during submission:", error);

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

  const handleSubmitForPhoneRecovery = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = "loading-toast"; // Unique ID for the loading toast

    if (!name || !phoneNumber) {
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
  };

  return (
    <VStack spacing={"40px"} align="center">
      <Spacer h={"40px"} />
      {isEmailSent ? (
        <Flex
          p={"18px"}
          gap={"8px"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text textStyle={"B16R"} textAlign={"center"} whiteSpace="pre-line">
            {`${email}로 비밀번호 재설정
             이메일을 발송하셨습니다.`}
          </Text>
          <Text textStyle={"B16R"} textAlign={"center"} whiteSpace="pre-line">
            {`이메일을 받지 못하셨나요? 
            스팸함을 확인해 보시거나, 입력하신 이름과 아이디(이메일)이 
            회원정보와 일치하는지 확인해주세요.`}
          </Text>

          <Text textStyle={"B16R"} textAlign={"center"} whiteSpace="pre-line">
            {`아이디(이메일)를 잊으신 경우, 먼저 아이디(이메일) 
            찾기를 진행해주세요.`}
          </Text>
          <Text textStyle={"B16M"}>아이디(이메일)찾기</Text>
        </Flex>
      ) : (
        <>
          <Flex
            p="18px 0"
            alignItems="center"
            justifyContent={"center"}
            gap="8px"
          >
            <Text
              flex="1 0 0"
              textStyle={"B16R"}
              textAlign={"center"}
              whiteSpace="pre-line"
            >
              {"비밀번호를 잃어버리셨나요?\n하단의 정보를 상세히 입력하세요."}
            </Text>
          </Flex>
          <Flex
            p="34px 20px"
            justifyContent={"space-between"}
            alignItems={"center"}
            alignSelf={"stretch"}
            backgroundColor={"#F8F8FA"}
          >
            <RadioGroup
              onChange={setRecoveryOption}
              value={recoveryOption}
              width={"full"}
            >
              <Flex justifyContent="space-between">
                <ArtantRadio value="email" text="이메일로 찾기" />
                <ArtantRadio value="phone" text="등록된 휴대폰 찾기" />
              </Flex>
            </RadioGroup>
          </Flex>
          {/* 휴대폰으로 찾기 */}
          {recoveryOption === "email" && (
            <form
              onSubmit={handleSubmitForEmailRecovery}
              style={{ width: "100%" }}
            >
              <VStack spacing={"40px"} align="center">
                <VStack spacing={4} align="flex-start" width={"full"}>
                  <AccountRecoveryInput
                    id={"name"}
                    type={"text"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isInvalid={undefined}
                    errorBorderColor={undefined}
                    placeholder={"이름을 입력하세요."}
                    onBlur={undefined}
                  />
                  <AccountRecoveryInput
                    id={"email"}
                    type={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={undefined}
                    errorBorderColor={undefined}
                    placeholder={"아이디(이메일)을 입력하세요"}
                    onBlur={handleValidateEmail}
                  />
                  <ValidationMessage
                    message={emailValidationMessage}
                    isValid={isSendAvailable}
                  />
                </VStack>
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
                  비밀번호 찾기
                </Button>
              </VStack>
            </form>
          )}
          {/* 본인 확인 후 찾기 */}
          {recoveryOption === "phone" && (
            <form
              onSubmit={handleSubmitForPhoneRecovery}
              style={{ width: "100%" }}
            >
              <VStack spacing={"32px"}>
                <VStack spacing={4} align="flex-start" width={"full"}>
                  <AccountRecoveryInput
                    id={"name"}
                    type={"text"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isInvalid={undefined}
                    errorBorderColor={undefined}
                    placeholder={"이름을 입력하세요."}
                    onBlur={undefined}
                  />
                  <AccountRecoveryInput
                    id={"tel"}
                    type={"tel"}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    isInvalid={undefined}
                    errorBorderColor={undefined}
                    placeholder={"휴대폰 번호를 입력하세요(-제외)"}
                    onBlur={undefined}
                  />
                </VStack>
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
                  비밀번호 찾기
                </Button>
              </VStack>
            </form>
          )}
        </>
      )}
    </VStack>
  );
}
