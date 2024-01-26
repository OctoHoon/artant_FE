import {
  VStack,
  Text,
  FormControl,
  Button,
  useToast,
  Flex,
  InputGroup,
  Input,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import { validateUserPassword } from "../Signup/Signup";
import ValidationMessage from "../Signup/component/ValidationMessage";
import { resetPassword } from "../../services/userService";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordForm() {
  const toast = useToast();
  const navigate = useNavigate(); // useNavigate 훅 사용
  const cancelRef = useRef(null);

  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
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
      setIsSuccessDialogOpen(true);
    } catch (error) {
      toast({
        id: toastId,
        title: "오류",
        description:
          "비밀번호 재설정에 실패했습니다. 이메일로 비밀번호 찾기를 다시 진행해주세요",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleCloseSuccessDialog = () => {
    setIsSuccessDialogOpen(false);
    navigate("/"); // 홈페이지로 리디렉션
  };

  return (
    <>
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
      <AlertDialog
        isOpen={isSuccessDialogOpen}
        onClose={handleCloseSuccessDialog}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>비밀번호 재설정</AlertDialogHeader>
            <AlertDialogBody>비밀번호가 재설정되었습니다.</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={handleCloseSuccessDialog}>확인</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
