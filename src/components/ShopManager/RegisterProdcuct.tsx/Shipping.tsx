import { Flex, Input, Select, Button, Text } from "@chakra-ui/react";

export default function Shipping() {
  return (
    <Flex // 배송
      display={"flex"}
      width={"1280px"}
      padding={"24px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"32px"}
      border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
    >
      <Flex
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"4px"}
      >
        <Text
          color="var(--maincolorstextblack-222222, #222)"
          fontFamily="Spoqa Han Sans Neo"
          fontSize="24px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="normal"
          letterSpacing="-0.5px"
        >
          배송
        </Text>
        <Text
          color="var(--maincolorstextblack-222222, #222)"
          fontFamily="Spoqa Han Sans Neo"
          fontSize="14px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="normal"
          letterSpacing="-0.042px"
        >
          배송 프로필, 주문 처리 일정 등 배송 정보가 정확한지 확인하여
          쇼핑객에게 배송 시간과 비용에 대한 명확한 기대치를 제공하세요. 배송
          설정에서 언제든지 업데이트할 수 있습니다 .
        </Text>
      </Flex>
      <Flex
        display={"flex"}
        flexDirection={"column"}
        alignSelf={"stretch"}
        alignItems={"flex-start"}
        gap={"24px"}
      >
        <Flex // 배송 옵션
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <Flex
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            width={"234px"}
            gap={"6px"}
            alignSelf={"stretch"}
          >
            <Text
              color="var(--maincolorstextblack-222222, #222)"
              fontFamily="Spoqa Han Sans Neo"
              fontSize="14px"
              fontStyle="normal"
              fontWeight={500}
              lineHeight="normal"
              letterSpacing="-0.042px"
            >
              배송 옵션*
            </Text>
          </Flex>

          <Flex
            display={"flex"}
            flexDirection={"column"}
            flex={"1 0 0"}
            alignItems={"flex-start"}
            gap={"20px"}
          >
            <Text
              width={"716px"}
              color="var(--maincolorstextblack-222222, #222)"
              css={`
                font-feature-settings: "clig" off, "liga" off;
                /* BODY/S_16/R */
                font-family: "Spoqa Han Sans Neo";
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 24px */
                letter-spacing: -0.048px;
              `}
            >
              이 목록에 대한 배송 옵션을 입력하세요. 이러한 옵션을 이 목록에만
              적용하거나 배송 프로필로 저장하여 향후 목록에 적용 할 수있습니다.
            </Text>
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"24px"}
              alignSelf={"stretch"}
            >
              <Flex
                height={"1px"}
                alignSelf={"stretch"}
                background={"var(--maincolorslinegrayeeeeee, #EEE)"}
              ></Flex>
              <Flex // 출발지 우편번호
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    출발지 우편번호*
                  </Text>
                </Flex>
                <Input
                  display="flex"
                  padding="0px 16px"
                  alignItems="center"
                  width={"248px"}
                  height={"40px"}
                  alignSelf="stretch"
                  borderRadius="5px"
                  border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                  background="var(--maincolorsbg-white, #FFF)"
                  placeholder="우편번호 입력"
                  onChange={(e) => {}}
                />
              </Flex>
              <Flex // 처리시간
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    시간*
                  </Text>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="13px"
                    fontStyle="normal"
                    fontWeight={400}
                    lineHeight="140%"
                    letterSpacing="-0.3px"
                  >
                    주문을 준비해서 우편으로 보내야 하나요? 쇼핑객들은 빠르게
                    배송되는 품목을 구매할 사능성이 더 높다는 점을 명심하세요.
                  </Text>
                </Flex>
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  flex={"1 0 0"}
                >
                  <Select
                    height={"40px"}
                    padding={"10px 0px"}
                    gap={"10px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    colorScheme="white"
                    color="#595959"
                    fontSize="14px"
                    fontWeight="400"
                    letterSpacing={"-0.042px"}
                    placeholder="상품 준비 시간을 선택하세요"
                  >
                    <option value="option1">1일</option>
                    <option value="option2">1-2일</option>
                    <option value="option3">1-3일</option>
                    <option value="option3">3-5일</option>
                  </Select>
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    css={{
                      fontFeatureSettings: "clig off, liga off",
                      /* BODY/XS_14/R */
                      fontFamily: "Spoqa Han Sans Neo",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      letterSpacing: "-0.042px",
                    }}
                  >
                    매장의 주문 처리 일정은 월요일~금요일, 토요일, 일요일을
                    포함하도록 설정되어 있습니다.
                  </Text>
                </Flex>
              </Flex>
              <Flex
                height={"1px"}
                alignSelf={"stretch"}
                background={"var(--maincolorslinegrayeeeeee, #EEE)"}
              ></Flex>
              <Flex // 배송
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    fontFamily="Spoqa Han Sans Neo"
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="normal"
                    letterSpacing="-0.042px"
                  >
                    배송*
                  </Text>
                </Flex>
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"16px"}
                >
                  <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"6px"}
                  >
                    <Text
                      color="var(--maincolorstextblack-222222, #222)"
                      css={{
                        fontFeatureSettings: "clig off, liga off",
                        /* BODY/XS_14/R */
                        fontFamily: "Spoqa Han Sans Neo",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: "-0.042px",
                      }}
                    >
                      배송 서비스
                    </Text>
                    <Select
                      height={"40px"}
                      gap={"10px"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      colorScheme="white"
                      color="#595959"
                      fontSize="14px"
                      fontWeight="400"
                      letterSpacing={"-0.042px"}
                      placeholder="배송서비스를 선택하세요"
                    >
                      <option value="option1">국내배송</option>
                      <option value="option2">해외배송</option>
                    </Select>
                  </Flex>
                  <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"6px"}
                  >
                    <Text
                      color="var(--maincolorstextblack-222222, #222)"
                      css={{
                        fontFeatureSettings: "clig off, liga off",
                        /* BODY/XS_14/R */
                        fontFamily: "Spoqa Han Sans Neo",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        letterSpacing: "-0.042px",
                      }}
                    >
                      배송비
                    </Text>
                    <Select
                      height={"40px"}
                      gap={"10px"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      colorScheme="white"
                      color="#595959"
                      fontSize="14px"
                      fontWeight="400"
                      letterSpacing={"-0.042px"}
                      placeholder="배송비를 선택하세요"
                    >
                      <option value="option1">무료배송</option>
                      <option value="option2">고정가격</option>
                    </Select>
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                height={"1px"}
                alignSelf={"stretch"}
                background={"var(--maincolorslinegrayeeeeee, #EEE)"}
              ></Flex>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                alignSelf={"stretch"}
              >
                <Flex>
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    css={`
                      font-feature-settings: "clig" off, "liga" off;
                      /* BODY/XS_14/R */
                      font-family: "Spoqa Han Sans Neo";
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: normal;
                      letter-spacing: -0.042px;
                    `}
                  >
                    원하는 경우 이러한 옵션을 저장하여 향후 목록에 적용할 수
                    있습니다.
                  </Text>
                  <Text
                    ml={"6px"}
                    cursor={"pointer"}
                    color="var(--maincolorstextblack-222222, #222)"
                    css={`
                      font-feature-settings: "clig" off, "liga" off;
                      /* BODY/XS_14/R */
                      font-family: "Spoqa Han Sans Neo";
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: normal;
                      letter-spacing: -0.042px;
                    `}
                    textDecorationLine="underline"
                  >
                    배송 프로필 작동 방식
                  </Text>
                </Flex>
                <Button
                  alignItems={"center"}
                  padding={"10px 24px"}
                  backgroundColor={"transparent"}
                  borderRadius={"100px"}
                  border={"1px solid var(--maincolorstextblack-222222, #222)"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    css={`
                      /* BODY/S_16/M */
                      font-family: "Spoqa Han Sans Neo";
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: normal;
                      letter-spacing: 0.048px;
                    `}
                  >
                    배송 프로필 저장
                  </Text>
                </Button>
              </Flex>
              <Flex
                height={"1px"}
                alignSelf={"stretch"}
                background={"var(--maincolorslinegrayeeeeee, #EEE)"}
              ></Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex // 배송 옵션
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <Flex
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            width={"234px"}
            gap={"6px"}
            alignSelf={"stretch"}
          >
            <Text
              color="var(--maincolorstextblack-222222, #222)"
              fontFamily="Spoqa Han Sans Neo"
              fontSize="14px"
              fontStyle="normal"
              fontWeight={500}
              lineHeight="normal"
              letterSpacing="-0.042px"
            >
              배송비 미리보기
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={"40px"} flex={"1 0 0"}>
            <Flex
              width={"600px"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"20px"}
            >
              {" "}
              <Flex
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"16px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"6px"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    css={{
                      fontFeatureSettings: "clig off, liga off",
                      /* BODY/XS_14/R */
                      fontFamily: "Spoqa Han Sans Neo",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "150%",
                      letterSpacing: "-0.042px",
                    }}
                  >
                    기본 배송
                  </Text>
                  <Select
                    height={"40px"}
                    width={"600px"}
                    gap={"10px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    colorScheme="white"
                    color="#595959"
                    fontSize="14px"
                    fontWeight="400"
                    letterSpacing={"-0.042px"}
                    placeholder="배송 서비스 선택"
                  ></Select>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              gap={"40px"}
              flex={"1 0 0"}
            >
              <Flex
                display={"flex"}
                width={"120px"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"8px"}
              >
                <Text
                  color="var(--maincolorstextblack-222222, #222)"
                  css={`
                    font-feature-settings: "clig" off, "liga" off;
                    /* BODY/S_16/R */
                    font-family: "Spoqa Han Sans Neo";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 24px */
                    letter-spacing: -0.048px;
                  `}
                >
                  배송비
                </Text>
                <Text
                  color="var(--maincolorstextblack-222222, #222)"
                  css={`
                    font-feature-settings: "clig" off, "liga" off;
                    /* BODY/S_16/R */
                    font-family: "Spoqa Han Sans Neo";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 24px */
                    letter-spacing: -0.048px;
                  `}
                >
                  0원
                </Text>
              </Flex>
              <Flex
                display={"flex"}
                width={"120px"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"8px"}
              >
                <Text
                  color="var(--maincolorstextblack-222222, #222)"
                  css={`
                    font-feature-settings: "clig" off, "liga" off;
                    /* BODY/S_16/R */
                    font-family: "Spoqa Han Sans Neo";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 24px */
                    letter-spacing: -0.048px;
                  `}
                >
                  총 금액
                </Text>
                <Text
                  color="var(--maincolorstextblack-222222, #222)"
                  css={`
                    font-feature-settings: "clig" off, "liga" off;
                    /* BODY/S_16/R */
                    font-family: "Spoqa Han Sans Neo";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 24px */
                    letter-spacing: -0.048px;
                  `}
                >
                  0원
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

const SvgPlus = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="add">
        <mask
          id="mask0_1005_9844"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1005_9844)">
          <path
            id="add_2"
            d="M11.5 12.5H6V11.5H11.5V6H12.5V11.5H18V12.5H12.5V18H11.5V12.5Z"
            fill="#1C1B1F"
          />
        </g>
      </g>
    </svg>
  );
};
