import { Text } from "@chakra-ui/react";

export default function ValidationMessage({ message, isValid }) {
  return (
    <Text
      marginTop={"-10px"}
      textStyle="B13R"
      color={isValid ? "blue.300" : "red.300"}
    >
      {message}
    </Text>
  );
}
