import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  HStack,
  Image,
  Stack,
  StepIcon,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import ArtPiece from "../ArtPiece";
import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";
import CustomSelect from "./CustomSelect";
import DrawerFilter from "./Drawer/DrawerFilter";

interface IProduct {
  pk: number;
  name: string;
  original_price: number;
  rating: number;
  rating_count: number;
  price: number;
  thumbnail: string; // Adjust this according to your API response
  category: string;
  shop_name: string;
  free_shipping: boolean;
  is_best_seller: boolean;
}

export default function Itemlists() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [itemCount, setItemCount] = useState<number>(0);
  const [selectedValue, setSelectedValue] = useState("추천순");
  const handleSelectionChange = (value: string) => {
    setSelectedValue(value);
    console.log(selectedValue);
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const { category } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const stringParam = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [items, setItems] = useState([]);

  console.log(category);
  console.log(searchParams);
  console.log(searchParams["PriceUpper"]);

  useEffect(() => {
    console.log("Selected value has changed:", selectedValue);
    // Make the API request when the component mounts
    if (stringParam["category"] == null) {
      axios
        .get(
          `http://127.0.0.1:8000/api/v1/products/?sort=${selectedValue}&limit=40&`
        )
        .then((response) => {
          console.log("API Response:", response.data);
          setItems(response.data["products"]); // Update state with API data
          setItemCount(response.data["total_count"]);
        })
        .catch((error) => {
          console.error("Error fetching recently products:", error);
        });
    } else {
      axios
        .get(
          `http://127.0.0.1:8000/api/v1/products/?category=${encodeURIComponent(
            stringParam["category"]
          )}&${location.search.substring(1)}`
        )
        .then((response) => {
          console.log("API Response:", response.data);
          setItems(response.data["products"]); // Update state with API data
          setItemCount(response.data["total_count"]);
          console.log(items);
        })
        .catch((error) => {
          console.error("Error fetching recently products:", error);
        });
      console.log(
        `http://127.0.0.1:8000/api/v1/products/?category=${encodeURIComponent(
          stringParam["category"]
        )}&${location.search.substring(1)}`
      );
    }
  }, [selectedValue, category, location.search]);

  return (
    <Box
      px={{
        base: 10,
        lg: 40,
      }}
      my={10}
    >
      <Text
        color="#000"
        fontFamily="Spoqa Han Sans Neo"
        fontSize="30px"
        fontStyle="normal"
        fontWeight={400}
        lineHeight="normal"
        letterSpacing="-1px"
        textTransform="capitalize"
        textAlign={"center"}
      >
        {stringParam["category"]}
      </Text>
      <HStack
        justifyContent={"right"}
        spacing={"2px"}
        borderBottomWidth={"2px"}
        borderBottomColor={"#000"}
      >
        <Text
          color="#FF5B59"
          textAlign={"right"}
          fontFamily="Spoqa Han Sans Neo"
          fontSize="14px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="normal"
          letterSpacing="-1px"
          textTransform="capitalize"
          marginTop={"-12px"}
          marginRight={0}
          marginBottom={"21px"}
        >
          {itemCount.toLocaleString()}
        </Text>
        <Text
          color="#000"
          textAlign={"right"}
          fontFamily="Spoqa Han Sans Neo"
          fontSize="14px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="normal"
          letterSpacing="-1px"
          textTransform="capitalize"
          marginTop={"-12px"}
          marginLeft={0}
          marginBottom={"21px"}
        >
          개의 상품이 있습니다
        </Text>
      </HStack>
      <HStack marginTop={"20px"} justifyContent={"space-between"}>
        <DrawerFilter />
        <div>
          <CustomSelect onSelectionChange={handleSelectionChange} />
        </div>
      </HStack>

      <Grid
        mt={10}
        columnGap={4}
        rowGap={8}
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
      >
        {items.map((art: IProduct, index) => (
          <ArtPiece
            pk={art.pk}
            source={art.thumbnail}
            category={art.category}
            title={art.name}
            description={""}
            artist={art.shop_name}
            star={art.rating}
            reviews={art.rating_count}
            price={art.price}
            originalPrice={art.original_price}
            free_shipping={art.free_shipping}
            is_best_seller={art.is_best_seller}
            key={art.name}
          />
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" my={20}>
        <ButtonGroup>
          <Button backgroundColor={"transparent"} variant={"none"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.47445 0L8 0.75L1.45985 6L8 11.25L7.47445 12L0 6L7.47445 0Z"
                fill="#777777"
              />
            </svg>
          </Button>
          {[Math.floor(itemCount / 40) + 1].map((page) => (
            <Button key={page} backgroundColor={"transparent"} variant={"none"}>
              <Text
                color="#767676"
                fontFamily="Roboto"
                fontSize="15px"
                fontStyle="normal"
                fontWeight={500}
                lineHeight="normal"
                textTransform="capitalize"
              >
                {page}
              </Text>
            </Button>
          ))}
          <div>{itemCount > 280 ? <Text marginTop={1}>...</Text> : null}</div>

          <Button backgroundColor={"transparent"} variant={"none"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.525548 12L6.55671e-08 11.25L6.54015 6L9.83506e-07 0.749999L0.52555 -6.53437e-07L8 6L0.525548 12Z"
                fill="#777777"
              />
            </svg>
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

const optionStyle = {
  fontFamily: "Spoqa Han Sans Neo",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "18px",
  letterSpacing: "-0.3px",
  /* Add any additional text styles here */
};
