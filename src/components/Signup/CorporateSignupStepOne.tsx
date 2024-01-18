import { VStack, Button, Text } from "@chakra-ui/react";
import SignupInput from "./component/SignupInput";
import ValidationMessage from "./component/ValidationMessage";

export default function CorporateSignupStepOne({
  handleValidateStepOne,
  corporateNumber,
  setCorporateNumber,
  isCorporateNumberAvailable,
  handleValidateCorporateNumber,
  corporateNumberValidationMessage,
}) {
  return (
    <>
      <Text
        textStyle={"B14R"}
        padding={"18px 20px"}
        backgroundColor={"#F8F8FA;"}
      >
        사업자 회원으로 가입하려면
        <br /> 사업자등록증 인증이 필요합니다. 사업자 등록증을 미리
        준비해주세요.
      </Text>
      <form onSubmit={handleValidateStepOne} style={{ width: "100%" }}>
        <VStack spacing={4} align="flex-start">
          {/* User fields */}
          <SignupInput
            label={"사업자등록번호를 입력해주세요."}
            id={"username"}
            type={"text"}
            value={corporateNumber}
            onChange={(e) => setCorporateNumber(e.target.value)}
            isInvalid={!isCorporateNumberAvailable}
            errorBorderColor={"red.300"}
            placeholder={"사업자등록번호를 입력하세요."}
            onBlur={handleValidateCorporateNumber}
          />
          <ValidationMessage
            message={corporateNumberValidationMessage}
            isValid={isCorporateNumberAvailable}
          />

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
            // onClick={handleValidateStepOne}
          >
            조회하기
          </Button>
        </VStack>
      </form>
    </>
  );
}
