import React, { useState } from "react";
import { Checkbox, Button, VStack, Flex } from "@chakra-ui/react";
import { FaAngleUp, FaAngleDown, FaCaretDown, FaCaretUp } from "react-icons/fa"; // Import arrow icons
import { shipping_options } from "../../data/options";

export default function ShippingOption() {
  return (
    <VStack spacing="2" align="start">
      {shipping_options.map((option) => (
        <Checkbox key={option} value={option} color="#666666">
          {option}
        </Checkbox>
      ))}
    </VStack>
  );
}
