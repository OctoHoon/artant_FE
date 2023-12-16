import { Button } from "@chakra-ui/react";

export default function BlackButton({
  title,
  borderRadius,
  flex = "",
  type = false,
  width = "auto",
  isLoading = false,
  onClick = () => {},
  color = "#222",
}) {
  return (
    <Button
      isLoading={isLoading}
      width={width}
      padding={"10px 24px"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={borderRadius}
      background={type ? "white" : color}
      fontSize={"16px"}
      fontWeight={"500"}
      color={type ? "black" : "white"}
      textAlign={"center"}
      alignSelf={"start"}
      _hover={{
        background: type
          ? "var(--maincolorsbggrayeaeaea, #EAEAEA)"
          : "var(--maincolorsbggray-555555, #555)",
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
