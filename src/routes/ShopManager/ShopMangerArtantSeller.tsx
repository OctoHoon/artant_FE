import {
  Box,
  Flex,
  Text,
  Image,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import BlackButton from "../../components/commons/Button/BlackButton";

export default function ShopManagerArtantSeller() {
  return (
    <Flex
      width={"1340px"}
      paddingBottom={"8px"}
      flexDirection={"column"}
      gap={"40px"}
    >
      <Flex
        padding={"32px 18px 0px 60px"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"40px"}
      >
        <Flex width={"1262px"} flexDirection={"column"} gap={"12px"}>
          <Flex
            gap={"4px"}
            alignItems={"center"}
            fontSize={"22px"}
            fontWeight={"500"}
          >
            <SocialLeaderBoard />
            ARTANT 스타 셀러: 최고의 고객 경험
          </Flex>
          배지를 통해 구매자에게 스토어가 서비스 측면에서 우수하다는 것을 알릴
          수 있습니다. 매월 1일에 지난 3개월 동안의 스토어 실적을 기준으로
          배지를 획득했는지 확인합니다. ARTANT에서 첫 판매를 한 후 90일이 지나면
          배지를 획득할 수 있습니다. 작동 방식 알아보기
          <Flex padding={"12px 0px"} gap={"40px"}>
            <Flex
              width={"160px"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"2px"}
              fontSize={"13px"}
            >
              <LocalShipping />
              지속적으로 원활한 배송을 유지하여 배지 획득
            </Flex>
            <Flex
              width={"160px"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"2px"}
              fontSize={"13px"}
            >
              <Inbox />
              지속적으로 빠른 답변을 유지하여 배지 획득
            </Flex>
            <Flex
              width={"160px"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"2px"}
              fontSize={"13px"}
            >
              <ThumbsUp />
              지속적으로 좋은 리뷰를 유지하여 배지 획득
            </Flex>
            <Box
              width="1px"
              height="54px"
              background={"var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"}
            />
            <Flex
              width={"180px"}
              flexDirection={"column"}
              gap={"2px"}
              fontSize={"13px"}
            >
              <SocialLeaderBoardSmall />
              ARTANT 스타 셀러가 되기 위해 받을 수 있는 모든 배지를 획득하세요.
            </Flex>
          </Flex>
          <Flex gap={"60px"} alignSelf={"stretch"}>
            <Flex
              width={"1280px"}
              padding={"24px"}
              flexDirection={"column"}
              borderRadius={"5px"}
              background="#F8F1FF"
            >
              <Flex flexDirection={"column"} gap={"8px"} alignSelf={"stretch"}>
                <Text fontSize={"22px"} fontWeight={"500"}>
                  ARTANT 스타 셀러 자격
                </Text>
                <Text fontSize={"13px"} width={"490px"}>
                  ARTANT에서 첫 판매를 한 후 90일이 지나면 ARTANT 스타 셀러
                  배지를 획득할 수 있습니다. 현재 검토 기간을 기준으로 한
                  데이터입니다: 2023년 7월 1일 ~ 9월 30일
                </Text>
                <Flex
                  padding={"24px 0px"}
                  gap={"22px"}
                  alignSelf={"stretch"}
                  flexWrap={"wrap"}
                >
                  <SellerCard
                    title={"--%"}
                    subtitle={"메시지 응답률"}
                    target={"목표:95%"}
                  />
                  <SellerCard
                    title={"--%"}
                    subtitle={"메시지 응답률"}
                    target={"목표:95%"}
                  />
                  <SellerCard
                    title={"--%"}
                    subtitle={"메시지 응답률"}
                    target={"목표:95%"}
                  />
                  <SellerCard
                    title={"--%"}
                    subtitle={"메시지 응답률"}
                    target={"목표:95%"}
                  />
                  <SellerCard
                    title={"--%"}
                    subtitle={"메시지 응답률"}
                    target={"목표:95%"}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} gap={"12px"} alignSelf={"stretch"}>
          <Text>무엇이 중요한지 알아보세요!</Text>
          <Flex gap={"40px"}>
            <Flex
              width={"500px"}
              flexDirection={"column"}
              paddingTop={"2px"}
              gap={"12px"}
              flex={"1 0 0"}
            >
              <Text fontSize={"16px"} fontWeight={"500"} color={"#B67914"}>
                24시간 이내에 첫 번째 메시지에 답장하세요.
              </Text>
              <Flex
                flexDirection={"column"}
                gap={"8px"}
                fontSize={"13px"}
                color={"#555"}
              >
                <CheckLine
                  text={
                    "진행 중인 대화가 아닌 스레드의 첫 번째 메시지만 계산됩니다."
                  }
                />
                <CheckLine
                  text={"스팸으로 표시한 메시지는 포함되지 않습니다."}
                />
                <CheckLine
                  text={
                    "부재 중일때 자동 회신을 설정하세요. 답변으로 간주됩니다."
                  }
                />
              </Flex>
            </Flex>
            <Flex
              width={"500px"}
              flexDirection={"column"}
              paddingTop={"2px"}
              gap={"12px"}
              flex={"1 0 0"}
            >
              <Text fontSize={"16px"} fontWeight={"500"} color={"#B67914"}>
                추적 기능을 통해 정시 배송
              </Text>
              <Flex
                flexDirection={"column"}
                gap={"8px"}
                fontSize={"13px"}
                color={"#555"}
              >
                <CheckLine text={"모든 주문에는 추적이 포함되어야 합니다."} />
                <Box>
                  <CheckLine
                    text={
                      "정시 배송은 항상 스타셀러에 포함되며, 다음과 같은 저렴한 옵션이 있습니다."
                    }
                  />
                  <Text paddingLeft={"26px"} as="u">
                    ARTANT의 라벨 퍼스트클래스 플랫 봉투
                  </Text>
                </Box>

                <CheckLine
                  text={
                    "주문을 결합하는 경우 두 주문에 동일한 추적 정보를 추가합니다."
                  }
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={"1280px"}
          padding={"24px"}
          flexDirection={"column"}
          borderRadius={"5px"}
          background={"#F8F1FF"}
          fontSize={"22px"}
          fontWeight={"500"}
          gap={"24px"}
        >
          성공을 위한 도구와 팁
          <Flex gap={"22px"}>
            <TipsCard
              title={"ARTANT 스타 셀러 배지 사용 방법"}
              text={"동영상 2:31"}
              src={
                "https://cdn.imweb.me/upload/S2022081545cf8cbf4b24c/510f874655ed7.jpg"
              }
            />
            <TipsCard
              title={"ARTANT 스타 셀러 체크리스트"}
              text={"기사 7분 보기"}
              src={
                "https://cdn.imweb.me/upload/S2022081545cf8cbf4b24c/510f874655ed7.jpg"
              }
            />
            <TipsCard
              title={"훌륭한 고객 경험을 창출하기 위한 최고의 가이드"}
              text={"기사 37분 보기"}
              src={
                "https://cdn.imweb.me/upload/S2022081545cf8cbf4b24c/510f874655ed7.jpg"
              }
            />
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} gap={"24px"}>
          <Text fontSize={"22px"}>
            궁금한 점이 있으신가요? 답변이 있습니다.
          </Text>
          <Flex gap={"40px"}>
            <Flex width={"160px"} flexDirection={"column"}>
              <MerchantShopTabHover text={"일반"} />
              <MerchantShopTabHover text={"배송"} />
              <MerchantShopTabHover text={"메시지"} />
              <MerchantShopTabHover text={"리뷰"} />
              <MerchantShopTabHover text={"디지털 및 맞춤 주문"} />
            </Flex>
            <Flex flexDirection={"column"} gap={"24px"} flex={"1 0 0"}>
              <StarSellerAccordion />
              <Flex alignSelf={"flex-end"} alignItems={"center"} gap={"12px"}>
                <Text>원하는 것을 찾을 수 없나요?</Text>
                <BlackButton
                  title={"도움말 센터를 이용해보세요!"}
                  borderRadius={"100px"}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function StarSellerAccordion() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <Text fontSize={"16px"} fontWeight={"500"}>
              어떻게 스타 셀러가 될 수 있나요?
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} color={"#555"}>
          <Flex gap={"12px"} flexDirection={"column"}>
            <Text>
              최근 3개월간 매장 데이터를 바탕으로 한 스타 셀러 자격 기준은
              다음과 같습니다.
            </Text>
            <Text whiteSpace={"pre-wrap"}>
              {
                "• 메시지 응답률: 스레드의 첫 번째 메시지 중 95% 이상이 24시간 이내에 응답됩니다. 이 통계는 검토 기간 동안 새 메시지를 받은 경우에만 고려됩니다.\n• 정시 배송 및 추적: 주문의 95% 이상이 추적 또는 ARTANT에서 구매한 배송 라벨을 통해 정시에 배송됩니다.\n• 평점 평균: 귀하의 평균 평점은 4.8 이상입니다.\n또한 3개월의 검토 기간 동안 최소 5건의 주문과 300,000원의 매출을 달성해야 하며, 첫 판매 이후 90일 동안 ARTANT 플랫폼에 있어야 합니다."
              }
            </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <Text fontSize={"16px"} fontWeight={"500"}>
              스타셀러 심사를 얼마나 자주 받나요?
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} color={"#555"}>
          <Flex gap={"12px"} flexDirection={"column"}>
            <Text>
              셀러 심사는 매월 1일 진행되며, 스타셀러 심사 기간은 심사일 기준
              최근 3개월간의 데이터를 기준으로 합니다. 스타셀러에 대한 자세한
              내용은 여기에서 , 당사 약관은 여기 에서 읽어보실 수 있습니다 .
            </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <Text fontSize={"16px"} fontWeight={"500"}>
              현재 내 스토어는 스타셀러를 이용할 수 없습니다. ARTANT에서 계속
              성공할 수 있나요?
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} color={"#555"}>
          <Flex gap={"12px"} flexDirection={"column"}>
            <Text>
              스타 셀러는 ARTANT에서 최고의 고객 경험을 기념하는 열망
              프로그램이므로 현재 일부 판매자만이 자격 기준을 충족하고 있습니다.
              스타셀러 달성에 실패하더라도 불이익을 주지 않습니다. 지금
              스타셀러를 달성할 수 없더라도 걱정하지 마세요. ARTANT에서 성공할
              수 있는 길은 많습니다. 스타 셀러는 구매자 마케팅에 등장할 확률이
              높지만, 우리가 소개하는 유일한 셀러는 아니므로 다른 많은 상점이
              계속해서 주목을 받을 여지가 남아 있습니다.
            </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <Text fontSize={"16px"} fontWeight={"500"}>
              스타셀러가 되면 검색 순위에 영향을 미치나요?
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} color={"#555"}>
          <Flex gap={"12px"} flexDirection={"column"}>
            <Text>
              스타셀러는 검색결과 순서에 직접적인 영향을 미치지 않습니다. 그러나
              스타 판매자 배지를 사용하면 구매자가 스타 판매자를 더 쉽게
              식별하고 쇼핑할 수 있습니다.
            </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <Text fontSize={"16px"} fontWeight={"500"}>
              휴가 모드는 스타 셀러 자격에 어떤 영향을 미치나요?
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} color={"#555"}>
          <Flex gap={"12px"} flexDirection={"column"}>
            <Text>
              휴가 모드와 관계없이 지난 3개월 동안 ARTANT에서 매장 실적을
              검토하여 스타 셀러 자격을 결정합니다. 휴가를 마치고 돌아와 현재
              검토 기간 동안 스타 판매자 기준에 도달하면 스타 판매자 배지를 받을
              수 있습니다.
            </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

function MerchantShopTabHover({ text }) {
  return <Flex padding={"11px 0px"}>{text}</Flex>;
}

function TipsCard({ title, text, src }) {
  return (
    <Flex
      width={"396px"}
      borderRadius={"5px"}
      boxShadow={"0px 2px 8px 0px rgba(34, 34, 34, 0.15)"}
      flexDirection={"column"}
    >
      <Image
        height="300px"
        width="396px"
        borderRadius={"5px 5px 0px 0px"}
        src={src}
      />
      <Flex
        height={"104px"}
        padding={"20px"}
        flexDirection={"column"}
        gap={"4px"}
        background={"white"}
      >
        <Text fontSize={"16px"}>{title}</Text>
        <Text fontSize={"12px"} color={"#666"}>
          {text}
        </Text>
      </Flex>
    </Flex>
  );
}

function CheckLine({ text }) {
  return (
    <Flex gap={"8px"} alignItems={"center"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <mask
          id="mask0_1070_13586"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="18"
          height="18"
        >
          <rect width="18" height="18" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1070_13586)">
          <path
            d="M7.16247 12.98L3.43555 9.25306L3.97063 8.71797L7.16247 11.9098L14.0293 5.04297L14.5644 5.57806L7.16247 12.98Z"
            fill="#1C1B1F"
          />
        </g>
      </svg>
      {text}
    </Flex>
  );
}

function SellerCard({ title, subtitle, target }) {
  return (
    <Flex
      width={"390px"}
      padding={"24px 12px 24px 24px"}
      alignItems={"center"}
      gap={"20px"}
      borderRadius={"5px"}
      boxShadow={"0px 2px 8px 0px rgba(34, 34, 34, 0.15)"}
      background={"white"}
      justifyContent={"space-between"}
    >
      <Flex flexDirection={"column"} gap={"24px"}>
        <Flex flexDirection={"column"} justifyContent={"center"} gap={"8px"}>
          <Text fontSize={"30px"}>{title}</Text>
          <Text>{subtitle}</Text>
          <Text fontSize={"12px"} color={"#666"}>
            {target}
          </Text>
        </Flex>
        <Flex
          gap={"8px"}
          alignItems={"center"}
          alignSelf={"stretch"}
          fontSize={"12px"}
        >
          <Box
            width={"32px"}
            height={"32px"}
            padding={"4px"}
            borderRadius={"100px"}
            background={"#EAEAEA"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_1179_12963"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1179_12963)">
                <path
                  d="M12 16.4231C12.1744 16.4231 12.3205 16.3641 12.4385 16.2462C12.5564 16.1282 12.6154 15.982 12.6154 15.8077C12.6154 15.6333 12.5564 15.4872 12.4385 15.3692C12.3205 15.2513 12.1744 15.1923 12 15.1923C11.8256 15.1923 11.6795 15.2513 11.5615 15.3692C11.4436 15.4872 11.3846 15.6333 11.3846 15.8077C11.3846 15.982 11.4436 16.1282 11.5615 16.2462C11.6795 16.3641 11.8256 16.4231 12 16.4231ZM11.5 13.4615H12.5V7.38463H11.5V13.4615ZM8.67308 20L4 15.336V8.67307L8.66403 4H15.3269L20 8.66402V15.3269L15.336 20H8.67308ZM9.1 19H14.9L19 14.9V9.1L14.9 5H9.1L5 9.1V14.9L9.1 19Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </Box>
          아직 없습니다.
        </Flex>
      </Flex>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
      >
        <mask
          id="mask0_1179_6827"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="41"
        >
          <rect y="0.5" width="40" height="40" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1179_6827)">
          <path
            d="M22.154 20.5005L14.4873 12.8338L15.6668 11.6543L24.513 20.5005L15.6668 29.3466L14.4873 28.1671L22.154 20.5005Z"
            fill="#1C1B1F"
          />
        </g>
      </svg>
    </Flex>
  );
}

function SocialLeaderBoardSmall() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask
        id="mask0_1070_14035"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1070_14035)">
        <path
          d="M7.475 20.0006C6.24038 20.0006 5.18589 19.5634 4.31152 18.6891C3.43717 17.8147 3 16.7602 3 15.5256C3 14.3102 3.42467 13.2682 4.27402 12.3996C5.12339 11.5311 6.15577 11.0833 7.37115 11.0564C7.49935 11.0564 7.62756 11.066 7.75577 11.0852C7.88398 11.1044 8.01217 11.1269 8.14037 11.1525L4.84615 4.53906H9.61538L12 9.30829L14.3846 4.53906H19.1539L15.8846 11.0833C16 11.0577 16.1186 11.0384 16.2404 11.0256C16.3622 11.0128 16.4872 11.0064 16.6154 11.0064C17.8397 11.0372 18.8766 11.4868 19.726 12.3554C20.5753 13.224 21 14.2724 21 15.5006C21 16.7519 20.5628 17.8147 19.6885 18.6891C18.8141 19.5634 17.7513 20.0006 16.5 20.0006C16.3115 20.0006 16.1189 19.99 15.9221 19.9689C15.7253 19.9477 15.5391 19.9077 15.3635 19.8487C16.1519 19.5051 16.7051 18.9215 17.0231 18.0977C17.341 17.274 17.5 16.4083 17.5 15.5006C17.5 13.966 16.967 12.6657 15.901 11.5996C14.8349 10.5336 13.5346 10.0006 12 10.0006C10.4654 10.0006 9.16506 10.5336 8.09903 11.5996C7.03301 12.6657 6.5 13.966 6.5 15.5006C6.5 16.416 6.64679 17.2968 6.94037 18.1429C7.23397 18.9891 7.79744 19.5577 8.63077 19.8487C8.44231 19.9077 8.25288 19.9477 8.0625 19.9689C7.87212 19.99 7.67628 20.0006 7.475 20.0006ZM12 20.0006C10.75 20.0006 9.6875 19.5631 8.8125 18.6881C7.9375 17.8131 7.5 16.7506 7.5 15.5006C7.5 14.2506 7.9375 13.1881 8.8125 12.3131C9.6875 11.4381 10.75 11.0006 12 11.0006C13.25 11.0006 14.3125 11.4381 15.1875 12.3131C16.0625 13.1881 16.5 14.2506 16.5 15.5006C16.5 16.7506 16.0625 17.8131 15.1875 18.6881C14.3125 19.5631 13.25 20.0006 12 20.0006ZM10.4384 17.7891L12 16.6006L13.5615 17.7891L12.9769 15.8602L14.5385 14.7468H12.6096L12 12.7121L11.3904 14.7468H9.46152L11.0231 15.8602L10.4384 17.7891Z"
          fill="#9968D9"
        />
      </g>
    </svg>
  );
}

function SocialLeaderBoard() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <mask
        id="mask0_1070_13991"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="40"
      >
        <rect width="40" height="40" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1070_13991)">
        <path
          d="M12.4583 33.3337C10.4006 33.3337 8.64315 32.6051 7.18587 31.1478C5.72862 29.6905 5 27.9331 5 25.8754C5 23.8497 5.70779 22.1131 7.12337 20.6654C8.53899 19.2178 10.2596 18.4715 12.2853 18.4267C12.4989 18.4267 12.7126 18.4427 12.9263 18.4747C13.14 18.5068 13.3536 18.5442 13.5673 18.5869L8.07692 7.56445H16.0256L20 15.5132L23.9744 7.56445H31.9231L26.4744 18.4715C26.6667 18.4288 26.8643 18.3967 27.0673 18.3754C27.2703 18.354 27.4786 18.3433 27.6923 18.3433C29.7329 18.3946 31.461 19.1441 32.8766 20.5917C34.2922 22.0394 35 23.7867 35 25.8337C35 27.9192 34.2714 29.6905 32.8141 31.1478C31.3568 32.6051 29.5855 33.3337 27.5 33.3337C27.1859 33.3337 26.8648 33.3161 26.5369 33.2808C26.2089 33.2456 25.8985 33.1788 25.6058 33.0805C26.9199 32.5079 27.8419 31.5351 28.3718 30.1622C28.9017 28.7894 29.1667 27.3465 29.1667 25.8337C29.1667 23.276 28.2783 21.1088 26.5016 19.3321C24.7249 17.5554 22.5577 16.667 20 16.667C17.4423 16.667 15.2751 17.5554 13.4984 19.3321C11.7217 21.1088 10.8333 23.276 10.8333 25.8337C10.8333 27.3593 11.078 28.8273 11.5673 30.2375C12.0566 31.6478 12.9957 32.5955 14.3846 33.0805C14.0705 33.1788 13.7548 33.2456 13.4375 33.2808C13.1202 33.3161 12.7938 33.3337 12.4583 33.3337ZM20 33.3337C17.9167 33.3337 16.1458 32.6045 14.6875 31.1462C13.2292 29.6879 12.5 27.917 12.5 25.8337C12.5 23.7504 13.2292 21.9795 14.6875 20.5212C16.1458 19.0629 17.9167 18.3337 20 18.3337C22.0833 18.3337 23.8542 19.0629 25.3125 20.5212C26.7708 21.9795 27.5 23.7504 27.5 25.8337C27.5 27.917 26.7708 29.6879 25.3125 31.1462C23.8542 32.6045 22.0833 33.3337 20 33.3337ZM17.3974 29.6478L20 27.667L22.6026 29.6478L21.6282 26.4331L24.2308 24.5773H21.016L20 21.1862L18.984 24.5773H15.7692L18.3718 26.4331L17.3974 29.6478Z"
          fill="#9968D9"
        />
      </g>
    </svg>
  );
}

function LocalShipping() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask
        id="mask0_1070_14017"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1070_14017)">
        <path
          d="M5.8434 19.5576C5.06287 19.5576 4.40017 19.2847 3.8553 18.7387C3.31044 18.1928 3.038 17.5299 3.038 16.75H1.3457V6.3077C1.3457 5.80257 1.5207 5.375 1.8707 5.025C2.2207 4.675 2.64826 4.5 3.15338 4.5H16.7688V8.3077H19.4226L22.6534 12.6346V16.75H20.8457C20.8457 17.5299 20.5725 18.1928 20.0261 18.7387C19.4797 19.2847 18.8163 19.5576 18.0357 19.5576C17.2552 19.5576 16.5925 19.2847 16.0476 18.7387C15.5027 18.1928 15.2303 17.5299 15.2303 16.75H8.65335C8.65335 17.532 8.38016 18.1955 7.83378 18.7403C7.28741 19.2852 6.62395 19.5576 5.8434 19.5576ZM5.84568 18.0577C6.21234 18.0577 6.52196 17.9314 6.77453 17.6788C7.02709 17.4263 7.15338 17.1166 7.15338 16.75C7.15338 16.3833 7.02709 16.0737 6.77453 15.8211C6.52196 15.5685 6.21234 15.4423 5.84568 15.4423C5.47899 15.4423 5.16937 15.5685 4.9168 15.8211C4.66424 16.0737 4.53795 16.3833 4.53795 16.75C4.53795 17.1166 4.66424 17.4263 4.9168 17.6788C5.16937 17.9314 5.47899 18.0577 5.84568 18.0577ZM18.038 18.0577C18.4047 18.0577 18.7143 17.9314 18.9669 17.6788C19.2194 17.4263 19.3457 17.1166 19.3457 16.75C19.3457 16.3833 19.2194 16.0737 18.9669 15.8211C18.7143 15.5685 18.4047 15.4423 18.038 15.4423C17.6713 15.4423 17.3617 15.5685 17.1091 15.8211C16.8566 16.0737 16.7303 16.3833 16.7303 16.75C16.7303 17.1166 16.8566 17.4263 17.1091 17.6788C17.3617 17.9314 17.6713 18.0577 18.038 18.0577ZM16.7688 13.25H21.2495L18.6534 9.80765H16.7688V13.25Z"
          fill="#AAAAAA"
        />
      </g>
    </svg>
  );
}

function Inbox() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask
        id="mask0_1070_14021"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1070_14021)">
        <path
          d="M18.6154 21.7885L17.9269 21.1L19.9827 19H15.1154V18H20.0019L17.9019 15.9L18.6154 15.2115L21.9039 18.5L18.6154 21.7885ZM4.61538 19C4.16794 19 3.78685 18.8426 3.4721 18.5279C3.15737 18.2132 3 17.8321 3 17.3846V6.61537C3 6.16794 3.15737 5.78685 3.4721 5.4721C3.78685 5.15737 4.16794 5 4.61538 5H19.3846C19.8321 5 20.2132 5.15737 20.5279 5.4721C20.8426 5.78685 21 6.16794 21 6.61537V14.05C20.6397 13.8731 20.2631 13.7372 19.8702 13.6423C19.4772 13.5474 19.0782 13.5 18.6731 13.5C17.2372 13.5 16.016 14.0032 15.0096 15.0096C14.0032 16.016 13.5 17.2372 13.5 18.6731V19H4.61538ZM12 12.1154L20 6.90385L19.6923 6L12 11L4.3077 6L4 6.90385L12 12.1154Z"
          fill="#AAAAAA"
        />
      </g>
    </svg>
  );
}

function ThumbsUp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask
        id="mask0_1070_14025"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1070_14025)">
        <path
          d="M17.4615 20.0009H7.65385V9.00092L13.9231 2.80859L14.3654 3.25092C14.4564 3.34194 14.533 3.4586 14.5952 3.60092C14.6574 3.74322 14.6885 3.87399 14.6885 3.99322V4.15092L13.6654 9.00092H20.3846C20.8026 9.00092 21.1763 9.16566 21.5058 9.49514C21.8353 9.82463 22 10.1983 22 10.6163V11.8471C22 11.9381 21.9907 12.0375 21.9721 12.1451C21.9535 12.2528 21.9256 12.3522 21.8885 12.4432L19.1577 18.9163C19.0205 19.224 18.7898 19.4817 18.4654 19.6894C18.141 19.8971 17.8064 20.0009 17.4615 20.0009ZM6.65385 9.00092V20.0009H3V9.00092H6.65385Z"
          fill="#AAAAAA"
        />
      </g>
    </svg>
  );
}
