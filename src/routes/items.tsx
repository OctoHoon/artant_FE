import { Box } from "@chakra-ui/react";
import Itemlists from "../components/Items/itemlists";
import RecentlyViewed from "../components/RecentlyViewed";
import RegisterButton from "../components/index/RegisterButton";

export default function Items() {
  return (
    <Box>
      <Itemlists />
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
