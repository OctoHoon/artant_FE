import { Flex, Text, Wrap } from "@chakra-ui/react";
import ArtPiece from "../commons/Card/ArtPiece";
import { useQuery } from "@tanstack/react-query";
import { getProductsRecommended } from "../../services/productService";

interface Product {
  pk: number;
  name: string;
  original_price: number;
  rating: number;
  rating_count: number;
  price: number;
  thumbnail: string; // Adjust this according to your API response
  category: string;
  shop_name: string;
  is_best_seller: boolean;
  free_shipping: boolean;
  is_liked: boolean;
}

export default function ArtantRecommend() {
  const { isLoading, data } = useQuery(
    ["ProductsRecommended"],
    getProductsRecommended
  );

  return (
    <Flex
      flexDirection={"column"}
      gap={"24px"}
      alignItems={"flex-start"}
      width={"1280px"}
    >
      <Text fontSize={"30px"} fontWeight={"500"}>
        아트앤트 추천 작품
      </Text>

      {isLoading ? null : (
        <Wrap
          display="inline-flex"
          width={"1280px"}
          alignItems={"flex-start"}
          alignContent={"flex-start"}
          spacing={"40px"}
        >
          {data.map((art: Product, index) => (
            <ArtPiece
              pk={art.pk}
              source={art.thumbnail}
              category={art.category}
              title={art.name}
              description=""
              artist={art.shop_name}
              star={art.rating}
              reviews={art.rating_count}
              price={art.price}
              originalPrice={art.original_price}
              free_shipping={art.free_shipping}
              is_best_seller={art.is_best_seller}
              is_liked={art.is_liked}
              key={index}
            />
          ))}
        </Wrap>
      )}
    </Flex>
  );
}
