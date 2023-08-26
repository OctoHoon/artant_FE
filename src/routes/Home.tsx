import { Box, Flex } from "@chakra-ui/react";
import ArtantRecommend from "../components/index/ArtantRecommend";
import NewArrival from "../components/index/NewArrival";
import GiftCategories from "../components/index/GiftCategories";
import NewsEvent from "../components/index/NewsEvent";
import ArtistRecommend from "../components/index/ArtistRecommend";
import Footer from "../components/commons/Footer";
import TopBanner from "../components/index/TopBanner";
import RegisterButton from "../components/index/RegisterButton";
import CenteredText from "../components/index/CenterCopy";
import ItemListFive from "../components/ProductDetail/ItemsListFive";
import RecentlyViewed from "../components/RecentlyViewed";

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
          <RecentlyViewed title={"최근 본 작품"} />
        </Box>
        <RegisterButton />
      </Flex>
      <Footer />
    </Box>
  );
}
