import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure,
  Text,
  FormLabel,
  Flex,
  Image,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FilterPrice from "./FilterPrice";
import CheckboxOptionsComponent from "./CheckboxOptionComponent";
import ShippingOption from "./ShippingOption";
import RadioButtonOption from "./RadioButtonOption";
import CategoryFilter from "./CategoryFilter";
import { FaAngleRight } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

export default function DrawerFilter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectCategory, setSelectCategory] = useState(false);
  const btnRef = React.useRef(null);
  const { category } = useParams();
  const [categoryResult, setCategoryResult] = useState(category);
  const [isDiscount, setIsDiscount] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const navigate = useNavigate();

  const constructQueryString = (params) => {
    const queryParams = new URLSearchParams();

    // Loop through each key-value pair in the params object
    for (const key in params) {
      if (params[key] !== undefined) {
        queryParams.set(key, params[key].toString());
      } else {
        queryParams.delete(key);
      }
    }

    return queryParams.toString();
  };

  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const onClickDone = () => {
    const params = {
      PriceLower: minPrice,
      PriceUpper: maxPrice,
      is_discount: isDiscount,
      // Add other parameters here
    };
    const queryString = constructQueryString(params);
    const newUrl = `/items/${categoryResult}?${queryString}`;
    onClose();
    console.log(newUrl);

    navigate(newUrl);
  };

  return (
    <div>
      <Button
        ref={btnRef}
        onClick={onOpen}
        backgroundColor={"transparent"}
        variant={"unstyled"}
        style={{
          display: "inline-flex",
          height: "36px",
          padding: "0px 15px",
          alignItems: "center",
          gap: "5px",
          flexShrink: 0,
          borderRadius: "100px",
          border: "1px solid #000 ",
        }}
      >
        <Flex alignItems="center">
          <Image marginRight={1} src="/assets/tune.png" boxSize="20px" />
          <Text
            color="#000"
            textAlign={"center"}
            fontFamily="Spoqa Han Sans Neo"
            fontSize="14px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="normal"
            letterSpacing="-0.3px"
            textTransform="capitalize"
          >
            모든 필터{" "}
          </Text>
        </Flex>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        // variant={"secondary"}
        size={"sm"}
      >
        <DrawerOverlay />

        <DrawerContent px={"50px"}>
          <DrawerCloseButton />

          <DrawerHeader
            px={0}
            pb={0}
            borderBottomWidth={"1px"}
            borderBottomColor={"#000"}
          >
            {selectCategory ? (
              <Text
                color="#222"
                fontFamily="Roboto"
                fontSize="32px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                textTransform="capitalize"
              >
                카테고리
              </Text>
            ) : (
              <Text
                color="#222"
                fontFamily="Roboto"
                fontSize="32px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
                textTransform="capitalize"
              >
                Filters
              </Text>
            )}
          </DrawerHeader>

          <DrawerBody px={0} py={5}>
            {selectCategory ? (
              <CategoryFilter
                category={categoryResult!}
                setSelectedCategory={setCategoryResult}
              />
            ) : (
              <Stack spacing="16px">
                <Box>
                  <FormLabel htmlFor="username">Filter By Category</FormLabel>
                  <Flex align="center">
                    <Box
                      p={4}
                      display="flex"
                      alignItems="center"
                      width="100%"
                      justifyContent="space-between"
                      _hover={{ bg: "#F1F1F5", cursor: "pointer" }}
                      onClick={() => setSelectCategory(!selectCategory)}
                    >
                      {categoryResult}
                      <Icon as={FaAngleRight} color="black" boxSize={4} />
                    </Box>
                  </Flex>
                </Box>

                <Box borderBottom="1px solid #D9D9D9" />
                <Box>
                  <FormLabel htmlFor="username">특별 혜택</FormLabel>
                  <Stack spacing="3px">
                    <Checkbox value="option1">무료 배송</Checkbox>
                    <Checkbox
                      value="option2"
                      onChange={(e) => {
                        setIsDiscount(e.target.checked);
                      }}
                    >
                      할인
                    </Checkbox>
                    <Checkbox value="option2">액자 포함</Checkbox>
                  </Stack>
                </Box>
                <Box borderBottom="1px solid #D9D9D9" mt={0} />
                <Box>
                  <FormLabel htmlFor="username">추천 작품</FormLabel>
                  <Stack spacing="10px">
                    <Checkbox value="option1">아트앤트 초이시스</Checkbox>
                    <Checkbox
                      value="option2"
                      style={{
                        color: "#9E76BE",
                        fontFamily: "Spoqa Han Sans Neo",
                        fontSize: "13px",
                        fontWeight: 400,
                        lineHeight: "16px",
                        letterSpacing: "-0.30000001192092896px",
                        textAlign: "left",
                      }}
                    >
                      아트앤트 스타
                    </Checkbox>
                    <Text
                      style={{
                        color: "#666666",
                        fontFamily: "Spoqa Han Sans Neo",
                        fontSize: "13px",
                        fontWeight: 400,
                        lineHeight: "16px",
                        letterSpacing: "-0.30000001192092896px",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Stack spacing={"0px"}>
                        <span
                          style={{
                            marginLeft: "24px", // Adjust spacing as needed
                          }}
                        >
                          평균 별점 4개 이상의 리뷰+약속된 시간 이내 작품 배송
                        </span>
                        <span
                          style={{
                            marginLeft: "24px", // Adjust spacing as needed
                          }}
                        >
                          +10시간 이내 메세지 응답
                        </span>
                      </Stack>
                    </Text>
                  </Stack>
                </Box>
                <Box borderBottom="1px solid #D9D9D9" mt={0} />
                <Box>
                  <FormLabel htmlFor="username">가격</FormLabel>
                  <FilterPrice
                    isOpen={true}
                    onClose={() => {}}
                    onPriceChange={handlePriceChange}
                  />
                </Box>
                <Box borderBottom="1px solid #D9D9D9" mt={0} />
                <Box>
                  <FormLabel htmlFor="url">색조(ThemeColor)</FormLabel>
                  <CheckboxOptionsComponent />
                </Box>
                <Box border="1px solid #D9D9D9" mt={0} />
                <Box>
                  <FormLabel htmlFor="owner">주문옵션</FormLabel>

                  <RadioButtonOption />
                </Box>
                <Box border="1px solid #D9D9D9" mt={0} />
                <Box>
                  <FormLabel htmlFor="owner">배송옵션</FormLabel>
                  <ShippingOption />
                </Box>
                <Box bg="white" p={2} border="1px solid #ccc">
                  <Text align="center">전체해제</Text>
                </Box>
              </Stack>
            )}
          </DrawerBody>

          <DrawerFooter height="84px" borderTopWidth="1px">
            {selectCategory ? (
              <Button
                width="184px"
                height="44px"
                padding="14px 8px"
                borderRadius="100px"
                variant="outline"
                mr={3}
                onClick={() => setSelectCategory(!selectCategory)}
              >
                뒤로
              </Button>
            ) : (
              <Button
                width="184px"
                height="44px"
                padding="14px 8px"
                borderRadius="100px"
                variant="outline"
                mr={3}
                onClick={onClose}
              >
                취소
              </Button>
            )}

            <Button
              width="184px"
              height="44px"
              padding="14px 8px"
              borderRadius="100px"
              bgColor="#5365AE"
              color="white"
              _hover={{ bg: "#44569B" }}
              onClick={onClickDone}
            >
              확인
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
