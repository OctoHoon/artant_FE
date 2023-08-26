import { FaStar, FaRegHeart } from "react-icons/fa";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import ArtPiece from "../commons/Card/ArtPiece";
import Collection from "../commons/Card/Collection";
import RelatedKeyword from "../RelatedKeyword";

const images = [
  "https://i.etsystatic.com/38936109/r/il/885c66/5074138856/il_1588xN.5074138856_o7f8.jpg",
  "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
  "https://i.etsystatic.com/38936109/r/il/885c66/5074138856/il_1588xN.5074138856_o7f8.jpg",
  "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
];

export default function RelatedKeywords() {
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
    },
    {
      pk: 2,
      source: "http://localhost:3000/assets/images/card_image_custom-1.png",
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
    },
  ];
  return (
    <Box maxW="1280px">
      <Flex flexDirection={"column"} gap={"80px"}>
        <Flex flexDirection={"column"} gap={"24px"}>
          <Text fontSize={"24px"} fontWeight={"500"}>
            관련 검색어
          </Text>
          <Flex width="1280px" gap={"32px"}>
            {arts.map((art, index) => (
              <RelatedKeyword width={"60px"} height={"60px"} />
            ))}
          </Flex>
        </Flex>

        <Flex flexDirection={"column"} gap={"24px"}>
          <Text fontSize={"24px"} fontWeight={"500"}>
            더 많은 관련 검색어
          </Text>
          <Flex width="1280px">
            {arts.map((art, index) => (
              <Box
                marginRight={"8px"}
                border="1px solid #5365AE"
                padding={"12px 24px"}
                color={"#5365AE"}
                borderRadius={"5px"}
                width={"127px"}
                textAlign={"center"}
              >
                {art.artist}
              </Box>
            ))}
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} gap={"16px"}>
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Flex alignItems={"center"}>
                <Text fontSize={"14px"}>2023년 8월 14일 상장</Text>
                <Box width="6px" />
                <Text as="u">1901 즐겨찾기</Text>
              </Flex>
            </Box>
            <Text>아트앤트에 이 항목 신고</Text>
          </Flex>
          <Text>
            아트앤트/프린트/{""}
            <Text as="u">수채화</Text>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
