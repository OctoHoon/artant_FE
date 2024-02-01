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
} from "@chakra-ui/react";
import { MenuTextBox } from "./ShopManagerFinance";
import ArtantButton from "../../components/commons/ArtantButton";
import BlackButton from "../../components/commons/Button/BlackButton";

export default function ShopManagerSettings() {
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
        <SettingTop />
        <Flex flexDirection={"column"} gap={"24px"} alignSelf={"stretch"}>
          <Text fontSize={"22px"} fontWeight={"500"}>
            옵션 살펴보기
          </Text>
          <Flex gap={"60px"} flexDirection={"column"} alignSelf={"stretch"}>
            <Flex flexDirection={"column"} gap={"24px"} alignSelf={"stretch"}>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th fontSize={"18px"}>비용</Th>
                      <Th fontSize={"16px"} color={"#9E76BE"}>
                        표준
                      </Th>
                      <Th fontSize={"16px"} color={"#5365AE"}>
                        플러스
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>월 사용료</Td>
                      <Td>월 수수료 없음</Td>
                      <Td>한 달에 10,000원</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
            <Flex flexDirection={"column"} gap={"24px"} alignSelf={"stretch"}>
              <TableContainer>
                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <Td>
                        <Flex flexDirection={"column"} gap={"12px"}>
                          <Text fontSize={"18px"} fontWeight={"500"}>
                            크레딧
                          </Text>
                          <Text color={"#666"}>
                            크레딧은 이월되지 않지만 매달 같은 날 새로운 배치를
                            받게 됩니다.
                          </Text>
                        </Flex>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex flexDirection={"column"} gap={"12px"}>
                          <Text fontSize={"18px"} fontWeight={"500"}>
                            작품 크레딧
                          </Text>
                          <Text color={"#666"}>
                            작품을 생성하거나 갱신하는데 사용할 수 있는 크레딧
                          </Text>
                        </Flex>
                      </Td>
                      <Td>-</Td>
                      <Td>월 15크레딧</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex flexDirection={"column"} gap={"12px"}>
                          <Text fontSize={"18px"} fontWeight={"500"}>
                            광고 크레딧
                          </Text>
                          <Text color={"#666"}>
                            아트앤트 광고 캠페인 크레딧으로 아트앤트 검색에서
                            가시성을 높이세요
                          </Text>
                        </Flex>
                      </Td>
                      <Td>-</Td>
                      <Td>매달 5,000원 크레딧</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
            <SecondTable
              table={[
                "비즈니스를 시작, 관리, 성장시키는 데 필요한 모든 도구",
                "강력한 유료 광고 옵션",
                "아트앤트의 웹 사이트 구축 도구인 Pattern과 같은 선택적 추가 기능",
                "샵을 맞춤화하는 다양한 방법",
                "재입고 요청",
                "맞춤 포장 및 홍보 자료 할인 이용",
              ]}
            />
            <Flex flexDirection={"column"} gap={"12px"}>
              <Flex gap={"4px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1131_14404"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1131_14404)">
                    <path
                      d="M17.4615 20.0009H7.42308V9.00092L13.6923 2.80859L14.1346 3.25092C14.2256 3.34194 14.3022 3.4586 14.3644 3.60092C14.4266 3.74322 14.4577 3.87399 14.4577 3.99322V4.15092L13.4346 9.00092H20.3846C20.8026 9.00092 21.1763 9.16566 21.5058 9.49514C21.8353 9.82463 22 10.1983 22 10.6163V11.8471C22 11.9381 21.9897 12.0375 21.9692 12.1451C21.9487 12.2528 21.9218 12.3522 21.8885 12.4432L19.1577 18.9163C19.0205 19.224 18.7898 19.4817 18.4654 19.6894C18.141 19.8971 17.8064 20.0009 17.4615 20.0009ZM8.42308 19.0009H17.4615C17.6026 19.0009 17.7468 18.9625 17.8942 18.8855C18.0417 18.8086 18.1538 18.6804 18.2308 18.5009L21 12.0009V10.6163C21 10.4368 20.9423 10.2894 20.8269 10.174C20.7115 10.0586 20.5641 10.0009 20.3846 10.0009H12.1923L13.35 4.53937L8.42308 9.42784V19.0009ZM7.42308 9.00092V10.0009H4V19.0009H7.42308V20.0009H3V9.00092H7.42308Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
                Tip
              </Flex>
              <Flex
                padding={"24px"}
                flexDirection={"column"}
                gap={"24px"}
                borderRadius={"5px"}
                background={"#FAFAFA"}
              >
                <Flex
                  flexDirection={"column"}
                  gap={"24px"}
                  alignSelf={"stretch"}
                >
                  <Text fontSize={"16px"}>
                    패키지를 구독하고 싶지 않으면 어떻게 하나요?
                  </Text>
                  <Text color={"#666"}>
                    아트앤트플러스 구독은 전적으로 선택 사항이지만, 패키지를
                    선택하면 아트앤트에서 비즈니스 성장을 위한 새로운 도구에
                    액세스할 수 있습니다.
                  </Text>
                  <Divider />
                  <Text fontSize={"16px"}>
                    구독을 시작하지 않고도 아트앤트트 도구에 계속 액세스할 수
                    있나요?
                  </Text>
                  <Text color={"#666"}>
                    예! 구독하지 않고도 아트앤트 도구에 계속 액세스할 수
                    있습니다. 필요에 따라 Pattern 또는 아트앤트 광고와 같은
                    도구에 대한 비용을 계속 지불할 수 있습니다.
                  </Text>
                  <Divider />
                  <Text fontSize={"16px"}>요금은 언제 청구되나요?</Text>
                  <Text color={"#666"}>
                    첫 번째 청구 금액은 패키지에 등록한 날 명세서에 표시됩니다.
                    매월 같은 날(또는 구독을 시작한 경우 해당 월의 마지막 날)에
                    요금이 청구됩니다.
                  </Text>
                  <Divider />
                  <Text fontSize={"16px"}>
                    패키지를 선택한 후 마음이 바뀌면 어떻게 되나요? 어떻게
                    취소하나요?
                  </Text>
                  <Text color={"#666"}>
                    언제든지 패키지 간에 전환하거나 구독 비용 지불을 중단할 수
                    있습니다. 구독 패키지 비용 지불을 중단하기로 선택한 경우
                    청구 주기가 끝날 때까지 아트앤트 플러스 도구에 액세스할 수
                    있습니다.
                  </Text>
                  <Divider />
                  <Text fontSize={"16px"}>크레딧은 어떻게 작동하나요?</Text>
                  <Text color={"#666"}>
                    매월 같은 날 작품과 아트앤트 광고 크레딧을 받게 됩니다.
                    이월되지는 않지만 매달 새로운 크레딧을 받게 됩니다. 크레딧을
                    사용하고 나면 추가 작품 또는 아트앤트 광고 캠페인에 대한
                    비용이 청구됩니다.
                  </Text>
                  <Divider />
                  <Text fontSize={"16px"}>
                    월별 패키지 비용을 지불하는 판매자는 아트앤트에서 특별
                    대우를 받을 수 있나요?
                  </Text>
                  <Text color={"#666"}>
                    아니요, 유료 구독은 아트앤트 정책의 검색 또는 시행에 작품이
                    표시되는 방식에 영향을 미치지 않습니다.
                  </Text>
                  <Divider />
                  <Text fontSize={"16px"}>
                    상점이 여러 개인 경우 여러 구독이 필요합니까?
                  </Text>
                  <Text color={"#666"}>
                    예, 아트앤트 플러스 도구에 액세스하려면 각 계정을 구독해야
                    합니다.
                  </Text>
                </Flex>
              </Flex>
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

function InfoBox({ title, color, description, price, isRegisterd }) {
  return (
    <Flex
      padding={"24px 60px"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"24px"}
      flex={"1 0 0"}
      alignSelf={"stretch"}
      borderRadius={"20px"}
      border={"1px solid #9E76BE"}
    >
      <Flex
        flexDirection={"column"}
        gap={"12px"}
        alignSelf={"stretch"}
        textAlign={"center"}
      >
        <Text color={color} fontSize={"18px"} fontWeight={"500"}>
          {title}
        </Text>
        <Text>{description}</Text>
      </Flex>
      <Box height={"1px"} alignSelf={"stretch"} background={"#D9D9D9"} />
      <Flex flexDirection={"column"} gap={"20px"} textAlign={"center"}>
        <Text fontSize={"13px"} fontWeight={"500"}>
          {price}
        </Text>
        {isRegisterd ? (
          <Flex gap={"2px"} alignItems={"center"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <mask
                id="mask0_1131_13357"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="25"
                height="24"
              >
                <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1131_13357)">
                <path
                  d="M10.4997 16.0439L6.85547 12.3997L7.89967 11.3555L10.4997 13.9555L17.0997 7.35547L18.1439 8.39967L10.4997 16.0439Z"
                  fill="#F12E24"
                />
              </g>
            </svg>

            <Text color={"#F12E24"} fontSize={"13px"} fontWeight={"500"}>
              구독중
            </Text>
          </Flex>
        ) : (
          <BlackButton
            title={"업그레이드"}
            type={false}
            borderRadius={"100px"}
          />
        )}
      </Flex>
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
            설정
          </Text>
          <Flex alignSelf={"stretch"} borderBottom={"2px solid black"}>
            <MenuTextBox selected={true} text={"구독"} />
            <MenuTextBox selected={false} text={"정보 및 외관"} />
            <MenuTextBox selected={false} text={"샵 회원"} />
            <MenuTextBox selected={false} text={"샵"} />
            <MenuTextBox selected={false} text={"배송"} />
            <MenuTextBox selected={false} text={"정책"} />
            <MenuTextBox selected={false} text={"SNS"} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function SettingTop() {
  return (
    <Flex gap={"40px"} alignSelf={"stretch"}>
      <InfoBox
        title={"아트앤트 표준"}
        color={"#9E76BE"}
        description={
          "창의적인 비즈니스를 시작, 관리, 성장시키는데 필요한 모든것"
        }
        price={"월 수수료 없음"}
        isRegisterd={true}
      />
      <InfoBox
        title={"아트앤트 플러스"}
        color={"#5365AE"}
        description={
          "성장을 촉진하고 브랜드를 표현하는데 도움이 되는 확장 된 도구 세트"
        }
        price={"한 달에 10,000원"}
        isRegisterd={false}
      />
    </Flex>
  );
}
