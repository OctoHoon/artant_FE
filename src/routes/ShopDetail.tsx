import { Box, Divider, Image } from "@chakra-ui/react";
import ShopHeader from "../components/ShopDetail/ShopHeader";
import ShopMiddle from "../components/ShopDetail/ShopMiddle";
import ShopReviews from "../components/ShopDetail/ShopReviews";
import ShopIntro from "../components/ShopDetail/ShopIntro";
import ShopPolicy from "../components/ShopDetail/ShopPolicy";
import ScrollToTop from "../components/commons/ScrollToTop";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getShopDetails } from "../api";

export default function ShopDetail() {
  const { pk } = useParams();
  const { isLoading, data } = useQuery(["shop", pk], getShopDetails);

  console.log(data);
  return (
    <Box mb={"120px"}>
      <ScrollToTop />
      <ShopHeader />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center horizontally
        justifyContent="center" // Center vertically
        gap={10}
        px={40}
      >
        <ShopMiddle sections={data && data.featured_sections} />
        <ShopReviews />
        <Box width={"1280px"} background={"#D9D9D9"} height={"1px"} />
        <ShopIntro />
        <ShopPolicy shop_name={data && data.shop_name} />
      </Box>
    </Box>
  );
}
