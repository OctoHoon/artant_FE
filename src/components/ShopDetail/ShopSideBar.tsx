import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import SearchBar from "../commons/SearchBar";
import { useState } from "react";
import ArtantButton from "../commons/ArtantButton";

const Selections = [
  { name: "모든 작품", count: 794 },
  { name: "판매중", count: 794 },
  { name: "신작", count: 25 },
  { name: "베스트 셀러 아트", count: 34 },
  { name: "1일 이내 작품 준비", count: 170 },
  { name: "추상화", count: 121 },
  { name: "추상인 조경 예술", count: 30 },
  { name: "흑백 예술", count: 52 },
  { name: "파란 그림", count: 34 },
  { name: "다채로운 그림", count: 230 },
];

export default function ShopSideBar() {
  const [select, setSelect] = useState("모든 작품");
  return (
    <Box>
      <SearchBar
        placeholder={"작품 검색"}
        width="100%"
        height={"36px"}
        type={false}
        onSearch={() => {}}
      />
      <Box height="29px" />

      {Selections.map((selection, index) => (
        <SelecitonButton
          name={selection.name}
          count={selection.count}
          is_selected={selection.name === select}
          handleSelect={setSelect}
        />
      ))}
      <Box height="32px" />

      <ArtantButton title={"맞춤 주문 요청"} width="100%" onClick={() => {}} />
      <Box height="12px" />

      <ArtantButton title={"판매자 연락하기"} width="100%" onClick={() => {}} />
      <Box height="60px" />
      <Text>1637 판매</Text>
      <Box height="15px" />
      <Text as="u">4030 팬</Text>
      <Box height="40px" />
      <Text as="u">이 판매자 샵을 아트앤트에 신고하세요!</Text>
    </Box>
  );
}

function SelecitonButton({ name, count, is_selected, handleSelect }) {
  return (
    <Button
      width={"100%"}
      justifyContent={"space-between"}
      borderRadius={"0px"}
      bg="white"
      borderRight={is_selected ? "2px solid #222" : "none"} // Add right border if selected
      p={2}
      onClick={() => handleSelect(name)}
    >
      <Box>{name}</Box>
      <Box>{count}</Box>
    </Button>
  );
}
