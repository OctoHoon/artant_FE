import { Flex, Input, Text, Box } from "@chakra-ui/react";
import ArtantCheckBox from "../../commons/Button/ArtantCheckBox";
import { useEffect, useState } from "react";
import { infos } from "../../data/const";

const options = [
  { value: "normal", label: "기타 재화" },
  { value: "children", label: "어린이 제품" },
];

export default function OpenInfo() {
  const [lookAtDetail, setLookAtDetail] = useState(false);
  const [productInfoType, setProductInfoType] = useState("normal");
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    setProductInfo({});
  }, [productInfoType]);

  const handleInputProductInfo = (e, key) => {
    setProductInfo({ ...productInfo, [key]: e.target.value });
  };
  console.log(productInfo);
  return (
    <Flex // 목록 세부정보
      display={"flex"}
      width={"1280px"}
      padding={"24px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
    >
      <Flex
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"25px"}
        width={"full"}
      >
        <Text textStyle={"H3R"}>정보 제공 고시*</Text>
        <Flex justifyContent={"space-between"} width={"full"}>
          <select
            onChange={(e) => setProductInfoType(e.target.value)}
            style={{
              display: "inline-flex",
              height: "36px",
              padding: "0px 15px",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "5px",
              flexShrink: 0,
              border: "1px solid #D9D9D9",
              width: "412px",
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ArtantCheckBox
            isChecked={lookAtDetail}
            onChange={(e) => setLookAtDetail(e.target.checked)}
            text={"전체 상품 상세페이지 참조"}
          />
        </Flex>
      </Flex>
      <Box height={"12px"} />
      <Text>각 카테고리에 해당하는 상품 고시정보를 선택하여 입력해주세요.</Text>
      <Text>
        판매 상품에 여러 구성품이 포함되어 있는 경우 모든 구성품에 대해
        '상품정보제공고시'를 상품 상세페이지에 제공해주세요.
      </Text>
      <Box height={"32px"} />
      <Box p={5} borderWidth="1px" width={"full"}>
        <Flex flexDirection={"column"} border={"1px solid #D9D9D9"}>
          <Flex backgroundColor={"#F2F2F2"}>
            <Flex
              width={"160px"}
              padding={"10px 8px"}
              height={"38px"}
              alignItems={"center"}
              borderRight={"1px solid #D9D9D9"}
            >
              고시정보명
            </Flex>
            <Flex
              width={"full"}
              height={"38px"}
              alignItems={"center"}
              padding={"10px 8px"}
            >
              내용
            </Flex>
          </Flex>
          {infos[productInfoType].map((row) => {
            return (
              <TableColumn
                value={productInfo[row["text"]] || ""}
                text={row["text"]}
                placeholder={row["placeholder"]}
                invalid={lookAtDetail}
                handleInputProductInfo={(e) =>
                  handleInputProductInfo(e, row["text"])
                }
              />
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
}
function TableColumn({
  value,
  text,
  placeholder,
  invalid,
  handleInputProductInfo,
}) {
  return (
    <Flex>
      <Flex
        width={"180px"}
        padding={"8px"}
        height={"56px"}
        alignItems={"center"}
        borderRight={"1px solid #D9D9D9"}
        textStyle={"B14R"}
      >
        {text}
      </Flex>
      <Flex
        width={"full"}
        alignItems={"center"}
        padding={"10px 8px"}
        height={"56px"}
      >
        <Input
          value={value}
          isRequired={!invalid}
          height={"40px"}
          placeholder={invalid ? "상품상세페이지 참조" : placeholder}
          isDisabled={invalid}
          onChange={handleInputProductInfo}
        />
      </Flex>
    </Flex>
  );
}
