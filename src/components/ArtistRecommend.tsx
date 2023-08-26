import { FaStar, FaRegHeart } from "react-icons/fa";
import {
  Box,
  Button,
  Flex,
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
      .get("http://127.0.0.1:8000/api/v1/users/shops")
      .then((response) => {
        setArtistRecommend(response.data); // Update state with API data
      })
      .catch((error) => {
        console.error("Error fetching recently viewed products:", error);
      });
  }, []);
  return (
    <Flex
      flexDirection={"column"}
      gap={"24px"}
      alignItems={"flex-start"}
      width={"1280px"}
    >
      <Text fontSize={"30px"} fontWeight={"500"}>
        판매자 추천
      </Text>
      <Flex alignSelf={"stretch"} justifyContent={"space-between"}>
        {artistRecommend.map((artist: Shop, index) => (
          <Artist
            key={artist.pk}
            pk={artist.pk}
            source={artist.avatar}
            name={artist.shop_name}
            description={"작가"}
          />
        ))}
      </Flex>
    </Flex>
  );
}
