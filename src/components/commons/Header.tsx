import { FaBug, FaMoon, FaSun, FaRegHeart } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import {
  Box,
  HStack,
  Divider,
  Stack,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import { Text } from "@chakra-ui/react";
import SignUpModal from "../index/SignUpModal";

export default function Header() {
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

        <HStack spacing={1}>
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
              <HiOutlineUserCircle size="24px" />
            </Link>
          </Box>
          <Box color={"#1C1B1F"} height={"24px"}>
            <Link to={"/"}>
              <BsTruck size="24px" />
            </Link>
          </Box>
          <Box color={"#1C1B1F"} height={"24px"}>
            <Link to={"/"}>
              <AiOutlineShopping size="24px" />
            </Link>
          </Box>
        </HStack>

        <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
        <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
      </Stack>
    </Box>
  );
}
