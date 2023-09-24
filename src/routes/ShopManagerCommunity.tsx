import {
  Flex,
  Text,
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Divider,
  Input,
} from "@chakra-ui/react";
import { MenuTextBox } from "./ShopManagerFinance";

const data = [
  { title: "새로운소식", description: "아트앤트의 최신 정보를 알아보세요." },
  {
    title: "포럼 찾아보기기",
    description:
      "다른 판매자에게 조언을 구하거나 좋아는 것에 대해 이야기해 보세요.",
  },
  {
    title: "팀 가입",
    description:
      "가까운 판매자, 당신과 같은 판매자, 또는 당신이 정말로 좋아하는 판매자와 팀을 이루세요. 함께 대화하고, 협력하고, 멋진 것을 만들어 보세요.",
  },
  {
    title: "커뮤니티 정책",
    description:
      "커뮤니티는 아트앤트에서 하는 모든 일의 핵심입니다. 아트앤트 회원은 커뮤니티 공간을 사용하여 서로에게 영감을 줍니다.",
  },
];

export default function ShopManagerCommunity() {
  return (
    <Flex flexDirection={"column"}>
      <SettingHeader />
      <Flex
        width={"1280px"}
        padding={"32px 0px 120px 60px"}
        gap={"60px"}
        alignSelf={"stretch"}
        flex={"1 0 0"}
        flexDirection={"column"}
      >
        <Flex flexDirection={"column"} gap={"24px"} alignSelf={"stretch"}>
          <Flex flexDirection={"column"} gap={"12px"} alignSelf={"stretch"}>
            <Text fontSize={"22px"} fontWeight={"500"}>
              아트앤트 커뮤니티에 오신 것을 환영합니다
            </Text>
            <Text textStyle={"BodyXs14R"}>
              아트앤트 판매자는 커뮤니티 공간을 사용하여 비즈니스를
              성장시킵니다. 다른 판매자와 대화에 참여하세요.
            </Text>
          </Flex>
          <Input placeholder="커뮤니티 검색" width={"400px"} />
          <Flex gap={"20px"}>
            {data.map((info) => (
              <InfoBox title={info.title} description={info.description} />
            ))}
          </Flex>
          <Box height={"1200px"} />
        </Flex>
      </Flex>
    </Flex>
  );
}

function SecondTable({ table }) {
  return (
    <Flex flexDirection={"column"} gap={"24px"} alignSelf={"stretch"}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th fontSize={"18px"}>특징</Th>
            </Tr>
          </Thead>
          <Tbody>
            {table.map((entry, index) => (
              <Tr key={entry}>
                <Td>{entry}</Td>
                <Td>{index < 3 ? <CheckIcon /> : null}</Td>
                <Td>
                  <CheckIcon />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask
        id="mask0_1131_13466"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1131_13466)">
        <path
          d="M9.5493 17.3073L4.58008 12.3381L5.29353 11.6246L9.5493 15.8804L18.7051 6.72461L19.4185 7.43806L9.5493 17.3073Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
}

function InfoBox({ title, description }) {
  return (
    <Flex
      padding={"24px"}
      flexDirection={"column"}
      gap={"12px"}
      flex={"1 0 0"}
      background={"var(--maincolorsbgpurplef-8-f-1-ff, #F8F1FF)"}
    >
      <Text textStyle={"BodyXs14R"}>{title}</Text>
      <Text textStyle={"BodyXs14R"} color={"#666"}>
        {description}
      </Text>
    </Flex>
  );
}

function SettingHeader() {
  return (
    <Flex
      width={"1340px"}
      padding={"32px 0px 0px 60px"}
      alignItems={"center"}
      gap={"24px"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"-2px"}
        flex={"1 0 0"}
      >
        <Flex flexDirection={"column"} gap={"24px"} alignSelf={"stretch"}>
          <Text fontSize={"22px"} fontWeight={"500"}>
            커뮤니티
          </Text>
          <Flex alignSelf={"stretch"} borderBottom={"2px solid black"}>
            <MenuTextBox selected={true} text={"Teams"} />
            <MenuTextBox selected={false} text={"포럼"} />
            <MenuTextBox selected={false} text={"판매자 이벤트"} />
            <MenuTextBox selected={false} text={"판매자 핸드북"} />
            <MenuTextBox selected={false} text={"도움"} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
