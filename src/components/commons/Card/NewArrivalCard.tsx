import { FaRegHeart } from "react-icons/fa";
import {
  Box,
  Fade,
  Flex,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NewArrivalCard({ pk, source, price, originalPrice }) {
  const gray = useColorModeValue("gray.600", "gray.300");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <VStack
      width={"400px"}
      height={"500px"}
      alignItems={"center"}
      position="relative"
    >
      <Link to={`listings/${pk}`}>
        <Box
          position="relative"
          overflow={"hidden"}
          mb={3}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          border="1px solid #D9D9D9"
          _hover={{
            boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
            transitionDuration: "0.2s",
          }}
        >
          <Image height="500px" width={"400px"} src={source} fit={"contain"} />

          {/* 흰 동그라미와 하트 아이콘 */}
          <Fade in={isHovered}>
            <Box
              position="absolute"
              top={2}
              right={2}
              w="36px"
              h="36px"
              rounded="full"
              bg="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border={"1px solid #D9D9D9"}
            >
              <Box cursor={"pointer"} color="black">
                <FaRegHeart size="20px" />
              </Box>
            </Box>
          </Fade>
        </Box>

        <Box
          position="absolute"
          bottom={7}
          left={4}
          padding={"4px 6px"}
          rounded="full"
          bg="gray.200"
          display="flex"
          opacity={0.7}
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            ml={4}
            mr={2}
            fontSize={"20px"}
            fontWeight={"500"}
            alignItems={"center"}
          >
            {price.toLocaleString()}
            <Text fontSize={"14px"}>원</Text>
          </Flex>
          {price != originalPrice ? (
            <Flex
              mr={4}
              textDecoration="line-through"
              fontSize={"13px"}
              color={"#BC0000"}
            >
              {originalPrice.toLocaleString()}
              <Text>원</Text>
            </Flex>
          ) : null}
        </Box>
      </Link>
    </VStack>
  );
}

NewArrivalCard.propTypes = {
  pk: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number.isRequired,
};

export default NewArrivalCard;
