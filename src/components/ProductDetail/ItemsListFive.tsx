import { Flex, Text } from "@chakra-ui/react";
import PdpCard from "../commons/Card/PdpCard";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getShopProducts } from "../../services/shopService";

export default function ItemListFive({ title, shop_pk }) {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery(
    ["shopProduct", shop_pk, page],
    getShopProducts
  );

  // Use shopProductData here
  return (
    <Flex
      flexDirection={"column"}
      gap={"20px"}
      alignItems={"flex-start"}
      width={"1280px"}
    >
      <Text fontSize={"24px"} fontWeight={"500"}>
        {title}
      </Text>
      <Flex gap={"20px"} flexWrap={"wrap"}>
        {!isLoading && data
          ? data.products
              .slice(0, 5)
              .map((product, index) => (
                <PdpCard
                  pk={product.pk}
                  source={product.thumbnail}
                  title={product.name}
                  description={""}
                  artist={product.shop_name}
                  price={product.price}
                  originalPrice={product.original_price}
                  is_free_shipping={product.is_free_shipping}
                  is_best_seller={product.is_best_seller}
                  is_liked={product.is_liked}
                  key={index}
                />
              ))
          : null}
      </Flex>
    </Flex>
  );
}
