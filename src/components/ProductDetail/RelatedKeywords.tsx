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
import ArtPiece from "../ArtPiece";
import Collection from "../Collection";
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
    <Box my={10} maxW="1216px">
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize={"30px"} as="b">
          관련 검색어
        </Text>
      </Flex>
      <Box height={"24px"} />

      <Flex width="1216px">
        {arts.map((art, index) => (
          <Box marginRight={"24px"}>
            <RelatedKeyword />
          </Box>
        ))}
      </Flex>
      <Box height={"48px"} />
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize={"30px"} as="b">
          더 많은 관련 검색어
        </Text>
      </Flex>
      <Box height={"24px"} />
      <Flex width="1216px">
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
      <Box height="48px" />
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
    </Box>
  );
}
