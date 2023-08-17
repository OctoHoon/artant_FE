import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

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
    <Box my={10}>
      <Text fontSize={"30px"} as="b" mx={180}>
        News Event
      </Text>
      <Grid
        templateAreas={`"num1 num2 num4 num5"
      "num1 num3 num4 num6"
                    `}
        gridTemplateRows={"187px 187px"}
        gridTemplateColumns={"320px 260px 320px 260px"}
        h="374px"
        columnGap={"0px"}
        rowGap={"0px"}
        mt={10}
        px={{
          base: 10,
          lg: 40,
        }}
      >
        <GridItem pl="0" area={"num1"}>
          <NewsOne source={arts[0].source} title={arts[0].title} />
        </GridItem>
        <GridItem area={"num2"}>
          <NewsTwo source={arts[1].source} title={arts[0].title} />
        </GridItem>
        <GridItem area={"num3"}>
          <NewsTwo source={arts[2].source} title={arts[0].title} />
        </GridItem>
        <GridItem area={"num4"}>
          <NewsOne source={arts[3].source} title={arts[0].title} />
        </GridItem>
        <GridItem area={"num5"}>
          <NewsTwo source={arts[4].source} title={arts[0].title} />
        </GridItem>
        <GridItem area={"num6"}>
          <NewsTwo source={arts[5].source} title={arts[0].title} />
        </GridItem>
      </Grid>
    </Box>
  );
}
