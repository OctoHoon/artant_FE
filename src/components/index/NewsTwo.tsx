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
    <Box maxW={"260px"} marginLeft={"5px"}>
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
        <Image maxW="250px" objectFit="cover" src={source} />
      </Box>
      <Flex alignItems={"center"}>
        {" "}
        <Text fontSize={"15px"}>
          <Link style={{ textDecoration: "none" }}>{title}</Link>
        </Text>
        <FaRegHeart size="15px" />
      </Flex>
    </Box>
  );
}

NewsTwo.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsTwo;
