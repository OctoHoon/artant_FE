import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import ShopManagerSideBar from "./ShopManagerSideBar";
import Header from "../commons/Header";
import Footer from "../commons/Footer";

export default function Root() {
  return (
    <Flex w={"full"} gap={"60px"} justifyContent={"center"}>
      <ShopManagerSideBar />

      <Flex alignSelf={"center"}>
        {/* Outlet 내용이 이곳에 위치할 것입니다 */}
        <Outlet />
      </Flex>
    </Flex>
  );
}
