import { FaStar, FaRegHeart } from "react-icons/fa";
import { Box, Divider, Image } from "@chakra-ui/react";
import Itemlists from "../components/Items/itemlists";
import RecentlyViewed from "../components/RecentlyViewed";
import Footer from "../components/commons/Footer";
import ItemDetail from "../components/ProductDetail/ItemDetail";
import CollectionList from "../components/ProductDetail/CollectionList";
import RelatedKeywords from "../components/ProductDetail/RelatedKeywords";
import ArtantRecommend from "../components/index/ArtantRecommend";
import ArtistRecommend from "../components/index/ArtistRecommend";
import GiftCategories from "../components/index/GiftCategories";
import NewArrival from "../components/index/NewArrival";
import CenteredText from "../components/index/CenterCopy";
import NewsEvent from "../components/index/NewsEvent";
import RegisterButton from "../components/index/RegisterButton";
import ShopHeader from "../components/ShopDetail/ShopHeader";
import ShopMiddle from "../components/ShopDetail/ShopMiddle";
import ShopReviews from "../components/ShopDetail/ShopReviews";
import ShopIntro from "../components/ShopDetail/ShopIntro";
import ShopPolicy from "../components/ShopDetail/ShopPolicy";
import ScrollToTop from "../components/commons/ScrollToTop";

export default function ShopDetail() {
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
        <ShopMiddle />
        <ShopReviews />
        <Box width={"1280px"} background={"#D9D9D9"} height={"1px"} />
        <ShopIntro />
        <ShopPolicy />
      </Box>
    </Box>
  );
}
