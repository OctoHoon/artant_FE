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

type SelectedOption = {
  name: string;
  is_sku_vary: boolean;
  is_price_vary: boolean;
  is_quantity_vary: boolean;
  options: OptionDetail[];
};

type OptionDetail = {
  name: string;
};

type Variant = {
  option_one: string;
  option_two: string;
  sku?: string;
  price?: number;
  quantity?: number;
  visible?: boolean;
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
  const [variations, setVariations] = useState<SelectedOption[]>([
    {
      name: "",
      options: [],
      is_price_vary: false,
      is_quantity_vary: false,
      is_sku_vary: false,
    },
    {
      name: "",
      options: [],
      is_price_vary: false,
      is_quantity_vary: false,
      is_sku_vary: false,
    },
  ]);

  console.log(variations);

  const handleAttributeChange = (
    attribue: string,
    value: boolean,
    variantIndex: number
  ) => {
    const newVariations = [...variations];
    newVariations[variantIndex][attribue] = value;
    setVariations(newVariations);
  };

  const handleTypeChange = (name: string, index: number) => {
    const newVariations = [...variations];
    newVariations[index].name = name;
    setVariations(newVariations);
  };

  const removeVaration = (index: number) => {
    const newVariations = [...variations];
    if (index == 0) {
      newVariations[0] = newVariations[1];
    }
    newVariations[1] = {
      name: "",
      options: [],
      is_price_vary: false,
      is_quantity_vary: false,
      is_sku_vary: false,
    };
    setVariations(newVariations);
  };

  const handleDetailChange = (detail: string, index: number) => {
    const newVariations = [...variations];
    if (!newVariations[index].options.includes({ name: detail })) {
      newVariations[index].options = [
        ...newVariations[index].options,
        { name: detail },
      ];
    }
    setVariations(newVariations);
  };

  const removeDetail = (detail: string, index: number) => {
    const newVariations = [...variations];
    newVariations[index].options = newVariations[index].options.filter(
      (option) => option.name !== detail
    );
    setVariations(newVariations);
  };

  const hasSharedSelectOptions = (options) => {
    const optionKeys: (keyof SelectedOption)[] = [
      "is_sku_vary",
      "is_price_vary",
      "is_quantity_vary",
    ];
    return optionKeys.some((key) => {
      // Check if the property exists and is true on both selected options
      return options[0][key] === true && options[1][key] === true;
    });
  };

  const handleConfirm = () => {
    onOptionsSelected([
      {
        name: variations[0].name,
        options: variations[0].options,
        is_price_vary: variations[0].is_price_vary,
        is_quantity_vary: variations[0].is_quantity_vary,
        is_sku_vary: variations[0].is_sku_vary,
      },
      {
        name: variations[1].name,
        options: variations[1].options,
        is_price_vary: variations[1].is_price_vary,
        is_quantity_vary: variations[1].is_quantity_vary,
        is_sku_vary: variations[1].is_sku_vary,
      },
    ]);
    reset([]);

    if (hasSharedSelectOptions(variations)) {
      const newDetailCombinations: Variant[] = [];

      variations[0]?.options.map((detail1) =>
        variations[1]?.options.map((detail2) =>
          newDetailCombinations.push({
            option_one: detail1.name,
            option_two: detail2.name,
            visible: true,
          })
        )
      );

      setDetailCombinations(newDetailCombinations);
      setIsMix(true);
    } else {
      const newDetailCombinations: Variant[] = [];

      variations[0]?.options.map((detail1) =>
        newDetailCombinations.push({
          option_one: detail1.name,
          visible: true,
          option_two: "",
        })
      );
      variations[1]?.options.map((detail2) =>
        newDetailCombinations.push({
          option_one: detail2.name,
          visible: true,
          option_two: "",
        })
      );

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
    { key: "is_price_vary", text: "에 따라 가격이 다름" },
    { key: "is_quantity_vary", text: "에 따라 재고 수량이 다름" },
    { key: "is_sku_vary", text: "에 따라 SKU가 다름" },
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
              (variations[0].name || index == 0) && (
                <Box key={index} mb="4">
                  {variation.name ? (
                    <Flex margin={"10px"} gap={"8px"}>
                      <Text>{variation.name}</Text>
                      <Text as="u" onClick={() => removeVaration(index)}>
                        삭제
                      </Text>
                    </Flex>
                  ) : (
                    <Select
                      value={variation.name}
                      onChange={(e) => handleTypeChange(e.target.value, index)}
                      width={"200px"}
                      placeholder="옵션 선택"
                    >
                      {Object.keys(options)
                        .filter(
                          (option) => !variations.some((v) => v.name === option)
                        )
                        .map((key) => (
                          <option key={key} value={key}>
                            {key}
                          </option>
                        ))}
                    </Select>
                  )}

                  {variation.name && (
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
                            {variation.name + text}
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
                          placeholder={`${variation.name} 옵션 추가하기`}
                        >
                          {options[variation.name].map((detail) => (
                            <option key={detail} value={detail}>
                              {detail}
                            </option>
                          ))}
                        </Select>
                        {variation.options.map((detail) => (
                          <Flex
                            key={detail.name}
                            m={1}
                            p={2}
                            border="1px solid #ccc"
                            borderRadius="4px"
                          >
                            <Text>{detail.name}</Text>
                            <Button
                              ml={2}
                              size="xs"
                              onClick={() => removeDetail(detail.name, index)}
                            >
                              x
                            </Button>
                          </Flex>
                        ))}
                      </Box>
                    </Flex>
                  )}
                  {variations[0].name && index == 0 && (
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
