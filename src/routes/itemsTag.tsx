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
import RegisterButton from "../components/index/RegisterButton";
import ItemlistsTag from "../components/Items/itemlistsTag";

export default function ItemsTag() {
  return (
    <Box>
      <ItemlistsTag />
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
      <Box height={"120px"} />
      <Box px={40}>
        <RegisterButton />
      </Box>
      <Box height={"12px"} />
    </Box>
  );
}
