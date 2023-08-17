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

export default function Items() {
  return (
    <Box>
      <Itemlists />
      <RecentlyViewed title="최근 본 작품" />
      <Footer />
    </Box>
  );
}
