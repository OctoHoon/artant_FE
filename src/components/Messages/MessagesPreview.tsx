import { Flex, Checkbox, Avatar, Box, Text } from "@chakra-ui/react";

export default function MessagesPreview() {
  return (
    <Flex>
      <Flex
        padding={"12px 18px"}
        alignItems={"center"}
        gap={"24px"}
        alignSelf={"stretch"}
      >
        <Checkbox />
        <Flex
          width={"928px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          alignSelf={"stretch"}
        >
          <Flex gap={"40px"}>
            <Flex gap={"12px"} alignItems={"center"}>
              <Avatar
                width={"48px"}
                height={"48px"}
                src="https://i.etsystatic.com/iusa/a729d1/62195829/iusa_75x75.62195829_8stm.jpg?version=0"
              />
              <Text color={"var(--maincolorstextgray-595959, #666)"} as="u">
                Catherine Kuzyk
              </Text>
            </Flex>
            <Flex flexDirection={"column"} gap="4px">
              <Text>안녕하세요 000000</Text>
              <Text>안녕하세요 000000</Text>
            </Flex>
          </Flex>
          <Box
            color="var(--maincolorstextgray-595959, #666)"
            textAlign={"right"}
          >
            2023년 12월 11일 오전 9시 32분
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
