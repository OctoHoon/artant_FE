import { AspectRatio, Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Collection({ images }) {
  return (
    <Box width="24%" border="1px solid #D9D9D9" borderRadius={"4px"}>
      <Flex justifyContent={"space-between"} padding={"8px 16px"}>
        <Text>어린이</Text>
        <Text>8개 항목</Text>
      </Flex>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridTemplateRows="repeat(2, 1fr)"
      >
        <AspectRatio ratio={1 / 1}>
          <Image src={images[0]} boxSize="100%" objectFit="cover" />
        </AspectRatio>
        <AspectRatio ratio={1 / 1}>
          <Image src={images[1]} boxSize="100%" objectFit="cover" />
        </AspectRatio>

        <AspectRatio ratio={1 / 1}>
          <Image src={images[3]} boxSize="100%" objectFit="cover" />
        </AspectRatio>

        <AspectRatio ratio={1 / 1}>
          <Image src={images[2]} boxSize="100%" objectFit="cover" />
        </AspectRatio>
      </Box>
    </Box>
  );
}
