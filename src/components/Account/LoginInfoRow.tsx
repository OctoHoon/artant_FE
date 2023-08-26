import { Flex, Box } from "@chakra-ui/react";

export default function LoginInfoRow({ time, access, ip, location, status }) {
  return (
    <Flex width={"992px"} flexDirection={"column"}>
      <Flex
        width={"992px"}
        alignItems={"center"}
        fontSize={"13px"}
        padding="16px 20px"
      >
        <Box width={"180px"}>{time}</Box>
        <Box width={"240px"}>{access}</Box>
        <Box width={"160px"}>{ip}</Box>
        <Box width={"260px"}>{location}</Box>
        <Box fontWeight={"500"}>{status}</Box>
      </Flex>
      <Box
        height="1px"
        alignSelf="stretch"
        background="var(--maincolorslinegrayd-9-d-9-d-9, #D9D9D9);"
      />
    </Flex>
  );
}
