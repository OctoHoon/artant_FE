import { Flex, Input, Select, Button, Text, Box } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

type ProcessingTimeOption = {
  key: string;
  value: string;
  min: number;
  max: number;
};

export default function Shipping() {
  const processingTimeOptions = [
    { key: "1일", value: "option1", min: 1, max: 1 },
    { key: "1~2일", value: "option2", min: 1, max: 2 },
    { key: "1~3일", value: "option3", min: 1, max: 3 },
    { key: "3~5일", value: "option4", min: 3, max: 5 },
    { key: "5~7일", value: "option5", min: 5, max: 7 },
    { key: "직접 설정", value: "custom", min: 7, max: 7 },
  ];

  const [postalCode, setPostalCode] = useState<string>();
  const [processingTime, setProcessingTime] =
    useState<ProcessingTimeOption | null>(null);
  const [customProcessingTime, setCustomProcessingTime] = useState({
    min: "",
    max: "",
  });

  const [freeShipping, setFreeShipping] = useState(false);
  const [shippingCost, setShippingCost] = useState("0");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const isCustom = selectedValue === "custom";

    if (isCustom) {
      setProcessingTime({ key: "직접 설정", value: "custom", min: 0, max: 0 });
    } else {
      const selectedOption =
        processingTimeOptions.find(
          (option) => option.value === selectedValue
        ) || null;
      setProcessingTime(selectedOption);
    }
  };

  const handleCustomInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    type: "min" | "max"
  ) => {
    const value = Number(event.target.value);
    setCustomProcessingTime((prev) => ({
      ...prev,
      [type]: event.target.value,
    }));

    if (processingTime?.value === "custom") {
      setProcessingTime((prev) => {
        if (prev) {
          return { ...prev, [type]: value };
        }
        // If there is no previous state, create a new one with default values
        return {
          key: "직접 설정",
          value: "custom",
          min: 0,
          max: 0,
          [type]: value,
        };
      });
    }
  };

  return (
    <Flex // 배송
      display={"flex"}
      width={"1280px"}
      padding={"24px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"32px"}
      border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
    >
      <Flex
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"4px"}
      >
        <Text textStyle={"H3R"} letterSpacing="-0.5px">
          배송
        </Text>
        <Text textStyle={"B14R"}>
          배송 프로필, 주문 처리 일정 등 배송 정보가 정확한지 확인하여
          쇼핑객에게 배송 시간과 비용에 대한 명확한 기대치를 제공하세요. 배송
          설정에서 언제든지 업데이트할 수 있습니다 .
        </Text>
      </Flex>
      <Flex
        display={"flex"}
        flexDirection={"column"}
        alignSelf={"stretch"}
        alignItems={"flex-start"}
        gap={"24px"}
      >
        <Flex // 배송 옵션
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <Flex
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            width={"234px"}
            gap={"6px"}
            alignSelf={"stretch"}
          >
            <Text textStyle={"B14M"}>배송 옵션*</Text>
          </Flex>

          <Flex
            display={"flex"}
            flexDirection={"column"}
            flex={"1 0 0"}
            alignItems={"flex-start"}
            gap={"20px"}
          >
            <Text width={"716px"} textStyle={"B16R"}>
              이 목록에 대한 배송 옵션을 입력하세요. 이러한 옵션을 이 목록에만
              적용하거나 배송 프로필로 저장하여 향후 목록에 적용 할 수있습니다.
            </Text>
            <Flex
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"24px"}
              alignSelf={"stretch"}
            >
              <Flex
                height={"1px"}
                alignSelf={"stretch"}
                background={"var(--maincolorslinegrayeeeeee, #EEE)"}
              ></Flex>
              <Flex // 출발지 우편번호
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text textStyle={"B16M"}>출발지 우편번호*</Text>
                </Flex>
                <Input
                  display="flex"
                  padding="0px 16px"
                  alignItems="center"
                  width={"248px"}
                  height={"40px"}
                  alignSelf="stretch"
                  borderRadius="5px"
                  border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                  background="var(--maincolorsbg-white, #FFF)"
                  placeholder="우편번호 입력"
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </Flex>
              <Flex // 처리시간
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text textStyle={"B16M"}>시간*</Text>
                  <Text
                    color="var(--maincolorstextgray-595959, #666)"
                    textStyle={"B13R"}
                  >
                    주문을 준비해서 우편으로 보내야 하나요? 쇼핑객들은 빠르게
                    배송되는 품목을 구매할 사능성이 더 높다는 점을 명심하세요.
                  </Text>
                </Flex>
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  flex={"1 0 0"}
                >
                  <Select
                    height={"40px"}
                    padding={"10px 0px"}
                    gap={"10px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    colorScheme="white"
                    color="#595959"
                    fontSize="14px"
                    fontWeight="400"
                    letterSpacing={"-0.042px"}
                    placeholder="상품 준비 시간을 선택하세요"
                    onChange={handleSelectChange}
                    value={processingTime?.value || ""}
                  >
                    {processingTimeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.key}
                      </option>
                    ))}
                  </Select>
                  {processingTime?.value === "custom" && (
                    <Flex>
                      <Text alignSelf={"center"}>최소</Text>
                      <Input
                        marginX={"10px"}
                        width={"80px"}
                        type="number"
                        value={customProcessingTime.min}
                        onChange={(e) => handleCustomInputChange(e, "min")}
                      />
                      <Box marginX={"10px"} alignSelf={"center"}>
                        ~
                      </Box>
                      <Text alignSelf={"center"}>최대</Text>

                      <Input
                        marginX={"10px"}
                        width={"80px"}
                        type="number"
                        value={customProcessingTime.max}
                        onChange={(e) => handleCustomInputChange(e, "max")}
                      />
                      <Text alignSelf={"center"}>일</Text>
                    </Flex>
                  )}

                  <Text textStyle={"B14R"}>
                    매장의 주문 처리 일정은 월요일~금요일, 토요일, 일요일을
                    포함하도록 설정되어 있습니다.
                  </Text>
                </Flex>
              </Flex>
              <Flex
                height={"1px"}
                alignSelf={"stretch"}
                background={"var(--maincolorslinegrayeeeeee, #EEE)"}
              ></Flex>
              <Flex // 배송
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  width={"234px"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Text textStyle={"B16M"}>배송*</Text>
                </Flex>
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"16px"}
                >
                  <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"6px"}
                  >
                    <Text textStyle={"B14R"}>배송 서비스</Text>
                    <Select
                      height={"40px"}
                      gap={"10px"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      colorScheme="white"
                      color="#595959"
                      fontSize="14px"
                      fontWeight="400"
                      letterSpacing={"-0.042px"}
                      placeholder="배송서비스를 선택하세요"
                    >
                      <option value="option1">국내배송</option>
                      <option value="option2">해외배송</option>
                    </Select>
                  </Flex>
                  <Flex
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"6px"}
                  >
                    <Text
                      color="var(--maincolorstextblack-222222, #222)"
                      textStyle={"B14R"}
                    >
                      배송비
                    </Text>
                    <Select
                      height={"40px"}
                      gap={"10px"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      colorScheme="white"
                      color="#595959"
                      fontSize="14px"
                      fontWeight="400"
                      letterSpacing={"-0.042px"}
                      placeholder="배송비를 선택하세요"
                      onChange={(e) => {
                        setFreeShipping(e.target.value === "option1");
                        setShippingCost("0");
                      }}
                    >
                      <option value="option1">무료배송</option>
                      <option value="option2">고정가격</option>
                    </Select>
                    {!freeShipping && (
                      <Flex
                        marginTop={"10px"}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        gap={"6px"}
                      >
                        <Text
                          color="var(--maincolorstextblack-222222, #222)"
                          textStyle={"B14R"}
                        >
                          배송비를 설정하세요
                        </Text>
                        <Input
                          type="number"
                          height={"40px"}
                          gap={"10px"}
                          flexDirection={"column"}
                          justifyContent={"center"}
                          alignItems={"flex-start"}
                          colorScheme="white"
                          color="#595959"
                          fontSize="14px"
                          fontWeight="400"
                          letterSpacing={"-0.042px"}
                          placeholder="배송비"
                          onChange={(e) => setShippingCost(e.target.value)}
                        ></Input>
                      </Flex>
                    )}
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                height={"1px"}
                alignSelf={"stretch"}
                background={"var(--maincolorslinegrayeeeeee, #EEE)"}
              ></Flex>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                alignSelf={"stretch"}
              >
                <Flex>
                  <Text textStyle={"B14R"}>
                    원하는 경우 이러한 옵션을 저장하여 향후 목록에 적용할 수
                    있습니다.
                  </Text>
                  <Text
                    ml={"6px"}
                    cursor={"pointer"}
                    textStyle={"B14R"}
                    textDecorationLine="underline"
                  >
                    배송 프로필 작동 방식
                  </Text>
                </Flex>
                <Button
                  alignItems={"center"}
                  padding={"10px 24px"}
                  backgroundColor={"transparent"}
                  borderRadius={"100px"}
                  border={"1px solid var(--maincolorstextblack-222222, #222)"}
                >
                  <Text
                    color="var(--maincolorstextblack-222222, #222)"
                    textStyle={"B16M"}
                  >
                    배송 프로필 저장
                  </Text>
                </Button>
              </Flex>
              <Flex
                height={"1px"}
                alignSelf={"stretch"}
                background={"var(--maincolorslinegrayeeeeee, #EEE)"}
              ></Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex // 배송 옵션
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <Flex
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            width={"234px"}
            gap={"6px"}
            alignSelf={"stretch"}
          >
            <Text textStyle={"B14M"}>배송비 미리보기</Text>
          </Flex>
          <Flex alignItems={"center"} gap={"40px"} flex={"1 0 0"}>
            <Flex
              width={"600px"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"20px"}
            >
              {" "}
              <Flex
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"16px"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"6px"}
                >
                  <Text textStyle={"B16R"}>기본 배송</Text>
                  <Select
                    height={"40px"}
                    width={"600px"}
                    gap={"10px"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                    colorScheme="white"
                    color="#595959"
                    fontSize="14px"
                    fontWeight="400"
                    letterSpacing={"-0.042px"}
                    placeholder="배송 서비스 선택"
                  ></Select>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              gap={"40px"}
              flex={"1 0 0"}
            >
              <Flex
                display={"flex"}
                width={"120px"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"8px"}
              >
                <Text textStyle={"B16R"}>배송비</Text>
                <Text
                  textStyle={"B16R"}
                >{`${shippingCost.toLocaleString()}원`}</Text>
              </Flex>
              <Flex //삭제 가능? 괜히 헷갈리기만 할 수 있을 것 같음
                display={"flex"}
                width={"120px"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"8px"}
              >
                <Text textStyle={"B16R"}>총 금액</Text>
                <Text textStyle={"B16R"}>0원</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
