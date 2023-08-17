import { Box, FormLabel, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { subCategory, subsubCategory } from "../../data/options";

export default function CategoryFilter(props) {
  const { selectedCategory, setSelectedCategory } = props;
  const [selectedSub, setSelectedSub] = useState(props.category);
  const [selectedSubSub, setSelectedSubSub] = useState(props.category);

  return (
    <Stack spacing="16px">
      <Box>
        <FormLabel htmlFor="username">Filter By Category</FormLabel>
        <Box
          p={4}
          display="flex"
          alignItems="center"
          width="100%"
          justifyContent="space-between"
          _hover={{ bg: "#F1F1F5", cursor: "pointer" }}
          onClick={() => setSelectedSub("")}
        >
          모든 카테고리
        </Box>
        {subCategory.map((sub) => {
          {
            if (
              selectedSub == "" ||
              sub == selectedSub ||
              subsubCategory[sub].includes(props.category)
            )
              return (
                <div>
                  <Box
                    p={4}
                    display="flex"
                    alignItems="center"
                    width="100%"
                    justifyContent="space-between"
                    _hover={{ bg: "#F1F1F5", cursor: "pointer" }}
                    marginLeft="10px"
                    onClick={() => {
                      setSelectedSub(sub);
                      setSelectedCategory(sub);
                    }}
                    style={{
                      textDecoration:
                        props.category === sub ? "underline" : "none",
                    }}
                  >
                    {sub}
                  </Box>

                  {(selectedSub == sub ||
                    subsubCategory[sub].includes(props.category)) &&
                    subsubCategory[sub].map((subsub) => {
                      return (
                        <Box
                          p={4}
                          display="flex"
                          alignItems="center"
                          width="100%"
                          justifyContent="space-between"
                          _hover={{ bg: "#F1F1F5", cursor: "pointer" }}
                          marginLeft="20px"
                          onClick={() => {
                            setSelectedCategory(subsub);
                          }}
                          style={{
                            textDecoration:
                              props.category === subsub ? "underline" : "none",
                          }}
                        >
                          {subsub}
                        </Box>
                      );
                    })}
                </div>
              );
          }
        })}
      </Box>
    </Stack>
  );
}
