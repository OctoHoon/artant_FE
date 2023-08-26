import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import SearchBar from "../commons/SearchBar";
import { useState } from "react";
import { FaBug } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom"; // Import useNavigate

const Selections = [
  { name: "Search", icon: FaBug, path: "" },
  { name: "Dashboard", icon: FaBug, path: "dashboard" },
  { name: "Listings", icon: FaBug, path: "listings" },
  { name: "Messages", icon: FaBug, path: "messages" },
  { name: "Orders & Shipping", icon: FaBug, path: "orders-shipping" },
  { name: "Star Seller", icon: FaBug, path: "star-seller" },
  { name: "Stats", icon: FaBug, path: "stats" },
  { name: "Finances", icon: FaBug, path: "finances" },
  { name: "Marketing", icon: FaBug, path: "marketing" },
  { name: "Integrations", icon: FaBug, path: "integrations" },
  { name: "Comunity & Help", icon: FaBug, path: "Comunity & Help" },
  { name: "Settings", icon: FaBug, path: "" },
];

export default function ShopManagerSideBar() {
  const [select, setSelect] = useState("모든 작품");
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Flex
      width={"300px"}
      height={"800px"}
      flexDirection="column"
      overflowY={"auto"}
    >
      <Menu>
        <MenuButton height={"50px"}>
          <Box color={"#1C1B1F"} height={"24px"}>
            <Link to={"/"}>Shop Manager</Link>
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem>Shop Manager</MenuItem>
          <MenuItem>Artant</MenuItem>
        </MenuList>
      </Menu>
      <Box width={"100%"}>
        {Selections.map((selection, index) => (
          <SelectionButton
            key={index}
            name={selection.name}
            icon={selection.icon}
            is_selected={selection.name === select}
            handleSelect={() => navigate(`/your/shops/me/${selection.path}`)} // Use navigate to change the path
          />
        ))}
      </Box>
      <Text>SALES CHANNELS</Text>
    </Flex>
  );
}

function SelectionButton({ name, icon: Icon, is_selected, handleSelect }) {
  return (
    <Button
      width={"100%"}
      height={"50px"}
      justifyContent={"flex-start"}
      borderRadius={"0px"}
      bg={is_selected ? "blackAlpha.200" : "white"}
      p={2}
      onClick={handleSelect} // Use the provided handleSelect function
      _hover={{ bg: "blackAlpha.200" }}
    >
      <Icon />
      <Text ml={3}>{name}</Text>
    </Button>
  );
}
