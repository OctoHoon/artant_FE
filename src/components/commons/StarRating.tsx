import { HStack, Text } from "@chakra-ui/react";
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";

function StarRating({ star, reviews, include_count }) {
  const fullStars = Math.floor(star);
  const hasHalfStar = star - fullStars >= 0.5;

  return (
    <HStack spacing={1} alignItems="center">
      {/* Render full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <FaStar size={"18px"} key={i} />
        ))}

      {/* Render half star if applicable */}
      {hasHalfStar && <FaStarHalf size={"18px"} />}

      {/* Render empty stars */}
      {Array(5 - fullStars - (hasHalfStar ? 1 : 0))
        .fill(0)
        .map((_, i) => (
          <FaRegStar size={"18px"} key={i} />
        ))}

      {/* Display the number of reviews */}
      {include_count ? <Text fontSize={"12px"}>({reviews})</Text> : null}
    </HStack>
  );
}

export default StarRating;
