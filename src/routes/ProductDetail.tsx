import { FaStar, FaRegHeart } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
import Itemlists from "../components/Items/itemlists";
import RecentlyViewed from "../components/RecentlyViewed";
import Footer from "../components/commons/Footer";
import ItemDetail from "../components/ProductDetail/ItemDetail";
import CollectionList from "../components/ProductDetail/CollectionList";
import RelatedKeywords from "../components/ProductDetail/RelatedKeywords";

export default function ProductDetail() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center" // Center horizontally
      justifyContent="center" // Center vertically
      gap={10}
      px={40}
    >
      <ItemDetail />
      <RecentlyViewed title="판매자의 다른 작품" />
      <RecentlyViewed title="당신이 좋아할 만한 작품" />
      <CollectionList
        title="아트앤아트 쇼핑객이 직접 선택한 컬렉션"
        option={true}
      />
      <RelatedKeywords />

      <Footer />
    </Box>
  );
}
