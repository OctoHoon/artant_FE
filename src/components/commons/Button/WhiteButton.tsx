import { Button, Text } from "@chakra-ui/react";

export default function WhiteButton({
  title,
  width = "auto",
  borderRadius = "100px",
  onClick,
}) {
  return (
    <Button
      width={width}
      alignItems={"center"}
      padding={"10px 24px"}
      backgroundColor={"transparent"}
      borderRadius={borderRadius}
      border={"1px solid var(--maincolorstextblack-222222, #222)"}
      onClick={onClick}
    >
      <Text
        color="var(--maincolorstextblack-222222, #222)"
        css={`
          /* BODY/S_16/M */
          font-family: "Spoqa Han Sans Neo";
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.048px;
        `}
      >
        {title}
      </Text>
    </Button>
  );
}
