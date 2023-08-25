import { Flex, Text } from "@chakra-ui/react";

export default function MessageTab({ tabname, count }) {
  return (
    <Flex
      width={"248px"}
      padding={"9px 8px 9px 0px"}
      justifyContent={"space-between"}
    >
      <Text>{tabname}</Text>
      <Text>{count}</Text>
    </Flex>
  );
}
