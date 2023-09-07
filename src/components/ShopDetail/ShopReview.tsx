import { Flex, Avatar, Box, Text, Image } from "@chakra-ui/react";
import StarRating from "../commons/StarRating";

export default function ShopReview({ review }) {
  return (
    <Box>
      <Box bg="#D9D9D9" width="100%" height={"1px"} />
      <Box height={"16px"} />
      <Flex alignItems={"center"}>
        <Avatar
          width="48px"
          height="48px"
          name={review.user.name}
          marginRight={"12px"}
          src={review.user.avatar}
        />
        <Text
          color="#595959"
          fontFamily="Spoqa Han Sans Neo"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="28px"
          letterSpacing="-0.042px"
          textDecoration="underline"
          textDecor="underline"
          marginEnd={"10px"}
        >
          {review.user.name}
        </Text>
        <Text
          color="#595959"
          fontFamily="Spoqa Han Sans Neo"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="28px"
          letterSpacing="-0.042px"
        >
          {review.created_at}
        </Text>
      </Flex>
      <Box px={"60px"}>
        <StarRating star={review.rating} reviews={0} include_count={false} />
        <Box height={"2px"} />
        <Text color="#595959">{review.content}</Text>
        <Box height="16px" />
        <Flex alignItems={"center"}>
          <Image width="128px" height="100px" src={review.product_thumbnail} />
          <Box width="12px" />
          <Text noOfLines={2}>{review.product_name}</Text>
        </Flex>
        <Box height="32px" />
        <Flex padding="4px 8px" alignItems={"center"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_544_3360"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_544_3360)">
              <path
                d="M6 20.5V5H13.1923L13.5923 7H19V15H13.8077L13.4077 13H7V20.5H6Z"
                fill="#595959"
              />
            </g>
          </svg>
          <Box width="2px" />
          리뷰신고
        </Flex>
      </Box>
      <Box height="32px" />
    </Box>
  );
}
