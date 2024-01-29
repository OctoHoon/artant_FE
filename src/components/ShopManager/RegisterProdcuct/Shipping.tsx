import { Flex, Input, Select, Button, Text, Box } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import RegisterHeader from "./RegisterHeader";
import SectionTitle from "./SectionTitle";
import WhiteButton from "../../commons/Button/WhiteButton";
import InputOption from "./InputOption";
import SelectOption from "./SelectOption";
import DaumPostcode from "react-daum-postcode";
import DaumPostCode from "./DaumPostCode";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function Shipping({
  setPostalCode,
  processingTime,
  setProcessingTime,
  customProcessingTime,
  setCustomProcessingTime,
  freeShipping,
  setFreeShipping,
  shippingCost,
  setShippingCost,
}) {
  const processingTimeOptions = [
    { label: "1일", value: "option1", min: 1, max: 1 },
    { label: "1~2일", value: "option2", min: 1, max: 2 },
    { label: "1~3일", value: "option3", min: 1, max: 3 },
    { label: "3~5일", value: "option4", min: 3, max: 5 },
    { label: "5~7일", value: "option5", min: 5, max: 7 },
    { label: "직접 설정", value: "custom", min: 7, max: 7 },
  ];

  const shippingOptions = ["직접배송", "위탁배송"];

  const shippingPriceOptions = [
    { label: "무료배송", value: "true" },
    { label: "고정가격", value: "false" },
  ];

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

  const [onAddressSelect, setOnAddressSelect] = useState({});
  console.log(onAddressSelect);

  const handleAddressSelect = (address) => {
    setOnAddressSelect(address); // 주소 API 실행 후 받아온 data를 state에 저장
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
      <RegisterHeader title={"배송"} description={""} />

      <Flex
        display={"flex"}
        flexDirection={"column"}
        alignSelf={"stretch"}
        alignItems={"flex-start"}
        gap={"24px"}
      >
        <Flex // 배송 옵션
          flexDirection={"column"}
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <SectionTitle
            title={"배송 옵션*"}
            description={undefined}
            link={undefined}
          />

          <Flex
            display={"flex"}
            flexDirection={"column"}
            flex={"1 0 0"}
            alignItems={"flex-start"}
            gap={"20px"}
          >
            <Text textStyle={"B16R"}>
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
              />
              <SectionTitle
                title={"출발지 우편번호*"}
                description={undefined}
                link={undefined}
              />
              <Flex // 출발지 우편번호
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"40px"}
              >
                <Input
                  width={"248px"}
                  placeholder={"우편번호 입력"}
                  value={onAddressSelect["zonecode"]}
                  isDisabled
                />
                <DaumPostCode onAddressSelect={handleAddressSelect} />
              </Flex>

              <Input
                width={"248px"}
                placeholder={"기본주소를 입력해주세요."}
                value={onAddressSelect["roadAddress"]}
                isDisabled
              />

              {onAddressSelect["roadAddress"] && (
                <Input
                  width={"248px"}
                  placeholder={"상세주소를 입력해주세요."}
                />
              )}
              <Flex // 처리시간
                flexDirection={"column"}
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"12px"}
              >
                <SectionTitle
                  title={"출고 소요일*"}
                  description={
                    "주문을 준비해서 우편으로 보내야 하나요? 쇼핑객들은 빠르게 배송되는 품목을 구매할 사능성이 더 높다는 점을 명심하세요."
                  }
                  link={undefined}
                />

                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  flex={"1 0 0"}
                >
                  <SelectOption
                    value={processingTime?.value || ""}
                    onChange={handleSelectChange}
                    options={processingTimeOptions}
                    disabled={false}
                    placeholder={"상품 준비 시간을 선택하세요"}
                  />

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
                flexDirection={"column"}
                display={"flex"}
                alignSelf={"stretch"}
                alignItems={"flex-start"}
                gap={"12px"}
              >
                <SectionTitle
                  title={"배송*"}
                  description={undefined}
                  link={undefined}
                />

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
                    <SelectOption
                      value={undefined}
                      onChange={undefined}
                      options={shippingOptions}
                      disabled={false}
                      placeholder={"배송 서비스를 선택하세요"}
                    />
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
                    <SelectOption
                      value={freeShipping}
                      onChange={(e) => {
                        const isFree = e.target.value === "true";
                        setFreeShipping(isFree);
                        if (isFree) {
                          setShippingCost("0");
                        }
                      }}
                      options={shippingPriceOptions}
                      disabled={false}
                      placeholder={"배송비를 선택하세요"}
                    />
                    {freeShipping === false && (
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
                        <InputOption
                          placeholder={"배송비"}
                          onChange={(e) => setShippingCost(e.target.value)}
                        />
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
                <WhiteButton title={"배송 프로필 저장"} onClick={undefined} />
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
          <SectionTitle
            title={"배송비 미리보기"}
            description={undefined}
            link={undefined}
          />
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
                    textStyle={"B14R"}
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
