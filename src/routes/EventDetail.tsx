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
          젊음과 반항의 예술전
        </Text>
        <Flex flexDirection={"column"} alignItems={"center"} gap={"40px"}>
          <Image src="https://s3-alpha-sig.figma.com/img/afb5/df1b/2178445e4545bf72f8d8b74f53a4df07?Expires=1696204800&Signature=FHCmBvadWxSRlcEbS3aBYFRT79Sa5Ynvg9cCbmEvZ~SLquKFsJo8bqcFoY3iEq~UMEcte2DpcoAOAtr9U7W7FNfl6bEBqo-E~OVaqPOqYtYGFxN3tw8vRiM0AnmmjyWu0jnGgQRjgHILpE4weKYkUp8e-Hx65-VrONkEXUkTFcasROmYRVbFo-cCpLPUW63A6c~Qsvf~g1b4qfMgXsYWYuJsxbd0wYida~JpM6AadUFtVpQrKY5f~hxVnUL5P8B1EWVImTr1nX-G07NAQiWnDuK9lnjCKAIsPM5MiII7QPC-nBrSWHrJTkIohoAtq6pP2Oa2xZk1cW7avMAlx1SYBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Image>
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
