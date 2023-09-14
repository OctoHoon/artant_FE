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
import { Link } from "react-router-dom";

const images = [
  "https://i.etsystatic.com/38936109/r/il/885c66/5074138856/il_1588xN.5074138856_o7f8.jpg",
  "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
  "https://i.etsystatic.com/38936109/r/il/885c66/5074138856/il_1588xN.5074138856_o7f8.jpg",
  "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
];

export default function RelatedKeywords({ category, subCategory }) {
  const arts = [
    {
      name: "모란 수채화",
    },
    {
      name: "수채화 꽃 그림",
    },
    {
      name: "꽃",
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
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((art, index) => (
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
                border="1px solid #D9D9D9"
                padding={"12px 24px"}
                borderRadius={"5px"}
                textAlign={"center"}
              >
                {art.name}
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
            <Link to={"/items"}>아트앤트</Link>/{""}
            <Link to={`/items/${category}`}>{category}</Link>/{""}
            <Link to={`/items/${subCategory}`}>
              <Text as="u">{subCategory}</Text>
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
