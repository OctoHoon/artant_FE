import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import ProductImage from "./ProductImage";
import StarRating from "../commons/StarRating";
import {
  FaChevronLeft,
  FaChevronDown,
  FaRegStar,
  FaChevronRight,
  FaStrikethrough,
  FaRegHeart,
  FaCheck,
} from "react-icons/fa";
import ReviewSection from "./Review/ReviewSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AddCartDrawer from "./AddCartDrawer";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../api";
import { useQuery } from "@tanstack/react-query";
import ProductPanel from "./ProductPanel";

const response = {
  pk: 2,
  name: "African Queen Portrait Black Woman Original Art African Woman Impasto Oil Painting",
  shop_name: "삼성",
  seller_name: "namhyeon",
  original_price: 80,
  price: 64,
  discount_rate: 19,
  rating: 0,
  rating_count: 0,
  stock: 8,
  cart_count: 0,
  shipping_price: "0",
  free_shipping: true,
  processing_min: "1",
  processing_max: "3",
  shipping_date: "8월 14일 ~ 8월 16일",
  is_return_exchange_available: false,
  is_frame_included: false,
  is_artant_choice: false,
  is_artant_star: false,
  colors: [],
  product_item_type: "Handmade",
  is_giftcard_available: false,
  is_gift_wrapping_available: false,
  is_customizable: false,
  images: [
    {
      pk: 1,
      image:
        "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
    },
    {
      pk: 2,
      image:
        "https://i.etsystatic.com/38936109/r/il/885c66/5074138856/il_1588xN.5074138856_o7f8.jpg",
    },
  ],
  video: {
    pk: 1,
    video:
      "https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/lv_0_20230709203334_ndmhnb.mp4",
  },
  is_best_seller: false,
  is_star_seller: false,
  is_liked: false,
  thumbnail:
    "https://i.etsystatic.com/38936109/r/il/725f41/5074138400/il_794xN.5074138400_a0p9.jpg",
  created_at: "2023-08-08T15:39:03.878646+09:00",
  category: "프린트",
  item_width: null,
  item_height: null,
  description:
    "African Queen Portrait Black Woman Original Art African Woman Impasto Oil Painting \r\n\r\ntitle: \"African Queen Jungle\"\r\n\r\n🌈 original hand-painted fine art one-of-a-kind\r\n🌈 size 10 x 10 inches\r\n🌈 materials: oil paints, panel, palette knife\r\n🌈 shipping: high-quality protective packaging with tracking number\r\n🌈 sell unframed - need to be framed.\r\n\r\n🎯 What are you buying?\r\n\r\n✔️ Original Art - this product is a 100% original oil painting painted by hand personally by me - artist Arsen Galikeev.\r\n\r\n✔️ Oil Painting - this original painting is painted with professional oil paints on a high-quality artist's panel. The painting will forever remain as bright and beautiful as on the first day after unpacking. I use only pure oil paints in all layers for my original paintings. I have been specifically studying oil painting technology for several years.\r\n\r\n✔️ Colorful Painting - I love bright and colorful paintings. Many of them are made in the style of impressionism. I don't use graphic programs to process photos of my paintings so that you can see colors and shades the way I see them. However, remember that the colors may vary slightly due to the different settings of our monitors.\r\n\r\n✔️ Authentic Painting - the original painting is signed by a personal artist in accordance with international standards on the front and back sides.\r\n\r\n✔️ Protected Packaging - you will receive an original oil painting carefully packaged. I carefully think over the packaging of my original paintings in order to maintain a balance between reliability and environmental friendliness.\r\n\r\n✔️ Tracked Parcels - I send my original paintings only by tracked parcels with a tracking number. If you write your phone number in the order note, it will make delivery faster and more convenient.\r\n\r\n\r\n❤️ I create each of my paintings with great love. Perhaps that's why my paintings evoke positive emotions in everyone who looks at them. I will be grateful to you for your purchase, like, and good feedback about my work - it will help me continue painting my inspiring paintings.\r\n\r\n\r\n👉👉👉 SOME WORDS ABOUT ME\r\n\r\n\r\nHey! My name is Arsen (ArtSenya) and I am an artist. I studied and am still learning to draw on my own, from books, master classes and online courses.\r\n\r\nOriginal Art - in my store you will find only original art, I do not sell prints.\r\n\r\nThe craving for drawing originated in my childhood. Instead of playing with cars, I took a sketchbook, colored pencils and drew. I also remember that I had many different coloring books that I liked to paint.\r\n\r\nAnd now I am 21 years old, and the craving for drawing has not faded away.\r\n\r\nI want to try many themes and materials in my art.:\r\n\r\nAnimals Paintings - The theme of animals, our smaller brothers, is close to me. They seem to me so sweet and carefree that I try to convey in my paintings all their sweetness. I am attracted to drawing Birds, Fish, Dogs, Cats and other representatives of fauna.\r\n\r\nFlowers Paintings - Flowers are just beautiful. I think a Flowers Painting as a gift would be better than just flowers. After all, the flowers on painting will bloom for a long time. I like to observe the behavior of flowers, how they sway in the wind and how they react to the sun. In particular, I like Sunflowers, they are so bright and large that they can truly be considered the flowers of the sun.\r\n\r\nLandscapes Painting - I am inspired by Landscape. After all, wee see Landscapes almost every day, Cityscapes, Seascapes, all these are Landscapes. Most of all, I am inpired by the Landscapes of Greece or the Cityscape of beautiful places.\r\n\r\nPortraits - I like to watch people's emotions. That's why I like to draw Portraits. There is something special about Portraits. You kind of look at a person and he can convey his story through a painting.\r\n\r\nIn the process of drawing, I have a feeling of peace and tranquility. And I always try to convey some vivid emotion to the painting. That's why they turn out so bright and colorful. It can be said that my paintings are emotional paintings that bring joy and happiness.",
};

export default function ItemDetailPage({ shop_pk }) {
  return (
    <Flex justifyContent={"center"} gap="40px">
      <Flex
        width="828px"
        flexDirection={"column"}
        gap={"80px"}
        alignItems={"flex-start"}
      >
        <ProductImage />
        <ReviewSection shop_pk={shop_pk} />
      </Flex>
      <ProductPanel />
    </Flex>
  );
}
