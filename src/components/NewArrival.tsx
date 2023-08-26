import { Box, Flex, Grid, Text } from "@chakra-ui/react";

import NewArrivalPiece from "./NewArrivalPiece";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getProductsNew } from "../api";

interface Product {
  pk: number;
  name: string;
  price: number;
  original_price: number;
  thumbnail: string; // Adjust this according to your API response
}

export default function NewArrival() {
  const [newArrival, setNewArrival] = useState([]);

  useEffect(() => {
    // Make the API request when the component mounts
    axios
      .get("http://127.0.0.1:8000/api/v1/products/?sort=created_at&limit=3")
      .then((response) => {
        console.log("API Response:", response.data);
        setNewArrival(response.data["products"]); // Update state with API data
      })
      .catch((error) => {
        console.error("Error fetching recently viewed products:", error);
      });
  }, []); //

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
          {data.map((art: Product, index) => (
            <NewArrivalPiece
              key={art.pk}
              pk={art.pk}
              source={art.thumbnail}
              price={art.price}
              originalPrice={art.original_price}
            />
          ))}
        </Grid>
      )}
    </Flex>
  );
}
