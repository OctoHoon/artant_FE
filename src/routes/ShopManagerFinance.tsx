import {
  Flex,
  Text,
  Box,
  Select,
  Switch,
  TableContainer,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Image,
} from "@chakra-ui/react";

export default function ShopManagerFinance() {
  return (
    <Flex flexDirection={"column"}>
      <FinanceTop />
      <Flex
        width={"1280px"}
        padding={"32px 0px 120px 60px"}
        alignItems={"center"}
        gap={"60px"}
        flexDirection={"column"}
        flex={"1 0 0"}
        alignSelf={"stretch"}
      >
        <FinancePayemnt />
        <FinanceSummary />
        <Flex flexDirection={"column"} gap={"24px"} alignSelf={"stretch"}>
          <Text fontSize={"22px"} fontWeight={"500"}>
            최근활동
          </Text>
          <Flex flexDirection={"column"} gap={"12px"} alignSelf={"stretch"}>
            <Text fontSize={"18px"} fontWeight={"500"}>
              현재 잔액은 0원입니다.
            </Text>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>날짜</Th>
                    <Th>유형</Th>
                    <Th>설명</Th>
                    <Th>수량</Th>
                    <Th>수수료</Th>
                    <Th>세금</Th>
                    <Th>전체 잔액</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Flex
                        width={"80px"}
                        height={"80px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                        >
                          <mask
                            id="mask0_1131_14419"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="60"
                            height="60"
                          >
                            <rect width="60" height="60" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1131_14419)">
                            <path
                              d="M52.5 16.5384V43.4616C52.5 44.6122 52.1146 45.5729 51.3438 46.3438C50.5729 47.1146 49.6122 47.5 48.4616 47.5H11.5384C10.3878 47.5 9.42708 47.1146 8.65625 46.3438C7.88542 45.5729 7.5 44.6122 7.5 43.4616V16.5384C7.5 15.3878 7.88542 14.4271 8.65625 13.6562C9.42708 12.8854 10.3878 12.5 11.5384 12.5H48.4616C49.6122 12.5 50.5729 12.8854 51.3438 13.6562C52.1146 14.4271 52.5 15.3878 52.5 16.5384ZM10 22.0192H50V16.5384C50 16.1539 49.8397 15.8013 49.5192 15.4808C49.1987 15.1603 48.8461 15 48.4616 15H11.5384C11.1539 15 10.8013 15.1603 10.4808 15.4808C10.1603 15.8013 10 16.1539 10 16.5384V22.0192ZM10 27.9808V43.4616C10 43.8461 10.1603 44.1987 10.4808 44.5192C10.8013 44.8398 11.1539 45 11.5384 45H48.4616C48.8461 45 49.1987 44.8398 49.5192 44.5192C49.8397 44.1987 50 43.8461 50 43.4616V27.9808H10Z"
                              fill="#1C1B1F"
                            />
                          </g>
                        </svg>
                      </Flex>
                    </Td>
                    <Td>2023.09.02</Td>
                    <Td>결제</Td>
                    <Td>
                      <Flex flexDirection={"column"}>
                        <Text>카드결제</Text>
                        <Text>마스터 카드: 5600</Text>
                      </Flex>
                    </Td>
                    <Td>--</Td>
                    <Td>0원</Td>
                    <Td>0원</Td>
                    <Td>0원</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Image
                        src="https://www.creativefabrica.com/wp-content/uploads/2022/10/06/Realistic-Sea-Turtle-Underwater-With-Sunlight-40460582-1-1.png"
                        width={"80px"}
                        height={"80px"}
                      />
                    </Td>
                    <Td>2023.09.02</Td>
                    <Td>수수료</Td>
                    <Td>
                      <Flex flexDirection={"column"}>
                        <Text>목표 수수료</Text>
                        <Text>작품 #153432542</Text>
                      </Flex>
                    </Td>
                    <Td>--</Td>
                    <Td>0원</Td>
                    <Td>0원</Td>
                    <Td>0원</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function FinanceTop() {
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
            재정
          </Text>
          <Flex alignSelf={"stretch"} borderBottom={"2px solid black"}>
            <MenuTextBox selected={true} text={"지불 계좌"} />
            <MenuTextBox selected={false} text={"월별 명세서"} />
            <MenuTextBox selected={false} text={"결제 설정"} />
            <MenuTextBox selected={false} text={"아트앤트용 QuickBook"} />
            <MenuTextBox selected={false} text={"아트앤트용 터보택스"} />
            <MenuTextBox selected={false} text={"법률 및 세금 정보"} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function FinanceSummary() {
  const today = new Date();
  return (
    <Flex gap={"24px"} alignSelf={"stretch"}>
      <Flex
        flexDirection={"column"}
        gap={"24px"}
        alignSelf={"stretch"}
        width={"1280px"}
      >
        <Text fontSize={"22px"} fontWeight={"500"}>
          활동요약
        </Text>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          alignSelf={"stretch"}
        >
          <Select
            placeholder={`오늘 ${today.getMonth() + 1}월 ${today.getDate()}일`}
            color={"#666"}
            width={"412px"}
          />
          <Flex
            width={"150px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            범주 펼치기
            <Flex>
              <Text fontSize={"12px"} fontWeight={"500"} textAlign={"center"}>
                off
              </Text>
              <Switch id="email-alerts" colorScheme="gray" />
            </Flex>
          </Flex>
        </Flex>
        <Text fontSize={"18px"} fontWeight={"500"}>
          이번 달 아트앤트의 순수익은 0원 입니다.
        </Text>
        <Flex gap={"24px"} flexDirection={"column"} alignSelf={"stretch"}>
          <Flex flexDirection={"column"} gap={"12px"}>
            <Text color={"#9E76BE"} fontSize={"16px"} fontWeight={"500"}>
              판매 및 수수료
            </Text>
            <Flex gap={"40px"} alignSelf={"stretch"}>
              <PayBox
                title={"매출"}
                options={["총 매출", "환불", "구매자가 납부한 판매세"]}
              />
              <PayBox
                title={"수수료"}
                options={["목표 수수료", "거래 수수료", "처리 수수료"]}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex gap={"24px"} flexDirection={"column"} alignSelf={"stretch"}>
          <Flex flexDirection={"column"} gap={"12px"}>
            <Text color={"#5365AE"} fontSize={"16px"} fontWeight={"500"}>
              판매자 서비스
            </Text>
            <Flex gap={"40px"} alignSelf={"stretch"}>
              <PayBox
                options={["아트앤트 광고", "외부광고"]}
                title={"마케팅"}
              />
              <PayBox
                title={"배송"}
                options={["배송 라벨", "배송 라벨에 대한 세금"]}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function FinancePayemnt() {
  return (
    <Flex gap={"40px"} alignSelf={"stretch"}>
      <BoxTemplate
        information={true}
        title={"9월 미결제 금액"}
        option1={"자동결제"}
        value1={"켜짐"}
        option2={"결제카드"}
        value2={"MasterCard 5777"}
      />
      <BoxTemplate
        information={false}
        title={"예치금"}
        option1={"입금일정"}
        value1={"1주일"}
        option2={"은행계좌"}
        value2={"국민은행"}
      />
    </Flex>
  );
}

export function MenuTextBox({ selected, text }) {
  return (
    <Flex
      borderRadius={"5px 5px 0px 0px"}
      background={selected ? "black" : "white"}
      color={selected ? "white" : "black"}
      padding={"8px 16px 8px 16px"}
      alignItems={"center"}
    >
      <Text textStyle={"HeadingsH7M"}>{text}</Text>
    </Flex>
  );
}

function PayBox({ title, options }) {
  return (
    <Flex
      padding={"12px 24px 24px 24px"}
      flexDirection={"column"}
      gap={"12px"}
      flex={"1 0 0"}
      borderRadius={"5px"}
      border={"1px solid #D9D9D9"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        alignSelf={"stretch"}
      >
        <Select placeholder={title} width={"110px"} border={"0px"} />
        <Text>0원</Text>
      </Flex>
      {options.map((option) => (
        <Flex
          flexDirection={"column"}
          padding={"0px 0px 0px 24px"}
          gap="12px"
          key={option}
        >
          <Flex justifyContent={"space-between"}>
            <Flex gap={"6px"} alignItems={"center"}>
              {option}
              {}
              <Box
                padding={"1px 6px"}
                borderRadius={"100px"}
                background="#F2F2F2"
                fontSize={"12px"}
                color={"#555"}
              >
                00
              </Box>
            </Flex>
            0원
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

function BoxTemplate({ information, title, option1, value1, option2, value2 }) {
  return (
    <Flex
      padding={"24px 30px"}
      flexDirection={"column"}
      gap={"12px"}
      flex={"1 0 0 "}
      borderRadius={"20px"}
      border={"1px solid #D9D9D9"}
    >
      <Flex gap={"8px"} alignItems={"center"}>
        {title}
        {!information ? null : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_1091_14663"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1091_14663)">
              <path
                d="M12.028 17.2308C12.2491 17.2308 12.4356 17.1545 12.5875 17.0018C12.7394 16.8492 12.8154 16.6623 12.8154 16.4412C12.8154 16.2202 12.7391 16.0337 12.5864 15.8817C12.4338 15.7298 12.2469 15.6538 12.0259 15.6538C11.8048 15.6538 11.6183 15.7302 11.4663 15.8828C11.3144 16.0355 11.2385 16.2223 11.2385 16.4434C11.2385 16.6645 11.3148 16.851 11.4674 17.0029C11.6201 17.1548 11.8069 17.2308 12.028 17.2308ZM11.5115 13.9192H12.4769C12.5026 13.4846 12.5843 13.1314 12.7221 12.8596C12.8599 12.5878 13.1436 12.241 13.5731 11.8192C14.0192 11.3731 14.3513 10.9734 14.5692 10.6202C14.7872 10.267 14.8962 9.85816 14.8962 9.39373C14.8962 8.60559 14.6192 7.97755 14.0654 7.5096C13.5116 7.04165 12.8565 6.80768 12.1 6.80768C11.3808 6.80768 10.7702 7.00319 10.2683 7.39422C9.76634 7.78526 9.39871 8.23462 9.16537 8.7423L10.0846 9.12307C10.2449 8.75897 10.474 8.43718 10.7721 8.1577C11.0702 7.8782 11.5 7.73845 12.0616 7.73845C12.7103 7.73845 13.184 7.91634 13.4827 8.27213C13.7814 8.62789 13.9308 9.01923 13.9308 9.44615C13.9308 9.7923 13.8372 10.1016 13.65 10.374C13.4628 10.6465 13.2192 10.9205 12.9192 11.1962C12.3397 11.7308 11.9603 12.184 11.7808 12.5558C11.6013 12.9276 11.5115 13.382 11.5115 13.9192ZM12.0034 21C10.7588 21 9.58872 20.7638 8.4931 20.2915C7.39748 19.8192 6.44444 19.1782 5.63397 18.3685C4.82352 17.5588 4.18192 16.6066 3.70915 15.512C3.23638 14.4174 3 13.2479 3 12.0034C3 10.7588 3.23616 9.58872 3.70848 8.4931C4.18081 7.39748 4.82183 6.44444 5.63153 5.63398C6.44123 4.82353 7.39337 4.18192 8.48795 3.70915C9.58255 3.23638 10.7521 3 11.9966 3C13.2412 3 14.4113 3.23616 15.5069 3.70847C16.6025 4.18081 17.5556 4.82182 18.366 5.63152C19.1765 6.44122 19.8181 7.39337 20.2908 8.48795C20.7636 9.58255 21 10.7521 21 11.9966C21 13.2412 20.7638 14.4113 20.2915 15.5069C19.8192 16.6025 19.1782 17.5556 18.3685 18.366C17.5588 19.1765 16.6066 19.8181 15.512 20.2909C14.4174 20.7636 13.2479 21 12.0034 21ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
        )}
      </Flex>
      <Flex
        justifyContent={"flex-end"}
        gap={"8px"}
        alignItems={"center"}
        alignSelf={"stretch"}
      >
        <Text fontSize={"30px"}>000000</Text>
        <Text fontSize={"16px"}>원</Text>
      </Flex>
      <Text alignSelf={"flex-end"} fontSize={"12px"}>
        귀하의 판매가 귀하의 수수료를 충당했습니다.
      </Text>
      <Box height="1px" alignSelf="stretch" background={"#D9D9D9"} />
      <Flex
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        alignSelf={"stretch"}
      >
        <Flex flexDirection={"column"} gap={"4px"}>
          <Text fontSize={"13"} fontWeight={"500"}>
            {option1}
          </Text>
          <Text as="u" fontSize={"13px"}>
            {value1}
          </Text>
        </Flex>
        <Flex flexDirection={"column"} gap={"4px"} textAlign={"right"}>
          <Text fontSize={"13"} fontWeight={"500"}>
            {option2}
          </Text>
          <Text as="u" fontSize={"13px"}>
            {value2}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
