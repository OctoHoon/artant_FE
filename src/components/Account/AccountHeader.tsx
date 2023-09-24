import { Box, Flex, Text } from "@chakra-ui/react";
import SearchBar from "../commons/SearchBar";
import useUser from "../../lib/useUser";

export default function AccountHeader() {
  const { userLoading, isLoggedIn, user } = useUser();
  return (
    <Flex width={"1280px"} alignContent={"center"} alignItems={"baseline"}>
      <Text fontSize={"30px"}>{user && user.name} 님</Text>
      <Text fontSize={"20px"}>의 계정관리</Text>
    </Flex>
  );
}
