import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  Button,
  useToast,
  Flex,
  RadioGroup,
  Spacer,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

import ArtantRadio from "../commons/Button/ArtantRadio";
import { validateUserPassword } from "../Signup/Signup";
import SignupInput from "../Signup/component/SignupInput";
import ValidationMessage from "../Signup/component/ValidationMessage";

export default function ResetPasswordForm() {
  const toast = useToast();

  const [password, setPassword] = useState("");
  const [password_check, setPasswordCheck] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState("");
  const [passwordCheckValidationMessage, setPasswordCheckValidationMessage] =
    useState("");

  const handleValidatePassword = () => {
    validateUserPassword(
      password,
      setIsPasswordValid,
      setPasswordValidationMessage
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 페이지 새로고침 방지
    const toastId = "loading-toast"; // Unique ID for the loading toast

    if (password !== password_check) {
      setPasswordCheckValidationMessage("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      setPasswordCheckValidationMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <VStack spacing={"32px"} align="center">
        <Flex
          p="24px 0px"
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"stretch"}
          backgroundColor={"#F8F8FA"}
        >
          {" "}
          <Text textStyle={"B16R"} textAlign={"center"} whiteSpace="pre-line">
            {"비밀번호를 잃어버리셨나요?\n비밀번호를 재설정하세요."}
          </Text>
        </Flex>

        <VStack spacing={"40px"} align="center">
          <VStack spacing={4} align="flex-start" width={"full"}>
            <FormControl isRequired>
              <InputGroup>
                <Input
                  variant="flushed"
                  width={"full"}
                  placeholder="비밀번호를 입력하세요."
                  id="password"
                  type={"text"}
                  value={password}
                  isInvalid={!isPasswordValid}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleValidatePassword();
                  }}
                  onBlur={handleValidatePassword}
                />
              </InputGroup>
            </FormControl>
            <ValidationMessage
              message={passwordValidationMessage}
              isValid={isPasswordValid}
            />
            <FormControl isRequired>
              <InputGroup>
                <Input
                  variant="flushed"
                  width={"full"}
                  placeholder="비밀번호를 입력하세요."
                  id={"password_check"}
                  type={"text"}
                  value={password_check}
                  onChange={(e) => setPasswordCheck(e.target.value)}
                  onBlur={undefined}
                  isInvalid={undefined}
                  errorBorderColor="red.300"
                />
              </InputGroup>
            </FormControl>

            <ValidationMessage
              message={passwordCheckValidationMessage}
              isValid={false}
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
            _hover={{
              background: "var(--maincolorsbggray-555555, #5400FD)",
            }}
          >
            확인
          </Button>
        </VStack>
      </VStack>
    </form>
  );
}
