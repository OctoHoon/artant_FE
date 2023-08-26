import { Box, Flex, Text } from "@chakra-ui/react";
import Footer from "../components/commons/Footer";
import CartHeader from "../components/Cart/CartHeader";
import CartBody from "../components/Cart/CartBody";

export default function Cart() {
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
        <CartHeader />
        <CartBody />

        <Footer />
      </Box>
    </Box>
  );
}
