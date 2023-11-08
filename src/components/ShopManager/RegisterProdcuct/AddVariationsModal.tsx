import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Select,
  Box,
  Flex,
  Divider,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

type OptionCategory = "Primary Color" | "Secondary Color" | "Size" | "Material";

type Variation = {
  type: string;
  details: string[];
  selectPrice: boolean;
  selectQuantity: boolean;
  selectSku: boolean;
};

type DetailCombination = {
  detail1: string;
  detail2: string;
  price?: number;
  quantity?: number;
  sku?: string;
  visible?: boolean;
};

type SelectedOption = {
  variation: OptionCategory;
  detail: string[];
  selectPrice: boolean;
  selectQuantity: boolean;
  selectSku: boolean;
};

export default function AddVariationModal({
  finalRef,
  isOpen,
  onClose,
  onOptionsSelected,
  reset,
  setDetailCombinations,
  setIsMix,
}) {
  const [variations, setVariations] = useState<Variation[]>([
    {
      type: "",
      details: [],
      selectPrice: false,
      selectQuantity: false,
      selectSku: false,
    },
    {
      type: "",
      details: [],
      selectPrice: false,
      selectQuantity: false,
      selectSku: false,
    },
  ]);

  const handleAttributeChange = (
    attribue: string,
    value: boolean,
    variantIndex: number
  ) => {
    const newVariations = [...variations];
    newVariations[variantIndex][attribue] = value;
    setVariations(newVariations);
  };

  const handleTypeChange = (type: string, index: number) => {
    const newVariations = [...variations];
    newVariations[index].type = type;
    setVariations(newVariations);
  };

  const removeVaration = (index: number) => {
    const newVariations = [...variations];
    const empty = {
      type: "",
      details: [],
      selectPrice: false,
      selectQuantity: false,
      selectSku: false,
    };
    if (index == 0) {
      newVariations[0] = newVariations[1];
    }
    newVariations[1] = empty;
    setVariations(newVariations);
  };

  const handleDetailChange = (detail: string, index: number) => {
    const newVariations = [...variations];
    if (!newVariations[index].details.includes(detail)) {
      newVariations[index].details = [...newVariations[index].details, detail];
    }
    setVariations(newVariations);
  };

  const removeDetail = (detail: string, index: number) => {
    const newVariations = [...variations];
    newVariations[index].details = newVariations[index].details.filter(
      (d) => d !== detail
    );
    setVariations(newVariations);
  };

  const hasSharedSelectOptions = (options) => {
    const optionKeys: (keyof SelectedOption)[] = [
      "selectPrice",
      "selectQuantity",
      "selectSku",
    ];
    return optionKeys.some((key) => {
      // Check if the property exists and is true on both selected options
      return options[0][key] === true && options[1][key] === true;
    });
  };

  const handleConfirm = () => {
    onOptionsSelected([
      {
        variation: variations[0].type,
        detail: variations[0].details,
        selectPrice: variations[0].selectPrice,
        selectQuantity: variations[0].selectQuantity,
        selectSku: variations[0].selectSku,
      },
      {
        variation: variations[1].type,
        detail: variations[1].details,
        selectPrice: variations[1].selectPrice,
        selectQuantity: variations[1].selectQuantity,
        selectSku: variations[1].selectSku,
      },
    ]);
    reset([]);

    if (hasSharedSelectOptions(variations)) {
      const newDetailCombinations: DetailCombination[] = [];
      {
        variations[0]?.details.map((detail1) =>
          variations[1]?.details.map((detail2) =>
            newDetailCombinations.push({
              detail1: detail1,
              detail2: detail2,
              visible: true,
            })
          )
        );
      }
      setDetailCombinations(newDetailCombinations);
      setIsMix(true);
    } else {
      const newDetailCombinations: DetailCombination[] = [];
      {
        variations[0]?.details.map((detail1) =>
          newDetailCombinations.push({
            detail1: detail1,
            visible: true,
            detail2: "",
          })
        );
        variations[1]?.details.map((detail2) =>
          newDetailCombinations.push({
            detail1: detail2,
            visible: true,
            detail2: "",
          })
        );
      }
      setDetailCombinations(newDetailCombinations);
      setIsMix(false);
    }
    onClose();
  };

  const options = {
    "Primary Color": ["Red", "Blue", "Green"],
    "Secondary Color": ["Yellow", "Purple", "Orange"],
    Size: ["Small", "Medium", "Large"],
    Material: ["Cotton", "Silk", "Leather"],
  };

  const checkboxOptions = [
    { key: "selectPrice", text: "에 따라 가격이 다름" },
    { key: "selectQuantity", text: "에 따라 재고 수량이 다름" },
    { key: "selectSku", text: "에 따라 SKU가 다름" },
  ];

  return (
    <Modal
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={"xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>옵션 추가</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>당신이 제공하는 옵션들을 작성해주세요.</Text>
          <Text>옵션 추가하기</Text>
          {variations.map(
            (variation, index) =>
              (variations[0].type || index == 0) && (
                <Box key={index} mb="4">
                  {variation.type ? (
                    <Flex margin={"10px"} gap={"8px"}>
                      <Text>{variation.type}</Text>
                      <Text as="u" onClick={() => removeVaration(index)}>
                        삭제
                      </Text>
                    </Flex>
                  ) : (
                    <Select
                      value={variation.type}
                      onChange={(e) => handleTypeChange(e.target.value, index)}
                      width={"200px"}
                      placeholder="옵션 선택"
                    >
                      {Object.keys(options)
                        .filter(
                          (option) => !variations.some((v) => v.type === option)
                        )
                        .map((key) => (
                          <option key={key} value={key}>
                            {key}
                          </option>
                        ))}
                    </Select>
                  )}

                  {variation.type && (
                    <>
                      <Flex justifyContent={"space-between"}>
                        <Stack spacing={5} direction="column">
                          {checkboxOptions.map(({ key, text }) => (
                            <Checkbox
                              key={key} // Unique key for each checkbox
                              isChecked={variation[key]}
                              onChange={(e) =>
                                handleAttributeChange(
                                  key,
                                  e.target.checked,
                                  index
                                )
                              }
                            >
                              {variation.type + text}
                            </Checkbox>
                          ))}
                        </Stack>
                        <Box>
                          <Select
                            onChange={(e) =>
                              handleDetailChange(e.target.value, index)
                            }
                            width={"200px"}
                            mt="2"
                            placeholder={`${variation.type} 옵션 추가하기`}
                          >
                            {options[variation.type].map((detail) => (
                              <option key={detail} value={detail}>
                                {detail}
                              </option>
                            ))}
                          </Select>
                          {variation.details.map((detail) => (
                            <Flex
                              key={detail}
                              m={1}
                              p={2}
                              border="1px solid #ccc"
                              borderRadius="4px"
                            >
                              <Text>{detail}</Text>
                              <Button
                                ml={2}
                                size="xs"
                                onClick={() => removeDetail(detail, index)}
                              >
                                x
                              </Button>
                            </Flex>
                          ))}
                        </Box>
                      </Flex>
                    </>
                  )}
                  {variations[0].type && index == 0 && (
                    <Box marginTop={"20px"}>
                      <Divider />
                    </Box>
                  )}
                </Box>
              )
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            닫기
          </Button>
          <Button variant="ghost" onClick={handleConfirm}>
            업데이트
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
