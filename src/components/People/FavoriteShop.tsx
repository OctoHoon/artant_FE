import { Flex, Box, Image, Button } from "@chakra-ui/react";
import StarRating from "../commons/StarRating";
import { Link } from "react-router-dom";

export default function FavoriteShop({ data }) {
  const thumbnails = data.thumbnails
    .concat([null, null, null, null])
    .slice(0, 4);
  return (
    <Box
      width="48%"
      borderRadius={"10px"}
      border={"1px solid #D9D9D9"}
      css={{
        clip: "rect(50px, 150px, 150px, 50px)", // Set custom clip path
        overflow: "hidden", // Hide content that overflows the box
      }}
    >
      <Link to={`/shop/${data.pk}`}>
        <Flex justifyContent={"space-between"}>
          {thumbnails.map((thumbnail, index) => (
            <Image
              maxWidth={"152px"}
              objectFit={"cover"}
              height={"152px"}
              key={index}
              src={thumbnail || null} // 빈 문자열이면 기본 이미지 경로를 사용합니다.
              width="24%"
            />
          ))}
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          margin={"12px"}
        >
          <Flex gap={"12px"}>
            <Image
              src={data.avatar}
              width="48px"
              height={"48px"}
              borderRadius={"5px"}
            />
            <Box>
              {data.shop_name}
              <StarRating star={5} reviews={"6358"} include_count={true} />
            </Box>
          </Flex>
          <Button
            backgroundColor={"transparent"}
            variant={"unstyled"}
            style={{
              display: "inline-flex",
              height: "36px",
              width: "36px",
              padding: "6px 6px",
              alignItems: "center",
              gap: "5px",
              flexShrink: 0,
              borderRadius: "100px",
              border: "1px solid #D9D9D9",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <mask
                id="mask0_823_10517"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="18"
                height="18"
              >
                <rect width="18" height="18" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_823_10517)">
                <path
                  d="M8.99998 15.9952L8.17211 15.2509C6.92885 14.1231 5.90072 13.1538 5.08774 12.3433C4.27476 11.5327 3.63054 10.8113 3.15506 10.1791C2.67957 9.54686 2.34736 8.97018 2.15842 8.44903C1.96947 7.92788 1.875 7.39904 1.875 6.8625C1.875 5.79809 2.23389 4.90699 2.95168 4.1892C3.66947 3.47141 4.56057 3.11252 5.62498 3.11252C6.27979 3.11252 6.89854 3.26565 7.48123 3.57191C8.06392 3.87816 8.57017 4.31734 8.99998 4.88946C9.42979 4.31734 9.93604 3.87816 10.5187 3.57191C11.1014 3.26565 11.7202 3.11252 12.375 3.11252C13.4394 3.11252 14.3305 3.47141 15.0483 4.1892C15.7661 4.90699 16.125 5.79809 16.125 6.8625C16.125 7.39904 16.0305 7.92788 15.8415 8.44903C15.6526 8.97018 15.3204 9.54686 14.8449 10.1791C14.3694 10.8113 13.7264 11.5327 12.9158 12.3433C12.1053 13.1538 11.0759 14.1231 9.82785 15.2509L8.99998 15.9952Z"
                  fill="#BC0000"
                />
              </g>
            </svg>
          </Button>
        </Flex>
      </Link>
    </Box>
  );
}
