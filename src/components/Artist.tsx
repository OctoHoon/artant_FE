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

function Artist({ source, name, description }) {
  return (
    <Box w={"300px"}>
      <Link style={{ textDecoration: "none" }}>
        <HStack
          w={"300px"}
          h={"100px"}
          alignItems={"center"}
          position="relative"
        >
          <Box position="relative" overflow={"hidden"} mb={0} rounded="full">
            <Image maxH="100px" src={source} />
          </Box>
          <VStack ml={5} w={"150px"} align={"flex-start"}>
            <Text fontSize={"20px"}>{name} 작가</Text>
            <Text fontSize={"15px"}>{description}</Text>
          </VStack>
        </HStack>
      </Link>
    </Box>
  );
}

Artist.propTypes = {
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Artist;
