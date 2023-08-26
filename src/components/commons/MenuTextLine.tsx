import { Flex, Box } from "@chakra-ui/react";

export default function MenuTextLine({ title, isSelected }) {
  return (
    <Flex width={"207px"} flexDirection={"column"}>
      <Flex
        padding={"9px 8px 9px 0px"}
        alignItems={"flex-start"}
        alignSelf={"stretch"}
      >
        <Box padding={"0px 10px"} fontWeight={"500"}>
          {title}
        </Box>
      </Flex>
      {isSelected ? (
        <Box alignSelf={"stretch"} height={"1px"} background="black" />
      ) : null}
    </Flex>
  );
}
