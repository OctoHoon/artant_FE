import { VStack, Button, Text } from "@chakra-ui/react";

export default function CorporateSignupStepTwo({ step, setStep }) {
  return (
    <>
      <Text
        textStyle={"B14R"}
        padding={"18px 20px"}
        backgroundColor={"#F8F8FA;"}
      >
        반드시 사업주 본인 명의의 휴대폰으로 인증해주세요!
      </Text>
      <VStack spacing={4} align="flex-start">
        {/* User fields */}

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
          onClick={() => {}}
        >
          휴대폰 인증
        </Button>
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
          onClick={() => {
            setStep(step + 1);
          }}
        >
          다음으로
        </Button>
      </VStack>
    </>
  );
}
