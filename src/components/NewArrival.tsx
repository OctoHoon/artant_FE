import { Box, Grid, Text } from "@chakra-ui/react";

import NewArrivalPiece from "./NewArrivalPiece";
import { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <Box alignItems={"center"} justifyContent={"center"}>
      <Text fontSize={"30px"} as="b" mx={180}>
        New Arrivals
      </Text>
      <Grid
        mt={10}
        px={{
          base: 10,
          lg: 40,
        }}
        columnGap={4}
        rowGap={8}
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
        }}
      >
        {newArrival.map((art: Product, index) => (
          <NewArrivalPiece
            key={art.pk}
            pk={art.pk}
            source={art.thumbnail}
            price={art.price}
            originalPrice={art.original_price}
          />
        ))}
      </Grid>
      <Box height="50px" />
    </Box>
  );
}
