import { Box, Button, Flex, Text } from "@chakra-ui/react";
import LoginInfoRow from "./LoginInfoRow";

export default function SecurityBody() {
  return (
    <Flex padding={"24px 0px 120px 40px"} flexDirection={"column"} gap="60px">
      <Flex width={"992px"} flexDirection={"column"} gap={"24px"}>
        <Text fontSize="22px" fontWeight={"500"}>
          2차 인증
        </Text>
        <Flex gap={"40px"}>
          <Flex flexDirection={"column"} gap={"12px"}>
            <Text>2차인증 꺼짐</Text>
            <Text width={"560px"}>
              이 기능을 켜면 새 기기나 브라우저에서 로그인을 시도하는 모든
              사람이 귀하의 계정에 액세스할 수 있는지 확인해야 합니다.{" "}
              <Text as="u">더 알아보기</Text>
            </Text>
          </Flex>
          <Flex gap={"10px"}>
            <Button
              padding={"8px 20px"}
              borderRadius={"100px"}
              background={"var(--maincolorsbggrayeaeaea, #EAEAEA);"}
            >
              권장
            </Button>
            <Button
              padding={"12px 20px"}
              borderRadius={"100px"}
              background={"#222"}
              color={"white"}
              _hover={{
                background: "var(--maincolorsbggray-555555, #555)",
              }}
            >
              2차 인증 켜기
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap={"12px"} flexDirection={"column"}>
        <Flex gap={"24px"} flexDirection={"column"}>
          <Text fontSize="22px" fontWeight={"500"}>
            로그인 기록
          </Text>
          <Text>귀하의 계정에 대한 최근 로그인 활동을 검토하세요.</Text>
        </Flex>
      </Flex>
      <Flex flexDirection={"column"}>
        <Box
          height="1px"
          alignSelf="stretch"
          background="var(--maincolorslineblack-222222, #222)"
        />
        <Flex width={"992px"} padding="16px 20px" alignItems={"center"}>
          <Box width={"180px"} fontWeight={"500"}>
            시간
          </Box>
          <Box width={"240px"} fontWeight={"500"}>
            다음을 통해 엑세스 됨
          </Box>
          <Box width={"160px"} fontWeight={"500"}>
            IP
          </Box>
          <Box width={"260px"} fontWeight={"500"}>
            위치
          </Box>
          <Box fontWeight={"500"}>상태</Box>
        </Flex>
        <Box
          height="1px"
          alignSelf="stretch"
          background="var(--maincolorslineblack-222222, #222)"
        />

        <Flex
          width={"992px"}
          alignItems={"center"}
          fontSize={"13px"}
          flexDirection={"column"}
        >
          <LoginInfoRow
            time={"20시간 전"}
            access={"Windows 10의 Chrome 116"}
            ip={"211.58.17.225"}
            location={"광주, 41세, 한국 (SK브로드밴드)"}
            status={"로그아웃"}
          />
          <LoginInfoRow
            time={"20시간 전"}
            access={"Windows 10의 Chrome 116"}
            ip={"211.58.17.225"}
            location={"광주, 41세, 한국 (SK브로드밴드)"}
            status={"로그아웃"}
          />
          <LoginInfoRow
            time={"20시간 전"}
            access={"Windows 10의 Chrome 116"}
            ip={"211.58.17.225"}
            location={"광주, 41세, 한국 (SK브로드밴드)"}
            status={"로그아웃"}
          />
          <LoginInfoRow
            time={"20시간 전"}
            access={"Windows 10의 Chrome 116"}
            ip={"211.58.17.225"}
            location={"광주, 41세, 한국 (SK브로드밴드)"}
            status={"로그아웃"}
          />
          <LoginInfoRow
            time={"20시간 전"}
            access={"Windows 10의 Chrome 116"}
            ip={"211.58.17.225"}
            location={"광주, 41세, 한국 (SK브로드밴드)"}
            status={"로그아웃"}
          />
          <LoginInfoRow
            time={"20시간 전"}
            access={"Windows 10의 Chrome 116"}
            ip={"211.58.17.225"}
            location={"광주, 41세, 한국 (SK브로드밴드)"}
            status={"로그아웃"}
          />
          <LoginInfoRow
            time={"20시간 전"}
            access={"Windows 10의 Chrome 116"}
            ip={"211.58.17.225"}
            location={"광주, 41세, 한국 (SK브로드밴드)"}
            status={"로그아웃"}
          />
          <LoginInfoRow
            time={"20시간 전"}
            access={"Windows 10의 Chrome 116"}
            ip={"211.58.17.225"}
            location={"광주, 41세, 한국 (SK브로드밴드)"}
            status={"로그아웃"}
          />
          <LoginInfoRow
            time={"20시간 전"}
            access={"Windows 10의 Chrome 116"}
            ip={"211.58.17.225"}
            location={"광주, 41세, 한국 (SK브로드밴드)"}
            status={"로그아웃"}
          />
          <LoginInfoRow
            time={"20시간 전"}
            access={"Windows 10의 Chrome 116"}
            ip={"211.58.17.225"}
            location={"광주, 41세, 한국 (SK브로드밴드)"}
            status={"로그아웃"}
          />
          <LoginInfoRow
            time={"20시간 전"}
            access={"Windows 10의 Chrome 116"}
            ip={"211.58.17.225"}
            location={"광주, 41세, 한국 (SK브로드밴드)"}
            status={"로그아웃"}
          />
          <LoginInfoRow
            time={"20시간 전"}
            access={"Windows 10의 Chrome 116"}
            ip={"211.58.17.225"}
            location={"광주, 41세, 한국 (SK브로드밴드)"}
            status={"로그아웃"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
