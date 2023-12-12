import { Box, Flex } from "@chakra-ui/react";
import PaymentPanel from "./PaymentPanel";
import ReceiverInfo from "./ReceiverInfo";
import ProductInfo from "./ProductInfo";
import DiscountInfo from "./DiscountInfo";
import PointInfo from "./PointInfo";
import PayInfo from "./PayInfo";

export default function PaymentBody({ data }) {
  return (
    <Flex gap="40px" marginBottom={"40px"}>
      <Box width="828px">
        <Flex flexDirection={"column"} gap="40px" alignSelf={"stretch"}>
          <ReceiverInfo />
          <ProductInfo data={data && data} />

          <DiscountInfo data={data && data} />
          <PointInfo />
          <PayInfo data={data && data} />
        </Flex>
      </Box>
      <PaymentPanel data={data && data} />
    </Flex>
  );
}
