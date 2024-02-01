import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Radio,
  Select,
  Text,
} from "@chakra-ui/react";
import BlackButton from "../../components/commons/Button/BlackButton";

export default function ShopManagerOrders() {
  return (
    <Flex flexDirection={"column"} width={"1340px"}>
      <Flex
        padding={"32px 18px 24px 60px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        alignSelf={"stretch"}
        fontSize={"22px"}
        fontWeight={"500"}
        borderBottom={"1px solid #F1F1F5"}
      >
        주문 및 배송
        <Flex gap="24px" justifyContent={"flex-end"}>
          <Input placeholder="주문 검색" width={"400px"} />
          <Button background={"white"} border={"1px solid #D9D9D9"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_1086_5796"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1086_5796)">
                <path
                  d="M10.1347 21L9.77321 18.1077C9.45398 18.0115 9.10879 17.8603 8.73764 17.6538C8.36649 17.4474 8.05078 17.2263 7.79051 16.9904L5.12321 18.125L3.25781 14.875L5.56359 13.1365C5.5341 12.9558 5.50975 12.7695 5.49051 12.5779C5.47128 12.3862 5.46166 12.2 5.46166 12.0192C5.46166 11.8513 5.47128 11.6747 5.49051 11.4894C5.50975 11.3042 5.5341 11.0955 5.56359 10.8635L3.25781 9.125L5.12321 5.91345L7.77129 7.02885C8.07 6.78013 8.39308 6.55578 8.74051 6.35578C9.08795 6.15578 9.42577 6.00128 9.75399 5.8923L10.1347 3H13.8655L14.2271 5.91153C14.6104 6.04614 14.9492 6.20063 15.2434 6.375C15.5376 6.54935 15.8405 6.7673 16.1521 7.02885L18.8771 5.91345L20.7425 9.125L18.3598 10.9212C18.4149 11.1276 18.4457 11.317 18.4521 11.4894C18.4585 11.6619 18.4617 11.8321 18.4617 12C18.4617 12.1551 18.4553 12.3189 18.4425 12.4914C18.4296 12.6638 18.4001 12.8724 18.354 13.1173L20.6982 14.875L18.8328 18.125L16.1521 16.9712C15.8405 17.2327 15.5271 17.4571 15.2117 17.6442C14.8963 17.8314 14.5681 17.9795 14.2271 18.0885L13.8655 21H10.1347ZM11.9732 14.5C12.6706 14.5 13.2617 14.2577 13.7463 13.7731C14.2309 13.2885 14.4732 12.6974 14.4732 12C14.4732 11.3026 14.2309 10.7115 13.7463 10.2269C13.2617 9.74231 12.6706 9.5 11.9732 9.5C11.2719 9.5 10.6799 9.74231 10.1972 10.2269C9.71455 10.7115 9.47321 11.3026 9.47321 12C9.47321 12.6974 9.71455 13.2885 10.1972 13.7731C10.6799 14.2577 11.2719 14.5 11.9732 14.5Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>{" "}
            배송 설정
          </Button>
        </Flex>
      </Flex>
      <Flex padding={"32px 0px 120px 60px"} gap={"60px"}>
        <Flex
          width={"980px"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"20px"}
        >
          <Flex gap={"20px"} flexDirection={"column"}>
            <Flex gap={"8px"}>
              <Flex flexDirection={"column"} gap={"20px"}>
                <Flex alignItems={"center"} gap={"8px"}>
                  <Flex
                    fontSize={"13px"}
                    padding={"8px 12px"}
                    alignItems={"center"}
                    gap={"2px"}
                    borderRadius={"5px"}
                    border={"1px solid #D9D9D9"}
                  >
                    <Checkbox />
                    전체선택
                  </Flex>
                  <Flex
                    fontSize={"13px"}
                    padding={"11px 16px"}
                    height={"40px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius={"5px"}
                    border={
                      "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <mask
                        id="mask0_1086_5826"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1086_5826)">
                        <path
                          d="M11.962 20C9.93124 20 8.16104 19.3369 6.65142 18.0106C5.14181 16.6843 4.26842 15.0141 4.03125 13H5.04278C5.31458 14.7205 6.09823 16.1506 7.39375 17.2904C8.68927 18.4301 10.212 19 11.962 19C13.912 19 15.5662 18.3208 16.9245 16.9625C18.2829 15.6042 18.962 13.95 18.962 12C18.962 10.05 18.2829 8.39583 16.9245 7.0375C15.5662 5.67917 13.912 5 11.962 5C10.9274 5 9.95497 5.21859 9.0447 5.65578C8.13445 6.09296 7.33125 6.69488 6.6351 7.46155H9.11585V8.46155H4.962V4.3077H5.962V6.69615C6.73508 5.84743 7.64117 5.18589 8.68027 4.71152C9.71937 4.23717 10.8133 4 11.962 4C13.071 4 14.1104 4.20865 15.0803 4.62595C16.0502 5.04327 16.8976 5.61443 17.6226 6.33943C18.3476 7.06443 18.9187 7.91186 19.336 8.88172C19.7534 9.85159 19.962 10.891 19.962 12C19.962 13.109 19.7534 14.1484 19.336 15.1183C18.9187 16.0881 18.3476 16.9356 17.6226 17.6606C16.8976 18.3856 16.0502 18.9567 15.0803 19.3741C14.1104 19.7914 13.071 20 11.962 20ZM15.1658 15.8539L11.5197 12.2077V7H12.5197V11.7923L15.8735 15.1462L15.1658 15.8539Z"
                          fill="#777777"
                        />
                      </g>
                    </svg>
                    주문 완료
                  </Flex>
                  <Flex
                    padding={"8px 8px 8px 16px"}
                    height={"40px"}
                    gap={"10px"}
                    fontSize={"13px"}
                    alignItems={"center"}
                    borderRadius={"5px"}
                    border={
                      "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
                    }
                  >
                    더 많은 작업
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <mask
                        id="mask0_1086_7060"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1086_7060)">
                        <path
                          d="M12.0015 14.6538L7.59766 10.25H16.4053L12.0015 14.6538Z"
                          fill="#1C1B1F"
                        />
                      </g>
                    </svg>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              width={"980px"}
              borderBottom={"1px solid #F1F1F5"}
              alignItems={"stretch"}
            >
              <Flex
                height={"44px"}
                alignItems={"center"}
                gap={"6px"}
                padding={"12px"}
              >
                <Text fontSize={"16px"}> 새로운 주문</Text>
                <Box
                  padding={"2px 12px"}
                  borderRadius={"100px"}
                  background="#F1F1F5"
                >
                  0
                </Box>
              </Flex>
              <Flex
                height={"44px"}
                alignItems={"center"}
                gap={"6px"}
                padding={"12px"}
              >
                <Text fontSize={"16px"}> 새로운 주문</Text>
                <Box
                  padding={"2px 12px"}
                  borderRadius={"100px"}
                  background="#F1F1F5"
                >
                  0
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            padding={"24px"}
            flexDirection={"column"}
            alignSelf={"stretch"}
            background={"#FFF0F1"}
            borderRadius={"5px"}
          >
            <Flex
              paddingTop={"2px"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"8px"}
            >
              <Flex gap={"8px"} fontSize={"16px"} fontWeight={"500"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_1026_15042"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1026_15042)">
                    <path
                      d="M5.61538 20C5.16794 20 4.78685 19.8426 4.4721 19.5279C4.15737 19.2131 4 18.8321 4 18.3846V5.61537C4 5.16794 4.15737 4.78685 4.4721 4.4721C4.78685 4.15737 5.16794 4 5.61538 4H10.3154C10.2244 3.48973 10.3465 3.02883 10.6817 2.6173C11.017 2.20577 11.4564 2 12 2C12.5564 2 13.0023 2.20577 13.3375 2.6173C13.6728 3.02883 13.7885 3.48973 13.6846 4H18.3846C18.8321 4 19.2132 4.15737 19.5279 4.4721C19.8426 4.78685 20 5.16794 20 5.61537V18.3846C20 18.8321 19.8426 19.2131 19.5279 19.5279C19.2132 19.8426 18.8321 20 18.3846 20H5.61538ZM5.61538 19H18.3846C18.5385 19 18.6795 18.9359 18.8077 18.8077C18.9359 18.6795 19 18.5385 19 18.3846V5.61537C19 5.46154 18.9359 5.32052 18.8077 5.1923C18.6795 5.0641 18.5385 5 18.3846 5H5.61538C5.46154 5 5.32052 5.0641 5.1923 5.1923C5.0641 5.32052 5 5.46154 5 5.61537V18.3846C5 18.5385 5.0641 18.6795 5.1923 18.8077C5.32052 18.9359 5.46154 19 5.61538 19ZM7.5 16.2692H13.5V15.2692H7.5V16.2692ZM7.5 12.5H16.5V11.5H7.5V12.5ZM7.5 8.73078H16.5V7.73078H7.5V8.73078ZM12 4.4423C12.2167 4.4423 12.3958 4.37147 12.5375 4.2298C12.6792 4.08813 12.75 3.90897 12.75 3.6923C12.75 3.47563 12.6792 3.29647 12.5375 3.1548C12.3958 3.01313 12.2167 2.9423 12 2.9423C11.7833 2.9423 11.6042 3.01313 11.4625 3.1548C11.3208 3.29647 11.25 3.47563 11.25 3.6923C11.25 3.90897 11.3208 4.08813 11.4625 4.2298C11.6042 4.37147 11.7833 4.4423 12 4.4423Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
                <Text>주문 관리를 위한 몇가지 시간 절약 팁</Text>
              </Flex>
            </Flex>
            <TextWithIcon
              text={
                "대량 작업을 위해 여러 주문을 선택하고 자세한 내용을 보려면 주문을 클릭하세요."
              }
            />
            <TextWithIcon
              text={
                "ARTANT Shipping을 사용하여 비용과 시간을 절약하고 엔드투엔드 추적을 받으세요."
              }
            />

            <TextWithIcon
              text={
                "새로운 진행 단계를 만들어 체계적으로 정리하고 작업 흐름을 간소화하세요."
              }
            />
            <Flex justifyContent={"flex-end"} gap={"8px"} alignSelf={"stretch"}>
              <BlackButton
                title={"더 많은 팁 보기"}
                borderRadius={"100px"}
                width="min"
              />
              <BlackButton
                title={"나중에"}
                borderRadius={"100px"}
                type={true}
                width="min"
              />
            </Flex>
          </Flex>
          <Flex
            gap={"20px"}
            flexDirection={"column"}
            alignItems={"flex-end"}
            alignSelf={"stretch"}
          >
            <Select placeholder={"페이지당 25개 보기"} width={"200px"} />
            <Flex
              padding={"60px 0px"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"12px"}
              alignSelf={"stretch"}
              fontWeight={"500"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <mask
                  id="mask0_1026_15093"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                >
                  <rect width="40" height="40" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1026_15093)">
                  <path
                    d="M19.168 32.8558V20.4776L8.33464 14.2052V26.0064C8.33464 26.1774 8.37737 26.3376 8.46284 26.4872C8.54832 26.6368 8.67652 26.765 8.84747 26.8718L19.168 32.8558ZM20.8346 32.8558L31.1551 26.8718C31.3261 26.765 31.4543 26.6368 31.5398 26.4872C31.6252 26.3376 31.668 26.1774 31.668 26.0064V14.2052L20.8346 20.4776V32.8558ZM18.6551 34.4776L8.01409 28.3462C7.59318 28.1048 7.26359 27.7767 7.02534 27.3622C6.78709 26.9477 6.66797 26.499 6.66797 26.0161V13.984C6.66797 13.5011 6.78709 13.0524 7.02534 12.6379C7.26359 12.2233 7.59318 11.8953 8.01409 11.6539L18.6551 5.52245C19.0761 5.281 19.5248 5.16028 20.0013 5.16028C20.4778 5.16028 20.9265 5.281 21.3475 5.52245L31.9885 11.6539C32.4094 11.8953 32.739 12.2233 32.9773 12.6379C33.2155 13.0524 33.3346 13.5011 33.3346 13.984V26.0161C33.3346 26.499 33.2155 26.9477 32.9773 27.3622C32.739 27.7767 32.4094 28.1048 31.9885 28.3462L21.3475 34.4776C20.9265 34.7191 20.4778 34.8398 20.0013 34.8398C19.5248 34.8398 19.0761 34.7191 18.6551 34.4776ZM26.1872 15.4584L30.7096 12.8558L20.5141 6.95515C20.3432 6.84832 20.1722 6.7949 20.0013 6.7949C19.8304 6.7949 19.6594 6.84832 19.4885 6.95515L15.5013 9.24682L26.1872 15.4584ZM20.0013 19.0449L24.5013 16.4327L13.793 10.2436L9.29297 12.8558L20.0013 19.0449Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              지금 주문이 없습니다
            </Flex>
          </Flex>
          <Flex
            padding={"12px 24px 24px 24px"}
            alignItems={"flex-start"}
            gap={"4px"}
            alignSelf={"stretch"}
            borderRadius={"5px"}
            border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <mask
                id="mask0_1026_15100"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="60"
                height="60"
              >
                <rect width="60" height="60" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1026_15100)">
                <path
                  d="M29.9051 50C24.8281 50 20.4026 48.3421 16.6286 45.0264C12.8545 41.7107 10.671 37.5352 10.0781 32.5H12.6069C13.2864 36.8013 15.2456 40.3766 18.4844 43.2259C21.7232 46.0753 25.5301 47.5 29.9051 47.5C34.7801 47.5 38.9155 45.8021 42.3113 42.4062C45.7071 39.0104 47.4051 34.875 47.4051 30C47.4051 25.125 45.7071 20.9896 42.3113 17.5938C38.9155 14.1979 34.7801 12.5 29.9051 12.5C27.3185 12.5 24.8874 13.0465 22.6118 14.1394C20.3361 15.2324 18.3281 16.7372 16.5878 18.6539H22.7896V21.1539H12.405V10.7692H14.905V16.7404C16.8377 14.6186 19.1029 12.9647 21.7007 11.7788C24.2984 10.5929 27.0332 10 29.9051 10C32.6775 10 35.276 10.5216 37.7007 11.5649C40.1254 12.6082 42.244 14.0361 44.0565 15.8486C45.869 17.6611 47.2969 19.7796 48.3401 22.2043C49.3834 24.629 49.9051 27.2275 49.9051 30C49.9051 32.7725 49.3834 35.371 48.3401 37.7957C47.2969 40.2204 45.869 42.3389 44.0565 44.1514C42.244 45.9639 40.1254 47.3918 37.7007 48.4351C35.276 49.4784 32.6775 50 29.9051 50ZM37.9146 39.6346L28.7993 30.5193V17.5H31.2993V29.4807L39.6839 37.8654L37.9146 39.6346Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
            <Flex
              flexDirection={"column"}
              paddingTop={"10px"}
              gap={"12px"}
              flex={"1 0 0"}
            >
              <Flex gap={"4px"} flexDirection={"column"}>
                <Text fontSize={"16px"} fontWeight={"500"}>
                  처리 시간이 정확합니다?
                </Text>
                <Text fontSize={"13px"}>
                  처리시간을 검토하여 주문을 처리하는데 걸리는 시간을 정확하게
                  반영하는지 확인하세요. 이를 통해 구매자는 언제 주문작품을 받게
                  될지 알 수 있습니다.
                </Text>
              </Flex>
              <BlackButton
                title={"처리 시간 검토"}
                borderRadius={"100px"}
                width="min"
              />
            </Flex>
          </Flex>
        </Flex>
        <Tab />
      </Flex>
    </Flex>
  );
}

function TextWithIcon({ text }) {
  return (
    <Flex gap={"8px"} fontSize={"13px"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <mask
          id="mask0_1026_15121"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="18"
          height="18"
        >
          <rect width="18" height="18" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1026_15121)">
          <path
            d="M7.16442 12.9808L3.4375 9.25385L3.97259 8.71876L7.16442 11.9106L14.0312 5.04376L14.5663 5.57885L7.16442 12.9808Z"
            fill="#1C1B1F"
          />
        </g>
      </svg>
      <Text lineHeight={"150%"}>{text}</Text>
    </Flex>
  );
}

function Tab() {
  return (
    <Flex width={"240px"} flexDirection={"column"} gap={"24px"}>
      <Select
        placeholder="날짜별 배송 순으로 정렬"
        width={"240px"}
        height={"40px"}
        fontSize={"13px"}
      >
        <option value="option1">1월</option>
        <option value="option2">2월</option>
        <option value="option3">3월</option>
      </Select>

      <Flex flexDirection={"column"} gap={"6px"}>
        <Text>날짜별 배송</Text>
        <Flex gap={"8px"} flexDirection={"column"}>
          <RadioItem title={"모두"} />
          <RadioItem title={"기한 경과"} />
          <RadioItem title={"오늘"} />
          <RadioItem title={"내일"} />
          <RadioItem title={"일주일 이하"} />
          <RadioItem title={"견적 없음"} />
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} gap={"6px"}>
        <Text>배송지</Text>
        <Flex gap={"8px"} flexDirection={"column"}>
          <RadioItem title={"전체"} />
          <RadioItem title={"수도권"} />
          <RadioItem title={"그외 지역"} />
        </Flex>
      </Flex>
      <Button
        width={"min"}
        background={"white"}
        fontSize={"14px"}
        fontWeight={"400"}
        borderRadius={"5px"}
        border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"}
      >
        재설정
      </Button>
    </Flex>
  );
}

function RadioItem({ title }) {
  return (
    <Flex flexDirection={"column"}>
      <Flex gap={"8px"} fontSize={"13px"}>
        <Flex gap={"4px"} color={"#666"}>
          <Radio />
          {title}
        </Flex>
        0
      </Flex>
    </Flex>
  );
}
