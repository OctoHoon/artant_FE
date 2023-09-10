import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { tabList } from "../data/ShopManagerVector";

export default function ShopManagerSideBar() {
  const [select, setSelect] = useState("모든 작품");
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Flex flexDirection="column" gap={"40px"}>
      <Flex flexDirection={"column"}>
        <Flex
          width={"259px"}
          padding={"24px 24px 20px 24px"}
          alignItems={"center"}
        >
          <Flex gap={"8px"} fontSize={"18px"} fontWeight={"500"}>
            <ShopVector />
            Shop Manager
          </Flex>
        </Flex>
        <Flex width={"259px"} flexDirection={"column"}>
          {tabList.map((selection, index) => (
            <SelectionButton
              key={index}
              name={selection.name}
              icon={selection.icon}
              is_selected={selection.name === select}
              handleSelect={() => navigate(`/your/shops/me/${selection.path}`)} // Use navigate to change the path
            />
          ))}
        </Flex>
      </Flex>

      <Flex gap={"12px"} alignSelf={"stretch"} flexFlow={"column"}>
        <Flex padding={"0px 24px"}>판매 채널</Flex>
        <SelectionButton
          name={"스토어 편집 바로가기"}
          icon={() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_1075_11835"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1075_11835)">
                <path
                  d="M18.4497 8.10052L15.8891 5.55075L17.1458 4.29361C17.3414 4.09787 17.584 4 17.8736 4C18.1631 4 18.4057 4.09787 18.6014 4.29361L19.7005 5.39311C19.8961 5.58885 19.9959 5.82957 19.9999 6.11527C20.0038 6.40099 19.908 6.64172 19.7123 6.83746L18.4497 8.10052ZM17.7131 8.84337L6.56063 20H4V17.4384L15.1524 6.28177L17.7131 8.84337Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          )}
          is_selected={false}
          handleSelect={() => navigate(`/your/shops/me/editShop`)}
        />
      </Flex>
    </Flex>
  );
}

function SelectionButton({ name, icon: Icon, is_selected, handleSelect }) {
  return (
    <Button
      padding={"8px 12px 8px 24px"}
      width={"259px"}
      gap={"8px"}
      justifyContent={"space-between"}
      borderRadius={"0px"}
      bg={is_selected ? "blackAlpha.200" : "white"}
      onClick={handleSelect} // Use the provided handleSelect function
      _hover={{ bg: "blackAlpha.200" }}
    >
      <Flex alignItems={"center"} gap={"8px"}>
        <Icon />
        <Text>{name}</Text>
      </Flex>
      <FontAwesomeIcon icon={faChevronRight} width={"24px"} height={"24px"} />
    </Button>
  );
}

function ShopVector() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask
        id="mask0_1026_12517"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1026_12517)">
        <path
          d="M20.7645 10.9731V18.9423C20.7645 19.4474 20.5895 19.875 20.2395 20.225C19.8895 20.575 19.4619 20.75 18.9568 20.75H5.07218C4.56706 20.75 4.1395 20.575 3.7895 20.225C3.4395 19.875 3.2645 19.4474 3.2645 18.9423V10.9539C2.86194 10.6231 2.55969 10.1939 2.35775 9.66636C2.15584 9.13879 2.15167 8.56924 2.34525 7.95771L3.3568 4.65386C3.49014 4.23336 3.71642 3.89426 4.03565 3.63656C4.35489 3.37887 4.7363 3.25003 5.17988 3.25003H18.8299C19.2735 3.25003 19.6523 3.37311 19.9664 3.61926C20.2805 3.86541 20.5093 4.20386 20.6529 4.63463L21.6837 7.95771C21.8773 8.56924 21.8731 9.13686 21.6712 9.66058C21.4693 10.1843 21.167 10.6218 20.7645 10.9731ZM14.2145 10.25C14.7606 10.25 15.1712 10.083 15.4462 9.74906C15.7212 9.41509 15.8337 9.05644 15.7837 8.67311L15.1761 4.74998H12.7645V8.70001C12.7645 9.12052 12.9068 9.48399 13.1914 9.79041C13.476 10.0968 13.817 10.25 14.2145 10.25ZM9.71448 10.25C10.1747 10.25 10.5482 10.0968 10.8347 9.79041C11.1212 9.48399 11.2645 9.12052 11.2645 8.70001V4.74998H8.85293L8.24523 8.71156C8.19139 9.06669 8.30294 9.41188 8.57985 9.74713C8.85679 10.0824 9.235 10.25 9.71448 10.25ZM5.26448 10.25C5.63499 10.25 5.95359 10.1209 6.22028 9.86253C6.48695 9.60418 6.65169 9.2795 6.7145 8.88848L7.30298 4.74998H5.17988C5.0709 4.74998 4.98435 4.77402 4.92025 4.82211C4.85614 4.87019 4.80805 4.94231 4.776 5.03848L3.81448 8.29231C3.68241 8.72181 3.74459 9.15547 4.001 9.59328C4.25742 10.0311 4.67858 10.25 5.26448 10.25ZM18.7645 10.25C19.3055 10.25 19.7196 10.0375 20.0068 9.61253C20.294 9.18751 20.3632 8.74744 20.2145 8.29231L19.203 5.01923C19.1709 4.92308 19.1228 4.85417 19.0587 4.81248C18.9946 4.77082 18.9081 4.74998 18.7991 4.74998H16.726L17.3145 8.88848C17.3773 9.2795 17.542 9.60418 17.8087 9.86253C18.0754 10.1209 18.394 10.25 18.7645 10.25ZM5.07218 19.25H18.9568C19.0465 19.25 19.1203 19.2212 19.178 19.1635C19.2357 19.1058 19.2645 19.0321 19.2645 18.9423V11.6615C19.1555 11.7013 19.0645 11.7259 18.9914 11.7356C18.9183 11.7452 18.8427 11.75 18.7645 11.75C18.3145 11.75 17.9186 11.6686 17.577 11.5058C17.2353 11.3429 16.9042 11.082 16.5837 10.7231C16.303 11.0359 15.9709 11.2852 15.5876 11.4711C15.2042 11.657 14.7671 11.75 14.276 11.75C13.8517 11.75 13.4517 11.6618 13.076 11.4856C12.7004 11.3093 12.3465 11.0551 12.0145 10.7231C11.7055 11.0551 11.3555 11.3093 10.9645 11.4856C10.5735 11.6618 10.1773 11.75 9.77603 11.75C9.32475 11.75 8.90167 11.6683 8.5068 11.5048C8.11192 11.3413 7.76448 11.0808 7.46448 10.7231C7.04396 11.1436 6.65646 11.4199 6.30198 11.5519C5.9475 11.684 5.60166 11.75 5.26448 11.75C5.18628 11.75 5.10551 11.7452 5.02218 11.7356C4.93883 11.7259 4.85293 11.7013 4.76448 11.6615V18.9423C4.76448 19.0321 4.79332 19.1058 4.851 19.1635C4.9087 19.2212 4.98243 19.25 5.07218 19.25Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
  );
}
