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
import useUser from "../../lib/useUser";

export default function ReceiverInfo() {
  const { userLoading, isLoggedIn, user } = useUser();
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
        받는분 정보
      </Box>
      <Flex
        alignSelf={"stretch"}
        padding={"20px 0px"}
        alignItems={"center"}
        fontSize={"14px"}
      >
        <Box width={"200px"} fontWeight={"700"} alignItems={"center"}>
          배송지 정보
        </Box>
        <Flex flexDirection={"column"} gap="8px">
          <Flex gap="16px">
            <Text fontWeight={"500"}>우창수 010-1234-4575</Text>
            <Flex gap="4px">
              <Checkbox />
              안심번호 사용
            </Flex>
            <Text>전화번호 : 010-3936-8117</Text>
          </Flex>
          <Flex gap={"12px"}>
            [기본배송지] 경기도 용인시 처인구 모현읍 00로, 000아파트 1005호
            <Flex
              alignItems={"center"}
              gap="8px"
              color=" var(--maincolorstextgray-777777, #777)"
            >
              배송지변경
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
          배송 요청 사항
        </Box>
        <Flex flexDirection={"column"} gap="12px">
          <Menu>
            <MenuButton
              textAlign={"left"}
              fontSize={"14px"}
              fontWeight={"400"}
              width={"500px"}
              padding="10px 36px 8px 16px"
              justifyContent={"space-between"}
              background="white"
              border={
                "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
              }
              borderRadius={"0"}
              as={Button}
              rightIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_746_11386"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_746_11386)">
                    <path
                      d="M11.9991 14.7019L6.69141 9.39422L7.39911 8.68652L11.9991 13.2865L16.5991 8.68652L17.3068 9.39422L11.9991 14.7019Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              }
            >
              배송기사에게 전달되는 메시지입니다. 선택해주세요
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          <Flex flexDirection="column" gap="2px">
            <Flex gap={"2px"}>
              <Checkbox />
              다음 배송에도 계속 사용
            </Flex>
            <Text color={"var(--maincolorstextgray-595959, #666)"}>
              편리한 배송을 위해 보관되어 배송 목적에 한하여 사용됩니다.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box
        alignSelf={"stretch"}
        height={"2px"}
        background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"
      />
      <Flex
        alignSelf={"stretch"}
        padding={"20px 0px"}
        alignItems={"flex-start"}
        fontSize={"14px"}
        gap={"12px"}
        flexDirection={"column"}
      >
        <Flex>
          <Box width={"200px"} fontWeight={"700"}>
            주문자명/이메일
          </Box>
          <Box>{user && user.name} / artant@gmail.com</Box>
          <Box width={"12px"} />
          <Flex
            gap={"8px"}
            alignItems={"center"}
            fontSize={"12px"}
            color={" var(--maincolorstextredf-12-e-24, #F12E24)"}
          >
            주문자 정보 변경
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
                fill="#F12E24"
              />
            </svg>
          </Flex>
        </Flex>
        <Flex>
          <Box width={"200px"} fontWeight={"700"}>
            품절시 환불방법
          </Box>
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="row">
              <Radio value="1" fontSize={"13px"}>
                <Text fontSize={"14px"}>주문시 결제수단으로 환불 받기</Text>
              </Radio>
              <Radio value="2">
                <Text fontSize={"14px"}>아트앤트 포인트로 자동환불 받기</Text>
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
      </Flex>
    </Flex>
  );
}
