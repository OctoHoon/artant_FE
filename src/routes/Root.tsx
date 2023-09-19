import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/commons/Header";
import CategoryHeader from "../components/commons/CategoryHeader";
import Footer from "../components/commons/Footer";
import ScrollToTop from "../components/commons/ScrollToTop";

export default function Root() {
  return (
    <Flex flexDirection="column" justifyContent={"center"} alignItems="center">
      <ScrollToTop />
      <Header />
      <Box alignSelf={"stretch"} height={"1px"} background="#F1F1F5"></Box>
      <CategoryHeader />
      <Outlet />
      <Box height={"120px"} />
      <Footer />
    </Flex>
  );
}
