import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";

function NewsTwo({ source, title }) {
  const gray = useColorModeValue("gray.600", "gray.300");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <VStack gap={"4px"} alignItems={"flex-end"}>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        _hover={{
          boxShadow: "0px 4px 8px 0px rgba(34, 34, 34, 0.15)",
          transitionDuration: "0.2s",
        }}
      >
        <Image
          width="275px"
          height="158px"
          objectFit="cover"
          src={source}
          borderRadius={"10px"}
        />
      </Box>
      <HStack alignItems={"center"}>
        <Text fontSize={"15px"} align={"center"}>
          <Link style={{ textDecoration: "none" }}>{title}</Link>
        </Text>
        <Box cursor={"pointer"} color="black">
          <FaRegHeart size="15px" />
        </Box>
      </HStack>
    </VStack>
  );
}

NewsTwo.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsTwo;
