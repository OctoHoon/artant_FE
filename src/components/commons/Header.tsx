import { FaBug, FaMoon, FaSun, FaRegHeart, FaRegBell } from "react-icons/fa";
import { BsTruck, BsShop } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
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
  const toast = useToast();
  const queryClient = useQueryClient();
  const toastId = useRef<ToastId>();
  const mutation = useMutation(logOut, {
    onMutate: () => {
      toastId.current = toast({
        title: "Login out...",
        description: "Sad to see you go...",
        status: "loading",
        duration: 10000,
        position: "bottom-right",
      });
    },
    onSuccess: () => {
      if (toastId.current) {
        queryClient.refetchQueries(["me"]);
        toast.update(toastId.current, {
          status: "success",
          title: "Done!",
          description: "See you later!",
        });
      }
    },
  });
  const onLogOut = async () => {
    mutation.mutate();
  };
  return (
    <Box>
      <Stack
        justifyContent={"space-between"}
        alignItems="center"
        py={5}
        px={40}
        direction={{
          // sm: "column",
          md: "row",
        }}
        spacing={{
          sm: 4,
          md: 0,
        }}
        borderBottomWidth={"1px"}
        borderBottomColor={"#F1F1F5"}
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
                    <AiOutlineHeart size="24px" />
                  </Link>
                </Box>
                <Box color={"#1C1B1F"} height={"24px"}>
                  <Link to={"/"}>
                    <AiOutlineShopping size="24px" />
                  </Link>
                </Box>
              </>
            ) : (
              <>
                <Box
                  as="button"
                  onClick={onLogOut}
                  bg="transparent"
                  border="none"
                  _hover={{ bg: "transparent" }}
                  _active={{ bg: "transparent" }}
                  _focus={{ outline: "none" }}
                  height={"16px"}
                >
                  <Text fontSize="13px">로그아웃</Text>
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
                    <AiOutlineHeart size="24px" />
                  </Link>
                </Box>
                <Box color={"#1C1B1F"} height={"24px"}>
                  <Link to={"/"}>
                    <FaRegBell size="24px" />
                  </Link>
                </Box>
                <Menu>
                  <MenuButton>
                    <Box color={"#1C1B1F"} height={"24px"}>
                      <Link to={"/"}>
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
                    <MenuItem>이름</MenuItem>
                    <MenuItem>구매내역 및 리뷰</MenuItem>
                    <MenuItem>메시지</MenuItem>
                    <MenuItem>특별 제공</MenuItem>
                    <MenuItem>계정 설정</MenuItem>
                    <MenuItem onClick={onLogOut}>로그 아웃</MenuItem>
                  </MenuList>
                </Menu>
                <Box color={"#1C1B1F"} height={"24px"}>
                  <Link to={"/"}>
                    <CiShop size="24px" />
                  </Link>
                </Box>
                <Box color={"#1C1B1F"} height={"24px"}>
                  <Link to={"/"}>
                    <AiOutlineShopping size="24px" />
                  </Link>
                </Box>
              </>
            )
          ) : null}
        </HStack>

        <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
        <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
      </Stack>
    </Box>
  );
}
