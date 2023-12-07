import {
  Flex,
  Button,
  Select,
  Input,
  InputGroup,
  InputRightAddon,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import MessageTab from "../../Messages/MessageTab";
import BlackButton from "../../commons/Button/BlackButton";
import SearchBar from "../../commons/SearchBar";
import { SvgX } from "../RegisterProdcuct/ProductDetails";
import { MessageSvg, PlusSVG } from "./Svg";
import DragSections from "./DragSection";

export default function EditArt({
  common_sections,
  sections,
  setSections,
  createSection,
}) {
  const [input, setInput] = useState("");
  const addSections = (newSection) => {
    setSections((prevSections) => [...prevSections, newSection]);
  };

  const removeSection = (index) => {
    setSections((prevSections) => prevSections.filter((_, i) => i !== index));
  };
  return (
    <Flex width={"1280px"} flexDirection={"column"} gap={"30px"}>
      <Flex gap={"40px"} alignSelf={"stretch"}>
        <Flex flexDirection={"column"} gap={"60px"}>
          <Flex flexDirection={"column"} gap={"32px"}>
            <Flex gap={"24px"} flexDirection={"column"}>
              <Text fontSize={"24px"} fontWeight={"500"}>
                작품
              </Text>
              <SearchBar
                placeholder={"작품 검색"}
                width={undefined}
                height={undefined}
                type={undefined}
                onSearch={undefined}
              />
              {common_sections.map((section) => {
                return (
                  <MessageTab
                    tabname={section.title}
                    count={section.product_count}
                  />
                );
              })}
              {sections.map((section) => {
                return (
                  <MessageTab
                    tabname={section.title}
                    count={section.product_count}
                  />
                );
              })}
            </Flex>
            <Button
              background={"white"}
              borderRadius={"5px"}
              border={
                "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9);"
              }
            >
              <Flex gap={"2px"} alignSelf={"center"} color={"#777"}>
                <MessageSvg />
                판매자 연락하기
              </Flex>
            </Button>
          </Flex>
          <Flex flexDirection={"column"} gap={"42px"} fontSize={"13px"}>
            <Flex flexDirection={"column"} gap={"14px"}>
              <Text as="u">1637 판매</Text>
              <Text as="u">4030 팬</Text>
            </Flex>
            <Text as="u">이 판매자 샵을 아트앤트에 신고하세요!</Text>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} width={"988px"}>
          <Select placeholder="추천순" alignSelf={"flex-end"} width={"103px"} />
          <Box height="18px" />
          <Flex
            padding={"24px"}
            flexDirection={"column"}
            gap={"8px"}
            alignSelf={"stretch"}
            borderRadius={"5px"}
            background={"#FAFAFA"}
          >
            <Flex gap={"2px"}>
              <PlusSVG />
              대기열 편집/추가
            </Flex>
            <Box height={"8px"} />
            <DragSections
              sections={sections}
              setSections={setSections}
              deleteSection={removeSection}
            />

            <TagInput placeholder={"입력하세요"} onAdd={addSections} />

            <Box height={"8px"} />
            <Flex gap={"4px"} justifyContent={"flex-end"}>
              <BlackButton
                title={"저장"}
                borderRadius={"100px"}
                width="min"
                onClick={createSection}
              />
              <BlackButton
                title={"취소"}
                borderRadius={"100px"}
                type={true}
                width="min"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
const TagInput = ({ placeholder, onAdd }) => {
  const [tempValue, setTempValue] = useState("");

  const handleButtonClick = () => {
    const newSection = { title: tempValue, product_count: 0 };
    onAdd(newSection);
  };

  return (
    <Flex display={"flex"} alignItems={"center"} gap={"20px"}>
      <InputGroup width={"565px"}>
        <Input
          display="flex"
          padding="0px 16px"
          alignItems="center"
          flex="1 0 0%"
          alignSelf="stretch"
          borderRadius="5px"
          border="1px solid #D9D9D9"
          background="#FFF"
          fontSize={"14px"}
          placeholder={placeholder}
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
        />
        <InputRightAddon
          as={"button"}
          fontSize={"13px"}
          children="추가하기"
          onClick={handleButtonClick}
        />
      </InputGroup>
    </Flex>
  );
};

const TagBox = ({ tag, index, removeTag }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      gap="-1px"
      height="40px"
      padding="8px 8px"
      borderRadius="5px"
      border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
    >
      <Box onClick={() => removeTag(index)} cursor="pointer">
        <SvgX />
      </Box>
      <Flex
        borderRight="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
        height="150%"
        marginX="8px"
      />
      <Text textStyle={"bodyMini"} padding={"3px 12px"}>
        {tag}
      </Text>
    </Flex>
  );
};
