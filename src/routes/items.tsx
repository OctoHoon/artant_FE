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
import Itemlists from "../components/Items/itemlists";
import RecentlyViewed from "../components/RecentlyViewed";
import Footer from "../components/commons/Footer";
import ItemListFive from "../components/ProductDetail/ItemsListFive";

export default function Items() {
  return (
    <Box>
      <Itemlists />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center horizontally
        justifyContent="center" // Center vertically
        gap={10}
        px={40}
      >
        {" "}
        <RecentlyViewed title="최근 본 작품" />
      </Box>
    </Box>
  );
}
