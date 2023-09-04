import { Button } from "@chakra-ui/react";

export default function BlackButton({
  title,
  borderRadius,
  flex = "",
  type = false,
}) {
  return (
    <Button
      padding={"10px 24px"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={borderRadius}
      background={type ? "white" : "#222"}
      fontSize={"16px"}
      fontWeight={"500"}
      color={type ? "black" : "white"}
      textAlign={"center"}
      alignSelf={"start"}
    >
      {title}
    </Button>
  );
}
