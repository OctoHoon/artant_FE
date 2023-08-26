import { Flex, Box, Text, Checkbox, Avatar } from "@chakra-ui/react";
import MessageTab from "./MessageTab";
import MessagesPreview from "./MessagesPreview";

export default function MessageBody() {
  return (
    <Flex flexDirection={"column"} alignItems={"flex-start"}>
      <Box
        width="1280px"
        height="1px"
        background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"
      />
      <Flex alignItems={"flex-start"}>
        <Flex alignItems={"flex-start"} alignSelf={"stretch"} width={"269px"}>
          <Flex
            padding={"20px 20px 20px 0px"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"8px"}
          >
            <MessageTab tabname={"받은 메시지"} count={797} />
            <MessageTab tabname={"보낸 메시지"} count={797} />
            <MessageTab tabname={"모든 메시지"} count={797} />
            <MessageTab tabname={"읽지 않은 메시지"} count={797} />
            <MessageTab tabname={"스팸"} count={797} />
            <MessageTab tabname={"휴지통"} count={797} />
          </Flex>
        </Flex>
        <Box
          width="1px"
          minH={"696px"}
          alignSelf={"stretch"}
          background=" var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
        />
        <Flex flexDirection="column" alignItems={"flex-start"}>
          <Flex width={"1011px"}>
            <Flex padding={"10px 18px"} gap={"24px"}>
              <Checkbox />
              <Flex alignItems={"center"} gap={"8px"}>
                <Box padding={"4px 8px"}>휴지통</Box>
                <Box padding={"4px 8px"}>읽지 않은 것으로 표시</Box>
                <Box padding={"4px 8px"}>읽음으로 표시</Box>
                <Box padding={"4px 8px"}>스팸으로 표시</Box>
                <Box padding={"4px 8px"}>보관소</Box>
              </Flex>
            </Flex>
          </Flex>
          <Box
            height="1px"
            alignSelf={"stretch"}
            background=" var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
          />
          <Flex width={"1011px"} flexDirection={"column"}>
            <MessagesPreview />

            <Box
              height="1px"
              alignSelf={"stretch"}
              background=" var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
            />
            <MessagesPreview />

            <Box
              height="1px"
              alignSelf={"stretch"}
              background=" var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
            />
            <MessagesPreview />

            <Box
              height="1px"
              alignSelf={"stretch"}
              background=" var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
            />
            <MessagesPreview />

            <Box
              height="1px"
              alignSelf={"stretch"}
              background=" var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
            />
            <MessagesPreview />

            <Box
              height="1px"
              alignSelf={"stretch"}
              background=" var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
            />
            <MessagesPreview />

            <Box
              height="1px"
              alignSelf={"stretch"}
              background=" var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
            />
            <MessagesPreview />

            <Box
              height="1px"
              alignSelf={"stretch"}
              background=" var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
            />
            <MessagesPreview />

            <Box
              height="1px"
              alignSelf={"stretch"}
              background=" var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
            />
          </Flex>
        </Flex>
      </Flex>

      <Box
        width="1280px"
        height="1px"
        background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9)"
      />
    </Flex>
  );
}
