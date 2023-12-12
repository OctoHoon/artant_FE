import {
  Flex,
  Text,
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";

export default function PointInfo() {
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
        아트앤트 MONEY 사용
      </Box>
      <Flex
        alignSelf={"stretch"}
        padding={"20px 0px"}
        alignItems={"center"}
        fontSize={"14px"}
      >
        <Box width={"200px"} fontWeight={"700"} alignItems={"center"}>
          아트앤트 MONEY
        </Box>
        <Flex alignItems={"center"} width={"600px"} gap={"10px"}>
          <InputGroup size="sm">
            <Input />
            <InputRightAddon children="전체사용" />
          </InputGroup>
          <Text width={"100%"}>(잔여:0원)</Text>
        </Flex>
      </Flex>

      <Flex flexDirection={"column"} padding={"8px 0px"}>
        <Flex
          alignSelf={"stretch"}
          padding={"6px 0px"}
          alignItems={"center"}
          fontSize={"14px"}
        >
          <Flex alignItems={"center"} gap={"20px"}>
            <Box>아트앤트 MONEY로 충전하여 사용할 수 있어요.</Box>
            <Flex
              alignItems={"center"}
              gap={"8px"}
              color="var(--maincolorstextgray-777777, #777)"
            >
              상품권으로 충전
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.525548 12L6.55671e-08 11.25L6.54015 6L9.83506e-07 0.749999L0.52555 -6.53437e-07L8 6L0.525548 12Z"
                  fill="#777777"
                />
              </svg>
            </Flex>
            <Flex
              alignItems={"center"}
              gap={"8px"}
              color="var(--maincolorstextgray-777777, #777)"
            >
              계좌로 충전
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.525548 12L6.55671e-08 11.25L6.54015 6L9.83506e-07 0.749999L0.52555 -6.53437e-07L8 6L0.525548 12Z"
                  fill="#777777"
                />
              </svg>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
