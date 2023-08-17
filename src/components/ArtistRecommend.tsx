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
import Artist from "./Artist";
import { useEffect, useState } from "react";
import axios from "axios";

interface Shop {
  pk: number;
  shop_name: string;
  avatar: string;
  background_pic: string;
}

export default function ArtistRecommend() {
  const [artistRecommend, setArtistRecommend] = useState([]);
  useEffect(() => {
    // Make the API request when the component mounts
    axios
      .get("http://127.0.0.1:8000/api/v1/users/shop")
      .then((response) => {
        setArtistRecommend(response.data); // Update state with API data
      })
      .catch((error) => {
        console.error("Error fetching recently viewed products:", error);
      });
  }, []);
  return (
    <Box my={10}>
      <Text fontSize={"30px"} as="b" mx={180}>
        판매자 추천
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
        {artistRecommend.map((artist: Shop, index) => (
          <Artist
            key={artist.pk}
            source={artist.avatar}
            name={artist.shop_name}
            description={"작가"}
          />
        ))}
      </Grid>
    </Box>
  );
}
