import React, { useState } from "react";
import { Checkbox, Button, VStack, Flex } from "@chakra-ui/react";
import { FaAngleUp, FaAngleDown, FaCaretDown, FaCaretUp } from "react-icons/fa"; // Import arrow icons
import { color_options } from "../../data/options";

export default function CheckboxOptionsComponent() {
  const [showAllOptions, setShowAllOptions] = useState(false);
  const visibleOptions = showAllOptions
    ? color_options
    : color_options.slice(0, 6);

  const handleShowMoreClick = () => {
    setShowAllOptions(!showAllOptions);
  };

  return (
    <VStack spacing="2" align="start">
      {visibleOptions.map((option) => (
        <Checkbox key={option} value={option} color="#666666">
          {option}
        </Checkbox>
      ))}
      <Flex justify="start">
        <Button
          colorScheme="white"
          onClick={handleShowMoreClick}
          rightIcon={showAllOptions ? <FaCaretUp /> : <FaCaretDown />}
          color="#666666"
          fontFamily="Spoqa Han Sans Neo"
          fontSize="13px"
          fontWeight={400}
          lineHeight="16px"
          letterSpacing="-0.3px"
        >
          {showAllOptions ? "간략히 보기" : "자세히 보기"}
        </Button>
      </Flex>
    </VStack>
  );
}
