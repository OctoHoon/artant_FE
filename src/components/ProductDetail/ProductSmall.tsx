import { AspectRatio, Flex, Button, Box, Image, Text } from "@chakra-ui/react";

export default function ProductSmall() {
  return (
    <Box width={"48%"}>
      <AspectRatio ratio={1 / 1}>
        <Image
          src={
            "https://i.etsystatic.com/38936109/r/il/885c66/5074138856/il_1588xN.5074138856_o7f8.jpg"
          }
          boxSize="100%"
          objectFit="cover"
        />
      </AspectRatio>
      <Text fontSize={"14px"}>우리의 꿈은 - 애니메이션화, CG, 스타 서정배</Text>
      <Text fontSize={"14px"}>프란체스카리첼리</Text>
      <Text fontSize={"20px"} fontWeight={"500"}>
        100,000원
      </Text>
      <Flex>
        <Text
          color="#777"
          fontSize={"13px"}
          textDecorationLine={"line-through"}
        >
          200,000원
        </Text>
        <Box width={"5px"} />
        <Text color="#F12E24" fontSize={"13px"} fontWeight={"300"}>
          {" "}
          50% off
        </Text>
      </Flex>
      <Button
        border={"1px solid #222"}
        padding={"7px 10px 5px 10px"}
        bg="white"
        fontSize="13px"
      >
        장바구니 담기
      </Button>
    </Box>
  );
}
