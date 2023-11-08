import {
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

export default function StockAndPrice({
  productPrice,
  setProductPrice,
  setProductCount,
  setProductSKU,
}) {
  const inputStyles = {
    display: "flex",
    height: "40px",
    padding: "0px 16px",
    borderRadius: "5px",
    border: "1px solid #D9D9D9",
    background: "#FFF",
  };

  return (
    <Flex // 재고 및 가격
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
        <Text
          color="var(--maincolorstextblack-222222, #222)"
          fontFamily="Spoqa Han Sans Neo"
          textStyle={"H3R"}
          letterSpacing="-0.5px"
        >
          재고 및 가격
        </Text>
      </Flex>
      <Flex
        display={"flex"}
        flexDirection={"column"}
        alignSelf={"stretch"}
        alignItems={"flex-start"}
        gap={"24px"}
      >
        <Flex // 가격
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
            <Text textStyle={"bodyXs14M"}>가격*</Text>
            <Text
              color="var(--maincolorstextgray-595959, #666)"
              textStyle={"B13R"}
              lineHeight="140%"
            >
              재료비, 인건비, 기타 사업 비용을 고려해야 합니다. 무료 배송을
              제공하는 경우 배송 비용을 포함하여 수익이 줄어들지 않도록 하세요.
            </Text>
          </Flex>
          <Flex
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"8px"}
          >
            <InputGroup width="200px">
              <Input
                display="flex"
                flex="1"
                height="40px"
                padding="0px 28px"
                borderRadius="5px"
                border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                background="var(--maincolorsbg-white, #FFF)"
                placeholder="0"
                onChange={(e) => {
                  // 숫자만 입력 가능하도록 정규식으로 필터링
                  const inputValue = e.target.value;
                  const numericValue = Number(
                    inputValue.replace(/[^0-9]/g, "")
                  );
                  setProductPrice(numericValue);
                }}
                textAlign="right" // 우측 정렬
                type="number" // 숫자만 입력 가능
              />
              <InputRightElement width="40px">원</InputRightElement>
            </InputGroup>
            {1000 > productPrice && (
              <Text
                color="var(--maincolorstextredbc-0000, #BC0000)"
                textStyle={"bodyMini"}
              >
                가격은 1,000원 이상이여야 합니다.
              </Text>
            )}
          </Flex>
        </Flex>
        <Flex // 수량
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
            <Text textStyle={"bodyXs14M"}>수량*</Text>
            <Text
              color="var(--maincolorstextgray-595959, #666)"
              textStyle={"B13R"}
              lineHeight="140%"
            >
              이 목록은 매진될 때까지 자동으로 갱신됩니다. 매번 500원의 상장
              수수료가 청구됩니다.
            </Text>
          </Flex>
          <Input
            style={inputStyles}
            alignItems="center"
            width={"120px"}
            alignSelf="stretch"
            placeholder="0"
            onChange={(e) => {
              // 숫자만 입력 가능하도록 정규식으로 필터링
              let inputValue = e.target.value.replace(/[^0-9]/g, "");
              inputValue = inputValue.replace(/^0+(?=\d)/, ""); //leading 0 제거
              const numericValue = Number(inputValue);
              setProductCount(numericValue);
            }}
          />
        </Flex>
        <Flex // SKU
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
            <Text textStyle={"bodyXs14M"}>
              재고관리단위{"("}SKU{")"}
            </Text>
            <Text
              color="var(--maincolorstextgray-595959, #666)"
              textStyle={"B13R"}
              lineHeight="140%"
            >
              SKU는 귀하만 사용할 수 있으며 구매자에게는 표시되지 않습니다.
            </Text>
            <Text
              textStyle={"B13R"}
              textDecorationLine="underline"
              cursor="pointer"
            >
              SKU에 대해 자세히 알아보세요.
            </Text>
          </Flex>
          <Input
            style={inputStyles}
            alignItems="center"
            width={"200px"}
            alignSelf="stretch"
            placeholder="여기에 입력하세요"
            onChange={(e) => {
              setProductSKU(e.target.value);
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
