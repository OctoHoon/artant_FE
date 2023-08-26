import { Box } from "@chakra-ui/react";
import Footer from "../components/commons/Footer";
import CartHeader from "../components/Cart/CartHeader";
import CartBody from "../components/Cart/CartBody";
import PaymentHeader from "../components/Payment/PaymentHeader";
import PaymentBody from "../components/Payment/PaymentBody";
import DiscountInfo from "../components/Payment/DiscountInfo";
import MessagesHeader from "../components/Messages/MessagesHeader";
import MessagesBody from "../components/Messages/MessagesBody";

export default function Messages() {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center horizontally
        justifyContent="center" // Center vertically
        gap={"20px"}
        px={40}
      >
        <MessagesHeader />
        <MessagesBody />

        <Footer />
      </Box>
    </Box>
  );
}
