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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { extractErrorMessage } from "../Signup/Signup";
import AccountRecoveryInput from "./component/AccountRecoveryInput";
import ArtantRadio from "../commons/Button/ArtantRadio";

export default function IdRecoveryForm() {
  const toast = useToast();

  const [recoveryOption, setRecoveryOption] = useState("phone");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 페이지 새로고침 방지
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
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <VStack spacing={"40px"} align="center">
        <Spacer h={"40px"} />
        <Flex p="18px 0" alignItems={"center"}>
          <Text textStyle={"B16R"} textAlign={"center"} whiteSpace="pre-line">
            {"아이디를 잃어버리셨나요?\n하단의 정보를 상세히 입력하세요."}
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
              <ArtantRadio value="phone" text="휴대폰으로 찾기" />
              <ArtantRadio value="identity" text="본인 확인 후 찾기" />
            </Flex>
          </RadioGroup>
        </Flex>
        {/* 휴대폰으로 찾기 */}
        {recoveryOption === "phone" && (
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
              인증번호 전송
            </Button>
          </VStack>
        )}
        {/* 본인 확인 후 찾기 */}
        {recoveryOption === "identity" && (
          <VStack spacing={"32px"}>
            <Button
              textStyle={"B16M"}
              width="360px"
              height="56px"
              border="1px"
              variant="outline"
              backgroundColor="#5400FD;"
              color={"white"}
              borderRadius="0px"
            >
              본인명의 휴대폰 인증
            </Button>
            <Text
              textColor={"#666"}
              flex="1 0 0"
              textStyle={"B16R"}
              textAlign={"center"}
              whiteSpace="pre-line"
            >
              {"회원님의 명의로 등록된 \n휴대폰으로 본인확인을 진행합니다."}
            </Text>
          </VStack>
        )}
      </VStack>
    </form>
  );
}
