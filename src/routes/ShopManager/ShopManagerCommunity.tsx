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
  Image,
  Select,
} from "@chakra-ui/react";
import { MenuTextBox } from "./ShopManagerFinance";
import BlackButton from "../../components/commons/Button/BlackButton";

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
        width={"1340px"}
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
        </Flex>
        <Flex
          flexDirection={"column"}
          gap={"24px"}
          alignSelf={"stretch"}
          width={"1280px"}
        >
          <Text textStyle={"h4"}>추천</Text>
          <Flex gap={"40px"} alignSelf={"stretch"}>
            <RecommendCard
              image={"assets/images/search.png"}
              title={"아트앤트 배지 획득을 위한 팁"}
              contents={
                "안녕하세요! 제 이름은 마리이고 아트앤트의 머천다이징 팀에서 근무하고 있습니다. 오늘 ..."
              }
              avatar={undefined}
              name={"마리"}
              likes={"800"}
              comments={"979"}
            />
            <RecommendCard
              image={"assets/images/search.png"}
              title={"사기꾼으로 부터 계정을 보호하세요."}
              contents={
                "안녕하세요. 최근 판매자가 의사소통 사례를 공유하는 횟수가 증가한 것을 확인했습니다."
              }
              avatar={undefined}
              name={"마리"}
              likes={"800"}
              comments={"979"}
            />
            <RecommendCard
              image={"assets/images/search.png"}
              title={
                "새로운 소식: 판매를 유도하면 아트앤트 수수료를 적약 할 수 있습니다."
              }
              contents={
                "안녕하세요. 최근 판매자가 의사소통 사례를 공유하는 횟수가 증가한 것을 확인했습니다."
              }
              avatar={undefined}
              name={"레지나"}
              likes={"800"}
              comments={"979"}
            />
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} gap={"40px"}>
          <Flex flexDirection={"column"} gap={"24px"}>
            <Flex justifyContent={"space-between"}>
              <Text textStyle={"h4"}>토론 참여</Text>
              <Flex gap={"12px"}>
                <Select placeholder="최근 활동" width={"120px"} />
                <BlackButton
                  title={"토론 시작"}
                  borderRadius={"5px"}
                  width="min"
                />
              </Flex>
            </Flex>
            <Flex flexDirection={"column"} gap={"20px"} alignItems={"center"}>
              <DiscussBar
                avatar={undefined}
                title={"추천 항목을 변경할 수 없습니다."}
                name={"마리"}
                status={"매장 관리 중"}
                time={"10분 전"}
                likes={"800"}
                comments={"979"}
              />
              <DiscussBar
                avatar={undefined}
                title={"조언 찾기: 높은 클리수, 낮은 매출"}
                name={"염소나무"}
                status={"매장 관리 중"}
                time={"10분 전"}
                likes={"800"}
                comments={"979"}
              />
              <DiscussBar
                avatar={undefined}
                title={"장바구니 작품 추가"}
                name={"마리"}
                status={"매장 관리 중"}
                time={"10분 전"}
                likes={"800"}
                comments={"979"}
              />
              <DiscussBar
                avatar={undefined}
                title={"반품 및 정책"}
                name={"마리"}
                status={"매장 관리 중"}
                time={"10분 전"}
                likes={"800"}
                comments={"979"}
              />
              <DiscussBar
                avatar={undefined}
                title={"작품 비평가 환영"}
                name={"마리"}
                status={"매장 관리 중"}
                time={"10분 전"}
                likes={"800"}
                comments={"979"}
              />
            </Flex>
          </Flex>
        </Flex>
        <Box alignSelf={"center"}>
          {" "}
          <BlackButton title={"더보기"} borderRadius={"100px"} />
        </Box>
      </Flex>
    </Flex>
  );
}

function DiscussBar({ avatar, title, name, status, time, likes, comments }) {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      alignSelf={"stretch"}
      paddingBottom={"20px"}
      borderBottom={"1px solid var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"}
    >
      <Flex gap={"12px"} alignItems={"center"}>
        <Image
          src={avatar}
          width={"50px"}
          height={"50px"}
          borderRadius={"100px"}
        />
        <Flex flexDirection={"column"} gap={"6px"} justifyContent={"center"}>
          <Text>{title}</Text>
          <Flex alignItems={"center"} gap={"6px"}>
            <Text>{name}</Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="2"
              viewBox="0 0 2 2"
              fill="none"
            >
              <circle cx="1" cy="1" r="1" fill="#666666" />
            </svg>
            <Text>{status}</Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="2"
              viewBox="0 0 2 2"
              fill="none"
            >
              <circle cx="1" cy="1" r="1" fill="#666666" />
            </svg>
            <Text>{time}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex alignItems={"center"} gap={"12px"}>
        <Flex gap={"4px"} alignItems={"center"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_1367_17147"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1367_17147)">
              <path
                d="M17.4615 20.0009H7.65385V9.00092L13.9231 2.80859L14.3654 3.25092C14.4564 3.34194 14.533 3.4586 14.5952 3.60092C14.6574 3.74322 14.6885 3.87399 14.6885 3.99322V4.15092L13.6654 9.00092H20.3846C20.8026 9.00092 21.1763 9.16566 21.5058 9.49514C21.8353 9.82463 22 10.1983 22 10.6163V11.8471C22 11.9381 21.9907 12.0375 21.9721 12.1451C21.9535 12.2528 21.9256 12.3522 21.8885 12.4432L19.1577 18.9163C19.0205 19.224 18.7898 19.4817 18.4654 19.6894C18.141 19.8971 17.8064 20.0009 17.4615 20.0009ZM6.65385 9.00092V20.0009H3V9.00092H6.65385Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          {likes}
        </Flex>
        <Flex gap={"4px"} alignItems={"center"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_1367_17163"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1367_17163)">
              <path
                d="M3 21.6154V6.15385C3 5.6936 3.15417 5.30931 3.4625 5.00098C3.77083 4.69264 4.15513 4.53848 4.61538 4.53848H14.6C14.559 4.70514 14.5352 4.8686 14.5288 5.02885C14.5224 5.18912 14.5205 5.35899 14.5231 5.53848H4.61538C4.46154 5.53848 4.32052 5.60258 4.1923 5.73078C4.0641 5.85899 4 6.00002 4 6.15385V19.1827L5.65 17.5385H19.3846C19.5385 17.5385 19.6795 17.4744 19.8077 17.3462C19.9359 17.218 20 17.0769 20 16.9231V9.88078C20.191 9.83591 20.3667 9.78431 20.5269 9.72598C20.6872 9.66764 20.8449 9.59232 21 9.5V16.9231C21 17.3834 20.8458 17.7676 20.5375 18.076C20.2292 18.3843 19.8449 18.5385 19.3846 18.5385H6.07693L3 21.6154ZM4 6.15385V18.9231V5.53848V6.15385ZM19 8C18.3077 8 17.7179 7.75642 17.2308 7.26925C16.7436 6.78207 16.5 6.19232 16.5 5.5C16.5 4.8077 16.7436 4.21796 17.2308 3.73078C17.7179 3.24359 18.3077 3 19 3C19.6923 3 20.2821 3.24359 20.7692 3.73078C21.2564 4.21796 21.5 4.8077 21.5 5.5C21.5 6.19232 21.2564 6.78207 20.7692 7.26925C20.2821 7.75642 19.6923 8 19 8Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          {comments}
        </Flex>
      </Flex>
    </Flex>
  );
}

function RecommendCard({
  image,
  title,
  contents,
  avatar,
  name,
  likes,
  comments,
}) {
  return (
    <Flex flexDirection={"column"} flex={"1 0 0"}>
      <Image src={image} height={"200px"} />
      <Flex padding={"24px"} flexDirection={"column"} gap={"12px"}>
        <Flex flexDirection={"column"} gap={"6px"}>
          <Text height={"40px"}>{title}</Text>
          <Text>{contents}</Text>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          alignSelf={"stretch"}
        >
          <Flex alignItems={"center"} gap={"12px"}>
            <Image
              src={avatar}
              width={"38px"}
              height={"38px"}
              borderRadius={"100px"}
              alignSelf={"stretch"}
            />
            <Text>{name}</Text>
          </Flex>
          <Flex alignItems={"center"} gap={"12px"}>
            <Flex gap={"4px"} alignItems={"center"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_1367_17147"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1367_17147)">
                  <path
                    d="M17.4615 20.0009H7.65385V9.00092L13.9231 2.80859L14.3654 3.25092C14.4564 3.34194 14.533 3.4586 14.5952 3.60092C14.6574 3.74322 14.6885 3.87399 14.6885 3.99322V4.15092L13.6654 9.00092H20.3846C20.8026 9.00092 21.1763 9.16566 21.5058 9.49514C21.8353 9.82463 22 10.1983 22 10.6163V11.8471C22 11.9381 21.9907 12.0375 21.9721 12.1451C21.9535 12.2528 21.9256 12.3522 21.8885 12.4432L19.1577 18.9163C19.0205 19.224 18.7898 19.4817 18.4654 19.6894C18.141 19.8971 17.8064 20.0009 17.4615 20.0009ZM6.65385 9.00092V20.0009H3V9.00092H6.65385Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              {likes}
            </Flex>
            <Flex gap={"4px"} alignItems={"center"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_1367_17163"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1367_17163)">
                  <path
                    d="M3 21.6154V6.15385C3 5.6936 3.15417 5.30931 3.4625 5.00098C3.77083 4.69264 4.15513 4.53848 4.61538 4.53848H14.6C14.559 4.70514 14.5352 4.8686 14.5288 5.02885C14.5224 5.18912 14.5205 5.35899 14.5231 5.53848H4.61538C4.46154 5.53848 4.32052 5.60258 4.1923 5.73078C4.0641 5.85899 4 6.00002 4 6.15385V19.1827L5.65 17.5385H19.3846C19.5385 17.5385 19.6795 17.4744 19.8077 17.3462C19.9359 17.218 20 17.0769 20 16.9231V9.88078C20.191 9.83591 20.3667 9.78431 20.5269 9.72598C20.6872 9.66764 20.8449 9.59232 21 9.5V16.9231C21 17.3834 20.8458 17.7676 20.5375 18.076C20.2292 18.3843 19.8449 18.5385 19.3846 18.5385H6.07693L3 21.6154ZM4 6.15385V18.9231V5.53848V6.15385ZM19 8C18.3077 8 17.7179 7.75642 17.2308 7.26925C16.7436 6.78207 16.5 6.19232 16.5 5.5C16.5 4.8077 16.7436 4.21796 17.2308 3.73078C17.7179 3.24359 18.3077 3 19 3C19.6923 3 20.2821 3.24359 20.7692 3.73078C21.2564 4.21796 21.5 4.8077 21.5 5.5C21.5 6.19232 21.2564 6.78207 20.7692 7.26925C20.2821 7.75642 19.6923 8 19 8Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              {comments}
            </Flex>
          </Flex>
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
