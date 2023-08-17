import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { subCategory, subsubCategory } from "./data/options";

interface Category {
  name: string;
  link: string;
  subcategories: string[];
}

const categories: Category[] = [
  {
    name: "회화",
    link: "/",
    subcategories: ["유화", "수채화", "어크릴", "스프레이", "혼합기법", "잉크"],
  },
  { name: "프린트", link: "/", subcategories: ["풍경화", "인물화", "추상화"] },
  { name: "사진", link: "/", subcategories: ["풍경화", "인물화", "추상화"] },
  {
    name: "일러스트레이션",
    link: "/",
    subcategories: ["풍경화", "인물화", "추상화"],
  },
  { name: "공예", link: "/", subcategories: ["풍경화", "인물화", "추상화"] },
  { name: "조각", link: "/", subcategories: ["풍경화", "인물화", "추상화"] },
  { name: "K-아트", link: "/", subcategories: ["풍경화", "인물화", "추상화"] },
  {
    name: "혼합미디어",
    link: "/",
    subcategories: ["풍경화", "인물화", "추상화"],
  },
];

export default function CategoryHeader() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState<string | null>(
    null
  );
  const [hoverOnCat, setHoverOnCat] = useState<boolean>(false);

  const [hoverOnSub, setHoverOnSub] = useState<boolean>(false);

  const handleCategoryMouseEnter = (categoryName: string) => {
    setHoveredCategory(categoryName);
  };

  const handleCategoryMouseLeave = () => {
    const isMouseOnSubCategory = categories.some((category) => hoverOnSub);

    // If the mouse is not on a subcategory, reset hoveredCategory
    if (!isMouseOnSubCategory) {
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
    <Flex>
      <Flex
        ml={40}
        justifyContent="flex-start"
        width="1280px"
        height="58px"
        flex={1}
        onMouseEnter={() => setHoverOnSub(true)}
        onMouseLeave={() => setHoverOnSub(false)}
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
                _hover={{ textDecoration: "underline" }}
                textDecoration={
                  (hoverOnSub || hoverOnCat) && hoveredCategory === category
                    ? "underline"
                    : "none"
                }
              >
                {category}
              </Text>
            </Link>
          </Box>
        ))}
      </Flex>
      {hoverOnSub || hoverOnCat ? (
        <Flex
          direction="row"
          bg="white"
          position="absolute"
          top="130px"
          left={0}
          right={0} // Span across the whole width
          p={2}
          zIndex={1}
          boxShadow="md"
          display={hoveredCategory ? "flex" : "none"}
          alignItems="left" // Align subcategories horizontally
          onMouseEnter={() => setHoverOnCat(true)}
          onMouseLeave={() => setHoverOnCat(false)}
        >
          <Box height="20px" />
          <Box width="151px" />
          {subCategory.map((category) =>
            hoveredCategory === category
              ? subsubCategory[category].map((subCategory) => (
                  <Link
                    key={subCategory}
                    to={`/items/${encodeURIComponent(subCategory)}`}
                  >
                    <Text
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
      ) : null}
    </Flex>
  );
}
