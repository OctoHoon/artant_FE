import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Text,
  Textarea,
  Input,
} from "@chakra-ui/react";
import { deleteCartLine } from "../../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CartComponent({
  suggest,
  isSoldOut,
  data,
  onDelete,
  onProductSelect,
  isSelectAll,
}) {
  const [isSelected, setIsSelected] = useState(isSelectAll);

  useEffect(() => {
    setIsSelected(isSelectAll);
  }, [isSelectAll]);

  // Checkbox가 클릭될 때 호출되는 함수
  const handleCheckboxClick = () => {
    setIsSelected(!isSelected); // Checkbox의 선택 상태를 토글
    onProductSelect(data.pk, !isSelected); // 선택한 상품의 ID와 선택 상태를 부모 컴포넌트로 전달
  };

  return (
    <Flex width="828px" alignItems={"flex-start"}>
      <Flex
        width="540px"
        flexDirection={"column"}
        alignItems={"flex-start"}
        flexShrink={"0"}
        alignSelf={"stretch"}
      >
        {suggest ? (
          <Flex
            width="540px"
            padding={"10px"}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            background={"var(--maincolorsbggrayf-9-f-9-ff, #F9F9FF);"}
          >
            <Flex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_777_13976"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_777_13976)">
                  <path
                    d="M13.5577 20.7077C13.3656 20.8987 13.1274 20.9942 12.8434 20.9942C12.5593 20.9942 12.3218 20.8987 12.1308 20.7077L3.33078 11.9077C3.22436 11.8013 3.14262 11.6845 3.08557 11.5572C3.02852 11.43 3 11.2942 3 11.15V4C3 3.73205 3.09967 3.49839 3.29902 3.29902C3.49839 3.09967 3.73205 3 4 3H11.15C11.2795 3 11.4083 3.02638 11.5363 3.07915C11.6644 3.13193 11.7753 3.20298 11.8692 3.2923L20.6692 12.0981C20.8731 12.3019 20.9782 12.5484 20.9846 12.8375C20.991 13.1266 20.8987 13.3667 20.7077 13.5577L13.5577 20.7077ZM6.49775 7.5C6.7749 7.5 7.01123 7.403 7.20673 7.209C7.40224 7.01498 7.5 6.77941 7.5 6.50228C7.5 6.22511 7.403 5.98878 7.209 5.79328C7.015 5.59776 6.77942 5.5 6.50225 5.5C6.2251 5.5 5.98878 5.597 5.79328 5.791C5.59776 5.98502 5.5 6.22059 5.5 6.49773C5.5 6.77489 5.597 7.01122 5.791 7.20672C5.985 7.40224 6.22058 7.5 6.49775 7.5Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
              판매자 제안
            </Flex>
            <Flex>
              <Checkbox />
              10% 할인 적용
            </Flex>{" "}
          </Flex>
        ) : null}

        <Flex alignItems={"flex-start"}>
          <Flex
            padding="20px 0px 20px 10px"
            flexDirection={"column"}
            alignItems={"flex-start"}
            alignSelf={"stretch"}
          >
            <Link to={`/listings/${data.product.pk}`}>
              <Image
                width="120px"
                height="120px"
                src={data.product.thumbnail}
                objectFit={"cover"}
              />
            </Link>
            <Checkbox
              position={"absolute"}
              isChecked={isSelected}
              onChange={handleCheckboxClick}
            />
          </Flex>
          <Flex
            width={"410px"}
            padding="20px"
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"24px"}
          >
            <Flex
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              alignSelf={"stretch"}
            >
              <Flex gap="8px" fontWeight={"500"} alignItems={"center"}>
                <Link to={`/shop/${data.product.shop_pk}`}>
                  <Image
                    width="32px"
                    height="32px"
                    src={data.product.shop_avatar}
                    objectFit={"cover"}
                  />
                </Link>
                <Link to={`/shop/${data.product.shop_pk}`}>
                  {data.product.shop_name}
                </Link>
              </Flex>
              <Flex gap="8px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <mask
                    id="mask0_786_1802"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="22"
                    height="22"
                  >
                    <rect width="22" height="22" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_786_1802)">
                    <path
                      d="M5.95833 13.375H16.0417V12.4583H5.95833V13.375ZM5.95833 10.625H16.0417V9.70833H5.95833V10.625ZM5.95833 7.875H16.0417V6.95833H5.95833V7.875ZM19.25 19.4038L16.4295 16.5833H4.23076C3.80886 16.5833 3.4566 16.442 3.17396 16.1594C2.89132 15.8767 2.75 15.5245 2.75 15.1026V5.23076C2.75 4.80886 2.89132 4.4566 3.17396 4.17396C3.4566 3.89132 3.80886 3.75 4.23076 3.75H17.7692C18.1911 3.75 18.5434 3.89132 18.826 4.17396C19.1087 4.4566 19.25 4.80886 19.25 5.23076V19.4038ZM16.8208 15.6667L18.3333 17.1739V5.23076C18.3333 5.08975 18.2746 4.96047 18.1571 4.84294C18.0395 4.72543 17.9103 4.66667 17.7692 4.66667H4.23076C4.08975 4.66667 3.96047 4.72543 3.84294 4.84294C3.72543 4.96047 3.66667 5.08975 3.66667 5.23076V15.1026C3.66667 15.2436 3.72543 15.3729 3.84294 15.4904C3.96047 15.6079 4.08975 15.6667 4.23076 15.6667H16.8208Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>{" "}
                1:1문의
              </Flex>
            </Flex>
            <Flex flexDirection={"column"} alignItems={"flex-start"} gap="4px">
              <Link to={`/listings/${data.product.pk}`}>
                <Text fontWeight={"700"} noOfLines={1}>
                  {data.product.name}
                </Text>
              </Link>
              <Flex alignItems={"flex-start"} gap="40px">
                <Flex>
                  <Text>옵션:</Text>
                  <Flex
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"4px"}
                  >
                    <Text>200cm x 300cm</Text>
                    <Text>액자 없음</Text>
                  </Flex>
                </Flex>
                <Flex alignItems={"center"} gap={"4px"}>
                  변경{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.52528 5L0 0.762878L0.659956 0L6 5L0.659956 10L0 9.23712L4.52528 5Z"
                      fill="#1C1B1F"
                    />
                  </svg>
                </Flex>
              </Flex>
            </Flex>
            <Flex alignItems={"flex-start"} gap={"24px"}>
              <Text> 배송비 : 무료배송</Text>
              <Text color={"var(--maincolorstextgray-595959, #666)"}>
                {" "}
                예상 배송일 : 9월 5~27일
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              gap={"2px"}
              color={"var(--maincolorstextredbc-0000, #BC0000)"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_746_10230"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_746_10230)">
                  <path
                    d="M5 18.7692V17.7692H6.61537V9.84615C6.61537 8.53975 7.02884 7.39072 7.85577 6.39905C8.68269 5.40737 9.73077 4.78973 11 4.54615V4C11 3.72222 11.097 3.4861 11.291 3.29165C11.485 3.09722 11.7206 3 11.9978 3C12.2749 3 12.5112 3.09722 12.7067 3.29165C12.9022 3.4861 13 3.72222 13 4V4.54615C14.2692 4.78973 15.3173 5.40737 16.1442 6.39905C16.9712 7.39072 17.3846 8.53975 17.3846 9.84615V17.7692H19V18.7692H5ZM11.9966 21.3846C11.5514 21.3846 11.1715 21.2265 10.8567 20.9101C10.542 20.5938 10.3846 20.2135 10.3846 19.7692H13.6154C13.6154 20.2167 13.4569 20.5978 13.1399 20.9125C12.8229 21.2273 12.4418 21.3846 11.9966 21.3846ZM7.61537 17.7692H16.3846V9.84615C16.3846 8.63077 15.9577 7.59615 15.1039 6.7423C14.25 5.88847 13.2154 5.46155 12 5.46155C10.7846 5.46155 9.75 5.88847 8.89615 6.7423C8.0423 7.59615 7.61537 8.63077 7.61537 9.84615V17.7692Z"
                    fill="#BC0000"
                  />
                </g>
              </svg>
              {isSoldOut ? <Text>품절</Text> : <Text>재고부족, 1개 남음</Text>}
            </Flex>
            {isSoldOut ? null : (
              <Flex flexDirection={"column"} gap={"24px"}>
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"6px"}
                  alignSelf={"stretch"}
                >
                  <Flex alignItems={"center"} gap={"2px"}>
                    판매자에게 메모 추가{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <mask
                        id="mask0_786_2718"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="18"
                        height="18"
                      >
                        <rect width="18" height="18" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_786_2718)">
                        <path
                          d="M9 11.0914L11.8414 8.25L11.3062 7.73364L9 10.0399L6.69375 7.73364L6.15864 8.25L9 11.0914ZM9.00251 15.75C8.0691 15.75 7.19154 15.5729 6.36983 15.2186C5.54811 14.8644 4.83333 14.3836 4.22548 13.7764C3.61764 13.1691 3.13644 12.455 2.78186 11.634C2.42729 10.8131 2.25 9.93591 2.25 9.00251C2.25 8.0691 2.42712 7.19154 2.78136 6.36983C3.13561 5.54811 3.61637 4.83333 4.22364 4.22548C4.83092 3.61764 5.54503 3.13644 6.36596 2.78186C7.18691 2.42729 8.06409 2.25 8.99749 2.25C9.9309 2.25 10.8085 2.42712 11.6302 2.78136C12.4519 3.13561 13.1667 3.61637 13.7745 4.22364C14.3824 4.83092 14.8636 5.54503 15.2181 6.36596C15.5727 7.18691 15.75 8.06409 15.75 8.99749C15.75 9.9309 15.5729 10.8085 15.2186 11.6302C14.8644 12.4519 14.3836 13.1667 13.7764 13.7745C13.1691 14.3824 12.455 14.8636 11.634 15.2181C10.8131 15.5727 9.93591 15.75 9.00251 15.75ZM9 15C10.675 15 12.0938 14.4187 13.2563 13.2563C14.4187 12.0938 15 10.675 15 9C15 7.325 14.4187 5.90625 13.2563 4.74375C12.0938 3.58125 10.675 3 9 3C7.325 3 5.90625 3.58125 4.74375 4.74375C3.58125 5.90625 3 7.325 3 9C3 10.675 3.58125 12.0938 4.74375 13.2563C5.90625 14.4187 7.325 15 9 15Z"
                          fill="#1C1B1F"
                        />
                      </g>
                    </svg>
                  </Flex>
                  <Input placeholder="메시지를 입력하세요." />
                </Flex>
                <Flex
                  alignItems={"flex-start"}
                  gap={"zpx"}
                  flexDirection={"column"}
                >
                  <Flex alignItems={"center"} gap={"2px"}>
                    <Checkbox />
                    <Text>이 주문은 선물입니다.</Text>
                  </Flex>
                  <Box
                    padding={"0px 18px"}
                    fontSize={"13px"}
                    color="var(--maincolorstextgray-595959, #666)"
                  >
                    포장 명세서에는 가격이 포시되지 않습니다.
                  </Box>
                </Flex>
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap={"4px"}
                  alignSelf={"stretch"}
                >
                  <Flex alignItems={"center"} gap={"2px"}>
                    <Checkbox />
                    <Text>무료로 선물 메세지를 추가</Text>
                  </Flex>
                  <Textarea placeholder="메시지를 입력하세요. 보내는 사람/받는 사람의 이름을 반드시 입력하세요" />
                  <Flex
                    alignItems={"flex-start"}
                    gap={"8px"}
                    alignSelf={"stretch"}
                  >
                    <Text
                      fontSize={"12px"}
                      color=" var(--maincolorstextgray-595959, #666)"
                    >
                      위 입력 창에 선물메시지를 입력하세요. 보내는 사람/받는사람
                      이름을 반드시 포함해 주세요.
                    </Text>
                    <Text fontSize={"12px"}> 150</Text>
                  </Flex>
                </Flex>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
      <Box
        width={"1px"}
        flexShrink={"0"}
        alignSelf={"stretch"}
        background={"var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"}
      />
      <Flex
        padding={"20px 20px 20px 20px"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        gap={"12px"}
        alignSelf={"stretch"}
      >
        <Flex flexDirection={"column"} alignItems={"flex-start"} gap="2px">
          <Flex
            justifyContent={"center"}
            alignItems={"flex-end"}
            gap={"2px"}
            fontSize={"22px"}
          >
            {data.product.price.toLocaleString()}
            <Text
              fontSize={"13px"}
              color="var(--maincolorstextblack-222222, #222)"
            >
              원
            </Text>
          </Flex>
          <Flex>
            {data.product.original_price != data.product.price ? (
              <>
                <Text as="s">
                  {data.product.original_price.toLocaleString()}
                </Text>
                <Text>원</Text>
              </>
            ) : null}
          </Flex>
        </Flex>
        <Flex alignItems={"flex-start"}>
          <Box
            border="1px solid var(--maincolorsstrokegrayb-2-b-2-b-2, #B2B2B2)"
            padding={"7px 7px"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <mask
                id="mask0_786_8562"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="17"
              >
                <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_786_8562)">
                <path
                  d="M7.66667 8.83333H4V8.16667H7.66667V4.5H8.33333V8.16667H12V8.83333H8.33333V12.5H7.66667V8.83333Z"
                  fill="#777777"
                />
              </g>
            </svg>
          </Box>
          <Box
            border="1px solid var(--maincolorsstrokegrayb-2-b-2-b-2, #B2B2B2)"
            padding={"4px"}
            width="40px"
            height={"33px"}
            textAlign={"center"}
          >
            {data.quantity}
          </Box>
          <Box
            border="1px solid var(--maincolorsstrokegrayb-2-b-2-b-2, #B2B2B2)"
            padding={"7px 7px"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <mask
                id="mask0_786_2799"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="17"
              >
                <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_786_2799)">
                <path d="M3 8.91665V8.08331H13V8.91665H3Z" fill="#777777" />
              </g>
            </svg>
          </Box>
        </Flex>
      </Flex>
      <Box
        width={"1px"}
        flexShrink={"0"}
        alignSelf={"stretch"}
        background={"var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"}
      />
      <Flex
        padding={"20px 0px 20px 20px"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        gap={"6px"}
        alignSelf={"stretch"}
      >
        {isSoldOut ? (
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-end"}
            gap={"10px"}
            alignSelf={"stretch"}
          >
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-end"}
              gap={"6px"}
            >
              <Button
                width="120px"
                padding="8px 10px"
                justifyContent={"center"}
                alignItems={"center"}
                border="1px solid var(--maincolorsstrokeredf-12-e-24, #F12E24)"
                borderRadius={"0"}
                background="white"
                color={"var(--maincolorsstrokeredf-12-e-24, #F12E24)"}
              >
                재입고알림
              </Button>
              <Button
                alignSelf={"stretch"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"0"}
                background="white"
                color={"white"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <mask
                    id="mask0_746_10344"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="25"
                  >
                    <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_746_10344)">
                    <path
                      d="M7.61537 20.5C7.16794 20.5 6.78685 20.3427 6.4721 20.0279C6.15737 19.7132 6 19.3321 6 18.8847V6.50002H5V5.50002H9V4.73077H15V5.50002H19V6.50002H18V18.8847C18 19.3449 17.8458 19.7292 17.5375 20.0375C17.2292 20.3459 16.8449 20.5 16.3846 20.5H7.61537ZM17 6.50002H7V18.8847C7 19.0641 7.05769 19.2116 7.17308 19.327C7.28846 19.4423 7.43589 19.5 7.61537 19.5H16.3846C16.5385 19.5 16.6795 19.4359 16.8077 19.3077C16.9359 19.1795 17 19.0385 17 18.8847V6.50002ZM9.80768 17.5H10.8077V8.50002H9.80768V17.5ZM13.1923 17.5H14.1923V8.50002H13.1923V17.5Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </Button>
            </Flex>
          </Flex>
        ) : (
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-end"}
            gap={"10px"}
            alignSelf={"stretch"}
          >
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-end"}
              gap={"6px"}
            >
              <Button
                width="120px"
                padding="8px 10px"
                justifyContent={"center"}
                alignItems={"center"}
                border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                borderRadius={"0"}
                background="white"
              >
                계속담아두기
              </Button>
              <Button
                width="120px"
                padding="8px 10px"
                justifyContent={"center"}
                alignItems={"center"}
                border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
                borderRadius={"0"}
                background="var(--maincolorsbgredf-12-e-24, #F12E24)"
                color={"white"}
                _hover={{
                  background: "var(--maincolorsbggray-222222, #222)",
                }}
              >
                주문하기
              </Button>
            </Flex>
            <Button
              alignSelf={"stretch"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"0"}
              background="white"
              color={"white"}
              onClick={() => {
                if (isSelected) {
                  handleCheckboxClick();
                }
                deleteCartLine(data.pk);

                onDelete();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <mask
                  id="mask0_746_10344"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="25"
                >
                  <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_746_10344)">
                  <path
                    d="M7.61537 20.5C7.16794 20.5 6.78685 20.3427 6.4721 20.0279C6.15737 19.7132 6 19.3321 6 18.8847V6.50002H5V5.50002H9V4.73077H15V5.50002H19V6.50002H18V18.8847C18 19.3449 17.8458 19.7292 17.5375 20.0375C17.2292 20.3459 16.8449 20.5 16.3846 20.5H7.61537ZM17 6.50002H7V18.8847C7 19.0641 7.05769 19.2116 7.17308 19.327C7.28846 19.4423 7.43589 19.5 7.61537 19.5H16.3846C16.5385 19.5 16.6795 19.4359 16.8077 19.3077C16.9359 19.1795 17 19.0385 17 18.8847V6.50002ZM9.80768 17.5H10.8077V8.50002H9.80768V17.5ZM13.1923 17.5H14.1923V8.50002H13.1923V17.5Z"
                    fill="#1C1B1F"
                  />
                </g>
              </svg>
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
