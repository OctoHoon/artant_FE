import { FaStar, FaRegHeart } from "react-icons/fa";
import {
  Box,
  Button,
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

export default function Home() {
  return (
    <Box>
      <TopBanner />
      <CenteredText />
      <NewArrival />
      <ArtantRecommend />
      <GiftCategories />
      <NewsEvent />
      <ArtistRecommend />
      <RecentlyViewed title="최근 본 작품" />
      <RegisterButton />
      <Footer />
    </Box>
  );
}
