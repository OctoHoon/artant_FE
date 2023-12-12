import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  Image,
  Flex,
  Text,
  Button,
  AspectRatio,
  Wrap,
} from "@chakra-ui/react";
import ProductSmall from "../commons/Card/ProductSmallCard";
import { IoMdCheckmarkCircle } from "react-icons/io"; // Import the check icon
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { getRecentlyViewedProducts } from "../../services/userService";

interface AddCartDrawerProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export default function AddCartDrawer({ thumbnail, isOpen, toggleOpen }) {
  const { isLoading, data } = useQuery(
    ["RecentlyViewedProducts"],
    getRecentlyViewedProducts
  );
  const navigate = useNavigate();

  return (
    <Drawer isOpen={isOpen} onClose={toggleOpen} size={"sm"} placement="right">
      <DrawerOverlay>
        <DrawerContent p={4}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex alignItems={"center"}>
              <Flex>
                <Image
                  objectFit={"cover"}
                  marginRight={"16px"}
                  width="80px"
                  height={"60px"}
                  src={thumbnail}
                />
                <Box ml="auto" position="relative" top="-14px" right={"26px"}>
                  <IoMdCheckmarkCircle size={24} color="#5365AE" />
                </Box>
              </Flex>
              <Text fontSize={"18px"} fontWeight={"500"}>
                장바구니에 작품 1개 추가
              </Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Box justifyContent={"center"}>
              <Button
                width={"100%"}
                colorScheme="white"
                color={"black"}
                border={"1px solid #000"}
                borderRadius={"5px"}
                _hover={{ bg: "gray" }}
                onClick={toggleOpen}
              >
                쇼핑 계속하기
              </Button>
              <Box height="12px" />
              <Button
                width={"100%"}
                bg="black"
                color="white"
                borderRadius={"5px"}
                onClick={() => {
                  navigate("/cart");
                }}
                _hover={{
                  background: "var(--maincolorsbggray-555555, #555)",
                }}
              >
                장바구니 가기
              </Button>
            </Box>
            <Box height={"48px"} />
            <Box width={"100%"} height={"1px"} bg="#D9D9D9" />
            <Box height={"48px"} />
            <Text fontSize={"16px"} fontWeight={"500"}>
              당신이 좋아할만한 작품
            </Text>
            <Box height={"20px"} />
            <Wrap flex={"flex-grow"}>
              {!isLoading && data
                ? data
                    .slice(0, 6)
                    .map((product, index) => <ProductSmall data={product} />)
                : null}
            </Wrap>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
