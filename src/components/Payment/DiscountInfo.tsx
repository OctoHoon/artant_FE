import {
  Flex,
  Checkbox,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  RadioGroup,
  Stack,
  Radio,
  Text,
  Box,
} from "@chakra-ui/react";

export default function DiscountInfo() {
  return (
    <Flex flexDirection={"column"} alignSelf={"stretch"}>
      <Box
        alignSelf={"stretch"}
        height={"2px"}
        background="var(--maincolorslineblack-222222, #222)"
      />
      <Box
        alignSelf={"stretch"}
        padding={"20px 0px"}
        alignItems={"center"}
        fontSize={"22px"}
        fontWeight={"700"}
      >
        할인혜택
      </Box>
      <Flex
        alignSelf={"stretch"}
        padding={"20px 0px"}
        alignItems={"center"}
        fontSize={"14px"}
      >
        <Box width={"200px"} fontWeight={"700"} alignItems={"center"}>
          주문금액
        </Box>
        <Flex alignItems={"baseline"}>
          <Text fontSize={"22px"}>70,000</Text>원
        </Flex>
      </Flex>
      <Box
        alignSelf={"stretch"}
        height={"2px"}
        background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"
      />
      <Flex flexDirection={"column"} padding={"14px 0px"}>
        <Flex
          alignSelf={"stretch"}
          padding={"6px 0px"}
          alignItems={"center"}
          fontSize={"14px"}
        >
          <Box width={"200px"} fontWeight={"700"} alignItems={"center"}>
            상품할인
          </Box>
          <Flex alignItems={"baseline"}>-30,000원</Flex>
        </Flex>
        <Flex
          alignSelf={"stretch"}
          padding={"6px 0px"}
          alignItems={"center"}
          fontSize={"14px"}
          color="#666"
        >
          <Box width={"200px"} fontWeight={"700"} alignItems={"center"}>
            <Flex gap="2px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_746_11710"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_746_11710)">
                  <path
                    d="M9.33333 13.3334L8.85768 12.8577L11.3859 10.3334H4V3.33337H4.66667V9.66671H11.3859L8.85768 7.13851L9.32948 6.66286L12.6667 10L9.33333 13.3334Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              상품직시할인
            </Flex>
          </Box>
          <Flex alignItems={"baseline"}>-30,000원</Flex>
        </Flex>
      </Flex>
      <Flex
        alignSelf={"stretch"}
        padding={"6px 0px"}
        alignItems={"center"}
        fontSize={"14px"}
      >
        <Box width={"200px"} fontWeight={"700"} alignItems={"center"}>
          쿠폰할인
        </Box>
        <Flex alignItems={"baseline"}>0원 [할인] / 0원 [적립]</Flex>
      </Flex>
      <Flex
        alignSelf={"stretch"}
        padding={"6px 0px"}
        alignItems={"center"}
        fontSize={"14px"}
      >
        <Flex width={"200px"} alignItems={"center"} gap="4px">
          <Checkbox />
          최대 할인 혜택 바로 적용
        </Flex>
      </Flex>
      <Box height={"14px"} />
      <Box
        alignSelf={"stretch"}
        height={"2px"}
        background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"
      />
      <Flex
        alignSelf={"stretch"}
        padding={"20px 0px"}
        alignItems={"center"}
        fontSize={"14px"}
      >
        <Box width={"200px"} fontWeight={"700"} alignItems={"center"}>
          할인금액
        </Box>
        <Flex alignItems={"baseline"}>
          <Text fontSize={"22px"}>-30,000</Text>원
        </Flex>
      </Flex>
    </Flex>
  );
}
