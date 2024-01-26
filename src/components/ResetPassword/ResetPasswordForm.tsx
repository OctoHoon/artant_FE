import {
  VStack,
  Text,
  FormControl,
  Button,
  useToast,
  Flex,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { validateUserPassword } from "../Signup/Signup";
import ValidationMessage from "../Signup/component/ValidationMessage";
import { resetPassword } from "../../services/userService";

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

    // 비밀번호 일치 여부 검증
    if (password !== password_check) {
      setPasswordCheckValidationMessage("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      setPasswordCheckValidationMessage("");
    }

    // URL에서 uid와 token 추출
    const queryParams = new URLSearchParams(window.location.search);
    const uid = queryParams.get("uid");
    const token = queryParams.get("token");

    // 필수 값 검증
    if (!uid || !token) {
      toast({
        id: toastId,
        title: "오류",
        description: "잘못된 접근입니다.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // 비밀번호 재설정 API 호출
    try {
      const response = await resetPassword({
        uid,
        token,
        new_password: password,
        confirm_password: password_check,
      });
      toast({
        id: toastId,
        title: "성공",
        description: "비밀번호가 재설정되었습니다.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        id: toastId,
        title: "오류",
        description: "비밀번호 재설정에 실패했습니다.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
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
                    const newPassword = e.target.value;
                    setPassword(newPassword);
                    setTimeout(() => {
                      validateUserPassword(
                        newPassword,
                        setIsPasswordValid,
                        setPasswordValidationMessage
                      );
                    }, 0);
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
                  isInvalid={password !== password_check}
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
