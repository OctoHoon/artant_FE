import {
  Box,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

function GiftCategory({ source, category }) {
  const gray = useColorModeValue("gray.600", "gray.300");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box>
      <VStack
        maxW={"290px"}
        alignItems={"center"}
        position="relative"
        gap={"16px"}
      >
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          _hover={{
            boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
            transitionDuration: "0.2s",
          }}
        >
          <Image maxH="290" src={source} borderRadius={"10px"} />
        </Box>
        <Text fontSize={"20px"} fontWeight={"500"}>
          <Link>{category}</Link>
        </Text>
      </VStack>
    </Box>
  );
}

GiftCategory.propTypes = {
  source: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default GiftCategory;
