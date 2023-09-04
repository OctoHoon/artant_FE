import { Box } from "@chakra-ui/react";
import CartHeader from "../components/Cart/CartHeader";
import CartBody from "../components/Cart/CartBody";
import PaymentHeader from "../components/Payment/PaymentHeader";
import PaymentBody from "../components/Payment/PaymentBody";
import DiscountInfo from "../components/Payment/DiscountInfo";

export default function Payment() {
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
        <PaymentHeader />
        <PaymentBody />
      </Box>
    </Box>
  );
}
