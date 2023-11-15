import {
  Box,
  Grid,
  Image,
  VStack,
  Text,
  AspectRatio,
  HStack,
  IconButton,
  Fade,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Flex,
} from "@chakra-ui/react";
import StarRating from "../../commons/StarRating";
import ReviewList from "./ReviewList";
import ReviewPhotos from "./ReviewPhotos";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProductDetails, getReviews, getShopReviews } from "../../../api";
import ShopReviewList from "./ShopReviewList";

export default function ReveiwSection({ shop_pk }) {
  const [page, setPage] = useState(1);
  const { pk } = useParams();
  const { isLoading, data } = useQuery([pk, page, ""], getReviews);

  const { isLoading: shopReviewisLoading, data: shopReviewData } = useQuery(
    [1, page, ""],
    getShopReviews
  );
  return (
    <Box>
      <Flex alignItems="center" marginBottom={"8px"}>
        <Text
          color="#222"
          fontSize="24px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="normal"
          letterSpacing="-0.072px"
          marginRight="12px"
        >
          고객리뷰
        </Text>
        <Box
          width="1px"
          height="12px"
          backgroundColor="#666"
          border="1px solid black"
          boxSizing="border-box"
          marginRight="12px"
        />

        <StarRating
          star={5}
          reviews={data && data["total_count"]}
          include_count={true}
        />
      </Flex>

      <Tabs
        position="relative"
        color="black"
        colorScheme="black"
        width={"764px"}
      >
        <TabList>
          <Tab _selected={{ fontWeight: 600 }}>
            <Text>이 작품 리뷰</Text>
            <Box width="10px" />
            <Box padding="2px 8px" borderRadius={"100px"} bg={"#EAEAEA"}>
              {data && data["total_count"]}
            </Box>
          </Tab>

          <Tab _selected={{ fontWeight: 600 }}>
            <Text>판매자 샵 리뷰</Text>
            <Box width="10px" />
            <Box padding="2px 8px" borderRadius={"100px"} bg={"#EAEAEA"}>
              {shopReviewData && shopReviewData["total_count"]}
            </Box>
          </Tab>
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg="black" borderRadius="1px" />
        <TabPanels>
          <TabPanel padding={"0px"}>
            <ReviewList />
          </TabPanel>
          <TabPanel padding={"0px"}>
            <ShopReviewList shop_pk={shop_pk} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <ReviewPhotos />
    </Box>
  );
}
