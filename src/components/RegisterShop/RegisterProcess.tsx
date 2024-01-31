import { Box, Flex, Text } from "@chakra-ui/react";
import { Check } from "@mui/icons-material";

export default function RegisterProcess({ currentPage }) {
  return (
    <Flex
      display={"flex"}
      width={"1280px"}
      height={"58px"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      position={"relative"}
      gap={"32px"}
    >
      <ProcessComponent step={"1"} page={currentPage} text={"갤러리이름지정"} />
      <ProcessComponent step={"2"} page={currentPage} text={"상품등록"} />
      <ProcessComponent step={"3"} page={currentPage} text={"지급방식"} />
      <ProcessComponent step={"4"} page={currentPage} text={"결제 설정"} />
    </Flex>
  );
}

const ProcessComponent = ({ step, page, text }) => {
  const color = page == step ? "#141718" : page < step ? "#B1B5C3" : "#45B26B";

  return (
    <Flex
      width={"256px"}
      gap={"24px"}
      padding={"0px 0px 26px 0px"}
      borderBottom={`2px solid ${color}`}
    >
      <Flex width={"256px"} gap={"17px"} alignItems={"center"}>
        <Box
          width="40px"
          height="40px"
          borderRadius={"40px"}
          gap={"10px"}
          color={"white"}
          textAlign={"center"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={color}
        >
          {color === "#45B26B" ? <Check /> : step}
        </Box>
        <Text textStyle={"h6"} color={color}>
          {text}
        </Text>
      </Flex>
    </Flex>
  );
};
