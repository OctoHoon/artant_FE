import { LiaGreaterThanSolid } from "react-icons/lia";

import { Button, Flex, Box, Text } from "@chakra-ui/react";

export default function RegisterButton() {
  return (
    <Box justifyContent={"start"} width="1200px">
      <Button
        rightIcon={<LiaGreaterThanSolid />}
        colorScheme="gray"
        variant="outline"
        borderColor="blackAlpha.500"
        px={8}
      >
        판매자 등록
      </Button>
    </Box>
  );
}
