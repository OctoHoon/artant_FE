import {
  Flex,
  Checkbox,
  Box,
  Text,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import SnsTab from "./SnsTab";
import useUser from "../../lib/useUser";

export default function AccountBody() {
  const { userLoading, isLoggedIn, user } = useUser();
  return (
    <Flex
      padding={"24px 0px 120px 40px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"60px"}
    >
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"24px"}
        width={"992px"}
      >
        <Text fontSize={"22px"} fontWeight={"500"}>
          계정정보
        </Text>
        <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"16px"}>
          <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"16px"}>
            <Flex gap={"20px"}>
              <Text>이 름 :</Text>
              <Text>{user && user.name}</Text>
            </Flex>
            <Flex gap={"20px"}>
              <Text>주 소 :</Text>
              <Text>서울특별시 00구 00동 00아파트 0000동 0000호</Text>
            </Flex>
            <Flex gap="100px">
              <Flex flexDirection={"column"} gap={"16px"}>
                <Flex gap={"20px"}>
                  <Text>가입일 :</Text>
                  <Text>2023년 08월 21일 가입</Text>
                </Flex>
                <Flex gap={"20px"}>
                  <Text>연락처 :</Text>
                  <Text>010-1234-5678</Text>
                </Flex>
              </Flex>
              <Flex flexDirection={"column"} gap={"16px"}>
                <Flex gap={"20px"}>
                  <Text>이메일 :</Text>
                  <Text>artant@gmail.com</Text>
                </Flex>
                <Flex gap={"20px"}>
                  <Text>핸드폰 :</Text>
                  <Text>010-1234-5678</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Button
            padding={"10px 18px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"100px"}
            border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
            background="white"
            fontSize={"12px"}
            fontWeight={"400"}
          >
            프로필 설정 바로가기
          </Button>
        </Flex>
      </Flex>
      <Flex
        width={"992px"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"24px"}
      >
        <Text fontSize={"22px"} fontWeight={"500"}>
          연결된 계정
        </Text>
        <Flex
          width={"992px"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <SnsTab sns={"페이스북"} isConnected={false} />
          <SnsTab sns={"구글"} isConnected={true} />
          <SnsTab sns={"카카오톡"} isConnected={false} />
          <SnsTab sns={"네이버"} isConnected={false} />
          <SnsTab sns={"트위터"} isConnected={false} />
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"24px"}>
        <Text fontSize={"22px"} fontWeight={"500"}>
          비밀번호 변경
        </Text>
        <Flex flexDirection={"column"} gap={"20px"}>
          <Flex flexDirection={"column"} gap={"2px"}>
            현재 비밀번호
            <Input placeholder="현재 비밀번호를 입력하세요" width={"370px"} />
          </Flex>
          <Flex flexDirection={"column"} gap={"2px"}>
            새 비밀번호
            <Input placeholder="새 비밀번호를 입력하세요" width={"370px"} />
            <Box
              fontSize={"12px"}
              color={"var(--maincolorstextgray-595959, #666)"}
            >
              보안 등급 : 양호
            </Box>
          </Flex>
          <Flex flexDirection={"column"} gap={"2px"}>
            새 비밀번호를 확인합니다
            <Input
              placeholder="비밀번호 확인을 위해 한번 더 입력하세요"
              width={"370px"}
            />
          </Flex>
        </Flex>
        <Button
          width={"140px"}
          height={"34px"}
          justifyContent={"center"}
          alignItems={"center"}
          background="black"
          color={"white"}
          _hover={{
            background: "var(--maincolorsbggray-555555, #555)",
          }}
        >
          비밀번호 변경
        </Button>
      </Flex>
      <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"24px"}>
        <Text fontSize={"22px"} fontWeight={"500"}>
          이메일
        </Text>
        <Flex alignItems={"flex-start"} gap={"100px"}>
          <Flex gap={"20px"}>
            <Text>현재 이메일 :</Text>
            <Text>artant@gmail.com</Text>
          </Flex>
          <Flex gap={"20px"}>
            <Text>상태 :</Text>
            <Text>확인됨</Text>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} gap={"20px"}>
          <Flex flexDirection={"column"} gap={"2px"}>
            새 이메일
            <Input placeholder="새 이메일을 입력하세요" width={"370px"} />
          </Flex>
          <Flex flexDirection={"column"} gap={"2px"}>
            새 이메일 확인
            <Input
              placeholder="새 이메일을 한번 더 입력하세요"
              width={"370px"}
            />
          </Flex>
          <Flex flexDirection={"column"} gap={"2px"}>
            비밀번호 입력
            <Input
              placeholder="아트앤트 비밀번호를 입력하세요"
              width={"370px"}
            />
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} gap={"12px"}>
          <Button
            width={"140px"}
            height={"34px"}
            justifyContent={"center"}
            alignItems={"center"}
            background="black"
            color={"white"}
            _hover={{
              background: "var(--maincolorsbggray-555555, #555)",
            }}
          >
            이메일 변경
          </Button>
          <Text>
            이메일 주소는 이메일을 통해 확인할 때까지 변경되지 않습니다.
          </Text>
        </Flex>
      </Flex>
      <Flex
        width={"992px"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"24px"}
      >
        <Text fontSize={"22px"} fontWeight={"500"}>
          계정 폐쇄
        </Text>
        <Flex
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"12px"}
          alignSelf={"stretch"}
        >
          <Text>계정을 폐쇄하면 어떻게 되나요?</Text>
          <Flex flexDirection={"column"} gap={"4px"}>
            <Text>
              {" "}
              {`\u2022`} 귀하의 계정은 다시 열 때까지 비활성화됩니다.
            </Text>
            <Text>
              {" "}
              {`\u2022`} 귀하의 프로필, 상점 및 목록은 더 이상 아트앤트 어디에도
              표시되지 않습니다.
            </Text>
            <Text>
              {" "}
              {`\u2022`} 귀하가 개설한 배송 불가 케이스는 모두 종료됩니다.
            </Text>
            <Text>
              {" "}
              {`\u2022`} 귀하의 계정 설정은 그대로 유지되며 누구도 귀하의 사용자
              이름을 사용할 수 없습니다.
            </Text>
          </Flex>
          <Text>
            언제든지 계정을 다시 열 수 있습니다. 아트앤트에 다시 로그인하거나{" "}
            <Text as="u">아트앤트 지원팀에 문의하여</Text> 도움을 받으세요.
          </Text>
          <Text fontWeight={"500"}>
            계정을 영구적으로 삭제 하시겠습니까? 개인정보 설정으로 이동하여
            ‘데이터 삭제 요청’을 클릭하세요.
          </Text>
        </Flex>
        <Box
          height={"1px"}
          alignSelf={"stretch"}
          background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"
        />
        <Text fontWeight={"500"}>
          계정삭제 이유를 알려시면 개선하는데 도움이 됩니다.
        </Text>
        <Menu>
          <MenuButton
            textAlign={"left"}
            fontSize={"14px"}
            fontWeight={"400"}
            width={"500px"}
            padding="10px 36px 8px 16px"
            justifyContent={"space-between"}
            background="white"
            border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
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
            이유를 선택하세요.
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="column">
            <Radio value="1" fontSize={"13px"}>
              <Text fontSize={"14px"}>
                공예품 박람회나 기타 오프라인 판매에 집중하고 있습니다.
              </Text>
            </Radio>
            <Radio value="2">
              <Text fontSize={"14px"}>
                팔 수 있는 물건이 하나(또는 몇 개) 밖에 없었습니다.
              </Text>
            </Radio>
            <Radio value="3">
              <Text fontSize={"14px"}>
                다른 아트앤트 계정이나 상점으로 전환 중입니다.
              </Text>
            </Radio>
            <Radio value="4">
              <Text fontSize={"14px"}>
                내 회사를 내 사이트로 이전하려고 합니다.
              </Text>
            </Radio>
            <Radio value="5">
              <Text fontSize={"14px"}>수입이 내 시간만큼 가치가 없음</Text>
            </Radio>
            <Radio value="6">
              <Text fontSize={"14px"}>다른 이유</Text>
            </Radio>
          </Stack>
        </RadioGroup>
        <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"8px"}>
          <Text>아트앤트에게 더 하실 말씀이 있으신가요?(선택)</Text>
          <Textarea placeholder="여기에 입력하세요" />
          <Flex gap={"8px"}>
            <Checkbox />
            아트앤트는 질문이나 추가 정보가 있는 경우 artant@gmail.com으로
            아트앤트에게 연락할 수 있습니다.
          </Flex>
        </Flex>
        <Button
          width={"140px"}
          height={"34px"}
          justifyContent={"center"}
          alignItems={"center"}
          background="black"
          color={"white"}
          _hover={{
            background: "var(--maincolorsbggray-555555, #555)",
          }}
        >
          계정 폐쇄
        </Button>
      </Flex>
    </Flex>
  );
}
