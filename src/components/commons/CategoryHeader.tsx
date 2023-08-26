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
      <Flex flexDirection={"column"}>
        <Flex
          justifyContent="flex-start"
          width="1280px"
          minW={"700px"}
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
            justifyContent="flex-start"
            width={"1280px"}
            height={"60px"}
            direction="row"
            zIndex={1}
            display={hoveredCategory ? "flex" : "none"}
            onMouseEnter={() => setHoverOnCat(true)}
            onMouseLeave={() => setHoverOnCat(false)}
          >
            {subCategory.map((category) =>
              hoveredCategory === category && category != "모든작품"
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
        ) : (
          <Box height={"60px"} />
        )}
      </Flex>
    </Flex>
  );
}
