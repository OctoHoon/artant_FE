import { FaRegHeart, FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";
import {
  Box,
  Button,
  Fade,
  Flex,
  Grid,
  HStack,
  Image,
  Tag,
  TagLabel,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import { color } from "framer-motion";
import { Link } from "react-router-dom";
import StarRating from "../commons/StarRating";

export default function ShopProductCard({
  pk,
  source,
  title,
  description,
  artist,
  price,
  originalPrice,
  free_shipping,
  is_best_seller,
}) {
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
      maxW={"280px"}
      alignItems={"flex-start"}
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      _hover={{
        boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
        transitionDuration: "0.2s",
      }}
    >
      <a href={`/listings/${pk}`}>
        <Box position="relative" overflow={"hidden"} mb={3} rounded="xl">
          <Image w="100%" objectFit="cover" src={source} />

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
        <Box>
          <Text display={"block"} noOfLines={2} fontSize="14px">
            {title} - {description} By {artist} 작가
          </Text>
        </Box>

        <Flex alignItems="baseline">
          <Text as="b" mr={2} fontSize={"20px"}>
            {price.toLocaleString()}원
          </Text>
        </Flex>
        <Flex>
          <Text mr={2} textDecoration="line-through" fontSize={"13px"}>
            {originalPrice.toLocaleString()}원
          </Text>
          <Text fontSize={"13px"} color={"#BC0000"}>
            {100 - Math.round((100 * price) / originalPrice)}% off
          </Text>
        </Flex>

        <Box w="100%">
          {[free_shipping, is_best_seller].map((tag, index) => (
            <Tag
              key={index}
              variant="outline"
              colorScheme={index == 0 ? "green" : "purple"}
              marginRight="4px"
            >
              <TagLabel>
                {index === 0 ? "무료배송" : index === 1 ? "베스트셀러" : null}
              </TagLabel>
            </Tag>
          ))}
        </Box>
      </a>
    </VStack>
  );
}
