import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { subCategory, subsubCategory } from "./data/options";

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
