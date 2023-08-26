import { Box, Flex, Text } from "@chakra-ui/react";
import SearchBar from "../commons/SearchBar";

export default function AccountHeader() {
  return (
    <Flex width={"1280px"} alignContent={"center"} alignItems={"baseline"}>
      <Text fontSize={"30px"}>홍길동 님</Text>
      <Text fontSize={"20px"}>의 계정관리</Text>
    </Flex>
  );
}
