import { Box, Flex, Text } from "@chakra-ui/react";
import Footer from "../components/commons/Footer";
import CartHeader from "../components/Cart/CartHeader";
import CartBody from "../components/Cart/CartBody";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api";

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
      >
        <CartHeader data={!isLoading ? data : null} />
        <CartBody data={!isLoading ? data : null} />
      </Box>
    </Box>
  );
}
