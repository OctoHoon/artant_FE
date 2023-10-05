import {
  Box,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function NewsOne({ source, title, id }) {
  const gray = useColorModeValue("gray.600", "gray.300");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`events/${id}`}>
      <VStack alignItems={"flex-end"} position="relative" gap={"4px"}>
        <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Image
            width={"350px"}
            height={"350px"}
            objectFit={"cover"}
            src={source}
            borderRadius={"10px"}
            _hover={{
              boxShadow: "0px 4px 8px 0px rgba(34, 34, 34, 0.15)",
              transitionDuration: "0.2s",
            }}
          />
        </Box>
        <HStack alignItems={"center"}>
          <Text fontSize={"15px"} align={"center"}>
            {title}
          </Text>
          <Box cursor={"pointer"} color="black">
            <FaRegHeart size="15px" />
          </Box>
        </HStack>
      </VStack>
    </Link>
  );
}

NewsOne.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsOne;
