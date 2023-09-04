import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { subCategory, subsubCategory } from "../data/options";

interface Category {
  name: string;
  link: string;
  subcategories: string[];
}

export default function CategoryHeader() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState<string | null>(
    null
  );
  const [hoverOnCat, setHoverOnCat] = useState<boolean>(false);

  const [hoverOnSub, setHoverOnSub] = useState<boolean>(false);

  const handleCategoryMouseEnter = (categoryName: string) => {
    setHoverOnSub(true);
    setHoveredCategory(categoryName);
  };

  const handleCategoryMouseLeave = () => {
    if (!hoverOnSub) {
      setHoveredCategory(null);
    }
  };

  const handleSubCategoryMouseEnter = (subCategoryName: string) => {
    setHoveredSubCategory(subCategoryName);
  };

  const handleSubCategoryMouseLeave = () => {
    setHoveredSubCategory(null);
  };

  return (
    <Flex
      flexDirection={"column"}
      width={"full"}
      justifyContent={"center"}
      alignItems={"center"}
      onMouseLeave={() => {
        setHoverOnSub(false);
        setHoveredCategory(null);
      }}
    >
      <Flex
        justifyContent="flex-start"
        width="1280px"
        minW={"700px"}
        height="58px"
        alignItems={"center"}
      >
        {subCategory.map((category) => (
          <Box
            key={category}
            p={2}
            mx={2}
            cursor="pointer"
            onMouseEnter={() => handleCategoryMouseEnter(category)}
            onMouseLeave={handleCategoryMouseLeave}
            position="relative"
          >
            <Link to={`/items/${encodeURIComponent(category)}`}>
              <Text
                style={{
                  textDecoration: "none",
                  position: "relative",
                }}
              >
                {category}
                <span
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: hoveredCategory === category ? "120%" : "0", // 좌우로 퍼지는 효과
                    height: hoveredCategory === category ? "2px" : "0",
                    background: "black", // 색상
                    opacity: hoveredCategory === category ? 1 : 0, // 투명도 조절
                    transition:
                      "width 0.3s ease-in-out, opacity 0.3s ease-in-out",
                  }}
                ></span>
              </Text>
            </Link>
          </Box>
        ))}
      </Flex>
      <Box width="full" height={"1px"} background="#F1F1F5" zIndex={2} />
      {(hoverOnSub || hoverOnCat) && hoveredCategory != "모든작품" ? (
        <Flex
          position={"absolute"}
          width={"full"}
          top={"147px"}
          left={"0px"}
          background="white"
          height={"60px"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          onMouseEnter={() => setHoverOnCat(true)}
          onMouseLeave={() => setHoverOnCat(false)}
        >
          <Box
            position="absolute"
            height="60px"
            width={"full"}
            background="white"
            zIndex={1}
          />
          <Flex
            justifyContent="flex-start"
            width={"1280px"}
            height={"60px"}
            direction="row"
            background={"white"}
            alignItems={"center"}
            zIndex={1}
            display={hoveredCategory ? "flex" : "none"}
          >
            {subCategory.map((category) =>
              hoveredCategory === category && category != "모든작품"
                ? subsubCategory[category].map((subCategory) => (
                    <Link
                      key={subCategory}
                      to={`/items/${encodeURIComponent(subCategory)}`}
                    >
                      <Text
                        fontSize={"16px"}
                        fontWeight={"500"}
                        lineHeight={"150%"}
                        p={2}
                        mx={2}
                        _hover={{ textDecoration: "underline" }}
                        textDecoration={
                          hoveredSubCategory === subCategory
                            ? "underline"
                            : "none"
                        }
                        onMouseEnter={() =>
                          handleSubCategoryMouseEnter(subCategory)
                        }
                        onMouseLeave={() => handleSubCategoryMouseLeave()}
                      >
                        {subCategory}
                      </Text>
                    </Link>
                  ))
                : null
            )}
          </Flex>
          <Box width="full" height={"1px"} background="#F1F1F5" zIndex={2} />
        </Flex>
      ) : null}
    </Flex>
  );
}
