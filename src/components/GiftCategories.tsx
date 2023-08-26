import { Box, Flex, Grid, Text } from "@chakra-ui/react";

import GiftCategory from "./GiftCategory";

export default function GiftCategories() {
  const arts = [
    {
      source: "http://localhost:3000/assets/images/Rectangle_85.png",
      category: "기념일 & 결혼",
    },
    {
      source: "http://localhost:3000/assets/images/Rectangle_85-1.png",
      category: "여성",
    },
    {
      source: "http://localhost:3000/assets/images/Rectangle_85-2.png",
      category: "남성",
    },
    {
      source: "http://localhost:3000/assets/images/Rectangle_85-3.png",
      category: "맞춤 제작",
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
      <Grid
        gap={"40px"}
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "repeat(4, 1fr)",
        }}
      >
        {arts.map((art, index) => (
          <GiftCategory
            source={art.source}
            category={art.category}
            key={art.category}
          />
        ))}
      </Grid>
    </Flex>
  );
}
