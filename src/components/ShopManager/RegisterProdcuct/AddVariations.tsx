import {
  Flex,
  Button,
  Text,
  Table,
  Thead,
  Tr,
  Box,
  Input,
  Switch,
  Th,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const optionNumber = [
  {
    value: 0,
    label: "없음",
  },
  {
    value: 1,
    label: "1개",
  },
  {
    value: 2,
    label: "2개",
  },
];

const variationOptions = [
  {
    value: "size",
    label: "크기",
  },
  {
    value: "custom",
    label: "직접 입력",
  },
];

type Option = {
  name: string;
  variations: string[];
};

type OptionDetails = {
  originalPrice: string;
  price: string;
  stock: string;
  visible: boolean;
};

type PriceMap = {
  [key: string]: OptionDetails;
};

export default function AddVariation({
  productName,
  selectedOptions,
  setSelectedOptions,
  detailCombinations,
  setDetailCombinations,
}) {
  const [optionNumbers, setOptionNumbers] = useState("0");

  const [options, setOptions] = useState([
    { name: "", variations: [] },
    { name: "", variations: [] },
  ]);

  const handleVariationTypeChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index].name = value;
    setOptions(newOptions);
  };

  const handleOptionNameChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index].name = value;
    setOptions(newOptions);
  };

  const handleVariationChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index].variations = value.split(",");
    setOptions(newOptions);
  };

  const [combinations, setCombinations] = useState<string[][]>([]);
  const [prices, setPrices] = useState<PriceMap>({
    default: {
      originalPrice: "0",
      price: "0",
      stock: "0",
      visible: true,
    },
  });

  const initialzeCombinations = ({ optionNumber }) => {
    setCombinations([]);
    if (optionNumber === "0") {
      setOptions([{ name: "", variations: [] }]);
      const initialPrices: PriceMap = {};
      initialPrices["default"] = {
        originalPrice: "0",
        price: "0",
        stock: "0",
        visible: true,
      };
      setPrices(initialPrices);
    } else {
      let newOptions = options[0];
      setOptions([newOptions, { name: "", variations: [] }]);
    }
  };

  const generateCombinations = ({ optionNumber }) => {
    if (optionNumber === "0") {
      setCombinations([["-"]]);
      initializePrices([["-"]]);
      return;
    }

    if (optionNumber === "1") {
      setCombinations(options[0].variations.map((variation) => [variation]));
      initializePrices(options[0].variations.map((variation) => [variation]));
      return;
    }

    let result: string[][] = [[]];

    options.forEach((option) => {
      let currentCombinations: string[][] = [];
      result.forEach((existingCombination) => {
        option.variations.forEach((variation) => {
          currentCombinations.push([...existingCombination, variation]);
        });
      });
      result = currentCombinations;
    });

    setCombinations(result);
    initializePrices(result);
  };

  const initializePrices = (combs: string[][]) => {
    const initialPrices: PriceMap = {};
    combs.forEach((comb) => {
      initialPrices[comb.join("-")] = {
        originalPrice: "0",
        price: "0",
        stock: "0",
        visible: true,
      };
    });
    setPrices(initialPrices);
  };

  const handleDetailChange = (
    combination: string,
    detail: keyof OptionDetails,
    value: string | boolean
  ) => {
    setPrices((prevPrices) => ({
      ...prevPrices,
      [combination]: {
        ...prevPrices[combination],
        [detail]: detail === "visible" ? value : value,
      },
    }));
  };
  console.log(prices);

  return (
    <Flex // 변형
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
        alignSelf={"stretch"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"4px"}
      >
        <Flex justifyContent={"space-between"} alignSelf={"stretch"}>
          <Text textStyle={"H3R"}>옵션</Text>
        </Flex>

        <Text textStyle={"B14R"}>
          색상이나 크기와 같은 사용 가능한 옵션을 추가합니다. 구매자는 결제 시
          이 중에서 선택하게 됩니다.
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"32px"}>
        <Flex flexDirection={"column"} gap={"12px"}>
          <Text>옵션명 개수*</Text>
          <select
            onChange={(e) => {
              setOptionNumbers(e.target.value);
              initialzeCombinations({ optionNumber: e.target.value });
            }}
            style={{
              display: "inline-flex",
              height: "36px",
              padding: "0px 15px",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "5px",
              flexShrink: 0,
              border: "1px solid #D9D9D9",
              width: "120px",
            }}
          >
            {optionNumber.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Flex>
      </Flex>

      {optionNumbers != "0" && (
        <Flex flexDirection={"column"} gap={"12px"}>
          <Text>옵션 입력*</Text>
          <Box width={"1232px"} height={"1px"} background={"#EEEEEE"} />
          <Flex flexDirection={"column"} gap={"12px"}>
            <Flex>
              <Text width={options[0].name !== "size" ? "400px" : "140px"}>
                옵션명
              </Text>
              <Text>옵션값</Text>
            </Flex>
            <Flex gap={"20px"}>
              {/* <select
                onChange={(e) => handleVariationTypeChange(0, e.target.value)}
                style={{
                  display: "inline-flex",
                  height: "36px",
                  padding: "0px 15px",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "5px",
                  flexShrink: 0,
                  border: "1px solid #D9D9D9",
                  width: "120px",
                }}
              >
                {variationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select> */}

              <Input
                width={"240px"}
                placeholder="예시) 크기, 색상"
                onChange={(e) => handleOptionNameChange(0, e.target.value)}
              />
              <Input
                width={"400px"}
                placeholder="옵션 값을 쉼표(,)로 구분하여 입력"
                onChange={(e) => handleVariationChange(0, e.target.value)}
              />
            </Flex>
            {optionNumbers === "2" && (
              <Flex gap={"20px"}>
                {/* <select
                  onChange={(e) => handleVariationTypeChange(1, e.target.value)}
                  style={{
                    display: "inline-flex",
                    height: "36px",
                    padding: "0px 15px",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "5px",
                    flexShrink: 0,
                    border: "1px solid #D9D9D9",
                    width: "120px",
                  }}
                >
                  {variationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {options[1].name !== "size" && (
                  <Input
                    width={"240px"}
                    placeholder="옵션명을 직접 입력해주세요"
                    onChange={(e) => handleOptionNameChange(1, e.target.value)}
                  />
                )} */}
                <Input
                  width={"240px"}
                  placeholder="예시) 크기, 색상"
                  onChange={(e) => handleOptionNameChange(1, e.target.value)}
                />
                <Input
                  width={"400px"}
                  placeholder="옵션 값을 쉼표(,)로 구분하여 입력"
                  onChange={(e) => handleVariationChange(1, e.target.value)}
                />
              </Flex>
            )}
            <Button
              width={"240px"}
              onClick={() =>
                generateCombinations({ optionNumber: optionNumbers })
              }
            >
              옵션목록으로 적용
            </Button>
          </Flex>
        </Flex>
      )}

      {optionNumbers === "0" ? (
        <div>
          <h2>단일 품목</h2>
          <Table width={"1232px"} textAlign={"center"}>
            <Thead width={"full"}>
              <Tr
                backgroundColor="#F2F2F2"
                width={"full"}
                height={"84px"}
                textStyle={"B14R"}
              >
                <th>
                  <Text>작품명</Text>
                </th>
                <th>정상가(원)</th>
                <th>판매가(원)</th>
                <th>재고수량</th>
              </Tr>
            </Thead>
            <tbody>
              <tr>
                <td>{productName}</td>
                <td>
                  <Input
                    border={"0"}
                    textAlign={"center"}
                    type="number"
                    value={prices["default"].originalPrice}
                    onChange={(e) =>
                      handleDetailChange(
                        "default",
                        "originalPrice",
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  <Input
                    border={"0"}
                    textAlign={"center"}
                    type="number"
                    value={prices["default"].price}
                    onChange={(e) =>
                      handleDetailChange("default", "price", e.target.value)
                    }
                  />
                </td>
                <td>
                  <Input
                    border={"0"}
                    textAlign={"center"}
                    type="number"
                    value={prices["default"].stock}
                    onChange={(e) =>
                      handleDetailChange("default", "stock", e.target.value)
                    }
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      ) : (
        <div>
          <h2>옵션 목록</h2>

          <Table textAlign={"center"} width="1212px">
            <Thead width={"full"}>
              <Tr
                backgroundColor="#F2F2F2"
                width={"full"}
                height={"84px"}
                textStyle={"B14R"}
              >
                <th>
                  <Text>옵션명</Text>
                  {options.map((option) => (
                    <>{option.name}</>
                  ))}
                </th>
                <th>정상가(원)</th>
                <th>판매가(원)</th>
                <th>재고수량</th>
                <th>옵션 사용하기</th>
              </Tr>
            </Thead>
            <tbody>
              {combinations.map((combination, index) => (
                <tr key={index}>
                  {combination.map((item, idx) => (
                    <>{item}</>
                  ))}
                  <td>
                    <Input
                      border={"0"}
                      textAlign={"center"}
                      type="number"
                      value={prices[combination.join("-")].originalPrice}
                      onChange={(e) =>
                        handleDetailChange(
                          combination.join("-"),
                          "originalPrice",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td>
                    <Input
                      border={"0"}
                      textAlign={"center"}
                      type="number"
                      value={prices[combination.join("-")].price}
                      onChange={(e) =>
                        handleDetailChange(
                          combination.join("-"),
                          "price",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td>
                    <Input
                      border={"0"}
                      textAlign={"center"}
                      type="number"
                      value={prices[combination.join("-")].stock}
                      onChange={(e) =>
                        handleDetailChange(
                          combination.join("-"),
                          "stock",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td>
                    <Switch
                      isChecked={prices[combination.join("-")].visible}
                      onChange={(e) =>
                        handleDetailChange(
                          combination.join("-"),
                          "visible",
                          e.target.checked
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Flex>
  );
}
