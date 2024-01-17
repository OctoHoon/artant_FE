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

export default function PwRecoveryForm() {
  const toast = useToast();
  const navigate = useNavigate();
  const [recoveryOption, setRecoveryOption] = useState("email");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const handleSubmitForEmailRecovery = async (e: React.FormEvent) => {
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

    // try {
    //   // toast({
    //   //   id: toastId,
    //   //   title: "계정 생성중...",
    //   //   description: "잠시만 기다려주세요",
    //   //   status: "info",
    //   //   duration: null, // null duration keeps the toast open indefinitely
    //   //   isClosable: false,
    //   // });
    //   // await createUserAccount({
    //   //   name: name,
    //   //   username: username.split("@")[0],
    //   //   password: password,
    //   //   password_confirm: password_check,
    //   //   email: username,
    //   //   gender: gender,
    //   //   birthday: `${birthday["year"]}-${birthday["month"]}-${birthday["day"]}`,
    //   //   cell_phone_number: phoneNumber,
    //   //   description: "",
    //   //   avatar: "",
    //   //   agreed_to_terms_of_service: agreements.agreed_to_terms_of_service,
    //   //   agreed_to_electronic_transactions:
    //   //     agreements.agreed_to_electronic_transactions,
    //   //   agreed_to_privacy_policy: agreements.agreed_to_privacy_policy,
    //   //   confirmed_age_over_14: agreements.confirmed_age_over_14,
    //   //   agreed_to_third_party_sharing: agreements.agreed_to_third_party_sharing,
    //   //   agreed_to_optional_privacy_policy:
    //   //     agreements.agreed_to_optional_privacy_policy,
    //   //   agreed_to_marketing_mails: agreements.agreed_to_marketing_mails,
    //   //   is_corporate: false,
    //   //   corporate_number: null,
    //   //   corporate_name: null,
    //   // });
    //   toast.close(toastId);

    //   toast({
    //     title: "계정 생성 완료!",
    //     description: "홈으로 돌아갑니다.",
    //     status: "success",
    //     duration: 5000,
    //     isClosable: true,
    //   });

    //   navigate(`/`);
    // } catch (error) {
    //   console.error("Error during submission:", error);
    //   toast.close(toastId);

    //   const errorMessage = extractErrorMessage(error);
    //   toast({
    //     title: "계정 생성 실패",
    //     description: errorMessage,
    //     status: "error",
    //     duration: 5000,
    //     isClosable: true,
    //   });
    // }
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
      <Spacer h={"40px"}></Spacer>
      <Flex p="18px 0" alignItems="center" justifyContent={"center"} gap="8px">
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
        <form onSubmit={handleSubmitForEmailRecovery} style={{ width: "100%" }}>
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
      {/* 본인 확인 후 찾기 */}
      {recoveryOption === "phone" && (
        <form onSubmit={handleSubmitForPhoneRecovery} style={{ width: "100%" }}>
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
    </VStack>
  );
}
