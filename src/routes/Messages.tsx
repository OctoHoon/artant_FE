import { Box } from "@chakra-ui/react";
import MessagesHeader from "../components/Messages/MessagesHeader";
import MessagesBody from "../components/Messages/MessagesBody";

export default function Messages() {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center horizontally
        justifyContent="center" // Center vertically
        gap={"20px"}
        px={40}
        paddingTop={"32px"}
      >
        <MessagesHeader />
        <MessagesBody />
      </Box>
    </Box>
  );
}
