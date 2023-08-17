import { Box, Image, Text } from "@chakra-ui/react";

export default function RelatedKeyword() {
  return (
    <Box>
      <Image
        width="60px"
        height={"60px"}
        borderRadius={"30px"}
        src="https://i.etsystatic.com/37325563/c/1869/1485/0/207/il/e89553/4853984140/il_172x172.4853984140_acwn.jpg"
        marginBottom={"8px"}
      />
      <Text fontSize={"16px"} fontWeight={"400px"}>
        수채화 꽃
      </Text>
    </Box>
  );
}
