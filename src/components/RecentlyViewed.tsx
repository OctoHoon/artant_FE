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
  Wrap,
} from "@chakra-ui/react";
import ArtPiece from "./commons/Card/ArtPiece";
import PdpCard from "./commons/Card/PdpCard";
import ProductSmallCard from "./commons/Card/ProductSmallCard";
import CardSmall from "./commons/Card/CardSmall";
import { useQuery } from "@tanstack/react-query";
import { getRecentlyViewedProducts } from "../api";
import useUser from "../lib/useUser";

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
  free_shipping: boolean;
  is_liked: boolean;
}

export default function RecentlyViewed({ title }) {
  const { isLoading, data } = useQuery(
    ["RecentlyViewedProducts"],
    getRecentlyViewedProducts
  );
  const arts = [
    {
      pk: 1,
      source: "/assets/images/card_image_custom.png",
      category: "Print",
      title: "우리의 꿈은",
      description: "애니메이션화, CG, 스타 서정배",
      artist: "김성은",
      star: 4,
      reviews: 2532,
      price: 100000,
      originalPrice: 200000,
      free_shipping: true,
      is_best_seller: false,
      is_liked: true,
    },
    {
      pk: 2,
      source: "/assets/images/card_image_custom-1.png",
      category: "Print",
      title: "우리의 꿈은",
      description: "애니메이션화, CG, 스타 서정배",
      artist: "김성은",
      star: 4,
      reviews: 2532,
      price: 100000,
      originalPrice: 200000,
      free_shipping: true,
      is_best_seller: false,
      is_liked: true,
    },
    {
      pk: 3,
      source: "/assets/images/card_image_custom-2.png",
      category: "Print",
      title: "우리의 꿈은",
      description: "애니메이션화, CG, 스타 서정배",
      artist: "김성은",
      star: 4,
      reviews: 2532,
      price: 100000,
      originalPrice: 200000,
      free_shipping: false,
      is_best_seller: true,
      is_liked: true,
    },
    {
      pk: 4,
      source: "/assets/images/card_image_custom-3.png",
      category: "Print",
      title: "우리의 꿈은",
      description: "애니메이션화, CG, 스타 서정배",
      artist: "김성은",
      star: 2,
      reviews: 2532,
      price: 120000,
      originalPrice: 200000,
      free_shipping: true,
      is_best_seller: true,
      is_liked: false,
    },
    {
      pk: 1,
      source: "/assets/images/card_image_custom.png",
      category: "Print",
      title: "우리의 꿈은",
      description: "애니메이션화, CG, 스타 서정배",
      artist: "김성은",
      star: 4,
      reviews: 2532,
      price: 100000,
      originalPrice: 200000,
      free_shipping: true,
      is_best_seller: false,
      is_liked: true,
    },
    {
      pk: 2,
      source: "/assets/images/card_image_custom-1.png",
      category: "Print",
      title: "우리의 꿈은",
      description: "애니메이션화, CG, 스타 서정배",
      artist: "김성은",
      star: 4,
      reviews: 2532,
      price: 100000,
      originalPrice: 200000,
      free_shipping: true,
      is_best_seller: false,
      is_liked: true,
    },
    {
      pk: 3,
      source: "/assets/images/card_image_custom-2.png",
      category: "Print",
      title: "우리의 꿈은",
      description: "애니메이션화, CG, 스타 서정배",
      artist: "김성은",
      star: 4,
      reviews: 2532,
      price: 100000,
      originalPrice: 200000,
      free_shipping: false,
      is_best_seller: true,
      is_liked: true,
    },
    {
      pk: 4,
      source: "/assets/images/card_image_custom-3.png",
      category: "Print",
      title: "우리의 꿈은",
      description: "애니메이션화, CG, 스타 서정배",
      artist: "김성은",
      star: 2,
      reviews: 2532,
      price: 120000,
      originalPrice: 200000,
      free_shipping: true,
      is_best_seller: true,
      is_liked: false,
    },
  ];
  return (
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
