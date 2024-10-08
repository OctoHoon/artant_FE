import { Flex, Text, Wrap } from "@chakra-ui/react";
import CardSmall from "./commons/Card/CardSmall";
import { useQuery } from "@tanstack/react-query";
import { getRecentlyViewedProducts } from "../services/userService";

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
  is_star_seller: boolean;
  is_free_shipping: boolean;
  is_liked: boolean;
}

export default function RecentlyViewed({ title }) {
  const { isLoading, data } = useQuery(
    ["RecentlyViewedProducts"],
    getRecentlyViewedProducts
  );

  return (
    <>
      {data && data.length >= 1 && (
        <Flex
          flexDirection={"column"}
          gap={"24px"}
          alignItems={"flex-start"}
          width={"1280px"}
        >
          <Text fontSize={"30px"} fontWeight={"500"}>
            {title}
          </Text>

          {isLoading || !data ? null : (
            <Wrap spacing={"45px"}>
              {data.slice(0, 5).map((art: Product, index) => (
                <CardSmall
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
                  is_free_shipping={art.is_free_shipping}
                  is_best_seller={art.is_best_seller}
                  is_liked={art.is_liked}
                  key={index}
                />
              ))}
            </Wrap>
          )}
        </Flex>
      )}
    </>
  );
}
