import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import NewArrivalCard from "../commons/Card/NewArrivalCard";
import { getProductsNew } from "../../services/productService";

interface Product {
  pk: number;
  name: string;
  price: number;
  original_price: number;
  thumbnail: string; // Adjust this according to your API response
}

export default function NewArrival() {
  const { isLoading, data } = useQuery(["ProductsNew"], getProductsNew);

  return (
    <Flex
      flexDirection={"column"}
      gap={"24px"}
      alignItems={"flex-start"}
      width={"1280px"}
    >
      <Text fontSize={"30px"} fontWeight={"500"}>
        New Arrivals
      </Text>
      {isLoading ? null : (
        <Grid
          gap={"40px"}
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
          }}
        >
          {data.map((art, index) => (
            <NewArrivalCard
              key={art.pk}
              pk={art.pk}
              source={art.thumbnail}
              price={art.price}
              originalPrice={art.original_price}
              is_liked={art.is_liked}
            />
          ))}
        </Grid>
      )}
    </Flex>
  );
}
