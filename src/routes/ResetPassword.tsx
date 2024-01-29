import { Flex, Text } from "@chakra-ui/react";
import RecoveryTabs from "../components/AccountRecovery/RecoveryTabs";
import ResetPasswordForm from "../components/ResetPassword/ResetPasswordForm";

export default function ResetPassword() {
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
        <Text textStyle={"H5M"} textAlign={"center"}>
          비밀번호 재설정
        </Text>
        <ResetPasswordForm />
      </Flex>
    </Flex>
  );
}
