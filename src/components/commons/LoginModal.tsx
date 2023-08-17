import {
  Button,
  Checkbox,
  HStack,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import SocialLogin from "../index/SocialLogin";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async () => {
    console.log(username);
    console.log(password);
    console.log({
      username: username,
      password: password,
    });

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/log-in",
        {
          username: username,
          password: password,
        }
      );

      // Handle successful login here (e.g., redirect, update user context, etc.)
      console.log("Login successful:", response.data);
      onClose(); // Close the modal after successful login
    } catch (error) {
      // Handle login error here
      setLoginError("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={5}>
          <VStack spacing={5}>
            <InputGroup size={"md"}>
              <Input
                variant={"flushed"}
                focusBorderColor="black"
                placeholder="아이디를 입력하세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputGroup>
            <Input
              variant={"flushed"}
              focusBorderColor="black"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <HStack spacing={24}>
              <Checkbox right={6} colorScheme="blackAlpha">
                로그인 상태 유지
              </Checkbox>
              <Text>아이디/비밀번호</Text>
            </HStack>
          </VStack>
          <Button py={6} mt={8} color={"black"} w="100%" onClick={handleLogin}>
            로그인
          </Button>
          <SocialLogin />
          <Button
            py={6}
            marginBottom={14}
            colorScheme="gray"
            variant="outline"
            borderColor="blackAlpha.500"
            w="100%"
          >
            회원가입
          </Button>
          {loginError && <Text color="red.500">{loginError}</Text>}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
