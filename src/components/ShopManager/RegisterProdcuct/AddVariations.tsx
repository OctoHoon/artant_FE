import {
  Flex,
  Button,
  Text,
  useDisclosure,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Box,
  FormControl,
  Switch,
  Input,
} from "@chakra-ui/react";
import AddVariationModal from "./AddVariationsModal";
import React, { useState } from "react";

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
    value: "material",
    label: "재료",
  },
  {
    value: "custom",
    label: "직접 입력",
  },
];

export default function AddVariation({
  selectedOptions,
  setSelectedOptions,
  detailCombinations,
  setDetailCombinations,
}) {
  const [optionNumbers, setOptionNumbers] = useState("0");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [isMix, setIsMix] = useState(false);

  const handleOptionsSelected = (options) => {
    setSelectedOptions(options);
  };

  const handleInputChange = (
    type: "sku" | "price" | "quantity" | "visible" | string,
    value: string | number | boolean,
    option_one: string,
    option_two: string
  ) => {
    setDetailCombinations((prevCombinations) => {
      const combinationIndex = prevCombinations.findIndex(
        (combination) =>
          combination.option_one === option_one &&
          (combination.option_two === option_two ||
            combination.option_two === "")
      );

      // If the combination exists, update it
      if (combinationIndex > -1) {
        const updatedCombinations = [...prevCombinations];
        updatedCombinations[combinationIndex] = {
          ...updatedCombinations[combinationIndex],
          [type]: value,
        };
        return updatedCombinations;
      }

      // If the combination doesn't exist, add it
      const newCombination = {
        option_one,
        option_two: option_two || "", // Default detail2 to an empty string if not provided
        [type]: value,
      };
      if (type !== "visible") {
        // If adding a non-visible field, default visible to true
        newCombination.visible = true;
      }
      return [...prevCombinations, newCombination];
    });
  };

  const inputTypes = [
    { key: "is_sku_vary", placeholder: "SKU", name: "sku" },
    { key: "is_price_vary", placeholder: "가격", name: "price" },
    { key: "is_quantity_vary", placeholder: "수량", name: "quantity" },
  ];

  const [variationType, setVariationType] = useState("");
  const [variationSecond, setVariationSecond] = useState({});

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
            onChange={(e) => setOptionNumbers(e.target.value)}
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
              <Text width={variationType === "custom" ? "400px" : "140px"}>
                옵션명
              </Text>
              <Text>옵션값</Text>
            </Flex>
            <Flex gap={"20px"}>
              <select
                onChange={(e) => setVariationType(e.target.value)}
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

              {variationType === "custom" && (
                <Input
                  width={"240px"}
                  placeholder="옵션명을 직접 입력해주세요"
                />
              )}
              <Input
                width={"400px"}
                placeholder="옵션 값을 쉼표(,)로 구분하여 입력"
              />
            </Flex>
            {optionNumbers === "2" && (
              <Flex gap={"20px"}>
                <select
                  onChange={(e) => setVariationType(e.target.value)}
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

                {variationType === "custom" && (
                  <Input
                    width={"240px"}
                    placeholder="옵션명을 직접 입력해주세요"
                  />
                )}
                <Input
                  width={"400px"}
                  placeholder="옵션 값을 쉼표(,)로 구분하여 입력"
                />
              </Flex>
            )}
            <Button width={"240px"}>옵션목록으로 적용</Button>
          </Flex>
        </Flex>
      )}

      <Flex flexDirection={"column"} gap={"12px"}>
        <Text textStyle={"B14M"}>단일 작품등록*</Text>
        <Flex width={"1200px"}>
          <Flex flexDirection={"column"} width={"full"}>
            <Flex>작품명</Flex>
            <Flex>TEXT</Flex>
          </Flex>
          <Flex flexDirection={"column"} width={"full"}>
            <Flex>작품명</Flex>
            <Flex>TEXT</Flex>
          </Flex>
          <Flex flexDirection={"column"} width={"full"}>
            <Flex>작품명</Flex>
            <Flex>TEXT</Flex>
          </Flex>
          <Flex flexDirection={"column"} width={"full"}>
            <Flex>작품명</Flex>
            <Flex>TEXT</Flex>
          </Flex>
        </Flex>
      </Flex>

      {selectedOptions[0]?.name ? ( // 옵션 설정 된 게 있는지 없는지 확인
        isMix ? ( // 공통으로 연결 되는 부분(selectPrice, Quantity, Sku) 있으면 연결 되어서 표가 하나로
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>{selectedOptions[0].name}</Th>
                  <Th>{selectedOptions[1].name}</Th>
                  {(selectedOptions[0].is_sku_vary ||
                    selectedOptions[1].is_sku_vary) && <Th>SKU</Th>}
                  {(selectedOptions[0].is_price_vary ||
                    selectedOptions[1].is_price_vary) && <Th>가격</Th>}
                  {(selectedOptions[0].is_quantity_vary ||
                    selectedOptions[1].is_quantity_vary) && <Th>수량</Th>}
                  {/* <Th>옵션 사용 여부</Th> */}
                </Tr>
              </Thead>
              <Tbody>
                {selectedOptions[0]?.options.map((detail1, idx1) =>
                  selectedOptions[1]?.options.map((detail2, idx2) => (
                    <Tr key={`${detail1.name}-${detail2.name}`}>
                      <Td>{detail1.name}</Td>
                      <Td>{detail2.name}</Td>

                      {inputTypes.map(
                        (inputType) =>
                          (selectedOptions[0][inputType.key] ||
                            selectedOptions[1][inputType.key]) && (
                            <Td>
                              <input
                                placeholder={inputType.placeholder}
                                type="text"
                                onChange={(e) =>
                                  handleInputChange(
                                    inputType.name,
                                    e.target.value,
                                    detail1.name,
                                    detail2.name
                                  )
                                }
                              />
                            </Td>
                          )
                      )}

                      {/* <Td>
                        <FormControl
                          display="flex"
                          alignItems="center"
                          justifyContent={"flex-end"}
                        >
                          <Switch
                            id={`visibility-switch-${idx1}-${idx2}`} // Ensuring unique ID for each switch
                            size={"md"}
                            isChecked={
                              detailCombinations.find(
                                (c) =>
                                  c.detail1 === detail1 && c.detail2 === detail2
                              )?.visible ?? true
                            } // Default to true if not set
                            onChange={(e) =>
                              handleInputChange(
                                "visible",
                                e.target.checked,
                                detail1.name,
                                detail2.name
                              )
                            }
                          />
                        </FormControl>
                      </Td> */}
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          // 개별 표
          <Flex flexDirection={"column"} gap={"40px"}>
            {" "}
            <IndividualTable
              option={selectedOptions[0]}
              handleInputChange={handleInputChange}
              detailCombinations={detailCombinations}
            />
            {selectedOptions[1].options.length !== 0 && (
              <IndividualTable
                option={selectedOptions[1]}
                handleInputChange={handleInputChange}
                detailCombinations={detailCombinations}
              />
            )}
          </Flex>
        )
      ) : (
        // 아직 설정 안 된 경우
        <Button
          display={"flex"}
          padding={"11px 16px"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"8px"}
          backgroundColor={"transparent"}
          border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
          color="var(--maincolorstextgray-595959, #666)"
          fontFamily="Spoqa Han Sans Neo"
          fontSize="13px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="140%"
          letterSpacing="-0.3px"
          onClick={onOpen}
        >
          옵션 추가
        </Button>
      )}

      <AddVariationModal
        finalRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        onOptionsSelected={handleOptionsSelected}
        reset={setDetailCombinations}
        setDetailCombinations={setDetailCombinations}
        setIsMix={setIsMix}
      />
    </Flex>
  );
}

const IndividualTable = ({ option, handleInputChange, detailCombinations }) => {
  const inputTypes = [
    { key: "is_sku_vary", placeholder: "SKU", name: "sku" },
    { key: "is_price_vary", placeholder: "가격", name: "price" },
    { key: "is_quantity_vary", placeholder: "수량", name: "quantity" },
  ];

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>{option.name}</Th>
            {option.is_sku_vary && <Th>SKU</Th>}
            {option.is_price_vary && <Th>가격</Th>}
            {option.is_quantity_vary && <Th>수량</Th>}
            {/* <Th>옵션 사용 여부</Th> */}
          </Tr>
        </Thead>
        <Tbody>
          {option.options.map((detail, idx) => (
            <Tr key={idx}>
              <Td>{detail.name}</Td>
              {inputTypes.map(
                (inputType) =>
                  option[inputType.key] && (
                    <Td>
                      <input
                        placeholder={inputType.placeholder}
                        type="text"
                        onChange={(e) =>
                          handleInputChange(
                            inputType.name,
                            e.target.value,
                            detail.name,
                            null
                          )
                        }
                      />
                    </Td>
                  )
              )}

              {/* <Td>
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent={"flex-end"}
                >
                  <Switch
                    id={`visibility-switch-${idx}`}
                    size={"md"}
                    isChecked={
                      detailCombinations.find((c) => c.option_one === option)
                        .visible
                    }
                    onChange={(e) => {
                      handleInputChange(
                        "visible",
                        e.target.checked,
                        detail.name,
                        null
                      );
                    }}
                  />
                </FormControl>
              </Td> */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
