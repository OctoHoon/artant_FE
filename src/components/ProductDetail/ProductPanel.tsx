import {
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Text,
  Image,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCheck, FaChevronDown, FaChevronRight } from "react-icons/fa";
import StarRating from "../commons/StarRating";
import AddCartDrawer from "./AddCartDrawer";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import useUser from "../../lib/useUser";
import {
  IUploadCartVariables,
  addToCart,
  toggleLikeProduct,
} from "../../services/userService";
import BlackButton from "../commons/Button/BlackButton";
import LoginModal from "../commons/LoginModal";

export default function ProductPanel({ data, pk }) {
  const [selectedOptionOne, setSelectedOptionOne] = useState("");
  const [optionTwoValues, setOptionTwoValues] = useState([]);

  const handleOptionOneChange = (event) => {
    const value = event.target.value;
    setSelectedOptionOne(value);

    const selectedOption = data.options.option_values.find(
      (option) => option.option_one === value
    );
    if (selectedOption) {
      setOptionTwoValues(selectedOption.option_two);
    } else {
      setOptionTwoValues([]);
    }
  };

  console.log(data.options.option_names);
  console.log(data.options.option_values);

  const navigate = useNavigate();
  const { user } = useUser();

  const [option1, setOption1] = useState("선택");
  const [option2, setOption2] = useState("선택");

  const date = new Date();

  const prepareMin = new Date(
    date.getTime() + (data.processing_min * 1000) / 24
  );
  const prepareMax = new Date(
    date.getTime() + (data.processing_max * 1000) / 24
  );

  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();

  const cartData: IUploadCartVariables = {
    product_pk: pk!,
    quantity: 1,
    variant_pks: [],
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handlePurchase = () => {
    if (!user) {
      console.log("로그인 해주세요");
      onLoginOpen();
    } else {
      addToCart(cartData);
      navigate("/cart");
    }
  };

  const handleAddCart = () => {
    if (!user) {
      console.log("로그인 해주세요");
      onLoginOpen();
    } else {
      addToCart(cartData);
      setIsOpen(true);
    }
  };

  const mutation = useMutation(toggleLikeProduct, {
    onMutate: () => {
      console.log("mutation starting");
    },
    onSuccess: (data) => {
      console.log("success!");
    },
    onError: (error) => {
      console.log("mutation has an error");
    },
  });

  const onTapLike = (pk) => {
    mutation.mutate(pk);
    navigate(`/people/${user.pk}`);
  };

  return (
    <>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />

      <Box maxW="412px">
        {data["stock"] !== 1 ? null : (
          <Text
            fontSize="16px"
            fontWeight="500"
            color="#BC0000"
            letterSpacing={"-0.3px"}
            marginBottom={"6px"}
          >
            재고부족, 1개 남음
          </Text>
        )}
        {/* <Text
            fontSize="16px"
            fontWeight="500"
            color="#B67914"
            letterSpacing={"-0.3px"}
            marginBottom={"16px"}
          >
            16시간 후 판매 종료
          </Text> */}
        <Flex alignItems={"center"} marginBottom={"16px"}>
          <Text fontSize="38px" fontWeight="500" color="black">
            {data.price.toLocaleString()}
          </Text>
          <Text
            fontSize="24px"
            fontWeight="400"
            color="black"
            marginRight={"16px"}
          >
            원
          </Text>
          {data.original_price !== data.price ? (
            <Flex>
              <Text
                fontSize="18px"
                fontWeight="400"
                color="#777"
                marginRight={"8px"}
                as="s"
              >
                {data["original_price"].toLocaleString()}원
              </Text>
              <Text
                fontSize="18px"
                fontWeight="400"
                color="#BC0000"
                marginRight={"8px"}
              >
                {data["discount_rate"]}%
              </Text>
            </Flex>
          ) : null}
        </Flex>
        <Text
          fontSize="24px"
          fontWeight="400"
          color="#222"
          letterSpacing={"-0.3px"}
          marginBottom="4px"
        >
          {data["name"]}
        </Text>
        <Text
          fontSize="14px"
          fontWeight="400"
          color="#595959"
          letterSpacing={"-0.3px"}
          marginBottom="16px"
        ></Text>

        <Flex marginBottom="16px" alignContent={"center"}>
          <Link to={data && `/shop/${data["shop_pk"]}`}>
            <Text
              fontSize="14px"
              fontWeight="500"
              color="#222"
              letterSpacing={"-0.3px"}
              marginRight={"8px"}
            >
              {data["shop_name"]}
            </Text>
          </Link>

          <StarRating star={data["rating"]} reviews={0} include_count={false} />
        </Flex>
        <Flex>
          <FaCheck width={24} />
          <Text textStyle={"B14R"} marginRight={"8px"} marginLeft="8px">
            오늘 주문하면 {data["shipping_date"]}까지 받아보세요. 곧 도착!
          </Text>
        </Flex>
        <Flex>
          <FaCheck width={24} />
          <Text textStyle={"B14R"} marginRight={"8px"} marginLeft="8px">
            반품 교환 가능
          </Text>
        </Flex>
        <Box height={"24px"} />

        {data.options.option_names.length === 1 && (
          <>
            <Flex>
              <Text textStyle={"B14R"}>{data.options.option_names[0]}</Text>
              <Text color="#BC0000" textStyle={"B14R"}>
                *
              </Text>
            </Flex>
            <Select
              placeholder={data.options.option_names[0]}
              onChange={() => {}}
            >
              {data.options.option_values.option_one.map((variation, index) => (
                <option key={index} value={variation}>
                  {variation}
                </option>
              ))}
            </Select>

            <Box height={"12px"} />
          </>
        )}

        {data.options.option_names.length === 2 && (
          <>
            <Flex>
              <Text textStyle={"B14R"}>{data.options.option_names[0]}</Text>
              <Text color="#BC0000" textStyle={"B14R"}>
                *
              </Text>
            </Flex>
            <Select
              placeholder={data.options.option_names[0]}
              onChange={handleOptionOneChange}
            >
              {data.options.option_values.map((variation, index) => (
                <option key={index} value={variation.option_one}>
                  {variation.option_one}
                </option>
              ))}
            </Select>

            <Box height={"12px"} />
            <Flex>
              <Text textStyle={"B14R"}>{data.options.option_names[1]}</Text>
              <Text color="#BC0000" textStyle={"B14R"}>
                *
              </Text>
            </Flex>
            <Select
              isDisabled={!selectedOptionOne}
              placeholder={data.options.option_names[1]}
              onChange={() => {}}
            >
              {optionTwoValues.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </Select>
            <Box height={"12px"} />
          </>
        )}

        <Box height="12px" />

        <BlackButton
          title={"바로구매"}
          width={"100%"}
          onClick={handlePurchase}
          color={"#F12E24"}
          borderRadius={undefined}
        />
        <Box height="12px" />
        <BlackButton
          title={"장바구니"}
          width={"100%"}
          onClick={handleAddCart}
          borderRadius={undefined}
        />
        <AddCartDrawer
          thumbnail={data && data.thumbnail}
          isOpen={isOpen}
          toggleOpen={toggleDrawer}
        />
        <Box height="12px" />
        <Button
          width="100%"
          color="#222"
          background={"#E9E9E9"}
          fontSize="18px"
          fontWeight="400"
          letterSpacing={"-0.3px"}
          onClick={() => {
            addToCart(cartData);
            navigate("/cart");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <mask
              id="mask0_311_3697"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="25"
              height="24"
            >
              <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_311_3697)">
              <path
                d="M4.5 16.5769V18.3846C4.5 18.5385 4.5641 18.6795 4.6923 18.8077C4.82052 18.9359 4.96154 19 5.11538 19H19.8846C20.0385 19 20.1795 18.9359 20.3077 18.8077C20.4359 18.6795 20.5 18.5385 20.5 18.3846V16.5769H4.5ZM5.11538 7.03845H8.45C8.36667 6.88845 8.29648 6.73012 8.23943 6.56345C8.18236 6.39679 8.15383 6.22179 8.15383 6.03845C8.15383 5.47435 8.34613 4.99999 8.73075 4.61538C9.11537 4.23076 9.58973 4.03845 10.1539 4.03845C10.4923 4.03845 10.8054 4.12713 11.0931 4.3045C11.3808 4.48188 11.6318 4.70218 11.8462 4.96538L12.4616 5.80768L13.0769 4.96538C13.2872 4.69358 13.5383 4.47114 13.8302 4.29808C14.1221 4.12499 14.4365 4.03845 14.7733 4.03845C15.3347 4.03845 15.8077 4.23076 16.1923 4.61538C16.5769 4.99999 16.7693 5.47435 16.7693 6.03845C16.7693 6.22179 16.7439 6.39679 16.6933 6.56345C16.6426 6.73012 16.5693 6.88845 16.4731 7.03845H19.8846C20.3449 7.03845 20.7292 7.19262 21.0375 7.50095C21.3458 7.80929 21.5 8.19358 21.5 8.65385V18.3846C21.5 18.8449 21.3458 19.2292 21.0375 19.5375C20.7292 19.8458 20.3449 20 19.8846 20H5.11538C4.65513 20 4.27083 19.8458 3.9625 19.5375C3.65417 19.2292 3.5 18.8449 3.5 18.3846V8.65385C3.5 8.19358 3.65417 7.80929 3.9625 7.50095C4.27083 7.19262 4.65513 7.03845 5.11538 7.03845ZM4.5 14.4231H20.5V8.65385C20.5 8.5 20.4359 8.35898 20.3077 8.23078C20.1795 8.10256 20.0385 8.03845 19.8846 8.03845H14.0539L16.0385 10.7731L15.2462 11.3462L12.4616 7.55385L9.67693 11.3462L8.8846 10.7731L10.8577 8.03845H5.11538C4.96154 8.03845 4.82052 8.10256 4.6923 8.23078C4.5641 8.35898 4.5 8.5 4.5 8.65385V14.4231ZM10.1539 7.03845C10.4372 7.03845 10.6747 6.94262 10.8663 6.75095C11.058 6.55929 11.1539 6.32179 11.1539 6.03845C11.1539 5.75512 11.058 5.51762 10.8663 5.32595C10.6747 5.13429 10.4372 5.03845 10.1539 5.03845C9.87052 5.03845 9.63302 5.13429 9.44135 5.32595C9.24968 5.51762 9.15385 5.75512 9.15385 6.03845C9.15385 6.32179 9.24968 6.55929 9.44135 6.75095C9.63302 6.94262 9.87052 7.03845 10.1539 7.03845ZM14.7692 7.03845C15.0526 7.03845 15.2901 6.94262 15.4817 6.75095C15.6734 6.55929 15.7692 6.32179 15.7692 6.03845C15.7692 5.75512 15.6734 5.51762 15.4817 5.32595C15.2901 5.13429 15.0526 5.03845 14.7692 5.03845C14.4859 5.03845 14.2484 5.13429 14.0567 5.32595C13.8651 5.51762 13.7692 5.75512 13.7692 6.03845C13.7692 6.32179 13.8651 6.55929 14.0567 6.75095C14.2484 6.94262 14.4859 7.03845 14.7692 7.03845Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          선물하기
        </Button>
        <Box height="12px" />
        <Button
          width="100%"
          color="#222"
          background={"#FFF"}
          fontSize="18px"
          fontWeight="400"
          letterSpacing={"-0.3px"}
          onClick={() => onTapLike(pk)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <mask
              id="mask0_474_1917"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="25"
              height="24"
            >
              <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_474_1917)">
              <path
                d="M12.5 21.3269L11.3962 20.3346C9.73847 18.8308 8.36763 17.5384 7.28365 16.4577C6.19968 15.3769 5.34072 14.4151 4.70675 13.5721C4.07277 12.7292 3.62982 11.9602 3.3779 11.2654C3.12597 10.5705 3 9.86538 3 9.15C3 7.73078 3.47852 6.54265 4.43558 5.5856C5.39263 4.62855 6.58076 4.15002 7.99998 4.15002C8.87306 4.15002 9.69806 4.3542 10.475 4.76255C11.2519 5.17088 11.9269 5.75646 12.5 6.51927C13.0731 5.75646 13.7481 5.17088 14.525 4.76255C15.3019 4.3542 16.1269 4.15002 17 4.15002C18.4192 4.15002 19.6073 4.62855 20.5644 5.5856C21.5214 6.54265 22 7.73078 22 9.15C22 9.86538 21.874 10.5705 21.6221 11.2654C21.3701 11.9602 20.9272 12.7292 20.2932 13.5721C19.6592 14.4151 18.8019 15.3769 17.7211 16.4577C16.6403 17.5384 15.2679 18.8308 13.6038 20.3346L12.5 21.3269ZM12.5 19.3C14.1 17.8603 15.4166 16.6263 16.45 15.5981C17.4833 14.5699 18.3 13.6766 18.9 12.9183C19.5 12.1599 19.9166 11.4865 20.15 10.8981C20.3833 10.3096 20.5 9.72692 20.5 9.15C20.5 8.15 20.1666 7.31667 19.5 6.65C18.8333 5.98333 18 5.65 17 5.65C16.2102 5.65 15.4804 5.87404 14.8106 6.32213C14.1407 6.77019 13.6102 7.39359 13.2192 8.19233H11.7808C11.3833 7.38719 10.8513 6.76218 10.1846 6.3173C9.51793 5.87243 8.78973 5.65 7.99998 5.65C7.00639 5.65 6.17466 5.98333 5.50478 6.65C4.83491 7.31667 4.49998 8.15 4.49998 9.15C4.49998 9.72692 4.61664 10.3096 4.84998 10.8981C5.08331 11.4865 5.49998 12.1599 6.09998 12.9183C6.69998 13.6766 7.51664 14.5683 8.54998 15.5933C9.58331 16.6183 10.9 17.8539 12.5 19.3Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          컬렉션 추가
        </Button>
        <Box height="24px" />
        <Flex alignItems={"center"}>
          <Box marginRight={"8px"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <mask
                id="mask0_465_6232"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="48"
                height="48"
              >
                <rect width="48" height="48" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_465_6232)">
                <path
                  d="M14.95 40C12.4808 40 10.3718 39.1257 8.62305 37.377C6.87435 35.6282 6 33.5192 6 31.05C6 28.6192 6.84935 26.5353 8.54805 24.7981C10.2468 23.0609 12.3115 22.1654 14.7423 22.1116C14.9987 22.1116 15.2551 22.1308 15.5115 22.1692C15.768 22.2077 16.0243 22.2526 16.2807 22.3039L9.6923 9.0769H19.2308L24 18.6154L28.7693 9.0769H38.3077L31.7693 22.1654C32 22.1141 32.2372 22.0756 32.4808 22.05C32.7244 22.0244 32.9743 22.0116 33.2307 22.0116C35.6795 22.0731 37.7532 22.9724 39.452 24.7096C41.1507 26.4468 42 28.5436 42 31C42 33.5026 41.1256 35.6282 39.3769 37.377C37.6282 39.1257 35.5026 40 33 40C32.6231 40 32.2378 39.9789 31.8443 39.9366C31.4507 39.8943 31.0782 39.8141 30.7269 39.6962C32.3039 39.009 33.4102 37.8417 34.0461 36.1943C34.682 34.5468 35 32.8154 35 31C35 27.9308 33.934 25.3301 31.802 23.1981C29.6699 21.066 27.0692 20 24 20C20.9308 20 18.3301 21.066 16.1981 23.1981C14.066 25.3301 13 27.9308 13 31C13 32.8308 13.2936 34.5923 13.8807 36.2846C14.4679 37.9769 15.5949 39.1141 17.2615 39.6962C16.8846 39.8141 16.5058 39.8943 16.125 39.9366C15.7442 39.9789 15.3526 40 14.95 40ZM24 40C21.5 40 19.375 39.125 17.625 37.375C15.875 35.625 15 33.5 15 31C15 28.5 15.875 26.375 17.625 24.625C19.375 22.875 21.5 22 24 22C26.5 22 28.625 22.875 30.375 24.625C32.125 26.375 33 28.5 33 31C33 33.5 32.125 35.625 30.375 37.375C28.625 39.125 26.5 40 24 40ZM20.8769 35.577L24 33.2L27.1231 35.577L25.9539 31.7193L29.077 29.4923H25.2193L24 25.4231L22.7808 29.4923H18.923L22.0462 31.7193L20.8769 35.577Z"
                  fill="#9968D9"
                />
              </g>
            </svg>
          </Box>
          <Text
            fontSize="12px"
            fontWeight="500"
            color="#222"
            letterSpacing={"-0.042px"}
          >
            아트앤트 스타. 이 판매자는 평균 별점 4개 이상의 리뷰 + 약속된 시간
            이내 작품 배송 + 10시간 이내 메시지 응답
          </Text>
        </Flex>
        <Flex alignItems={"center"}>
          <Box marginRight={"8px"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <mask
                id="mask0_469_8159"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="48"
                height="48"
              >
                <rect width="48" height="48" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_469_8159)">
                <path
                  d="M8 33.1539V36.7693C8 37.0769 8.1282 37.359 8.3846 37.6154C8.64103 37.8718 8.92308 38 9.23075 38H38.7693C39.0769 38 39.359 37.8718 39.6154 37.6154C39.8718 37.359 40 37.0769 40 36.7693V33.1539H8ZM9.23075 14.0769H15.9C15.7333 13.7769 15.593 13.4602 15.4789 13.1269C15.3647 12.7936 15.3077 12.4436 15.3077 12.0769C15.3077 10.9487 15.6923 9.99999 16.4615 9.23075C17.2307 8.46152 18.1795 8.0769 19.3077 8.0769C19.9846 8.0769 20.6107 8.25427 21.1861 8.609C21.7615 8.96377 22.2636 9.40435 22.6923 9.93075L23.9231 11.6154L25.1539 9.93075C25.5744 9.38715 26.0765 8.94229 26.6604 8.59615C27.2442 8.24999 27.873 8.0769 28.5466 8.0769C29.6694 8.0769 30.6154 8.46152 31.3846 9.23075C32.1539 9.99999 32.5385 10.9487 32.5385 12.0769C32.5385 12.4436 32.4879 12.7936 32.3866 13.1269C32.2853 13.4602 32.1385 13.7769 31.9462 14.0769H38.7693C39.6898 14.0769 40.4583 14.3852 41.075 15.0019C41.6917 15.6186 42 16.3872 42 17.3077V36.7693C42 37.6898 41.6917 38.4583 41.075 39.075C40.4583 39.6917 39.6898 40 38.7693 40H9.23075C8.31025 40 7.54167 39.6917 6.925 39.075C6.30833 38.4583 6 37.6898 6 36.7693V17.3077C6 16.3872 6.30833 15.6186 6.925 15.0019C7.54167 14.3852 8.31025 14.0769 9.23075 14.0769ZM8 28.8462H40V17.3077C40 17 39.8718 16.718 39.6154 16.4616C39.359 16.2051 39.0769 16.0769 38.7693 16.0769H27.1077L31.077 21.5462L29.4923 22.6923L23.9231 15.1077L18.3539 22.6923L16.7692 21.5462L20.7154 16.0769H9.23075C8.92308 16.0769 8.64103 16.2051 8.3846 16.4616C8.1282 16.718 8 17 8 17.3077V28.8462ZM19.3077 14.0769C19.8744 14.0769 20.3494 13.8852 20.7327 13.5019C21.116 13.1186 21.3077 12.6436 21.3077 12.0769C21.3077 11.5102 21.116 11.0352 20.7327 10.6519C20.3494 10.2686 19.8744 10.0769 19.3077 10.0769C18.741 10.0769 18.266 10.2686 17.8827 10.6519C17.4994 11.0352 17.3077 11.5102 17.3077 12.0769C17.3077 12.6436 17.4994 13.1186 17.8827 13.5019C18.266 13.8852 18.741 14.0769 19.3077 14.0769ZM28.5385 14.0769C29.1051 14.0769 29.5801 13.8852 29.9634 13.5019C30.3468 13.1186 30.5385 12.6436 30.5385 12.0769C30.5385 11.5102 30.3468 11.0352 29.9634 10.6519C29.5801 10.2686 29.1051 10.0769 28.5385 10.0769C27.9718 10.0769 27.4968 10.2686 27.1134 10.6519C26.7301 11.0352 26.5385 11.5102 26.5385 12.0769C26.5385 12.6436 26.7301 13.1186 27.1134 13.5019C27.4968 13.8852 27.9718 14.0769 28.5385 14.0769Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </Box>
          <Text
            fontSize="14px"
            fontWeight="500"
            color="#222"
            letterSpacing={"-0.042px"}
          >
            선물 포장 가능
          </Text>
          <Popover>
            <PopoverTrigger>
              <Button
                colorScheme={"white"}
                fontSize="13px"
                fontWeight="400"
                color="#595959"
                letterSpacing={"-0.039px"}
                as="u"
              >
                자세히 보기
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader
                justifyContent={"center"}
                fontSize="13px"
                fontWeight="500"
                color="#222"
                letterSpacing={"-0.03px"}
              >
                Doorways To Power의 선물포장
              </PopoverHeader>
              <PopoverBody
                fontSize="13px"
                fontWeight="400"
                color="#222"
                letterSpacing={"-0.03px"}
              >
                프레임이 없는 인쇄물은 그래픽 티슈 페이퍼로 선물 포장한 후
                크라프트지로 묶고 튼튼한 크라프트 튜브에 말아 배송합니다.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Box height={"48px"} />
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="18px"
                  fontWeight="400"
                  color="#222"
                  letterSpacing={"-0.3px"}
                >
                  주요 정보
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              whiteSpace="pre-line"
              fontSize="14px"
              fontWeight="400"
              color="#222"
              lineHeight={"180%"}
              letterSpacing={"-0.3px"}
            >
              {`너비: ${data["item_width"] || 200}cm\n높이: ${
                data["item_height"] || 300
              }cm`}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="18px"
                  fontWeight="400"
                  color="#222"
                  letterSpacing={"-0.3px"}
                >
                  설명
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign="left">
              <Text
                fontSize="14px"
                fontWeight="400"
                color="#222"
                lineHeight={"180%"}
                letterSpacing={"-0.3px"}
                style={{ whiteSpace: "pre-wrap" }}
              >
                {data["description"]}
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="18px"
                  fontWeight="400"
                  color="#222"
                  letterSpacing={"-0.3px"}
                >
                  배송 및 반품 정책
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                fontSize="14px"
                fontWeight="400"
                color="#222"
                lineHeight={"180%"}
                letterSpacing={"-0.3px"}
              >
                예상도착시간
              </Text>
              <Text
                fontSize="24px"
                fontWeight="400"
                color="#222"
                letterSpacing={"-0.3px"}
              >
                {data["shipping_date"]}
              </Text>
              <Box height={"24px"} />

              <Flex justifyContent="space-between" align="center">
                <Box>
                  <Text
                    fontSize="13px"
                    fontWeight="500"
                    color="#222"
                    letterSpacing={"-0.039px"}
                  >
                    {`${date.getMonth() + 1}월 ${date.getDate()}일 주문`}
                  </Text>
                  <Text
                    fontSize="13px"
                    fontWeight="400"
                    color="#595959"
                    letterSpacing="-0.039px"
                    textOverflow={"ellipsis"}
                    as="u"
                  >
                    주문 완료
                  </Text>
                </Box>
                <FaChevronRight size={"18px"} />
                <Box textAlign={"center"}>
                  <Text
                    fontSize="13px"
                    fontWeight="500"
                    color="#222"
                    letterSpacing={"-0.039px"}
                  >
                    {`${
                      prepareMin.getMonth() + 1
                    }월 ${prepareMin.getDate()}일 ~ ${
                      prepareMax.getMonth() + 1
                    }월 ${prepareMax.getDate()}일`}
                  </Text>
                  <Text
                    fontSize="13px"
                    fontWeight="400"
                    color="#595959"
                    letterSpacing="-0.039px"
                    textOverflow={"ellipsis"}
                    as="u"
                    fontFamily={"Spoqa Han Sans Neo"}
                  >
                    작품준비중
                  </Text>
                </Box>
                <FaChevronRight size={"18px"} />
                <Box textAlign="end">
                  <Text
                    fontSize="13px"
                    fontWeight="500"
                    color="#222"
                    letterSpacing={"-0.039px"}
                  >
                    {data["shipping_date"]}
                  </Text>
                  <Text
                    fontSize="13px"
                    fontWeight="400"
                    color="#595959"
                    letterSpacing="-0.039px"
                    textOverflow={"ellipsis"}
                    as="u"
                  >
                    배송
                  </Text>
                </Box>
              </Flex>
              <Box height={"24px"} />
              <Text
                fontSize="14px"
                fontWeight="400"
                color="#595959"
                letterSpacing="-0.042px"
                textOverflow={"ellipsis"}
              >
                배송정보
              </Text>
              <Text
                fontSize="24px"
                fontWeight="400"
                color="#222"
                letterSpacing="-0.3px"
                textOverflow={"ellipsis"}
              >
                택배배송
              </Text>
              <Box height={"24px"} />
              <Text
                fontSize="14px"
                fontWeight="400"
                color="#595959"
                letterSpacing="-0.042px"
                textOverflow={"ellipsis"}
              >
                배송비
              </Text>
              <Box
                alignItems="center" // Vertically center align
              >
                <Text
                  fontSize="24px"
                  fontWeight="400"
                  color="#222"
                  letterSpacing="-0.3px"
                  textOverflow={"ellipsis"}
                >
                  {data["shipping_price"]}
                  <Text as="span" fontSize="16px">
                    원
                  </Text>
                </Text>
              </Box>
              <Box height={"24px"} />
              <Box
                borderRadius="5px"
                bg="#F1F1F5"
                alignItems={"center"}
                p={"12px"}
              >
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  color="#222"
                  letterSpacing="-0.3px"
                  textOverflow={"ellipsis"}
                  lineHeight={"150%"}
                >
                  아트앤트는 이 구매에 대한 배송 및 포장으로 인한 탄소 배출량을
                  상쇄합니다.
                </Text>
              </Box>
              <Box height={"24px"} />
              <Flex justifyContent={"space-evenly"}>
                <Box width="170px">
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    color="#595959"
                    letterSpacing="-0.042px"
                    textOverflow={"ellipsis"}
                  >
                    교환
                  </Text>
                  <Text
                    fontSize="24px"
                    fontWeight="400"
                    color="#222"
                    letterSpacing="-0.3px"
                    textOverflow={"ellipsis"}
                  >
                    {data["is_return_exchange_available"] ? "가능" : "불가능"}
                  </Text>
                </Box>
                <Box width="170px">
                  {" "}
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    color="#595959"
                    letterSpacing="-0.042px"
                    textOverflow={"ellipsis"}
                  >
                    반품기간
                  </Text>
                  <Text
                    fontSize="24px"
                    fontWeight="400"
                    color="#222"
                    letterSpacing="-0.3px"
                    textOverflow={"ellipsis"}
                  >
                    14일
                  </Text>
                </Box>
              </Flex>
              <Box height={"24px"} />
              <Flex alignItems={"center"}>
                <Box marginRight={"8px"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <mask
                      id="mask0_417_8670"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="48"
                      height="48"
                    >
                      <rect width="48" height="48" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_417_8670)">
                      <path
                        d="M23.4036 39.8845C23.6652 39.8845 23.9331 39.8255 24.2075 39.7076C24.4818 39.5896 24.7036 39.446 24.8728 39.2768L40.4652 23.6845C40.9677 23.1819 41.3556 22.6678 41.6286 22.1422C41.9017 21.6165 42.0382 21.0396 42.0382 20.4114C42.0382 19.7755 41.9017 19.1582 41.6286 18.5595C41.3556 17.9608 40.9677 17.414 40.4652 16.9191L32.9652 9.41913C32.4703 8.91656 31.9619 8.54796 31.4402 8.31332C30.9184 8.07872 30.3395 7.96143 29.7036 7.96143C29.0754 7.96143 28.4921 8.07872 27.9536 8.31332C27.4152 8.54796 26.9075 8.91656 26.4305 9.41913L24.6882 11.1614L28.3882 14.8729C28.7857 15.2627 29.0819 15.7063 29.2767 16.2037C29.4716 16.7012 29.569 17.2063 29.569 17.7191C29.569 18.7601 29.2286 19.621 28.5479 20.3018C27.8671 20.9826 27.0062 21.323 25.9652 21.323C25.4523 21.323 24.9517 21.2448 24.4632 21.0883C23.9748 20.9319 23.5357 20.6589 23.1459 20.2691L19.319 16.4537L10.6844 25.0883C10.4818 25.2909 10.3299 25.521 10.2286 25.7787C10.1273 26.0364 10.0767 26.296 10.0767 26.5576C10.0767 27.0294 10.228 27.4185 10.5305 27.7249C10.8331 28.0313 11.2203 28.1845 11.6921 28.1845C11.9536 28.1845 12.2216 28.1255 12.4959 28.0076C12.7703 27.8896 12.9921 27.746 13.1613 27.5768L19.4998 21.2383L20.9152 22.6537L14.5882 28.9922C14.3857 29.1947 14.2337 29.4249 14.1325 29.6826C14.0312 29.9403 13.9805 30.1999 13.9805 30.4614C13.9805 30.9076 14.1382 31.2883 14.4536 31.6037C14.769 31.9191 15.1498 32.0768 15.5959 32.0768C15.8575 32.0768 16.1254 32.0178 16.3998 31.8999C16.6741 31.7819 16.8959 31.6383 17.0652 31.4691L23.8652 24.6806L25.2805 26.096L18.4921 32.896C18.3152 33.0653 18.1697 33.2871 18.0555 33.5614C17.9414 33.8358 17.8844 34.1037 17.8844 34.3653C17.8844 34.8114 18.0421 35.1922 18.3575 35.5076C18.6728 35.8229 19.0536 35.9806 19.4998 35.9806C19.7613 35.9806 20.0209 35.93 20.2786 35.8287C20.5363 35.7274 20.7665 35.5755 20.969 35.373L27.769 28.5845L29.1844 29.9999L22.3844 36.7999C22.1818 37.0024 22.0299 37.2454 21.9286 37.5287C21.8274 37.8121 21.7767 38.0717 21.7767 38.3076C21.7767 38.7794 21.9427 39.1601 22.2748 39.4499C22.6068 39.7396 22.9831 39.8845 23.4036 39.8845ZM23.3921 41.8845C22.3639 41.8845 21.4837 41.5082 20.7517 40.7557C20.0196 40.0031 19.6985 39.0743 19.7882 37.9691C18.6549 37.9819 17.7113 37.6435 16.9575 36.9537C16.2036 36.264 15.8459 35.3012 15.8844 34.0653C14.6485 34.0781 13.6748 33.7249 12.9632 33.0057C12.2517 32.2864 11.928 31.3384 11.9921 30.1614C10.8792 30.1742 9.94848 29.8614 9.19978 29.223C8.45105 28.5845 8.07668 27.696 8.07668 26.5576C8.07668 26.0447 8.17605 25.5313 8.37478 25.0172C8.57348 24.5031 8.86771 24.0512 9.25748 23.6614L19.319 13.6114L24.4844 18.7768C24.6536 18.9537 24.8626 19.0992 25.1113 19.2133C25.36 19.3274 25.6408 19.3845 25.9536 19.3845C26.3818 19.3845 26.76 19.2351 27.0882 18.9364C27.4164 18.6377 27.5805 18.2486 27.5805 17.7691C27.5805 17.4563 27.5235 17.1755 27.4094 16.9268C27.2953 16.6781 27.1498 16.4691 26.9729 16.2999L20.0921 9.41913C19.5972 8.91656 19.0825 8.54796 18.5479 8.31332C18.0132 8.07872 17.428 7.96143 16.7921 7.96143C16.1639 7.96143 15.5934 8.07872 15.0805 8.31332C14.5677 8.54796 14.06 8.91656 13.5575 9.41913L7.46903 15.5191C7.0408 15.9473 6.69463 16.4576 6.43053 17.0499C6.16643 17.6422 6.0267 18.2537 6.01133 18.8845C5.99593 19.3358 6.03438 19.7698 6.12668 20.1864C6.21901 20.6031 6.36518 20.9948 6.56518 21.3614L5.04978 22.8768C4.71388 22.3409 4.45105 21.7236 4.26128 21.0249C4.07155 20.3261 3.98438 19.6127 3.99978 18.8845C4.01515 17.9768 4.1972 17.1069 4.54593 16.2749C4.89463 15.4428 5.39335 14.7024 6.04208 14.0537L12.0921 8.00373C12.7895 7.31396 13.5273 6.80113 14.3055 6.46523C15.0838 6.12936 15.9254 5.96143 16.8305 5.96143C17.7357 5.96143 18.5709 6.12936 19.3363 6.46523C20.1017 6.80113 20.8293 7.31396 21.519 8.00373L23.2613 9.74602L25.0036 8.00373C25.7011 7.31396 26.4325 6.80113 27.1978 6.46523C27.9632 6.12936 28.7985 5.96143 29.7036 5.96143C30.6088 5.96143 31.4504 6.12936 32.2286 6.46523C33.0068 6.80113 33.7408 7.31396 34.4305 8.00373L41.8806 15.4537C42.5703 16.1435 43.1024 16.9178 43.4767 17.7768C43.8511 18.6358 44.0382 19.5178 44.0382 20.423C44.0382 21.3281 43.8511 22.1633 43.4767 22.9287C43.1024 23.6941 42.5703 24.4217 41.8806 25.1114L26.2882 40.6922C25.8729 41.1076 25.4209 41.4101 24.9325 41.5999C24.444 41.7896 23.9305 41.8845 23.3921 41.8845Z"
                        fill="#5365AE"
                      />
                    </g>
                  </svg>
                </Box>
                <Text
                  fontSize="12px"
                  fontWeight="500"
                  color="#222"
                  letterSpacing={"-0.042px"}
                >
                  아트앤트 구매 보호: 주문에 문제가 있는 경우 아트앤트에서 자신
                  있게 쇼핑하세요. 적격한 모든 구매에 대해 지원해 드립니다.
                  프로그램 약관을 참조하세요.
                </Text>
              </Flex>
              <Box height={"24px"} />
              <Flex
                color="#595959"
                fontSize="14px"
                fontWeight="400"
                letterSpacing="-0.042px"
              >
                작품 정책 보기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_474_1941"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_474_1941)">
                    <path
                      d="M10.25 16.4038V7.59619L14.6538 12L10.25 16.4038Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="18px"
                  fontWeight="400"
                  color="#222"
                  letterSpacing={"-0.3px"}
                >
                  판매자 만나기
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex>
                <Image
                  width="80px"
                  height="80px"
                  src={data.shop_avatar}
                  marginRight={"20px"}
                />
                <Box>
                  <Text
                    fontSize="24px"
                    fontWeight="400"
                    color="#222"
                    letterSpacing={"-0.3px"}
                  >
                    {data.shop_name}
                  </Text>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    color="#222"
                    letterSpacing={"-0.3px"}
                  >
                    판매자: {""}
                    <Text as="span" textDecoration="underline">
                      {data.shop_owner.username}
                    </Text>
                  </Text>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    color="#222"
                    letterSpacing={"-0.3px"}
                  >
                    팔로우
                  </Text>
                </Box>
              </Flex>
              <Box height={"24px"} />

              <Button
                width="100%"
                colorScheme="white"
                color="black"
                borderRadius={"5px"}
                border={"1px solid #D9D9D9"}
                fontSize="16px"
                fontWeight={"400"}
              >
                메시지
              </Button>
              <Box height={"18px"} />

              <Text
                align={"center"}
                fontSize="14px"
                fontWeight={"400"}
                color="#595959"
              >
                이 판매자는 평균 10시간 이내에 응답함
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}

function MenuItemTab({ title, set }) {
  return (
    <MenuItem onClick={() => set(title)}>
      <span>{title}</span>
    </MenuItem>
  );
}
