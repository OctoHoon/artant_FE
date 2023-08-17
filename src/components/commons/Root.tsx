import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CategoryHeader from "../CategoryHeader";

export default function Root() {
  return (
    <Box>
      <Header />
      <CategoryHeader />
      <Outlet />
    </Box>
  );
}
