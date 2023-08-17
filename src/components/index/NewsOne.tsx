import {
  Box,
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

function NewsOne({ source, title }) {
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
      <VStack maxW={"320px"} alignItems={"flex-end"} position="relative">
        <Box
          position="relative"
          overflow={"hidden"}
          mb={0}
          rounded="xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          _hover={{
            boxShadow: "4px 4px 48px 0px rgba(0, 0, 0, 0.25)",
            transitionDuration: "0.2s",
          }}
        >
          <Image maxW="320px" src={source} />
        </Box>
        <HStack>
          {" "}
          <Text fontSize={"15px"} align={"center"}>
            <Link style={{ textDecoration: "none" }}>{title}</Link>
          </Text>
          <Box cursor={"pointer"} color="black">
            <FaRegHeart size="15px" />
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
}

NewsOne.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsOne;
