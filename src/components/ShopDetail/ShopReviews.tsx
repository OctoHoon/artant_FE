import { Flex, Box, Text, Select, Avatar, Image } from "@chakra-ui/react";
import StarRating from "../commons/StarRating";
import CustomSelect from "../Items/CustomSelect";
import { useState } from "react";
import ShopReview from "./ShopReview";
import PaginationController from "../commons/PaginationController";

const ReveiwKeyword = [
  {
    name: "품질",
    count: 56,
  },
  {
    name: "배송",
    count: 108,
  },
  {
    name: "고객서비스",
    count: 140,
  },
];

export default function ShopReviews() {
  const [selectedKeyword, setSelectedKeyword] = useState("배송");

  const selectedKeywordObject = ReveiwKeyword.find(
    (keyword) => keyword.name === selectedKeyword
  );

  const selectedKeywordCount = selectedKeywordObject
    ? selectedKeywordObject.count
    : 0;

  return (
    <Box>
      <Box bg="#D9D9D9" width="100%" height={"1px"} />
      <Box height="30px" />
      <Flex gap={10}>
        <Box maxW="258px">
          <Box width={"252px"}>리뷰</Box>
        </Box>
        <Box maxW="958px">
          <Flex justifyContent={"space-between"}>
            <Flex alignItems={"center"}>
              작품 리뷰 평점
              <StarRating star={5} reviews={447} include_count={true} />
            </Flex>
            <CustomSelect onSelectionChange={() => {}} />
          </Flex>
          <Box height="36px" />
          <Text>관련 리뷰 확인 :</Text>
          <Box height="16px" />
          <Flex>
            {ReveiwKeyword.map((keyword) => (
              <Box
                gap="6px"
                marginRight="6px"
                display="flex"
                alignItems={"center"}
                border="1px solid #222"
                padding="8px 10px"
                onClick={() => setSelectedKeyword(keyword["name"])}
              >
                {keyword["name"]}
                <Box bg="#EAEAEA" borderRadius={"100px"} padding={"2px 8px"}>
                  {keyword["count"]}
                </Box>
              </Box>
            ))}
          </Flex>
          <Box height="16px" />
          <Flex>
            {selectedKeyword}을 언급한 리뷰 {selectedKeywordCount} 중 1-5개 표시
            <Text marginLeft="8px" as="u">
              {" "}
              필터 지우기
            </Text>
          </Flex>
          <Box height={"40px"} />
          <ShopReview />
          <ShopReview />
          <ShopReview />
          <ShopReview />
          <ShopReview />
          <PaginationController itemCount={20} pagination={5} />

          <Box />
        </Box>
      </Flex>
    </Box>
  );
}
