import {
  Box,
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import StarRating from "../../commons/StarRating";
import ReviewItem from "./ReviewItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewPhotos from "./ReviewPhotos";

const total_count = 3;

interface IReview {
  user: {
    name: string;
    avatar: string;
  };
  product_name: string;
  content: string;
  rating: number;
  created_at: string;
  rating_item_quality: number | null;
  rating_shipping: number | null;
  rating_customer_servie: number | null;
  images: string[];
  reply: {
    name: string;
    avatar: string;
    created_at: string;
  } | null;
}

const options = {
  relevance: "추천순",
  created_at: "최신순",
};

export default function ReviewList() {
  const [selectedOption, setSelectedOption] = useState("relevance");
  const [page, setPage] = useState(1);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const { pk } = useParams();

  const [reviews, setReview] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/api/v1/products/${pk}/reviews?page=${page}&sort=${selectedOption}`
      )
      .then((response) => {
        console.log("API Response:", response.data);
        setReview(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [selectedOption, page]);

  return (
    <div>
      <Box display="flex" justifyContent="flex-end">
        <Menu>
          <MenuButton
            as={Button}
            width="162px"
            colorScheme="white"
            rightIcon={<FaChevronDown />}
            color="#666"
            textAlign="right"
            fontFamily="Spoqa Han Sans Neo"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            letterSpacing="-0.3px"
            textTransform="capitalize"
          >
            정렬 기준 : {options[selectedOption]}
          </MenuButton>
          <MenuList minWidth="120px" marginLeft={"30px"}>
            {Object.keys(options).map((optionKey) => (
              <MenuItem
                key={optionKey}
                color="#666"
                textAlign="right"
                fontFamily="Spoqa Han Sans Neo"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
                letterSpacing="-0.3px"
                textTransform="capitalize"
                onClick={() => setSelectedOption(optionKey)}
                onMouseEnter={() => setHoveredOption(optionKey)}
                onMouseLeave={() => setHoveredOption(null)}
                bg={
                  (selectedOption === optionKey && hoveredOption === null) ||
                  hoveredOption === optionKey
                    ? "gray.200"
                    : "transparent"
                }
              >
                <span>{options[optionKey]}</span>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
      {reviews.map((review: IReview, index) => (
        <ReviewItem review={review} key={index} />
      ))}
      <Box display="flex" my={20}>
        <ButtonGroup>
          <Button backgroundColor={"transparent"} variant={"none"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.47445 0L8 0.75L1.45985 6L8 11.25L7.47445 12L0 6L7.47445 0Z"
                fill="#777777"
              />
            </svg>
          </Button>
          {[Math.floor(total_count / 5) + 1].map((page) => (
            <Button key={page} backgroundColor={"transparent"} variant={"none"}>
              <Text
                color="#767676"
                fontFamily="Roboto"
                fontSize="15px"
                fontStyle="normal"
                fontWeight={500}
                lineHeight="normal"
                textTransform="capitalize"
              >
                {page}
              </Text>
            </Button>
          ))}
          <div>{total_count > 280 ? <Text marginTop={1}>...</Text> : null}</div>
          <Button backgroundColor={"transparent"} variant={"none"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.525548 12L6.55671e-08 11.25L6.54015 6L9.83506e-07 0.749999L0.52555 -6.53437e-07L8 6L0.525548 12Z"
                fill="#777777"
              />
            </svg>
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
}
