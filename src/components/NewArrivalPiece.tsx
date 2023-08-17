import { FaRegHeart } from "react-icons/fa";
import {
  Box,
  Fade,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

function NewArrivalPiece({ pk, source, price, originalPrice }) {
  const gray = useColorModeValue("gray.600", "gray.300");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <VStack w={"400px"} alignItems={"center"} position="relative">
      <a href={`listings/${pk}`}>
        <Box
          position="relative"
          overflow={"hidden"}
          mb={3}
          rounded="xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          border="1px solid #D9D9D9"
          _hover={{
            boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
            transitionDuration: "0.2s",
          }}
        >
          <Image maxH="500" src={source} />

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
          rounded="full"
          bg="gray.200"
          display="flex"
          opacity={0.7}
          justifyContent="center"
          alignItems="center"
        >
          <Text ml={4} mr={2} fontSize={"20px"}>
            ₩ {price.toLocaleString()}
          </Text>
          <Text
            mr={4}
            textDecoration="line-through"
            fontSize={"13px"}
            color={"#BC0000"}
          >
            ₩ {originalPrice.toLocaleString()}
          </Text>
        </Box>
      </a>
    </VStack>
  );
}

NewArrivalPiece.propTypes = {
  pk: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number.isRequired,
};

export default NewArrivalPiece;
