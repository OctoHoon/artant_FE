import { Flex, Image, Text } from "@chakra-ui/react";
import { kMaxLength } from "buffer";
import { useState } from "react";

export default function PdpCard({
  pk,
  source,
  title,
  description,
  artist,
  price,
  originalPrice,
  free_shipping,
  is_best_seller,
  is_liked,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(is_liked);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const titleMaxLength = 50;

  return (
    <a href={`/listings/${pk}`}>
      <Flex
        width="240px"
        height={"345px"}
        padding="10px"
        flexDirection={"column"}
        alignItems={"flex-start"}
        position={"relative"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        _hover={{
          boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
          transitionDuration: "0.2s",
        }}
      >
        <Image
          height={"180px"}
          alignSelf={"stretch"}
          borderRadius={"5px"}
          src={source}
        />
        <Flex
          width={"30px"}
          height={"30px"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"8px"}
          position={"absolute"}
          right={"18px"}
          top={"18px"}
          background={"white"}
          borderRadius={"100px"}
        >
          {isLiked ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <mask
                id="mask0_820_132"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="18"
                height="18"
              >
                <rect width="18" height="18" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_820_132)">
                <path
                  d="M8.99998 15.9952L8.17211 15.2509C6.92885 14.1231 5.90072 13.1538 5.08774 12.3433C4.27476 11.5327 3.63054 10.8113 3.15506 10.1791C2.67957 9.54686 2.34736 8.97018 2.15842 8.44903C1.96947 7.92788 1.875 7.39904 1.875 6.8625C1.875 5.79809 2.23389 4.90699 2.95168 4.1892C3.66947 3.47141 4.56057 3.11252 5.62498 3.11252C6.27979 3.11252 6.89854 3.26565 7.48123 3.57191C8.06392 3.87816 8.57017 4.31734 8.99998 4.88946C9.42979 4.31734 9.93604 3.87816 10.5187 3.57191C11.1014 3.26565 11.7202 3.11252 12.375 3.11252C13.4394 3.11252 14.3305 3.47141 15.0483 4.1892C15.7661 4.90699 16.125 5.79809 16.125 6.8625C16.125 7.39904 16.0305 7.92788 15.8415 8.44903C15.6526 8.97018 15.3204 9.54686 14.8449 10.1791C14.3694 10.8113 13.7264 11.5327 12.9158 12.3433C12.1053 13.1538 11.0759 14.1231 9.82785 15.2509L8.99998 15.9952ZM8.99998 14.475C10.2 13.3952 11.1875 12.4697 11.9625 11.6986C12.7375 10.9274 13.35 10.2575 13.8 9.68871C14.25 9.11996 14.5625 8.61491 14.7375 8.17356C14.9125 7.73221 15 7.29519 15 6.8625C15 6.1125 14.75 5.4875 14.25 4.9875C13.75 4.4875 13.125 4.2375 12.375 4.2375C11.7827 4.2375 11.2353 4.40553 10.7329 4.74159C10.2305 5.07764 9.83268 5.54519 9.5394 6.14424H8.46056C8.16249 5.54039 7.76345 5.07164 7.26345 4.73798C6.76345 4.40433 6.21729 4.2375 5.62498 4.2375C4.87979 4.2375 4.25599 4.4875 3.75358 4.9875C3.25118 5.4875 2.99998 6.1125 2.99998 6.8625C2.99998 7.29519 3.08748 7.73221 3.26248 8.17356C3.43748 8.61491 3.74998 9.11996 4.19998 9.68871C4.64998 10.2575 5.26248 10.9262 6.03748 11.695C6.81248 12.4637 7.79998 13.3904 8.99998 14.475Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          )}
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems={"flex-start"}
          alignSelf={"stretch"}
        >
          <Flex
            padding="10px 0px 8px 0px"
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"4px"}
            alignSelf={"stretch"}
          >
            <Flex
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"2px"}
              alignSelf={"stretch"}
            >
              <Text>
                {title.length > titleMaxLength
                  ? title.substring(0, titleMaxLength) + "..."
                  : title}
                {description}
              </Text>
              <Text color={"var(--maincolorstextgray-595959, #666)"}>
                {artist}
              </Text>
            </Flex>
            <Flex
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"4px"}
              alignSelf={"stretch"}
            >
              <Text fontWeight={"500"} fontSize={"20px"}>
                {price.toLocaleString()}원
              </Text>
              <Flex gap={"5px"}>
                <Text
                  fontSize={"13px"}
                  color={"var(--maincolorstextgray-777777, #777)"}
                  textDecorationLine={"strikethrough"}
                >
                  {originalPrice.toLocaleString()}원
                </Text>
                <Text
                  fontSize={"13px"}
                  fontWeight={"300"}
                  color={"var(--maincolorstextredf-12-e-24, #F12E24)"}
                >
                  {100 - Math.round((100 * price) / originalPrice)}% off
                </Text>
              </Flex>
            </Flex>
            <Flex
              alignItems={"flex-start"}
              alignContent={"flex-start"}
              gap={"5px"}
              flexWrap={"wrap"}
            >
              {[free_shipping, is_best_seller].map((tag, index) => (
                <Flex
                  width={"62px"}
                  height={"18px"}
                  borderRadius={"100px"}
                  border={
                    index === 0
                      ? "1px solid var(--maincolorstextgreen-83-ad-6-f, #83AD6F)"
                      : "1px solid #9E76BE"
                  }
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text
                    fontSize={"11px"}
                    fontWeight={"500"}
                    color={
                      index === 0
                        ? "var(--maincolorstextgreen-83-ad-6-f, #83AD6F)"
                        : index === 1
                        ? "#9E76BE"
                        : "black"
                    }
                  >
                    {index === 0
                      ? "무료배송"
                      : index === 1
                      ? "베스트셀러"
                      : null}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </a>
  );
}
