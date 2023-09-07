import { Box, Image, Text } from "@chakra-ui/react";

export default function RelatedKeyword({ width, height }) {
  return (
    <Box textAlign={"center"}>
      <Image
        cursor={"pointer"}
        width={width}
        height={height}
        borderRadius={width}
        src="https://i.etsystatic.com/37325563/c/1869/1485/0/207/il/e89553/4853984140/il_172x172.4853984140_acwn.jpg"
        marginBottom={"8px"}
      />
      <Text fontSize={"16px"} fontWeight={"500px"}>
        수채화 꽃
      </Text>
    </Box>
  );
}
