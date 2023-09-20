import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";

function StarRating({ star, reviews, include_count }) {
  const fullStars = Math.floor(star);
  const hasHalfStar = star - fullStars >= 0.5;

  return (
    <Flex alignItems="center" gap={"2px"}>
      {/* Render full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <SvgStar key={i} />
        ))}

      {/* Render half star if applicable */}
      {hasHalfStar && <FaStarHalf size={"18px"} />}

      {/* Render empty stars */}
      {Array(5 - fullStars - (hasHalfStar ? 1 : 0))
        .fill(0)
        .map((_, i) => (
          <SvgEmptyStar key={i} />
        ))}

      {/* Display the number of reviews */}
      <Box width="3px" />
      {include_count ? (
        <Text fontSize={"12px"} fontWeight={300} marginTop={"2.5px"}>
          ({reviews})
        </Text>
      ) : null}
    </Flex>
  );
}

export default StarRating;

function SvgStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.99998 12.7532L3.19599 15.2788L4.11347 9.92949L0.226959 6.14108L5.59798 5.36062L7.99998 0.493652L10.402 5.36062L15.773 6.14108L11.8865 9.92949L12.804 15.2788L7.99998 12.7532Z"
        fill="#1C1B1F"
      />
    </svg>
  );
}

function SvgEmptyStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.00001 12.7532L3.19602 15.2788L4.1135 9.92949L0.22699 6.14108L5.59801 5.36062L8.00001 0.493652L10.402 5.36062L15.773 6.14108L11.8865 9.92949L12.804 15.2788L8.00001 12.7532ZM7.99996 11.2468L11.0331 12.8415L10.4538 9.464L12.9077 7.07207L9.51653 6.5793L7.99996 3.50639L6.48339 6.5793L3.09222 7.07207L5.54609 9.464L4.96681 12.8415L7.99996 11.2468Z"
        fill="#AAAAAA"
      />
    </svg>
  );
}
