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
import Itemlists from "../components/Items/itemlists";
import RecentlyViewed from "../components/RecentlyViewed";
import Footer from "../components/commons/Footer";
import ItemListFive from "../components/ProductDetail/ItemsListFive";
import RegisterButton from "../components/index/RegisterButton";

export default function EventDetail() {
  return (
    <Flex
      mt={"60px"}
      mb={"104px"}
      height={"1972px"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"20px"}
    >
      {" "}
      <Flex flexDirection={"column"} alignItems={"center"} gap={"20px"}>
        {" "}
        <Text
          color="var(--maincolorstextblack-222222, #222)"
          textAlign="center"
          fontFamily="Roboto"
          fontSize="30px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="normal"
          textTransform="capitalize"
        >
          News Event
        </Text>
        <svg width="1280" height="2" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="1" x2="1280" y2="1" stroke="#000" strokeWidth="2" />
        </svg>
      </Flex>
      <Flex flexDirection={"column"} alignItems={"flex-start"} gap={"16px"}>
        {" "}
        <Text
          color="#000"
          fontFamily="Spoqa Han Sans Neo"
          fontSize="18px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="normal"
          letterSpacing="-0.3px"
        >
          공감
        </Text>
        <Flex flexDirection={"column"} alignItems={"center"} gap={"40px"}>
          <Image src="assets/images/Rectangle_285.png"></Image>
          <Button
            height={"42px"}
            padding={"4px 60px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"100px"}
            background={" var(--maincolorsbgblack-222222, #222);"}
            fontSize={"14px"}
            fontWeight={"500"}
            fontFamily="Spoqa Han Sans Neo"
            letterSpacing={"-0.3px"}
            textAlign={"center"}
            color={"var(--maincolorstext-white, #FFF)"}
            _hover={{
              background: "var(--maincolorsbggray-555555, #555)",
            }}
          >
            자세히 보기
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
