import { Flex, Text } from "@chakra-ui/react";
import SignupForm from "../components/Signup/SignupForm";

export default function Signup() {
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
        <SignupForm />
      </Flex>
    </Flex>
  );
}
