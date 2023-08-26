import { FaStar, FaRegHeart } from "react-icons/fa";
import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import ArtantRecommend from "../components/ArtantRecommend";
import NewArrival from "../components/NewArrival";
import GiftCategories from "../components/GiftCategories";
import NewsEvent from "../components/index/NewsEvent";
import RecentlyViewed from "../components/RecentlyViewed";
import ArtistRecommend from "../components/ArtistRecommend";
import Footer from "../components/commons/Footer";
import TopBanner from "../components/index/TopBanner";
import RegisterButton from "../components/index/RegisterButton";
import CenteredText from "../components/index/CenterCopy";
import ItemListFive from "../components/ProductDetail/ItemsListFive";

export default function Home() {
  return (
    <Box>
      <TopBanner />

      <Flex
        flexDirection={"column"}
        gap={"120px"}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center" // Center horizontally
          justifyContent="center" // Center vertically
          gap={"96px"}
        >
          <CenteredText />

          <NewArrival />
          <ArtantRecommend />
          <GiftCategories />
          <NewsEvent />
          <ArtistRecommend />
          <ItemListFive title="최근 본 작품" />
        </Box>
        <RegisterButton />
      </Flex>
      <Footer />
    </Box>
  );
}
