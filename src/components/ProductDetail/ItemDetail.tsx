import { Box, Flex } from "@chakra-ui/react";
import ProductImage from "./ProductImage";
import ReviewSection from "./Review/ReviewSection";
import ProductPanel from "./ProductPanel";
import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../../services/productService";
import { useParams } from "react-router-dom";

export default function ItemDetailPage({ shop_pk, is_liked }) {
  const { pk } = useParams();
  const { isLoading, data } = useQuery(["products", pk], getProductDetails);

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
      {data ? <ProductPanel data={data} pk={pk} /> : <Box width={"500"} />}
    </Flex>
  );
}
