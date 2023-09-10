import {
  Flex,
  Box,
  Checkbox,
  Button,
  Image,
  Text,
  Input,
  Textarea,
} from "@chakra-ui/react";
import CartPanel from "./CartPanel";
import CartComponent from "./CartComponent";
import React from "react";

export default function CartBody({ data }) {
  return (
    <Flex gap="40px" marginBottom={"40px"}>
      <Box width="828px">
        <Flex justifyContent={"space-between"}>
          <Flex gap="2px">
            <Checkbox /> 전체선택
          </Flex>
          <Flex gap="16px" alignItems={"center"}>
            품절상품삭제
            <Box
              width="1px"
              height="10px"
              backgroundColor={"var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"}
            />
            선택삭제
          </Flex>
        </Flex>
        <Box
          width="828px"
          height={"2px"}
          background="var(--maincolorslineblack-222222, #222)"
        />

        <Box
          display={"inline-flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"40px"}
        >
          <Flex flexDirection={"column"} alignItems={"flex-start"}>
            {data &&
              data.cartline.map((item, index) => (
                <React.Fragment key={index}>
                  <CartComponent suggest={true} isSoldOut={false} data={item} />
                  <Box
                    width="828px"
                    height={"2px"}
                    background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"
                  />
                  <Flex
                    width={"828px"}
                    padding="15px 8px"
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"8px"}
                    fontWeight={"500"}
                    backgroundColor={
                      " var(--maincolorsbggrayf-9-f-9-f-9, #F9F9F9);"
                    }
                  >
                    {item.product.price}원 + 배송비 0원 = {item.product.price}원
                  </Flex>
                </React.Fragment>
              ))}
          </Flex>
          <Flex flexDirection={"column"} gap={"20px"}>
            <Text>더 많은 작품을 찾고 계십니까?</Text>
            <Button
              padding={"10px 18px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"100px"}
              border="1px solid var(--maincolorsstrokegrayd-9-d-9-d-9, #D9D9D9)"
              background={"white"}
              fontWeight={"400"}
            >
              {" "}
              즐겨 찾기 바로가기
            </Button>
          </Flex>
        </Box>
      </Box>
      <CartPanel data={data && data} />
    </Flex>
  );
}
