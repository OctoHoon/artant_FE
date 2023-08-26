import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/commons/Header";
import CategoryHeader from "../components/commons/CategoryHeader";

export default function Root() {
  return (
    <Flex flexDirection="column" justifyContent={"center"} alignItems="center">
      <Header />
      <Box alignSelf={"stretch"} height={"1px"} background="#F1F1F5"></Box>
      <CategoryHeader />
      <Outlet />
    </Flex>
  );
}
