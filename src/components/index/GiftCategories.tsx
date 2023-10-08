import { Box, Flex, Grid, Text } from "@chakra-ui/react";

import GiftCategory from "../commons/Card/GiftCategory";
import { Link } from "react-router-dom";

export default function GiftCategories() {
  const arts = [
    {
      source: "assets/images/Rectangle_85.png",
      category: "기념일 & 결혼",
    },
    {
      source: "assets/images/Rectangle_85-1.png",
      category: "여성",
    },
    {
      source: "assets/images/Rectangle_85-2.png",
      category: "남성",
    },
    {
      source: "assets/images/Rectangle_85-3.png",
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
          <Link to={`/items/tag/${art.category}`}>
            <GiftCategory
              source={art.source}
              category={art.category}
              key={art.category}
            />
          </Link>
        ))}
      </Grid>
    </Flex>
  );
}
