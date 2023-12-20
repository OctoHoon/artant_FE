import { Box, Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import Footer from "../../components/commons/Footer";
import ProfileHeader from "../../components/People/ProfileHeader";
import RegisterProcess from "../../components/RegisterShop/RegisterProcess";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../lib/useUser";
import { useMutation } from "@tanstack/react-query";
import { createShop } from "../../services/shopService";

export default function RegisterShopName() {
  const { userLoading, isLoggedIn, user } = useUser();

  const [inputText, setInputText] = useState(""); // 입력된 텍스트 상태 추가

  const isLengthValid = inputText.length >= 4 && inputText.length <= 20;

  const hasSpecialCharsOrSpaces = /[!@#$%^&*()_+{}\[\]:;<>,.?~\s]/.test(
    inputText
  );
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

  const createShopName = useMutation(createShop, {});
  // 이벤트 핸들러
  const handleButtonClick = async () => {
    if (isLengthValid && !hasSpecialCharsOrSpaces) {
      console.log(user);
      try {
        // First, get the upload URL
        const response = await createShopName.mutateAsync({
          shop_name: inputText,
        });
        navigate(`/your/shops/${response.id}/onboarding/listings/create`);
      } catch (error) {
        // Handle errors that occur during the upload or video creation process
        console.error("Error in video submission process:", error);
      }
    }
  };
  return (
    <Flex
      display={"inline-flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"120px"}
      paddingBottom={"120px"}
      mt={"32px"}
      mb={"120px"}
    >
      <Flex
        display={"inline-flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"60px"}
      >
        <RegisterProcess currentPage={1}></RegisterProcess>
        <Flex
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"38px"}
        >
          {" "}
          <Text
            textStyle={"B22M"}
            color="#000"
            textAlign="center"
            letterSpacing="-0.3px"
          >
            상점 이름을 지정하세요
          </Text>
          <Text
            width={"620px"}
            color="#000"
            textAlign="center"
            fontFamily="Spoqa Han Sans Neo"
            textStyle={"B16R"}
            lineHeight="150%"
            letterSpacing="-0.048px"
          >
            땀 흘리지 마세요! 지금 이름 초안을 작성하고 나중에 변경할 수
            있습니다. 판매자는 자신이 <br />
            판매하는 제품, 스타일 등 거의 모든 것에서 영감을 얻는 경우가
            많습니다. 추가 이름 지정 팁
          </Text>
          <Flex
            width={"620px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"40px"}
          >
            <Flex
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"12px"}
            >
              <Input
                display="flex"
                padding="11px 16px"
                alignItems="center"
                gap="8px"
                flex="1 0 0"
                alignSelf="stretch"
                borderRadius="5px"
                border="1px solid var(--maincolorsstrokegrayc-4-c-4-c-4, #C4C4C4)"
                background="var(--maincolorsbg-white, #FFF)"
                placeholder="상점 이름을 입력하세요"
                onChange={(e) => setInputText(e.target.value)}
              />
              <Flex
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
              >
                <HStack>
                  {isLengthValid ? <CorrectCheck /> : <NormalCheck />}
                  <Text color="#000" textAlign="center" textStyle={"B14R"}>
                    4~20자 사이
                  </Text>
                </HStack>
                <HStack>
                  {inputText.length > 0 && !hasSpecialCharsOrSpaces ? (
                    <CorrectCheck />
                  ) : (
                    <NormalCheck />
                  )}
                  <Text color="#000" textAlign="center" textStyle={"B14R"}>
                    특수 문자 및 공백이 없습니다.
                  </Text>
                </HStack>
              </Flex>
            </Flex>
            <HStack>
              {inputText !== "" && !hasSpecialCharsOrSpaces && isLengthValid ? (
                <>
                  <SvgHeart />
                  <Text
                    color="#000"
                    textAlign="center"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="normal"
                    letterSpacing="-0.048px"
                  >
                    좋은 생각입니다. 이 이름을 사용 할 수 있습니다!
                  </Text>
                </>
              ) : (
                inputText !== "" && (
                  <>
                    <SvgWarning />
                    <Text
                      color="var(--maincolorstextredf-12-e-24, #F12E24)"
                      textAlign="center"
                      fontFamily="Spoqa Han Sans Neo"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight={400}
                      lineHeight="normal"
                      letterSpacing="-0.048px"
                    >
                      상점 이름을 다시 입력해주세요!
                    </Text>
                  </>
                )
              )}
            </HStack>
          </Flex>
        </Flex>
        <Flex
          display={"flex"}
          width={"1280px"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Button
            padding={"10px 24px"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"2px"}
            borderRadius={"5px"}
            background={"var(--maincolorsbgblack-222222, #222);"}
            color={"white"}
            fontSize={"16px"}
            // 이동 조건을 만족하지 않으면 버튼 비활성화
            disabled={!isLengthValid || hasSpecialCharsOrSpaces}
            onClick={handleButtonClick}
            _hover={{
              background: "var(--maincolorsbggray-555555, #555)",
            }}
          >
            저장하고 계속
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

const NormalCheck = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <mask
        id="a"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#1C1B1F"
          d="m9.551 17.308-4.969-4.97.713-.713 4.256 4.256 9.156-9.156.713.713-9.869 9.87Z"
        />
      </g>
    </svg>
  );
};

const CorrectCheck = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <mask
        id="a"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#83AD6F"
          d="m9.551 17.308-4.969-4.97.713-.713 4.256 4.256 9.156-9.156.713.713-9.869 9.87Z"
        />
      </g>
    </svg>
  );
};

const SvgHeart = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <mask
        id="a"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#1C1B1F"
          d="m12 20.654-.758-.685a136.048 136.048 0 0 1-4.05-3.829c-1.068-1.061-1.91-1.997-2.529-2.808-.618-.811-1.05-1.545-1.295-2.201A5.617 5.617 0 0 1 3 9.15c0-1.272.432-2.34 1.296-3.204C5.16 5.082 6.228 4.65 7.5 4.65c.88 0 1.704.225 2.475.675.77.45 1.446 1.105 2.025 1.963.58-.858 1.255-1.513 2.025-1.963A4.827 4.827 0 0 1 16.5 4.65c1.272 0 2.34.432 3.204 1.296C20.568 6.81 21 7.878 21 9.15c0 .664-.123 1.324-.368 1.98-.246.657-.678 1.39-1.296 2.202-.617.81-1.457 1.747-2.519 2.808a117.086 117.086 0 0 1-4.06 3.83l-.757.684Zm0-1.354a112.59 112.59 0 0 0 3.95-3.716c1.033-1.032 1.85-1.927 2.45-2.685.6-.758 1.017-1.43 1.25-2.015.233-.586.35-1.163.35-1.734 0-1-.333-1.833-1-2.5s-1.5-1-2.5-1c-.796 0-1.53.227-2.204.682-.673.454-1.275 1.139-1.807 2.053h-.978c-.544-.927-1.15-1.615-1.817-2.063A3.852 3.852 0 0 0 7.5 5.65c-.987 0-1.817.333-2.49 1C4.337 7.317 4 8.15 4 9.15c0 .57.117 1.148.35 1.734.233.585.65 1.257 1.25 2.015.6.758 1.417 1.65 2.45 2.675A132.997 132.997 0 0 0 12 19.3Z"
        />
      </g>
    </svg>
  );
};

const SvgWarning = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <mask
        id="a"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#F12E24"
          d="M2.73 20 12 4l9.269 16H2.73Zm1.72-1h15.1L12 6 4.45 19ZM12 17.615c.174 0 .32-.059.438-.176a.596.596 0 0 0 .177-.439.596.596 0 0 0-.177-.439.596.596 0 0 0-.438-.176.596.596 0 0 0-.439.176.596.596 0 0 0-.177.439c0 .174.06.32.177.439a.596.596 0 0 0 .439.176Zm-.5-2.23h1v-5h-1v5Z"
        />
      </g>
    </svg>
  );
};
