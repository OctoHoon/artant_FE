import {
  Box,
  Button,
  ButtonGroup,
  Flex,
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
import PaginationController from "../../commons/PaginationController";
import { useQuery } from "@tanstack/react-query";
import { getProductDetails, getReviews, getShopReviews } from "../../../api";

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

export default function ShopReviewList({ shop_pk }) {
  const [selectedOption, setSelectedOption] = useState("relevance");
  const [page, setPage] = useState(1);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const { pk } = useParams();

  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  console.log(totalCount);

  const { isLoading, data } = useQuery(
    [shop_pk, page, selectedOption],
    getShopReviews
  );

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
      {isLoading ? null : (
        <>
          {data["reviews"].map((review: IReview, index) => (
            <ReviewItem review={review} key={index} />
          ))}

          <PaginationController
            itemCount={data["total_count"]}
            pagination={3}
          />
        </>
      )}
    </div>
  );
}
