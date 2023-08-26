import { Text } from "@chakra-ui/react";

export default function ShopManagerOrders() {
  return (
    <>
      <Text
        flex={"start"}
        pb={2}
        fontSize={"48px"}
        borderBottomWidth={"2px"}
        borderBottomColor={"blackAlpha.300"}
      >
        Orders & Shipping
      </Text>
      <Text mt={20} textAlign={"center"} flex={"center"} fontSize={"48px"}>
        Easily manage your Orders & Shipping
      </Text>
    </>
  );
}
