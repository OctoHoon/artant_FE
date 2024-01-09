import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Button,
  Text,
  Flex,
  Checkbox,
  FormControl,
  VStack,
  InputRightElement,
  IconButton,
  InputGroup,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { usernameLogIn } from "../../services/userService";
import SocialLogin from "../index/SocialLogin";
import { HiEye, HiEyeOff } from "react-icons/hi"; // Import eye icons

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return true;
    //    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    console.log(email);
    console.log(password);

    if (!isEmailValid(email)) {
      setLoginError("아이디(이메일)는 이메일 형식으로 입력해주세요.");
      return;
    }

    try {
      const response = await usernameLogIn({ email, password });

      console.log("Login successful:", response.data);
      queryClient.refetchQueries(["me"]);
      onClose();
    } catch (error) {
      setLoginError("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent padding={"40px 0px 40px 0px"}>
        <ModalHeader alignSelf={"center"}>
          <Text fontWeight={"500"}>login</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={5}>
          <VStack spacing={4} align="stretch">
            <FormControl isInvalid={!!loginError}>
              <Input
                variant="flushed"
                focusBorderColor="black"
                placeholder="아이디를 입력하세요"
                // value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                errorBorderColor="red.500"
              />
            </FormControl>
            <FormControl>
              <InputGroup>
                <Input
                  variant="flushed"
                  focusBorderColor="black"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={
                      showPassword ? "Hide Password" : "Show Password"
                    }
                    variant="unstyled"
                    icon={showPassword ? <HiEyeOff /> : <HiEye />}
                    onClick={togglePasswordVisibility}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            {loginError && (
              <Text color="red.500" mt="2">
                {loginError}
              </Text>
            )}
            <Flex justifyContent="space-between" marginLeft="25px">
              <Checkbox right={6} colorScheme="blackAlpha">
                로그인 상태 유지
              </Checkbox>
              <Text fontWeight="300">아이디/비밀번호</Text>
            </Flex>
            <Button
              py={6}
              mt={8}
              borderRadius="0px"
              color="black"
              w="100%"
              onClick={handleLogin}
              backgroundColor="#5400FD"
              _hover={{
                background: "var(--maincolorsbggray-555555, #555)",
              }}
            >
              <Text color="#DBDBDB" textAlign="center" textStyle="B16B">
                로그인
              </Text>
            </Button>
            <SocialLogin />
            <Flex flexDirection="column" gap="8px">
              <SignUpButton
                text="일반 회원가입"
                onClose={onClose}
                navigate={navigate}
              />
              <SignUpButton
                text="사업자 회원가입"
                onClose={onClose}
                navigate={navigate}
              />
            </Flex>
            <Flex
              alignSelf="center"
              justifySelf="center"
              marginTop="30px"
              textStyle="B16R"
              gap="20px"
            >
              <Text>회원가입이 필요 없으신가요?</Text>
              <Text cursor="pointer">비회원 주문 {">"}</Text>
            </Flex>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

function SignUpButton({ text, onClose, navigate }) {
  return (
    <Button
      fontSize="16px"
      fontWeight="400"
      width="360px"
      height="56px"
      border="1px"
      variant="outline"
      borderColor="#D9D9D9;"
      borderRadius="0px"
      onClick={() => {
        onClose();
        navigate("/signup");
      }}
    >
      {text}
    </Button>
  );
}
