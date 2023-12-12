import { FaStar, FaRegHeart } from "react-icons/fa";
import { AspectRatio, Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CollectionKeyword from "../CollectionKeyword";

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
        {/* <Flex flexDirection={"column"} gap={"24px"}>
          <Text fontSize={"24px"} fontWeight={"500"}>
            관련 검색어
          </Text>
          <Flex width="1280px" gap={"32px"}>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((art, index) => (
              <RelatedKeyword width={"60px"} height={"60px"} />
            ))}
          </Flex>
        </Flex> */}
        <CollectionKeyword width={"120px"} height={"120px"}></CollectionKeyword>

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
                _hover={{
                  border: "1px solid #222", // Add a border on hover
                  boxShadow: "0px 2px 8px 0px rgba(34, 34, 34, 0.15)",
                  transitionDuration: "0.2s",
                }}
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
            <Link to={"/items"}>아트앤트</Link> /{" "}
            <Link to={`/items/${category}`}>{category}</Link> /{" "}
            <Link to={`/items/${subCategory}`}>
              <Text as="u">{subCategory}</Text>
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
