import {
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  Textarea,
  Box,
} from "@chakra-ui/react";
import { subsubCategory } from "../../data/options";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import RegisterHeader from "./RegisterHeader";
import RadioOption from "./RadioOption";
import InputOption from "./InputOption";
import SelectOption from "./SelectOption";
import { getShopDetails } from "../../../api";
import { useQuery } from "@tanstack/react-query";

const whoMadeOptions = [
  { label: "I did", value: "option1" },
  { label: "A member of my shop", value: "option2" },
  { label: "Another company or person", value: "option3" },
];

const whatIsItOptions = [
  { label: "A finished product", value: "option1" },
  { label: "A supply or tool to make things", value: "option2" },
];

const whenMadeOptions = [
  { label: "Made to Order", value: "option1" },
  { label: "2020-2023", value: "option2" },
  { label: "2010-2019", value: "option3" },
  { label: "2000-2009", value: "option4" },
  { label: "1990-1999", value: "option5" },
  { label: "Before 1990", value: "option6" },
];

export default function ProductDetails({
  productName = "",
  productDescription = "",
  setProductName,
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  refreshOptionValue,
  setRefreshOptionValue,
  shippingOptionValue,
  setShippingOptionValue,
  setProductDescription,
  tags,
  setTags,
  materials,
  setMaterials,
  section,
  setSection,
  pk,
}) {
  const { isLoading, data } = useQuery(["shop", pk], getShopDetails);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
    setSelectedSubCategory(""); // 상위 카테고리가 변경되면 하위 카테고리 초기화
  };

  const handleSubCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedSubCategory(value);
  };

  const handleAddTag = (tempTag) => {
    const newTags = [...tags];
    newTags.push(tempTag);
    setTags(newTags);
  };

  const removeTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleAddMaterial = (tempMaterial) => {
    const newMaterials = [...materials];
    newMaterials.push(tempMaterial);
    setMaterials(newMaterials);
  };

  const removeMaterial = (index) => {
    const newMaterials = [...materials];
    newMaterials.splice(index, 1);
    setMaterials(newMaterials);
  };

  const [whoMade, setWhoMade] = useState("");
  const [whatMade, setWhatMade] = useState("");
  const [whenMade, setWhenMade] = useState("");

  return (
    <Flex // 목록 세부정보
      display={"flex"}
      width={"1280px"}
      padding={"24px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"32px"}
      border={"1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"}
    >
      <RegisterHeader
        title={"작품 세부정보"}
        description={
          "당신의 작품에 대한 모든 것을 전 세계에 알리고 그들이 그것을 좋아할 이유를 알려주세요."
        }
      />
      <Flex
        display={"flex"}
        flexDirection={"column"}
        alignSelf={"stretch"}
        alignItems={"flex-start"}
        gap={"24px"}
      >
        <Flex // 제목
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <SectionTitle
            title={"제목*"}
            description={
              "구매자가 귀하의 상품을 검색하는 데 사용할 키워드를 포함하십시오"
            }
            link={undefined}
          />
          <InputOption
            value={productName}
            placeholder={"제목을 입력하세요"}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Flex>
        <Flex // 이 목록 정보
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <SectionTitle
            title={"이 작품 정보*"}
            description={undefined}
            link={"아트앤트에서 허용되는 품목 유형에 대해 자세히 알아보세요."}
          />
          <SelectOption
            placeholder="누가 만들었나요?"
            options={whoMadeOptions}
            value={whoMade}
            onChange={(e) => setWhoMade(e.target.value)}
            disabled={false} // Add other props like onChange, value as needed
          />

          <SelectOption
            placeholder="그것은 무엇입니까?"
            options={whatIsItOptions}
            value={whatMade}
            onChange={(e) => setWhatMade(e.target.value)}
            disabled={false} // Add other props like onChange, value as needed
          />

          <SelectOption
            placeholder="언제 만들었나요?"
            options={whenMadeOptions}
            value={whenMade}
            onChange={(e) => setWhenMade(e.target.value)}
            disabled={false} // Add other props like onChange, value as needed
          />
        </Flex>
        <Flex // 카테고리
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <SectionTitle
            title={"카테고리*"}
            description={
              "더 많은 쇼핑객이 해당 상품을 찾는 데 도움이 되는 카테고리 제안을 받으려면 상품에 대한 2~3단어 설명을 입력하세요."
            }
            link={undefined}
          />

          <SelectOption
            value={selectedCategory}
            onChange={handleCategoryChange}
            options={Object.keys(subsubCategory)}
            placeholder="상위 카테고리 선택"
            disabled={undefined}
          />
          <SelectOption
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
            options={selectedCategory ? subsubCategory[selectedCategory] : []}
            placeholder={
              selectedCategory
                ? "하위 카테고리 선택"
                : "상위 카테고리를 먼저 선택하세요"
            }
            disabled={!selectedCategory}
          />
        </Flex>
        <Flex // 갱신옵션
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <SectionTitle
            title={"갱신 옵션*"}
            description={
              "각 갱신은 4개월 동안 또는 목록이 매진될 때까지 지속됩니다."
            }
            link={"자동 갱신에 대해 자세히 알아보기"}
          />
          <RadioOption
            setOptionValue={setRefreshOptionValue}
            OptionValue={refreshOptionValue}
            option1={"자동 갱신"}
            description1={
              " 이 목록은 매번 500원으로 만료되므로 갱신됩니다(권장)."
            }
            option2={"수동 갱신"}
            description2={"만료된 목록을 직접 갱신하겠습니다."}
          />
        </Flex>
        <Flex // 배송 상품 유형
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <SectionTitle
            title={"유형*"}
            description={undefined}
            link={undefined}
          />
          <RadioOption
            setOptionValue={setShippingOptionValue}
            OptionValue={shippingOptionValue}
            option1={"배송상품"}
            description1={"구매자에게 배송할 유형의 품목입니다"}
            option2={"디지털 다운로드 상품"}
            description2={"구매자가 다운로드할 디지털 파일입니다."}
          />
        </Flex>
        <Flex // 설명
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <SectionTitle
            title={"설명*"}
            description={
              "제품의 가장 뛰어난 기능을 설명하는 간략한 개요부터 시작하세요. 쇼핑객은 처음에는 설명의 처음 몇 줄만 볼 수 있으므로 중요하게 생각하세요! 쇼핑객은 귀하의 프로세스와 제품 뒤에 숨겨진 이야기를 듣고 싶어합니다."
            }
            link={undefined}
          />

          <Flex
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"24px"}
            flex={"1 0 0"}
          >
            <Textarea
              value={productDescription}
              display="flex"
              padding="11px 16px"
              alignItems="flex-start"
              h={"240px"}
              gap={"8px"}
              alignSelf="stretch"
              borderRadius="5px"
              border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
              background="var(--maincolorsbg-white, #FFF)"
              placeholder="설명을 입력하세요"
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </Flex>
        </Flex>
        <Flex // 섹션
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <SectionTitle
            title={"섹션"}
            description={undefined}
            link={undefined}
            isOption
          />

          <Flex
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"8px"}
          >
            {" "}
            <Text textStyle={"B14R"}>
              쇼핑객이 쉽게 찾아볼 수 있도록 관련 목록을 섹션으로
              그룹화합니다(예: 팔찌, 어버이날 선물, 털실).
            </Text>
            <Text
              color="var(--maincolorstextblack-222222, #222)"
              textStyle={"B14R"}
              css={{
                textDecorationLine: "underline",
              }}
              cursor={"pointer"}
            >
              첫 번째 섹션 추가
            </Text>
            {!isLoading && (
              <SelectOption
                value={section}
                onChange={(e) => setSection(e.target.value)}
                options={data.featured_sections.map((item) => item.title)}
                disabled={false}
                placeholder={"섹션 이름"}
              />
            )}
          </Flex>
        </Flex>
        <Flex // 태그
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <SectionTitle
            title={"태그"}
            description={
              " 태그를 사용하면 이 작품을 검색해서 찾기 더욱 쉬워져요. 최대 13개까지 태그를 설정할 수 있어요."
            }
            link={"태그에 대한 아이디어를 얻으세요."}
            isOption
          />

          <Flex
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"12px"}
          >
            <TagInput
              placeholder={"모양, 색상, 스타일, 기능 등"}
              onAdd={handleAddTag}
            />
            <Flex gap={"12px"} alignItems={"flex-start"} flexWrap="wrap">
              {tags.map((tag, index) => (
                <TagBox
                  key={index}
                  tag={tag}
                  index={index}
                  removeTag={removeTag}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Flex // 재료
          display={"flex"}
          alignSelf={"stretch"}
          alignItems={"flex-start"}
          gap={"40px"}
        >
          <SectionTitle
            title={"재료"}
            description={undefined}
            link={undefined}
            isOption
          />
          <Flex
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"12px"}
          >
            <TagInput
              placeholder={"원재료, 성분 등"}
              onAdd={handleAddMaterial}
            />
            <Flex gap={"12px"} alignItems={"flex-start"} flexWrap="wrap">
              {materials.map((tag, index) => (
                <TagBox
                  key={index}
                  tag={tag}
                  index={index}
                  removeTag={removeMaterial}
                />
              ))}
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
    if (onAdd) {
      onAdd(tempValue);
    }
    setTempValue(""); // Clear the input field
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

export const SvgX = () => {
  return (
    <div style={{ cursor: "pointer" }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="close">
          <mask
            id="mask0_1005_1568"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_1005_1568)">
            <path
              id="close_2"
              d="M6.40148 18.6538L5.34766 17.6L10.9477 12L5.34766 6.40002L6.40148 5.34619L12.0015 10.9462L17.6015 5.34619L18.6553 6.40002L13.0553 12L18.6553 17.6L17.6015 18.6538L12.0015 13.0538L6.40148 18.6538Z"
              fill="#1C1B1F"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
