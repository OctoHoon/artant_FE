import { Flex } from "@chakra-ui/react";
import RegisterProduct from "./RegisterProduct";

export default function ShopManagerListingEditing() {
  return (
    <Flex
      maxW={"1340px"}
      padding={"32px 0px 24px 60px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={"24px"}
      alignSelf={"stretch"}
      borderBottom={"2px solid #F1F1F5"}
      fontWeight={"500"}
      fontSize={"22px"}
      paddingTop={"32px"}
    >
      <RegisterProduct />;
    </Flex>
  );
}
