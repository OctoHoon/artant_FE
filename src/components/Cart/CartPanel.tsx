import { Box, Flex, Image, Button, Text } from "@chakra-ui/react";

export default function CartPanel() {
  return (
    <Box
      maxW="412px"
      width="412px"
      height={"100%"}
      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
    >
      <Box
        padding={"20px"}
        background="var(--maincolorsbggrayf-9-f-9-f-9, #F9F9F9)"
      >
        <Flex fontWeight={"700"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_746_10047"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_746_10047)">
              <path
                d="M12 17.1096C13.8167 15.6737 15.1875 14.2974 16.1125 12.9808C17.0375 11.6641 17.5 10.3872 17.5 9.15C17.5 8.12627 17.3131 7.25334 16.9394 6.53123C16.5657 5.80913 16.1 5.22467 15.5423 4.77787C14.9846 4.33109 14.3869 4.00642 13.7492 3.80385C13.1115 3.60128 12.5284 3.5 12 3.5C11.4716 3.5 10.8885 3.60128 10.2508 3.80385C9.61309 4.00642 9.01538 4.33109 8.4577 4.77787C7.9 5.22467 7.43429 5.80913 7.06058 6.53123C6.68686 7.25334 6.5 8.12627 6.5 9.15C6.5 10.3872 6.9625 11.6641 7.8875 12.9808C8.8125 14.2974 10.1833 15.6737 12 17.1096ZM12 18.3846C9.81667 16.741 8.1875 15.1538 7.1125 13.6231C6.0375 12.0923 5.5 10.6012 5.5 9.14973C5.5 8.05339 5.69647 7.09218 6.08942 6.26608C6.48237 5.43998 6.98867 4.74616 7.6083 4.18463C8.22795 3.62308 8.92505 3.20192 9.6996 2.92115C10.4741 2.64038 11.2409 2.5 12 2.5C12.7591 2.5 13.5259 2.64038 14.3004 2.92115C15.075 3.20192 15.7721 3.62308 16.3917 4.18463C17.0113 4.74616 17.5176 5.43998 17.9106 6.26608C18.3035 7.09218 18.5 8.05339 18.5 9.14973C18.5 10.6012 17.9625 12.0923 16.8875 13.6231C15.8125 15.1538 14.1833 16.741 12 18.3846ZM12 10.5C12.4218 10.5 12.7772 10.3555 13.0663 10.0663C13.3555 9.77725 13.5 9.4218 13.5 9C13.5 8.5782 13.3555 8.22275 13.0663 7.93365C12.7772 7.64455 12.4218 7.5 12 7.5C11.5782 7.5 11.2228 7.64455 10.9337 7.93365C10.6446 8.22275 10.5 8.5782 10.5 9C10.5 9.4218 10.6446 9.77725 10.9337 10.0663C11.2228 10.3555 11.5782 10.5 12 10.5ZM5.5 21.5V20.5H18.5V21.5H5.5Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          기본 배송지: 기본배송지
        </Flex>
        [16884] 경기도 용인시 처인구 모현읍 능곡로 13-6, 능원한백 b동 305호
        <Flex gap="10px" marginTop="10px">
          <Button
            border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
            background="var(--maincolorsbg-white, #FFF)"
            width={"100%"}
            borderRadius={"0px"}
          >
            여러 곳으로 한방에
          </Button>
          <Button
            border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
            background="var(--maincolorsbg-white, #FFF)"
            width={"100%"}
            borderRadius={"0px"}
          >
            배송지 변경
          </Button>
        </Flex>
      </Box>
      <Box
        display="flex"
        padding="20px 20px 10px 20px"
        alignItems="center"
        gap="4px"
        alignSelf="stretch"
        fontSize="13px"
        color="var(--maincolorstextblack-222222, #222)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_746_10073"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_746_10073)">
            <path
              d="M5.61538 21C5.16794 21 4.78685 20.8426 4.4721 20.5279C4.15737 20.2131 4 19.8321 4 19.3846V8.61538C4 8.16794 4.15737 7.78685 4.4721 7.4721C4.78685 7.15737 5.16794 7 5.61538 7H8C8 5.8859 8.38814 4.94071 9.16442 4.16443C9.94071 3.38814 10.8859 3 12 3C13.1141 3 14.0593 3.38814 14.8356 4.16443C15.6119 4.94071 16 5.8859 16 7H18.3846C18.8321 7 19.2132 7.15737 19.5279 7.4721C19.8426 7.78685 20 8.16794 20 8.61538V19.3846C20 19.8321 19.8426 20.2131 19.5279 20.5279C19.2132 20.8426 18.8321 21 18.3846 21H5.61538ZM5.61538 20H18.3846C18.5385 20 18.6795 19.9359 18.8077 19.8077C18.9359 19.6795 19 19.5385 19 19.3846V8.61538C19 8.46154 18.9359 8.32052 18.8077 8.1923C18.6795 8.0641 18.5385 8 18.3846 8H5.61538C5.46154 8 5.32052 8.0641 5.1923 8.1923C5.0641 8.32052 5 8.46154 5 8.61538V19.3846C5 19.5385 5.0641 19.6795 5.1923 19.8077C5.32052 19.9359 5.46154 20 5.61538 20ZM12 13C13.1141 13 14.0593 12.6119 14.8356 11.8356C15.6119 11.0593 16 10.1141 16 9H15C15 9.83333 14.7083 10.5417 14.125 11.125C13.5417 11.7083 12.8333 12 12 12C11.1667 12 10.4583 11.7083 9.875 11.125C9.29167 10.5417 9 9.83333 9 9H8C8 10.1141 8.38814 11.0593 9.16442 11.8356C9.94071 12.6119 10.8859 13 12 13ZM9 7H15C15 6.16667 14.7083 5.45833 14.125 4.875C13.5417 4.29167 12.8333 4 12 4C11.1667 4 10.4583 4.29167 9.875 4.875C9.29167 5.45833 9 6.16667 9 7Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
        전체 상품 : 1개
      </Box>
      <Box
        display="flex"
        padding="0px 20px"
        justifyContent="space-between"
        alignItems="flex-start"
        alignContent="flex-start"
        rowGap="10px"
        alignSelf="stretch"
        flexWrap="wrap"
      >
        <Image
          width="64px"
          height="64px"
          src="https://i.etsystatic.com/28281562/r/il/8e3c09/3746470366/il_170x135.3746470366_cxyx.jpg"
        />
        <Image
          width="64px"
          height="64px"
          src="https://i.etsystatic.com/28281562/r/il/8e3c09/3746470366/il_170x135.3746470366_cxyx.jpg"
        />
        <Image
          width="64px"
          height="64px"
          src="https://i.etsystatic.com/28281562/r/il/8e3c09/3746470366/il_170x135.3746470366_cxyx.jpg"
        />
        <Image
          width="64px"
          height="64px"
          src="https://i.etsystatic.com/28281562/r/il/8e3c09/3746470366/il_170x135.3746470366_cxyx.jpg"
        />
        <Image
          width="64px"
          height="64px"
          src="https://i.etsystatic.com/28281562/r/il/8e3c09/3746470366/il_170x135.3746470366_cxyx.jpg"
        />
      </Box>
      <Box
        display={"flex"}
        padding="20px"
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"20px"}
        alignSelf={"stretch"}
      >
        <Box alignItems={"flex-start"} alignSelf={"stretch"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"baseline"}
            alignSelf={"stretch"}
          >
            <div>주문금액</div>
            <Flex fontSize={"22px"} alignItems={"baseline"}>
              418,000 {<Text fontSize={"16px"}>원</Text>}
            </Flex>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            alignItems={"baseline"}
            alignSelf={"stretch"}
          >
            <div>상품할인</div>
            <Flex fontSize={"22px"} alignItems={"baseline"}>
              -50,760 {<Text fontSize={"16px"}>원</Text>}
            </Flex>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            alignItems={"baseline"}
            alignSelf={"stretch"}
          >
            <div>배송비</div>
            <Flex fontSize={"22px"} alignItems={"baseline"}>
              +0 {<Text fontSize={"16px"}>원</Text>}
            </Flex>
          </Flex>
        </Box>
        <Box
          height={"1px"}
          alignSelf={"stretch"}
          background={"var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"}
        />
        <Flex
          justifyContent={"space-between"}
          alignItems={"baseline"}
          alignSelf={"stretch"}
          color="var(--maincolorstextredf-12-e-24, #F12E24);"
        >
          <Text fontSize={"13px"} fontWeight={"700"}>
            결정예정금액
          </Text>
          <Flex fontSize={"22px"} alignItems={"baseline"}>
            418,000 {<Text fontSize={"13px"}>원</Text>}
          </Flex>
        </Flex>
        <Button
          height={"65px"}
          padding={"10px"}
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"stretch"}
          borderRadius={"0px"}
          color={"white"}
          background={" var(--maincolorsbgredf-12-e-24, #F12E24)"}
        >
          주문하기
        </Button>
      </Box>
    </Box>
  );
}
