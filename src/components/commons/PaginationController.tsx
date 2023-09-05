import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";

export default function PaginationController({ itemCount, pagination }) {
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center" my={10}>
      <ButtonGroup>
        <Button backgroundColor={"transparent"} variant={"none"}>
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
              d="M7.47445 0L8 0.75L1.45985 6L8 11.25L7.47445 12L0 6L7.47445 0Z"
              fill="#777777"
            />
          </svg>
        </Button>
        {Array.from(
          { length: Math.floor(itemCount / pagination) + 1 },
          (_, index) => index + 1
        ).map((page) => (
          <Button key={page} backgroundColor={"transparent"} variant={"none"}>
            <Text
              color="#767676"
              fontFamily="Roboto"
              fontSize="15px"
              fontStyle="normal"
              fontWeight={500}
              lineHeight="normal"
              textTransform="capitalize"
            >
              {page}
            </Text>
          </Button>
        ))}
        <div>
          {itemCount > pagination * 7 ? <Text marginTop={1}>...</Text> : null}
        </div>

        <Button backgroundColor={"transparent"} variant={"none"}>
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
      </ButtonGroup>
    </Box>
  );
}
