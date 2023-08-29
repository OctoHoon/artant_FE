import React, { useState } from "react";
import {
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ placeholder, width, height, type, onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(keyword);
    }
  };

  return (
    <InputGroup w={width} h={height}>
      <Input
        type="text"
        placeholder={placeholder}
        borderRadius="full"
        h={height}
        bg={type ? "#F1F1F5" : "white"}
        focusBorderColor="gray.400"
        border={type ? "" : "1px solid #222"}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <InputRightElement borderRadius="full" h={height}>
        <IconButton
          bg="transparent"
          aria-label="search for anything"
          icon={<FiSearch size={"18.5px"} />}
          borderRadius="full"
          h={height}
          _hover={{ bg: "transparent" }}
          onClick={() => onSearch(keyword)}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
