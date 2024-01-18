import { Text, Flex } from "@chakra-ui/react";
import CorporateSignupForm from "../components/Signup/CorporateSignupForm";

export default function CorporateSignup() {
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
          사업자 회원가입
        </Text>
        <CorporateSignupForm />
      </Flex>
    </Flex>
  );
}
