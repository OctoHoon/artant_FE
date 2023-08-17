import { Box, Grid, Text } from "@chakra-ui/react";

import GiftCategory from "./GiftCategory";

export default function GiftCategories() {
  const arts = [
    {
      source: "http://localhost:3000/assets/images/Rectangle_85.png",
      category: "맞춤 제작",
    },
    {
      source: "http://localhost:3000/assets/images/Rectangle_85-1.png",
      category: "기념일 & 결혼",
    },
    {
      source: "http://localhost:3000/assets/images/Rectangle_85-2.png",
      category: "여성",
    },
    {
      source: "http://localhost:3000/assets/images/Rectangle_85-3.png",
      category: "남성",
    },
  ];
  return (
    <Box alignItems={"flex-end"} justifyContent={"flex-end"}>
      <Text fontSize={"30px"} as="b" mx={180}>
        Gift Categories
      </Text>
      <Grid
        mt={10}
        px={{
          base: 10,
          lg: 40,
        }}
        columnGap={4}
        rowGap={8}
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
    </Box>
  );
}
