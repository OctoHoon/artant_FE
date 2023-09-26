import { LiaGreaterThanSolid } from "react-icons/lia";

import { Button, Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function RegisterButton() {
  return (
    <Box justifyContent={"start"} width="1280px">
      <Link to={"/your/shops/register"}>
        <Button
          alignItems={"center"}
          colorScheme="gray"
          variant="outline"
          borderColor="blackAlpha.500"
          px={8}
          gap={"24px"}
          padding={"11px 30px 11px 40px"}
          height={"40px"}
        >
          <Text textStyle={"B14M"}>판매자 등록</Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.525548 12L6.55671e-08 11.25L6.54015 6L9.83506e-07 0.749999L0.52555 -6.53437e-07L8 6L0.525548 12Z"
              fill="#777777"
            />
          </svg>
        </Button>
      </Link>
    </Box>
  );
}
