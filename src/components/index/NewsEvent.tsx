import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

import GiftCategory from "../commons/Card/GiftCategory";
import NewsOne from "../commons/Card/NewsOne";
import NewsTwo from "../commons/Card/NewsTwo";

export default function NewsEvent() {
  const arts = [
    {
      source: "assets/images/Rectangle_155.png",
      title: "내셔널갤러리 명화전 (국립중앙박물관)",
      id: 1,
    },
    {
      source: "assets/images/Rectangle_91.png",
      title: "더 골든 에이지 (그라운드시소)",
      id: 2,
    },
    {
      source: "assets/images/Rectangle_156.png",
      title: "라울뒤피 (더현대)",
      id: 3,
    },
    {
      source: "assets/images/Rectangle_157.png",
      title: "생각전시 (성수 에스팩토리)",
      id: 4,
    },
    {
      source: "assets/images/Rectangle_96.png",
      title: "서울일러스트레이션페어 (코엑스 A홀)",
      id: 5,
    },
    {
      source: "assets/images/Rectangle_95.png",
      title: "에드워드호퍼 특별전 (서울시립미술관)",
      id: 6,
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
        News Event
      </Text>
      <Flex alignItems={"flex-start"} gap={"10px"}>
        <Flex alignItems={"flex-start"} gap={"10px"}>
          <NewsOne
            source={arts[0].source}
            title={arts[0].title}
            id={arts[0].id}
          />
          <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"10px"}>
            <NewsTwo
              source={arts[1].source}
              title={arts[1].title}
              id={arts[1].id}
            />
            <NewsTwo
              source={arts[2].source}
              title={arts[2].title}
              id={arts[2].id}
            />
          </Flex>
        </Flex>
        <Flex alignItems={"flex-start"} gap={"10px"}>
          <NewsOne
            source={arts[3].source}
            title={arts[3].title}
            id={arts[3].id}
          />
          <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"10px"}>
            <NewsTwo
              source={arts[4].source}
              title={arts[4].title}
              id={arts[4].id}
            />
            <NewsTwo
              source={arts[5].source}
              title={arts[5].title}
              id={arts[5].id}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
