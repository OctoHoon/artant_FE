import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Artist({ pk, source, name, description }) {
  return (
    <Link to={`/shop/${pk}`}>
      <Flex alignItems="center" gap="16px">
        <Image
          width={"100px"}
          height="100px"
          borderRadius="100px"
          border="1px solid #FFF"
          src={source}
          _hover={{
            border: "1px solid #222", // Add a border on hover
            boxShadow: "0px 2px 8px 0px rgba(34, 34, 34, 0.15)",
          }}
        />
        <Flex flexDirection={"column"} gap={"5ps"}>
          <Text fontSize={"20px"}>{name} 작가</Text>
          <Text
            fontSize={"15px"}
            color={" var(--maincolorstextgray-969696, #969696);"}
          >
            {description}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}

Artist.propTypes = {
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Artist;
