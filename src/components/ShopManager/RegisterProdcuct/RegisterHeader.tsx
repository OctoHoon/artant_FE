import { Flex, Text } from "@chakra-ui/react";

export default function RegisterHeader({ title, description }) {
  return (
    <Flex
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"4px"}
    >
      <Text textStyle={"H3R"}>{title}</Text>
      <Text textStyle={"B14R"}>{description}</Text>
    </Flex>
  );
}
