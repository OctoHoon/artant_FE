import {
  Box,
  HStack,
  Divider,
  Stack,
  useDisclosure,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import { Text } from "@chakra-ui/react";
import SignUpModal from "../index/SignUpModal";
import useUser from "../../lib/useUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut } from "../../api";
import {
  AvatarMenuList,
  SvgArtantLogo,
  SvgBasket,
  SvgBell,
  SvgHeart,
  SvgShop,
} from "../data/Header";

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser();
  const firstShopPK = user?.shop_pks[0] || null;
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
  const navigate = useNavigate();

  const mutation = useMutation(logOut, {
    onMutate: () => {},
    onSuccess: () => {
      queryClient.refetchQueries(["me"]);
      navigate("/");
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
      navigate(newUrl);
    }
  };
  return (
    <Box width={"1280px"} height={"90px"}>
      <Stack
        alignSelf={"stretch"}
        alignItems="center"
        direction={{
          // sm: "column",
          md: "row",
        }}
        height={90}
      >
        <Box color={"black"} marginRight={"24px"}>
          <Link to={"/"}>
            {" "}
            <SvgArtantLogo />
          </Link>
        </Box>

        <SearchBar
          placeholder={"search for anything"}
          width="700px"
          height={"48px"}
          type={true}
          onSearch={handleSearchClick}
        />

        <HStack spacing={2} alignItems={"center"} marginLeft={"180px"}>
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
              <Flex alignItems={"center"} gap={"5px"} color={"#777"}>
                <Text as={"button"} onClick={onLogOut} fontSize="13px">
                  로그아웃
                </Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="2"
                  viewBox="0 0 2 2"
                  fill="none"
                >
                  <circle cx="1" cy="1" r="1" fill="#AAAAAA" />
                </svg>
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
                <AvatarMenu user={user} />
                <Box color={"#1C1B1F"} height={"24px"}>
                  <Link
                    to={
                      firstShopPK
                        ? `/shop/${firstShopPK}`
                        : `your/shops/register`
                    }
                  >
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

function AvatarMenu({ user }) {
  return (
    <Menu>
      <MenuButton>
        <Box color={"#1C1B1F"} height={"24px"}>
          <Link to={`people/${user?.pk}`}>
            <Avatar name={user?.name} src={user?.avatar} size="xs" />
          </Link>
        </Box>
      </MenuButton>
      <MenuList zIndex={9999} color={"black"}>
        {/* {user?.is_host ? (
                      <Link to="/rooms/upload">
                        <MenuItem>Upload room</MenuItem>
                      </Link>
                    ) : null} */}
        <Link to={`people/${user?.pk}`}>
          <MenuItem>
            <Flex padding="6px 18px" gap="12px" alignItems={"center"}>
              <Avatar src={user?.avatar} width={"24px"} height={"24px"} />
              <Flex flexDirection={"column"}>
                <Text fontSize={"16px"} fontWeight={"500"}>
                  {user.name}
                </Text>
                <Text>프로필 보기</Text>
              </Flex>
            </Flex>
          </MenuItem>
        </Link>

        {AvatarMenuList.map((menu) => (
          <Link to={menu["link"]} key={menu["link"]}>
            <MenuItem>
              <Flex padding="6px 18px" gap="12px" alignItems={"center"}>
                {menu["svg"]}
                {menu["title"]}
              </Flex>
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
}
