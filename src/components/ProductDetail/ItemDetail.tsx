import { Flex } from "@chakra-ui/react";
import ProductImage from "./ProductImage";
import ReviewSection from "./Review/ReviewSection";
import ProductPanel from "./ProductPanel";

export default function ItemDetailPage({ shop_pk, is_liked }) {
  return (
    <Flex justifyContent={"center"} gap="40px">
      <Flex
        width="828px"
        flexDirection={"column"}
        gap={"80px"}
        alignItems={"flex-start"}
      >
        <ProductImage is_liked={is_liked} />
        <ReviewSection shop_pk={shop_pk} />
      </Flex>
      <ProductPanel />
    </Flex>
  );
}
