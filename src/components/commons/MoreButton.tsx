import { Button, Box } from "@chakra-ui/react";

export default function MoreButton() {
  return (
    <Button
      padding="4px 2px 4px 8px"
      justifyContent={"center"}
      alignItems={"center"}
      gap="8px"
      borderRadius={"5px"}
      border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
      bg="white"
    >
      더 보기
      <Box padding={"6px 8px"} alignItems={"center"} justifyContent={"center"}>
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
      </Box>
    </Button>
  );
}
