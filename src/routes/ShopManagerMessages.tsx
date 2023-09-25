import { Box, Flex } from "@chakra-ui/react";
import MessagesHeader from "../components/Messages/MessagesHeader";
import MessagesBody from "../components/Messages/MessagesBody";

export default function ShopManagerMessages() {
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start" // Center horizontally
      gap={"20px"}
      width={"1340px"}
    >
      <Box height="20px" />
      <MessagesHeader />
      <MessagesBody />
    </Flex>
  );
}
