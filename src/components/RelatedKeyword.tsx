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
        _hover={{
          border: "1px solid #222", // Add a border on hover
          boxShadow: "0px 2px 8px 0px rgba(34, 34, 34, 0.15)",
          transitionDuration: "0.2s",
        }}
      />
      <Text fontSize={"14px"} fontWeight={"500px"}>
        수채화 꽃
      </Text>
    </Box>
  );
}
