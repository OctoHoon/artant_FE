import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import SearchBar from "../commons/SearchBar";
import { useState } from "react";
import ArtantButton from "../commons/ArtantButton";
import BlackButton from "../commons/Button/BlackButton";

export default function ShopSideBar({ sections }) {
  const [select, setSelect] = useState("모든 작품");
  console.log(sections);

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
      <SelecitonButton
        name={"전체 상품"}
        count={0}
        is_selected={"전체 상품" === select}
        handleSelect={setSelect}
      />

      {sections &&
        sections.map((section, index) => {
          return (
            <SelecitonButton
              name={section.title}
              count={section.product_count}
              is_selected={section.name === select}
              handleSelect={setSelect}
            />
          );
        })}
      <Box height="32px" />
      <BlackButton
        title={"맞춤 주문 요청"}
        borderRadius={"5px"}
        width="252px"
      />
      <Box height="12px" />
      <ArtantButton title={"판매자 연락하기"} width="100%" onClick={() => {}} />
      <Box height="60px" />
      <Text textStyle={"B13R"}>1637 판매</Text>
      <Box height="15px" />
      <Text textStyle={"B13R"} as="u">
        4030 팬
      </Text>
      <Box height="40px" />
      <Text textStyle={"B13R"} as="u">
        이 판매자 샵을 아트앤트에 신고하세요!
      </Text>
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
      <Text textStyle={"B14R"}>{name}</Text>
      <Text textStyle={"B13R"}>{count}</Text>
    </Button>
  );
}
