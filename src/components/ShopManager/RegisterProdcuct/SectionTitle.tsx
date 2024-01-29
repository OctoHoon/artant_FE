import { Flex, Text } from "@chakra-ui/react";

export default function SectionTitle({
  title,
  description,
  link,
  isOption = false,
}) {
  return (
    <Flex
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"6px"}
      alignSelf={"stretch"}
    >
      <Flex alignItems={"center"} width={"234px"}>
        <Text textStyle={"B14M"}>{title}</Text>
        {isOption && <Text textStyle={"B13R"}>(선택사항)</Text>}
      </Flex>
      <Flex gap={"24px"}>
        <Text
          color="var(--maincolorstextgray-595959, #666)"
          textStyle={"B13R"}
          lineHeight="140%"
        >
          {description}
        </Text>
        <Text
          textStyle={"B13R"}
          textDecorationLine="underline"
          cursor="pointer"
          lineHeight="140%"
        >
          {link}
        </Text>
      </Flex>
    </Flex>
  );
}
