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
  FormControl,
  Switch,
} from "@chakra-ui/react";
import AddVariationModal from "./AddVariationsModal";
import React, { useState } from "react";

export default function AddVariation({
  selectedOptions,
  setSelectedOptions,
  detailCombinations,
  setDetailCombinations,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [isMix, setIsMix] = useState(false);

  const handleOptionsSelected = (options) => {
    setSelectedOptions(options);
  };

  const handleInputChange = (
    type: "sku" | "price" | "quantity" | "visible" | string,
    value: string | number | boolean,
    detail1: string,
    detail2?: string
  ) => {
    setDetailCombinations((prevCombinations) => {
      const combinationIndex = prevCombinations.findIndex(
        (combination) =>
          combination.detail1 === detail1 &&
          (combination.detail2 === detail2 || combination.detail2 === "")
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
        detail1,
        detail2: detail2 || "", // Default detail2 to an empty string if not provided
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
    { key: "selectSku", placeholder: "SKU", name: "sku" },
    { key: "selectPrice", placeholder: "가격", name: "price" },
    { key: "selectQuantity", placeholder: "수량", name: "quantity" },
  ];

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
          <Text
            color="var(--maincolorstextblack-222222, #222)"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="24px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="normal"
            letterSpacing="-0.5px"
          >
            작품 옵션
          </Text>
          {selectedOptions && <Button onClick={onOpen}>옵션 변경</Button>}
        </Flex>

        <Text
          color="var(--maincolorstextblack-222222, #222)"
          fontFamily="Spoqa Han Sans Neo"
          fontSize="14px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="normal"
          letterSpacing="-0.042px"
        >
          색상이나 크기와 같은 사용 가능한 옵션을 추가합니다. 구매자는 결제 시
          이 중에서 선택하게 됩니다.
        </Text>
      </Flex>

      {selectedOptions[0]?.variation ? ( // 옵션 설정 된 게 있는지 없는지 확인
        isMix ? ( // 공통으로 연결 되는 부분(selectPrice, Quantity, Sku) 있으면 연결 되어서 표가 하나로
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>{selectedOptions[0].variation}</Th>
                  <Th>{selectedOptions[1].variation}</Th>
                  {(selectedOptions[0].selectSku ||
                    selectedOptions[1].selectSku) && <Th>SKU</Th>}
                  {(selectedOptions[0].selectPrice ||
                    selectedOptions[1].selectPrice) && <Th>가격</Th>}
                  {(selectedOptions[0].selectQuantity ||
                    selectedOptions[1].selectQuantity) && <Th>수량</Th>}
                  <Th>옵션 사용 여부</Th>
                </Tr>
              </Thead>
              <Tbody>
                {selectedOptions[0]?.detail.map((detail1, idx1) =>
                  selectedOptions[1]?.detail.map((detail2, idx2) => (
                    <Tr key={`${detail1}-${detail2}`}>
                      <Td>{detail1}</Td>
                      <Td>{detail2}</Td>

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
                                    detail1,
                                    detail2
                                  )
                                }
                              />
                            </Td>
                          )
                      )}

                      <Td>
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
                                detail1,
                                detail2
                              )
                            }
                          />
                        </FormControl>
                      </Td>
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
            {selectedOptions[1].detail.length !== 0 && (
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
    { key: "selectSku", placeholder: "SKU", name: "sku" },
    { key: "selectPrice", placeholder: "가격", name: "price" },
    { key: "selectQuantity", placeholder: "수량", name: "quantity" },
  ];

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>{option.variation}</Th>
            {option.selectSku && <Th>SKU</Th>}
            {option.selectPrice && <Th>가격</Th>}
            {option.selectQuantity && <Th>수량</Th>}
            <Th>옵션 사용 여부</Th>
          </Tr>
        </Thead>
        <Tbody>
          {option.detail.map((detail, idx) => (
            <Tr key={idx}>
              <Td>{detail}</Td>
              {inputTypes.map(
                (inputType) =>
                  option[inputType.key] && (
                    <Td>
                      <input
                        placeholder={inputType.placeholder}
                        type="text"
                        onChange={(e) =>
                          handleInputChange(
                            detail.name,
                            e.target.value,
                            detail,
                            null
                          )
                        }
                      />
                    </Td>
                  )
              )}

              <Td>
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent={"flex-end"}
                >
                  <Switch
                    id={`visibility-switch-${idx}`}
                    size={"md"}
                    isChecked={
                      detailCombinations.find((c) => c.detail1 === detail)
                        .visible
                    }
                    onChange={(e) => {
                      handleInputChange(
                        "visible",
                        e.target.checked,
                        detail,
                        null
                      );
                    }}
                  />
                </FormControl>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
