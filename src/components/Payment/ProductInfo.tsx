import {
  Flex,
  Checkbox,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  RadioGroup,
  Stack,
  Radio,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";

export default function ProductInfo({ data }) {
  return (
    <Flex flexDirection={"column"} alignSelf={"stretch"}>
      <Box
        alignSelf={"stretch"}
        height={"2px"}
        background="var(--maincolorslineblack-222222, #222)"
      />
      <Box
        alignSelf={"stretch"}
        padding={"20px 0px"}
        alignItems={"center"}
        fontSize={"22px"}
        fontWeight={"700"}
      >
        주문상품 : {data.length}개
      </Box>
      <Box
        alignSelf={"stretch"}
        height={"2px"}
        background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"
      />
      {data &&
        data.map((item, index) => (
          <Flex flexDirection={"column"}>
            <Flex key={index} alignItems={"flex-start"} alignSelf={"stretch"}>
              {/* 이미지 */}
              <Flex padding={"20px 0px"}>
                <Image
                  width={"120px"}
                  height={"120px"}
                  src={item.product.thumbnail}
                  objectFit={"cover"}
                />
              </Flex>
              {/* 상품 정보 */}
              <Flex
                width={"540px"}
                padding={"20px"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"20px"}
              >
                <Flex gap="8px" fontWeight={"500"} alignItems={"center"}>
                  <Image
                    width="32px"
                    height="32px"
                    src={item.product.shop_avatar}
                  />
                  {item.product.shop_name}
                </Flex>
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  gap="4px"
                >
                  <Text fontWeight={"700"}>{item.product.title}</Text>
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
                  </Flex>
                </Flex>
              </Flex>
              {/* 구매 정보 */}
              <Box
                width={"1px"}
                flexShrink={"0"}
                alignSelf={"stretch"}
                background={"var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"}
              />
              <Flex
                padding="20px 5px 20px 20px"
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                gap={"12px"}
                alignSelf={"stretch"}
              >
                <Flex
                  padding={"20px 20px 20px 20px"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={"12px"}
                  alignSelf={"stretch"}
                >
                  <Flex
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap="12px"
                  >
                    <Flex flexDirection={"column"}>
                      <Flex
                        justifyContent={"center"}
                        alignItems={"baseline"}
                        gap={"2px"}
                        fontSize={"22px"}
                      >
                        {item.product.price}
                        <Text
                          fontSize={"13px"}
                          color="var(--maincolorstextblack-222222, #222)"
                        >
                          원
                        </Text>
                      </Flex>
                      {item.product.original_price !== item.product.price && (
                        <Flex
                          color={" var(--maincolorstextgray-595959, #666);"}
                        >
                          <Text as="s">{item.product.original_price} </Text>
                          <Text>원</Text>
                        </Flex>
                      )}
                    </Flex>
                    <Box color={" var(--maincolorstextgray-595959, #666);"}>
                      수량 {item.quantity}개
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Box
              alignSelf={"stretch"}
              height={"2px"}
              background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"
            />
          </Flex>
        ))}

      <Box
        alignSelf={"stretch"}
        height={"2px"}
        background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"
      />
    </Flex>
  );
}
