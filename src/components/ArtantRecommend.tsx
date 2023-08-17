import { FaStar, FaRegHeart } from "react-icons/fa";
import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import ArtPiece from "./ArtPiece";
import axios from "axios";
import { useEffect, useState } from "react";

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
}

export default function ArtantRecommend() {
  const [artantRecommend, setArtantRecommend] = useState([]);

  useEffect(() => {
    // Make the API request when the component mounts
    axios
      .get("http://127.0.0.1:8000/api/v1/products/?sort=order&limit=8")
      .then((response) => {
        console.log("API Response:", response.data);
        setArtantRecommend(response.data["products"]); // Update state with API data
      })
      .catch((error) => {
        console.error("Error fetching recently viewed products:", error);
      });
  }, []);
  return (
    <Box alignItems={"center"} justifyContent={"center"}>
      <Text fontSize={"30px"} as="b" mx={180}>
        아트앤트 추천 작품
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
          xl: "repeat(4, 1fr)",
        }}
      >
        {artantRecommend.map((art: Product, index) => (
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
            key={index}
          />
        ))}
      </Grid>
      <Box height="50px" />
    </Box>
  );
}
