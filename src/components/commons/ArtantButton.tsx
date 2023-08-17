import { Button } from "@chakra-ui/react";

export default function ArtantButton({ title, width, onClick }) {
  return (
    <Button
      width={width}
      colorScheme="white"
      color={"black"}
      border={"1px solid #000"}
      borderRadius={"5px"}
      _hover={{ bg: "gray" }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
