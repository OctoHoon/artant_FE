import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const arts = [
  { source: "/assets/images/Ellipse_1.png", category: "가죽 공예 예술" },
  { source: "/assets/images/Ellipse_2.png", category: "목걸이 공예 선물" },
  { source: "/assets/images/Ellipse_3.png", category: "벽걸이 예술 사진" },
  { source: "/assets/images/Ellipse_4.png", category: "유화 그림" },
  { source: "/assets/images/Ellipse_5.png", category: "인물 정밀 유화" },
  { source: "/assets/images/Ellipse_6.png", category: "어린이 일러스트" },
];

export default function CollectionKeyword({ width, height }) {
  return (
    <Flex flexDirection={"column"} gap={"40px"}>
      <Text fontSize={"24px"} fontWeight={"500"}>
        추천 검색어
      </Text>
      <Flex
        width="1280px"
        padding={"0px 36px"}
        alignItems={"flex-start"}
        gap={"95px"}
      >
        {arts.map((art, index) => (
          <Link to={`/items/tag/${art.category}`}>
            <Flex
              key={index}
              flexDirection={"column"}
              alignItems={"center"}
              cursor={"pointer"}
              gap={"12px"}
              _hover={{
                textDecoration: "underline",
              }}
            >
              <Image
                width={width}
                height={height}
                borderRadius={width}
                src={art.source}
                _hover={{
                  border: "1px solid #222",
                  boxShadow: "0px 2px 8px 0px rgba(34, 34, 34, 0.15)",
                }}
              />
              <Text
                color="var(--maincolorstextblack-222222, #222)"
                textAlign="center"
                fontFamily="Spoqa Han Sans Neo"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
                letterSpacing="-0.3px"
                textTransform="capitalize"
              >
                {art.category}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
