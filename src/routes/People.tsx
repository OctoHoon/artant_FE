import { FaStar, FaRegHeart } from "react-icons/fa";
import { Box, Image } from "@chakra-ui/react";
import Itemlists from "../components/Items/itemlists";
import RecentlyViewed from "../components/RecentlyViewed";
import Footer from "../components/commons/Footer";
import ItemDetail from "../components/ProductDetail/ItemDetail";
import CollectionList from "../components/ProductDetail/CollectionList";
import RelatedKeywords from "../components/ProductDetail/RelatedKeywords";
import ArtantRecommend from "../components/ArtantRecommend";
import ArtistRecommend from "../components/ArtistRecommend";
import GiftCategories from "../components/GiftCategories";
import NewArrival from "../components/NewArrival";
import CenteredText from "../components/index/CenterCopy";
import NewsEvent from "../components/index/NewsEvent";
import RegisterButton from "../components/index/RegisterButton";
import ShopHeader from "../components/ShopDetail/ShopHeader";
import ShopMiddle from "../components/ShopDetail/ShopMiddle";
import ShopReviews from "../components/ShopDetail/ShopReviews";
import ShopIntro from "../components/ShopDetail/ShopIntro";
import ShopPolicy from "../components/ShopDetail/ShopPolicy";
import FavoriteItems from "../components/People/ProfileHeader";
import ProfileHeader from "../components/People/ProfileHeader";

export default function ShopDetail() {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center horizontally
        justifyContent="center" // Center vertically
        gap={10}
        px={40}
      >
        <ProfileHeader />

        <Footer />
      </Box>
    </Box>
  );
}
