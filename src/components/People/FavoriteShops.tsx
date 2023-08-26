import {
  Flex,
  Wrap,
  Box,
  Text,
  Button,
  Image,
  Checkbox,
} from "@chakra-ui/react";
import PaginationController from "../commons/PaginationController";
import SearchBar from "../commons/SearchBar";
import FavoriteShop from "./FavoriteShop";
import SquareShop from "./SquareShop";

export default function FavoriteItems() {
  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Flex alignItems={"baseline"}>
            <Text fontSize={"22px"}>즐겨찾은 상점</Text>
            <Box width="6px" />
            <Text color={"#595959"} fontSize={"8px"}>
              8개의 상점
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <mask
                id="mask0_607_6648"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="18"
                height="18"
              >
                <rect width="18" height="18" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_607_6648)">
                <path
                  d="M9.00251 15.75C8.0691 15.75 7.19154 15.5729 6.36983 15.2186C5.54811 14.8644 4.83333 14.3836 4.22548 13.7764C3.61764 13.1691 3.13644 12.455 2.78186 11.634C2.42729 10.8131 2.25 9.93591 2.25 9.00251C2.25 8.0691 2.42712 7.19154 2.78136 6.36983C3.13561 5.54811 3.61637 4.83333 4.22364 4.22548C4.83092 3.61764 5.54503 3.13644 6.36596 2.78186C7.18691 2.42729 8.06409 2.25 8.99749 2.25C9.9309 2.25 10.8085 2.42712 11.6302 2.78136C12.4519 3.13561 13.1667 3.61637 13.7745 4.22364C14.3824 4.83092 14.8636 5.54503 15.2181 6.36596C15.5727 7.18691 15.75 8.06409 15.75 8.99749C15.75 9.9309 15.5729 10.8085 15.2186 11.6302C14.8644 12.4519 14.3836 13.1667 13.7764 13.7745C13.1691 14.3824 12.455 14.8636 11.634 15.2181C10.8131 15.5727 9.93591 15.75 9.00251 15.75ZM8.25 14.9625V13.5C7.8375 13.5 7.48438 13.3531 7.19063 13.0594C6.89687 12.7656 6.75 12.4125 6.75 12V11.25L3.15 7.65C3.1125 7.875 3.07812 8.1 3.04688 8.325C3.01562 8.55 3 8.775 3 9C3 10.5125 3.49687 11.8375 4.49062 12.975C5.48438 14.1125 6.7375 14.775 8.25 14.9625ZM13.425 13.05C13.675 12.775 13.9 12.4781 14.1 12.1594C14.3 11.8406 14.4656 11.5094 14.5969 11.1656C14.7281 10.8219 14.8281 10.4688 14.8969 10.1063C14.9656 9.74375 15 9.375 15 9C15 7.76775 14.6618 6.64238 13.9853 5.62389C13.3089 4.60541 12.3971 3.87116 11.25 3.42116V3.75C11.25 4.1625 11.1031 4.51562 10.8094 4.80938C10.5156 5.10313 10.1625 5.25 9.75 5.25H8.25V6.75C8.25 6.9625 8.17812 7.14062 8.03438 7.28438C7.89062 7.42812 7.7125 7.5 7.5 7.5H6V9H10.5C10.7125 9 10.8906 9.07188 11.0344 9.21563C11.1781 9.35938 11.25 9.5375 11.25 9.75V12H12C12.325 12 12.6188 12.0969 12.8813 12.2906C13.1438 12.4844 13.325 12.7375 13.425 13.05Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
            <Text color="#595959" fontSize="13px">
              공개
            </Text>
            <Box width="6px" />
            <Text as="u" color="#595959" fontSize="13px">
              편집
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box height="12px" />
      <Flex alignItems={"center"}>
        <SearchBar
          placeholder={"즐겨찾기 검색"}
          width="700px"
          height={"48px"}
          type={false}
        />
        <Box width="6px" />
        <Button
          backgroundColor={"transparent"}
          variant={"unstyled"}
          style={{
            display: "inline-flex",
            height: "36px",
            padding: "0px 15px",
            alignItems: "center",
            gap: "5px",
            flexShrink: 0,
            borderRadius: "100px",
            border: "1px solid #000 ",
          }}
        >
          <Flex alignItems="center">
            <Image marginRight={1} src="/assets/tune.png" boxSize="20px" />
            <Text
              color="#000"
              textAlign={"center"}
              fontFamily="Spoqa Han Sans Neo"
              fontSize="14px"
              fontStyle="normal"
              fontWeight={400}
              lineHeight="normal"
              letterSpacing="-0.3px"
              textTransform="capitalize"
            >
              모든 필터{" "}
            </Text>
          </Flex>
        </Button>
        <Box width="6px" />

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
            border: "1px solid #000 ",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_642_10571"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                y="24"
                width="24"
                height="24"
                transform="rotate(-90 0 24)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_642_10571)">
              <path
                d="M20 14.9795L15.8518 19L11.7037 14.9795L12.3852 14.3136L15.3704 17.2069L15.3704 5.93333L16.3333 5.93333L16.3333 17.2069L19.3185 14.3136L20 14.9795ZM12.2963 9.02052L11.6148 9.68641L8.62963 6.79307L8.62963 18.0667L7.66667 18.0667L7.66667 6.79307L4.68149 9.68641L4 9.02052L8.14815 5L12.2963 9.02052Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
        </Button>
        <Box width="12px" />
        <Flex gap="6px">
          <Checkbox />
          오픈 상점
        </Flex>
      </Flex>
      <Box height={"40px"} />
      <Wrap spacing={10} justify={"space-around"} gap="40px">
        <FavoriteShop />
        <FavoriteShop />
        <FavoriteShop />
        <FavoriteShop />
        <FavoriteShop />
        <FavoriteShop />
        <FavoriteShop />
        <FavoriteShop />
      </Wrap>
      <PaginationController itemCount={40} pagination={"8"} />

      <Text fontSize={"24px"} fontWeight={"500"}>
        당신이 좋아할 것 같은 상점
      </Text>
      <Box height="40px" />
      <Wrap spacing={5} justify={"space-around"}>
        <SquareShop />
        <SquareShop />
        <SquareShop />
        <SquareShop />
        <SquareShop />
        <SquareShop />
        <SquareShop />
        <SquareShop />
      </Wrap>
    </Box>
  );
}
