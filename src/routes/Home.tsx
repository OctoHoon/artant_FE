import { Box, Flex, useToast } from "@chakra-ui/react";
import ArtantRecommend from "../components/index/ArtantRecommend";
import NewArrival from "../components/index/NewArrival";
import GiftCategories from "../components/index/GiftCategories";
import NewsEvent from "../components/index/NewsEvent";
import ArtistRecommend from "../components/index/ArtistRecommend";
import Footer from "../components/commons/Footer";
import TopBanner from "../components/index/TopBanner";
import RegisterButton from "../components/index/RegisterButton";
import CenteredText from "../components/index/CenterCopy";
import RecentlyViewed from "../components/RecentlyViewed";
import useUser from "../lib/useUser";
import { useLocation, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { kakaoLogin } from "../services/userService";
import { useEffect } from "react";

export default function Home() {
  const { userLoading, isLoggedIn, user } = useUser();

  const { search } = useLocation();
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      console.log(code);
      const status = await kakaoLogin(code);
      if (status === 200) {
        toast({
          status: "success",
          title: "Welcome!",
          position: "bottom-right",
          description: "Happy to have you back!",
        });
        queryClient.refetchQueries(["me"]);
        navigate("/");
      }
    }
  };

  useEffect(() => {
    confirmLogin();
  }, []);

  return (
    <Box>
      <TopBanner />
      <Flex
        flexDirection={"column"}
        gap={"120px"}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center" // Center horizontally
          justifyContent="center" // Center vertically
          gap={"96px"}
        >
          <CenteredText />
          <NewArrival />
          <ArtantRecommend />
          <GiftCategories />
          <NewsEvent />
          <ArtistRecommend />
          {isLoggedIn ? <RecentlyViewed title={"최근 본 작품"} /> : null}
        </Box>
        <RegisterButton />
      </Flex>
      <Box height={"12px"} />
    </Box>
  );
}
