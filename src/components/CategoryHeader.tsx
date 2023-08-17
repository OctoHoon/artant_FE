import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  const handleCategoryMouseEnter = (categoryName: string) => {
    setHoveredCategory(categoryName);
  };

  const handleCategoryMouseLeave = () => {
    const isMouseOnSubCategory = categories.some(
      (category) =>
        hoveredSubCategory &&
        category.subcategories.includes(hoveredSubCategory)
    );

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
    <Flex
      ml={40}
      justifyContent="flex-start"
      width="1280px"
      height="58px"
      flex={1}
    >
      {categories.map((category) => (
        <Box
          key={category.name}
          p={2}
          mx={2}
          cursor="pointer"
          onMouseEnter={() => handleCategoryMouseEnter(category.name)}
          onMouseLeave={handleCategoryMouseLeave}
          position="relative"
        >
          <a href={`/items/${encodeURIComponent(category.name)}`}>
            <Text
              _hover={{ textDecoration: "underline" }}
              textDecoration={
                hoveredCategory === category.name ? "underline" : "none"
              }
            >
              {category.name}
            </Text>
          </a>
        </Box>
      ))}
      <Flex
        ml={40}
        direction="row"
        bg="white"
        position="absolute"
        top="129px"
        left={0}
        right={0} // Span across the whole width
        p={2}
        zIndex={1}
        boxShadow="md"
        display={hoveredCategory ? "flex" : "none"}
        alignItems="left" // Align subcategories horizontally
      >
        {categories.map((category) =>
          hoveredCategory === category.name
            ? category.subcategories.map((subCategory) => (
                <a
                  key={subCategory}
                  href={`/items/${encodeURIComponent(subCategory)}`}
                >
                  <Text
                    mx={2}
                    _hover={{ textDecoration: "underline" }}
                    textDecoration={
                      hoveredSubCategory === subCategory ? "underline" : "none"
                    }
                    onMouseEnter={() =>
                      handleSubCategoryMouseEnter(subCategory)
                    }
                    onMouseLeave={() => handleSubCategoryMouseLeave()}
                  >
                    {subCategory}
                  </Text>
                </a>
              ))
            : null
        )}
      </Flex>
    </Flex>
  );
}
