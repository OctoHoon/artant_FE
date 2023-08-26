import { Box } from "@chakra-ui/react";
import Footer from "../components/commons/Footer";
import ProfileHeader from "../components/People/ProfileHeader";

export default function ShopDetail() {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center horizontally
        justifyContent="center" // Center vertically
        gap={10}
        px={40}
      >
        <ProfileHeader />

        <Footer />
      </Box>
    </Box>
  );
}
