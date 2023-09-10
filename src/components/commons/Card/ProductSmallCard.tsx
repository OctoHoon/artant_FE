import { AspectRatio, Flex, Button, Box, Image, Text } from "@chakra-ui/react";

export default function ProductSmallCard({ data }) {
  return (
    <Flex flexDirection={"column"} width={"170px"}>
      <Image
        src={data.thumbnail}
        width={"170px"}
        height={"128px"}
        objectFit="cover"
      />
      <Box height={"12px"} />
      <Flex flexDirection={"column"} gap={"2px"}>
        <Text fontSize={"14px"} noOfLines={2}>
          {data.name}
        </Text>
        <Text
          fontSize={"14px"}
          color={" var(--maincolorstextgray-595959, #666)"}
        >
          {data.shop_name}
        </Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"4px"}>
        <Text fontSize={"20px"} fontWeight={"500"}>
          {data.price}원
        </Text>
        <Flex>
          {data.price !== data.original_price ? (
            <>
              <Text
                color="#777"
                fontSize={"13px"}
                textDecorationLine={"line-through"}
              >
                {data.original_price}원
              </Text>
              <Box width={"5px"} />
              <Text color="#F12E24" fontSize={"13px"} fontWeight={"300"}>
                {data.discount_rate}% off
              </Text>
            </>
          ) : null}
        </Flex>
      </Flex>

      <Button
        width={"104px"}
        borderRadius={"0px"}
        border={"1px solid #DBDBDB"}
        padding={"7px 10px 5px 10px"}
        bg="white"
        fontSize="13px"
        color={"var(--maincolorstextgray-595959, #666)"}
      >
        장바구니 담기
      </Button>
    </Flex>
  );
}
