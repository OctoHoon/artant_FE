import React, { useEffect, useRef, useState } from "react";
import {
  Radio,
  RadioGroup,
  Stack,
  Flex,
  Input,
  Text,
  Box,
} from "@chakra-ui/react";

export default function FilterPrice({ isOpen, onClose, onPriceChange }) {
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const minPriceInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Handle the case when the user inputs custom values directly
    if (selectedOption === "custom") {
      onPriceChange(minPrice, maxPrice);
    }
  }, [selectedOption, minPrice, maxPrice, onPriceChange]);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setMaxPrice(value);
  };

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
    onPriceChange(value, minPrice, maxPrice);
    onClose();

    if (value === "custom") {
      // Focus on the first input when "custom" is selected
      minPriceInputRef.current?.focus();
    }
    if (value !== "custom") {
      // Clear input fields when another option is selected
      setMinPrice(0);
      setMaxPrice(0);
    }
    if (value === "option1") {
      onPriceChange(undefined, undefined);
    } else if (value === "option2") {
      onPriceChange(undefined, 50000);
    } else if (value === "option3") {
      onPriceChange(50000, 100000);
    } else if (value === "option4") {
      onPriceChange(100000, 300000);
    }
  };

  const handleInputClick = () => {
    setSelectedOption("custom");
  };

  const options = [
    { value: "option1", label: "모든 가격" },
    { value: "option2", label: "5만원 미만" },
    { value: "option3", label: "5만원 ~ 10만원" },
    { value: "option4", label: "10만원 ~ 30만원" },
    { value: "custom", label: "직접 입력" },
  ];

  return (
    <RadioGroup value={selectedOption} defaultValue="option1">
      <Stack>
        {options.map((option) => (
          <Radio
            key={option.value}
            value={option.value}
            onChange={() => handleRadioChange(option.value)}
            color="#666666"
          >
            {option.label}
          </Radio>
        ))}
      </Stack>
      <Box height="10px" />
      <Flex direction="row" alignItems="center" marginLeft="20px">
        <Input
          type="number"
          placeholder="Low"
          value={minPrice}
          onChange={handleMinPriceChange}
          mr="2"
          width="100px"
          ref={minPriceInputRef}
          onClick={handleInputClick}
        />
        <Box width="5px" />
        <Text color="#666666">~</Text>
        <Box width="10px" />
        <Input
          type="number"
          placeholder="High"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          onClick={handleInputClick}
          width="100px"
        />
      </Flex>
    </RadioGroup>
  );
}
