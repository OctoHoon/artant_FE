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
      setKeyword("");
    }
  };

  return (
    <InputGroup w={width} h={height}>
      <Input
        type="text"
        placeholder={placeholder}
        _placeholder={{
          color: "var(--maincolorstextgrayb-5-b-5-b-5, #B5B5B5)",
          fontFamily: "Spoqa Han Sans Neo",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
        borderRadius="full"
        h={height}
        bg={type ? "#F1F1F5" : "white"}
        focusBorderColor="gray.400"
        border={
          type
            ? "1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
            : "1px solid #222"
        }
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <InputRightElement
        borderRadius="full"
        h={height}
        onClick={() => onSearch(keyword)}
        mr={"6px"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 11.7101 16.9276 13.2866 15.964 14.5483L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3466 21.0676 19.7794 21.0953 19.3871 20.7903L19.2929 20.7071L14.5483 15.964C13.2866 16.9276 11.7101 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5ZM10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5Z"
            fill="#777777"
          />
        </svg>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
