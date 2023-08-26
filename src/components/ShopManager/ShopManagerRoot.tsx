import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import CategoryHeader from "../CategoryHeader";
import ShopManagerSideBar from "./ShopManagerSideBar";

export default function Root() {
  return (
    <Flex>
      <ShopManagerSideBar />

      <Box flex="1" overflowY="auto">
        {/* Outlet 내용이 이곳에 위치할 것입니다 */}
        <Outlet />
      </Box>
    </Flex>
  );
}
