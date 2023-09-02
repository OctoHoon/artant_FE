import { FaRegBell } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import {
  Box,
  HStack,
  Divider,
  Stack,
  useDisclosure,
  Image,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  useToast,
  ToastId,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import { Text } from "@chakra-ui/react";
import SignUpModal from "../index/SignUpModal";
import useUser from "../../lib/useUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { logOut } from "../../api";

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser();
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();

  const queryClient = useQueryClient();

  const mutation = useMutation(logOut, {
    onMutate: () => {},
    onSuccess: () => {
      queryClient.refetchQueries(["me"]);
    },
  });
  const onLogOut = async () => {
    mutation.mutate();
  };
  console.log(user);

  const handleSearchClick = (keyword) => {
    if (keyword.trim() !== "") {
      const newUrl = `/items/${encodeURIComponent(
        "모든작품"
      )}?&search=${keyword}`;
      window.location.href = newUrl;
    }
  };
  return (
    <Box width={"1280px"}>
      <Stack
        alignSelf={"stretch"}
        justifyContent={"space-between"}
        alignItems="center"
        direction={{
          // sm: "column",
          md: "row",
        }}
        spacing={{
          sm: 4,
          md: 0,
        }}
        height={90}
      >
        <Box mr={0} color={"black"}>
          <Link to={"/"}>
            {" "}
            <Image maxH="680px" src="/assets/logo.png" />
          </Link>
        </Box>

        <SearchBar
          placeholder={"search for anything"}
          width="640px"
          height={"48px"}
          type={true}
          onSearch={handleSearchClick}
        />

        <HStack spacing={2} alignItems={"center"}>
          {!userLoading ? (
            !isLoggedIn ? (
              <>
                <Box
                  as="button"
                  onClick={onLoginOpen}
                  bg="transparent"
                  border="none"
                  _hover={{ bg: "transparent" }}
                  _active={{ bg: "transparent" }}
                  _focus={{ outline: "none" }}
                  height={"16px"}
                >
                  <Text fontSize="13px">로그인</Text>
                </Box>
                <Text>•</Text>
                <Box
                  as="button"
                  onClick={onLoginOpen}
                  bg="transparent"
                  border="none"
                  _hover={{ bg: "transparent" }}
                  _active={{ bg: "transparent" }}
                  _focus={{ outline: "none" }}
                  height={"16px"}
                >
                  <Text fontSize="13px">회원가입</Text>
                </Box>
                <Text>•</Text>
                <Box color={"black"} height={"16px"}>
                  <Link to={"/"}>
                    <Text fontSize="13px">고객센터</Text>
                  </Link>
                </Box>
                <Divider
                  orientation="vertical"
                  height="16px"
                  borderColor="#D9D9D9"
                  mx={2}
                />{" "}
                <Box color={"#1C1B1F"} height={"24px"}>
                  <Link to={"/"}>
                    <SvgHeart />
                  </Link>
                </Box>
                <Box color={"#1C1B1F"} height={"24px"}>
                  <Link to={"/"}>
                    <SvgBasket />
                  </Link>
                </Box>
              </>
            ) : (
              <Flex alignItems={"center"} gap={"5px"}>
                <Text fontSize="13px">로그아웃</Text>
                <Text>•</Text>
                <Link to={"/"}>
                  <Text fontSize="13px">고객센터</Text>
                </Link>
                <Divider
                  orientation="vertical"
                  height="20px"
                  borderColor="#D9D9D9"
                  mx={2}
                />{" "}
                <Box color={"#1C1B1F"} height={"24px"}>
                  <Link to={`/people/${user?.pk}`}>
                    <SvgHeart />
                  </Link>
                </Box>
                <Box color={"#1C1B1F"} height={"24px"}>
                  <Link to={"/"}>
                    <SvgBell />
                  </Link>
                </Box>
                <Menu>
                  <MenuButton>
                    <Box color={"#1C1B1F"} height={"24px"}>
                      <Link to={`people/${user?.pk}`}>
                        <Avatar
                          name={user?.name}
                          src={user?.avatar}
                          size="xs"
                        />
                      </Link>
                    </Box>
                  </MenuButton>
                  <MenuList>
                    {/* {user?.is_host ? (
                      <Link to="/rooms/upload">
                        <MenuItem>Upload room</MenuItem>
                      </Link>
                    ) : null} */}
                    <Link to={`people/${user?.pk}`}>
                      <MenuItem>
                        <Flex
                          padding="6px 18px"
                          gap="12px"
                          alignItems={"center"}
                        >
                          <Avatar
                            src={user?.avatar}
                            width={"24px"}
                            height={"24px"}
                          />
                          <Flex flexDirection={"column"}>
                            <Text fontSize={"16px"} fontWeight={"500"}>
                              이름
                            </Text>
                            <Text>프로필 보기</Text>
                          </Flex>
                        </Flex>
                      </MenuItem>
                    </Link>
                    <MenuItem>구매내역 및 리뷰</MenuItem>
                    <MenuItem>메시지</MenuItem>
                    <MenuItem>특별 제공</MenuItem>
                    <Link to="/your/account">
                      <MenuItem>계정 설정</MenuItem>
                    </Link>
                    <Link to="/your/shops/register">
                      <MenuItem>상점 개설</MenuItem>
                    </Link>
                    <MenuItem onClick={onLogOut}>로그아웃</MenuItem>
                  </MenuList>
                </Menu>
                <Box color={"#1C1B1F"} height={"24px"}>
                  <Link to={"/"}>
                    <SvgShop />
                  </Link>
                </Box>
                <Box color={"#1C1B1F"} height={"24px"}>
                  <Link to={"/cart"}>
                    <SvgBasket />
                  </Link>
                </Box>
              </Flex>
            )
          ) : null}
        </HStack>

        <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
        <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
      </Stack>
    </Box>
  );
}

const SvgBasket = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="local_mall">
        <mask
          id="mask0_1005_1330"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1005_1330)">
          <path
            id="local_mall_2"
            d="M5.61538 21C5.16794 21 4.78685 20.8426 4.4721 20.5279C4.15737 20.2131 4 19.8321 4 19.3846V8.61538C4 8.16794 4.15737 7.78685 4.4721 7.4721C4.78685 7.15737 5.16794 7 5.61538 7H8C8 5.8859 8.38814 4.94071 9.16442 4.16443C9.94071 3.38814 10.8859 3 12 3C13.1141 3 14.0593 3.38814 14.8356 4.16443C15.6119 4.94071 16 5.8859 16 7H18.3846C18.8321 7 19.2132 7.15737 19.5279 7.4721C19.8426 7.78685 20 8.16794 20 8.61538V19.3846C20 19.8321 19.8426 20.2131 19.5279 20.5279C19.2132 20.8426 18.8321 21 18.3846 21H5.61538ZM5.61538 20H18.3846C18.5385 20 18.6795 19.9359 18.8077 19.8077C18.9359 19.6795 19 19.5385 19 19.3846V8.61538C19 8.46154 18.9359 8.32052 18.8077 8.1923C18.6795 8.0641 18.5385 8 18.3846 8H5.61538C5.46154 8 5.32052 8.0641 5.1923 8.1923C5.0641 8.32052 5 8.46154 5 8.61538V19.3846C5 19.5385 5.0641 19.6795 5.1923 19.8077C5.32052 19.9359 5.46154 20 5.61538 20ZM12 13C13.1141 13 14.0593 12.6119 14.8356 11.8356C15.6119 11.0593 16 10.1141 16 9H15C15 9.83333 14.7083 10.5417 14.125 11.125C13.5417 11.7083 12.8333 12 12 12C11.1667 12 10.4583 11.7083 9.875 11.125C9.29167 10.5417 9 9.83333 9 9H8C8 10.1141 8.38814 11.0593 9.16442 11.8356C9.94071 12.6119 10.8859 13 12 13ZM9 7H15C15 6.16667 14.7083 5.45833 14.125 4.875C13.5417 4.29167 12.8333 4 12 4C11.1667 4 10.4583 4.29167 9.875 4.875C9.29167 5.45833 9 6.16667 9 7Z"
            fill="#1C1B1F"
          />
        </g>
      </g>
    </svg>
  );
};
const SvgShop = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="storefront">
        <mask
          id="mask0_1005_2983"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1005_2983)">
          <path
            id="storefront_2"
            d="M19.9889 10.4611V17.9796C19.9889 18.4128 19.844 18.7745 19.5542 19.0647C19.2644 19.3549 18.9032 19.5 18.4706 19.5H5.52935C5.09677 19.5 4.73559 19.3549 4.4458 19.0647C4.156 18.7745 4.01111 18.4128 4.01111 17.9796V10.4249C3.61467 10.1317 3.32457 9.74736 3.14081 9.27195C2.95706 8.79653 2.95315 8.28914 3.12906 7.74976L4.04363 4.73078C4.16894 4.34706 4.37108 4.046 4.65003 3.8276C4.92898 3.6092 5.2739 3.5 5.68478 3.5H18.2791C18.6899 3.5 19.034 3.60226 19.3111 3.80678C19.5883 4.01131 19.7913 4.30724 19.9202 4.69456L20.8709 7.74976C21.0469 8.28914 21.0429 8.80075 20.8592 9.28461C20.6754 9.76847 20.3853 10.1606 19.9889 10.4611ZM14.0677 10.0882C14.6714 10.0882 15.1221 9.919 15.4197 9.58054C15.7173 9.24208 15.8426 8.89246 15.7956 8.53167L15.1703 4.44118H12.4699V8.39412C12.4699 8.85625 12.6278 9.25414 12.9435 9.58779C13.2592 9.92142 13.6339 10.0882 14.0677 10.0882ZM9.8383 10.0882C10.3432 10.0882 10.7513 9.92142 11.0628 9.58779C11.3743 9.25414 11.5301 8.85625 11.5301 8.39412V4.44118H8.82975L8.20436 8.60407C8.16581 8.89607 8.29324 9.21643 8.58666 9.56515C8.88005 9.91387 9.29727 10.0882 9.8383 10.0882ZM5.65588 10.0882C6.07038 10.0882 6.42252 9.94706 6.71232 9.66471C7.00211 9.38235 7.18256 9.03002 7.25366 8.60769L7.84289 4.44118H5.68478C5.47995 4.44118 5.31728 4.48642 5.19678 4.57692C5.07629 4.66743 4.98592 4.80318 4.92567 4.98417L4.0581 7.95612C3.90387 8.45083 3.96984 8.92986 4.25601 9.3932C4.54219 9.85656 5.00881 10.0882 5.65588 10.0882ZM18.3441 10.0882C18.9068 10.0882 19.3563 9.86863 19.6925 9.42941C20.0287 8.9902 20.1118 8.4991 19.9419 7.95612L19.0273 4.94795C18.9671 4.76697 18.8767 4.63725 18.7562 4.55882C18.6357 4.48039 18.4731 4.44118 18.2682 4.44118H16.1571L16.7464 8.60769C16.8174 9.03002 16.9979 9.38235 17.2877 9.66471C17.5775 9.94706 17.9296 10.0882 18.3441 10.0882ZM5.52935 18.5588H18.4706C18.6393 18.5588 18.7779 18.5045 18.8864 18.3959C18.9948 18.2873 19.049 18.1486 19.049 17.9796V10.91C18.9225 10.9534 18.8023 10.9842 18.6885 11.0023C18.5746 11.0204 18.4598 11.0294 18.3441 11.0294C17.9212 11.0294 17.5492 10.9468 17.228 10.7815C16.9069 10.6161 16.6018 10.3525 16.3126 9.99049C16.0667 10.297 15.7637 10.5468 15.4034 10.7398C15.0431 10.9329 14.6051 11.0294 14.0894 11.0294C13.7147 11.0294 13.3583 10.9419 13.0203 10.767C12.6823 10.592 12.3422 10.3332 12 9.99049C11.6855 10.3332 11.337 10.592 10.9544 10.767C10.5718 10.9419 10.207 11.0294 9.85999 11.0294C9.46597 11.0294 9.08188 10.954 8.70773 10.8032C8.3336 10.6523 8.00556 10.3814 7.72359 9.99049C7.26209 10.4526 6.85873 10.7413 6.51351 10.8566C6.16828 10.9718 5.8824 11.0294 5.65588 11.0294C5.5402 11.0294 5.42361 11.0204 5.30613 11.0023C5.18865 10.9842 5.07026 10.9534 4.95098 10.91V17.9796C4.95098 18.1486 5.0052 18.2873 5.11365 18.3959C5.22209 18.5045 5.36066 18.5588 5.52935 18.5588Z"
            fill="#1C1B1F"
          />
        </g>
      </g>
    </svg>
  );
};

const SvgBell = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="notifications">
        <mask
          id="mask0_1005_1045"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1005_1045)">
          <path
            id="notifications_2"
            d="M5 18.7692V17.7692H6.61537V9.84615C6.61537 8.53975 7.02884 7.39072 7.85577 6.39905C8.68269 5.40737 9.73077 4.78973 11 4.54615V4C11 3.72222 11.097 3.4861 11.291 3.29165C11.485 3.09722 11.7206 3 11.9978 3C12.2749 3 12.5112 3.09722 12.7067 3.29165C12.9022 3.4861 13 3.72222 13 4V4.54615C14.2692 4.78973 15.3173 5.40737 16.1442 6.39905C16.9712 7.39072 17.3846 8.53975 17.3846 9.84615V17.7692H19V18.7692H5ZM11.9966 21.3846C11.5514 21.3846 11.1715 21.2265 10.8567 20.9101C10.542 20.5938 10.3846 20.2135 10.3846 19.7692H13.6154C13.6154 20.2167 13.4569 20.5978 13.1399 20.9125C12.8229 21.2273 12.4418 21.3846 11.9966 21.3846ZM7.61537 17.7692H16.3846V9.84615C16.3846 8.63077 15.9577 7.59615 15.1039 6.7423C14.25 5.88847 13.2154 5.46155 12 5.46155C10.7846 5.46155 9.75 5.88847 8.89615 6.7423C8.0423 7.59615 7.61537 8.63077 7.61537 9.84615V17.7692Z"
            fill="#1C1B1F"
          />
        </g>
      </g>
    </svg>
  );
};

const SvgHeart = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="like">
        <mask
          id="mask0_1005_501"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1005_501)">
          <path
            id="icon_heart"
            d="M12 20.6538L11.2423 19.9692C9.61025 18.4782 8.26025 17.2019 7.1923 16.1404C6.12435 15.0788 5.2814 14.1426 4.66345 13.3317C4.0455 12.5208 3.61378 11.7872 3.36828 11.1308C3.12276 10.4744 3 9.81409 3 9.14999C3 7.87819 3.43205 6.81024 4.29615 5.94614C5.16025 5.08204 6.2282 4.64999 7.5 4.64999C8.37948 4.64999 9.20448 4.87499 9.975 5.32499C10.7455 5.77499 11.4205 6.42948 12 7.28844C12.5795 6.42948 13.2545 5.77499 14.025 5.32499C14.7955 4.87499 15.6205 4.64999 16.5 4.64999C17.7718 4.64999 18.8398 5.08204 19.7038 5.94614C20.5679 6.81024 21 7.87819 21 9.14999C21 9.81409 20.8772 10.4744 20.6317 11.1308C20.3862 11.7872 19.9545 12.5208 19.3365 13.3317C18.7186 14.1426 17.8789 15.0788 16.8173 16.1404C15.7558 17.2019 14.4026 18.4782 12.7577 19.9692L12 20.6538ZM12 19.3C13.6 17.8538 14.9167 16.6151 15.95 15.5836C16.9833 14.5522 17.8 13.6574 18.4 12.899C19 12.1407 19.4167 11.4689 19.65 10.8836C19.8833 10.2984 20 9.72051 20 9.14999C20 8.14999 19.6667 7.31666 19 6.64999C18.3333 5.98333 17.5 5.64999 16.5 5.64999C15.7038 5.64999 14.9692 5.87724 14.2962 6.33172C13.6231 6.7862 13.0205 7.4705 12.4885 8.38462H11.5115C10.9667 7.45769 10.3609 6.77019 9.69423 6.32212C9.02756 5.87404 8.29615 5.64999 7.5 5.64999C6.51282 5.64999 5.68269 5.98333 5.00962 6.64999C4.33654 7.31666 4 8.14999 4 9.14999C4 9.72051 4.11667 10.2984 4.35 10.8836C4.58333 11.4689 5 12.1407 5.6 12.899C6.2 13.6574 7.01667 14.549 8.05 15.574C9.08333 16.599 10.4 17.841 12 19.3Z"
            fill="#1C1B1F"
          />
        </g>
      </g>
    </svg>
  );
};
