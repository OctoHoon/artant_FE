import { Wrap, Flex, Box, Image, Text, Button } from "@chakra-ui/react";
import StarRating from "../commons/StarRating";

export default function SquareShop({ data }) {
  const thumbnails = data.thumbnails
    .concat([null, null, null, null])
    .slice(0, 4);
  return (
    <Box
      borderRadius={"10px"}
      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
    >
      <Flex
        width="290px"
        padding="12px 12px 0px 12px"
        alignItems={"flex-start"}
        alignContent={"flex-start"}
        gap="4px"
      >
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gridTemplateRows="repeat(2, 1fr)"
          gridGap={"4px"}
        >
          {thumbnails.map((thumbnail, index) => (
            <Image
              border={"none"} // 이미지에 대한 border 속성을 제거합니다.
              height={"106px"}
              width={"131px"}
              objectFit={"cover"}
              key={index}
              src={
                thumbnail ||
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png"
              } // 빈 문자열이면 기본 이미지 경로를 사용합니다.
            />
          ))}
        </Box>
      </Flex>
      <Flex padding={"12px"} fontSize={"13px"} justifyContent={"space-between"}>
        <Flex gap="12px">
          <Image src={data.avatar} width="36px" />
          <Box>
            <Text>{data.shop_name}</Text>
            <Flex gap="8px">
              <StarRating star={5} reviews={0} include_count={false} />
              <Text>1086 작품</Text>
            </Flex>
          </Box>
        </Flex>
        <Button
          backgroundColor={"transparent"}
          variant={"unstyled"}
          style={{
            display: "inline-flex",
            height: "36px",
            width: "36px",
            alignItems: "center",
            gap: "5px",
            flexShrink: 0,
            borderRadius: "100px",
            border: "1px solid #D9D9D9 ",
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
              id="mask0_762_9104"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="18"
              height="18"
            >
              <rect width="18" height="18" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_762_9104)">
              <path
                d="M8.99998 15.9952L8.17211 15.251C6.92885 14.1231 5.90072 13.1539 5.08774 12.3433C4.27476 11.5327 3.63054 10.8113 3.15506 10.1791C2.67957 9.54689 2.34736 8.97021 2.15842 8.44906C1.96947 7.92791 1.875 7.39907 1.875 6.86253C1.875 5.79812 2.23389 4.90702 2.95168 4.18923C3.66947 3.47144 4.56057 3.11255 5.62498 3.11255C6.27979 3.11255 6.89854 3.26568 7.48123 3.57194C8.06392 3.87819 8.57017 4.31737 8.99998 4.88949C9.42979 4.31737 9.93604 3.87819 10.5187 3.57194C11.1014 3.26568 11.7202 3.11255 12.375 3.11255C13.4394 3.11255 14.3305 3.47144 15.0483 4.18923C15.7661 4.90702 16.125 5.79812 16.125 6.86253C16.125 7.39907 16.0305 7.92791 15.8415 8.44906C15.6526 8.97021 15.3204 9.54689 14.8449 10.1791C14.3694 10.8113 13.7264 11.5327 12.9158 12.3433C12.1053 13.1539 11.0759 14.1231 9.82785 15.251L8.99998 15.9952ZM8.99998 14.475C10.2 13.3952 11.1875 12.4697 11.9625 11.6986C12.7375 10.9274 13.35 10.2575 13.8 9.68874C14.25 9.11999 14.5625 8.61494 14.7375 8.17359C14.9125 7.73224 15 7.29522 15 6.86253C15 6.11253 14.75 5.48753 14.25 4.98753C13.75 4.48753 13.125 4.23753 12.375 4.23753C11.7827 4.23753 11.2353 4.40556 10.7329 4.74162C10.2305 5.07767 9.83268 5.54522 9.5394 6.14427H8.46056C8.16249 5.54042 7.76345 5.07167 7.26345 4.73801C6.76345 4.40436 6.21729 4.23753 5.62498 4.23753C4.87979 4.23753 4.25599 4.48753 3.75358 4.98753C3.25118 5.48753 2.99998 6.11253 2.99998 6.86253C2.99998 7.29522 3.08748 7.73224 3.26248 8.17359C3.43748 8.61494 3.74998 9.11999 4.19998 9.68874C4.64998 10.2575 5.26248 10.9262 6.03748 11.695C6.81248 12.4637 7.79998 13.3904 8.99998 14.475Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
        </Button>
      </Flex>
    </Box>
  );
}
