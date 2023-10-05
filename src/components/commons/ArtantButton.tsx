import { Button } from "@chakra-ui/react";

export default function ArtantButton({ title, width, onClick }) {
  return (
    <Button
      width={width}
      colorScheme="white"
      color={"black"}
      border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
      borderRadius={"5px"}
      _hover={{
        background: "none",
        border: "1px solid var(--maincolorsbggray-555555, #555)",
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
