import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import MessagesBody from "../components/Messages/MessagesBody";
import MessagesHeader from "../components/Messages/MessagesHeader";
import Footer from "../components/commons/Footer";
import AccountHeader from "../components/Account/AccountHeader";
import AccountBody from "../components/Account/AccountBody";
import MenuTextLine from "../components/commons/MenuTextLine";
import SnsTab from "../components/Account/SnsTab";
import { Link, Outlet } from "react-router-dom";

export default function Account() {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center horizontally
        justifyContent="center" // Center vertically
        gap={"20px"}
        px={40}
      >
        <AccountHeader />
        <Box width={"1280px"} height={"2px"} background="black" />

        <Flex display={"inline-flex"} alignItems={"flex-start"}>
          <Flex
            width={"248px"}
            padding="24px 0px 120px 0px"
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            alignSelf={"stretch"}
          >
            <Flex
              width={"247px"}
              padding={"0px 20px"}
              flexDirection={"column"}
              alignItems={"flex-start"}
            >
              <Link to="/your/account">
                <MenuTextLine title={"계정"} isSelected={true} />
              </Link>
              <Link to="/your/account/security">
                <MenuTextLine title={"보안"} isSelected={false} />
              </Link>
              <MenuTextLine title={"공개프로필"} isSelected={false} />
              <MenuTextLine title={"환경설정"} isSelected={false} />
              <MenuTextLine title={"계정정보 보안"} isSelected={false} />
              <MenuTextLine title={"주소"} isSelected={false} />
              <MenuTextLine title={"결제 수단"} isSelected={false} />
              <MenuTextLine title={"e-mail"} isSelected={false} />
            </Flex>
          </Flex>
          <Box
            width={"1px"}
            alignSelf={"stretch"}
            background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
          />
          <Flex
            padding={"24px 0px 120px 40px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"60px"}
          >
            <Outlet />
          </Flex>
        </Flex>
        <Footer />
      </Box>
    </Box>
  );
}
