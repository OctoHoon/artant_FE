import { Box, Flex, Text } from "@chakra-ui/react";
import Footer from "../components/commons/Footer";
import CartBody from "../components/Cart/CartBody";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../services/userService";

export default function Cart() {
  const { isLoading, data } = useQuery(["Cart"], getCart);
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center horizontally
        justifyContent="center" // Center vertically
        gap={10}
        px={40}
        mt={"32px"}
        mb={"120px"}
      >
        {/* <CartHeader data={!isLoading ? data : null} /> */}
        <CartBody data={data && data} />
      </Box>
    </Box>
  );
}
