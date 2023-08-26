import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

import GiftCategory from "../GiftCategory";
import NewsOne from "./NewsOne";
import NewsTwo from "./NewsTwo";

export default function NewsEvent() {
  const arts = [
    {
      source: "assets/images/Rectangle_90.png",
      title: "내셔널갤러리 명화전 (국립중앙박물관)",
    },
    {
      source: "assets/images/Rectangle_91.png",
      title: "더 골든 에이지 (그라운드시소)",
    },
    {
      source: "assets/images/Rectangle_94.png",
      title: "라울뒤피 (더현대)",
    },
    {
      source: "assets/images/Rectangle_90.png",
      title: "생각전시 (성수 에스팩토리)",
    },
    {
      source: "assets/images/Rectangle_96.png",
      title: "서울일러스트레이션페어 (코엑스 A홀)",
    },
    {
      source: "assets/images/Rectangle_95.png",
      title: "에드워드호퍼 특별전 (서울시립미술관)",
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
        Gift Categories
      </Text>
      <Flex alignItems={"flex-start"} gap={"10px"}>
        <Flex alignItems={"flex-start"} gap={"10px"}>
          <NewsOne source={arts[0].source} title={arts[0].title} />
          <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"10px"}>
            <NewsTwo source={arts[1].source} title={arts[1].title} />
            <NewsTwo source={arts[2].source} title={arts[2].title} />
          </Flex>
        </Flex>
        <Flex alignItems={"flex-start"} gap={"10px"}>
          <NewsOne source={arts[3].source} title={arts[3].title} />
          <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"10px"}>
            <NewsTwo source={arts[4].source} title={arts[4].title} />
            <NewsTwo source={arts[5].source} title={arts[5].title} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
