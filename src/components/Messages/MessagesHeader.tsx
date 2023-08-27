import { Box, Flex } from "@chakra-ui/react";
import SearchBar from "../commons/SearchBar";

export default function MessagesHeader() {
  return (
    <Flex
      width={"1281px"}
      alignContent={"center"}
      justifyContent={"space-between"}
    >
      <Flex alignItems={"center"} gap={"20px"} fontSize={"30px"}>
        Messages
        <SearchBar
          placeholder={"메세지 검색"}
          width={"252px"}
          type={false}
          height={undefined}
          onSearch={() => {}}
        />
      </Flex>
      <Flex alignItems={"center"} gap={"4px"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <mask
            id="mask0_793_8841"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="22"
            height="22"
          >
            <rect width="22" height="22" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_793_8841)">
            <path
              d="M5.95833 13.375H16.0417V12.4583H5.95833V13.375ZM5.95833 10.625H16.0417V9.70833H5.95833V10.625ZM5.95833 7.875H16.0417V6.95833H5.95833V7.875ZM19.25 19.4038L16.4295 16.5833H4.23076C3.80886 16.5833 3.4566 16.442 3.17396 16.1594C2.89132 15.8767 2.75 15.5245 2.75 15.1026V5.23076C2.75 4.80886 2.89132 4.4566 3.17396 4.17396C3.4566 3.89132 3.80886 3.75 4.23076 3.75H17.7692C18.1911 3.75 18.5434 3.89132 18.826 4.17396C19.1087 4.4566 19.25 4.80886 19.25 5.23076V19.4038ZM16.8208 15.6667L18.3333 17.1739V5.23076C18.3333 5.08975 18.2746 4.96047 18.1571 4.84294C18.0395 4.72543 17.9103 4.66667 17.7692 4.66667H4.23076C4.08975 4.66667 3.96047 4.72543 3.84294 4.84294C3.72543 4.96047 3.66667 5.08975 3.66667 5.23076V15.1026C3.66667 15.2436 3.72543 15.3729 3.84294 15.4904C3.96047 15.6079 4.08975 15.6667 4.23076 15.6667H16.8208Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
        메세지 보내기
      </Flex>
    </Flex>
  );
}
