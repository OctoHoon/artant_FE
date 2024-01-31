import { Flex, Text } from "@chakra-ui/react";

export default function RegisterProductHeader({ title, subtitle }) {
  return (
    <Flex
      display={"flex"}
      height={"68px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"12px"}
    >
      {" "}
      <Text textStyle={"H2R"} letterSpacing="0.5px">
        {title}
      </Text>
      <Text textStyle={"B14R"}>{subtitle}</Text>
    </Flex>
  );
}
